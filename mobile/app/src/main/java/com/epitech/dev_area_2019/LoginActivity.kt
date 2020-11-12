package com.epitech.dev_area_2019

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.lifecycle.lifecycleScope
import com.github.kittinunf.fuel.Fuel
import com.github.kittinunf.fuel.core.extensions.jsonBody
import com.github.kittinunf.fuel.coroutines.awaitString
import com.google.gson.Gson
import kotlinx.android.synthetic.main.activity_login.*
import kotlinx.coroutines.launch

class LoginActivity : AppCompatActivity() {

    data class LoginData(var email: String = "", var password: String = "", var password_confirmation: String = "")

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)
        Act_Login_LogButton.setOnClickListener {
            val rgx = "^([a-zA-Z0-9-.]+)@([a-zA-Z0-9-.]+).([a-zA-Z]{2,5})\$".toRegex()
            var loginData = LoginData()
            loginData.email = Act_Login_UserName.text.toString()
            loginData.password = Act_Login_Password.text.toString()
            loginData.password_confirmation = Act_Login_Password.text.toString()
            if (!loginData.email.matches(rgx)) {
                Toast.makeText(this, "Invalid User Email", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }
            if (loginData.password.length < 3) {
                Toast.makeText(this, "Invalid Password", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }
            lifecycleScope.launch {
                if(sendLoginToServer(loginData)) {
                    val intent = Intent(this@LoginActivity, MainActivity::class.java)
                    startActivity(intent)
                } else Toast.makeText(this@LoginActivity, "Cannot Connect", Toast.LENGTH_SHORT).show()
            }
        }
        Act_Login_RegButton.setOnClickListener {
            val rgx = "^([a-zA-Z0-9-.]+)@([a-zA-Z0-9-.]+).([a-zA-Z]{2,5})\$".toRegex()
            var loginData = LoginData()
            loginData.email = Act_Login_UserName.text.toString()
            loginData.password = Act_Login_Password.text.toString()
            loginData.password_confirmation = Act_Login_Password.text.toString()
            if (!loginData.email.matches(rgx)) {
                Toast.makeText(this, "Invalid User Email", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }
            if (loginData.password.length < 3) {
                Toast.makeText(this, "Invalid Password", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }
            lifecycleScope.launch {
                if(!registerUserToServer(loginData)) Toast.makeText(this@LoginActivity, "Cannot Register", Toast.LENGTH_SHORT).show()
            }
        }
    }
    private suspend fun sendLoginToServer (loginData : LoginData): Boolean {
        var result = ""
        runCatching {
            result = Fuel.get("http://192.168.1.16:8080/login?email=${loginData.email}&password=${loginData.password}").awaitString()
        }.onFailure { Log.e("LoginActivity.Register", "Failed to log in")}
        return (result == "connected")
    }

    private  suspend fun registerUserToServer (loginData: LoginData): Boolean {
        var result = ""
        runCatching {
            val body = Gson().toJson(loginData)
            result = Fuel.post("http://192.168.1.16:8080/register").jsonBody(body).awaitString()
        }.onFailure { Log.e("LoginActivity.Register", "Failed to register")}
        return (result == "created")
    }
}
