package com.epitech.dev_area_2019

import android.app.Activity
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Toast
import androidx.lifecycle.lifecycleScope
import com.github.kittinunf.fuel.Fuel
import com.github.kittinunf.fuel.core.extensions.jsonBody
import com.github.kittinunf.fuel.coroutines.awaitString
import com.google.gson.Gson
import kotlinx.android.synthetic.main.activity_o_auth_stuff.*
import kotlinx.coroutines.launch

class OAuthStuff : AppCompatActivity() {

    data class TokenBody (
        val token: String
    )

    companion object {
        val resultCode = 3423
    }

    val trelloApiKey = "7c43d9375c9d0eea9ed807cf10f0c588"
    val redirectUrl = "http://localhost:8081/"
    val tokenCaptureRegex = "#token=(.+)".toRegex()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_o_auth_stuff)

        oauth_wv.settings.javaScriptEnabled = true
        oauth_wv.settings.userAgentString = "area"
        oauth_wv.loadUrl("https://trello.com/1/authorize?expiration=never&name=Area&scope=read,write&response_type=token&key=$trelloApiKey&callback_method=fragment&return_url=$redirectUrl")
        oauth_wv.webViewClient = object : WebViewClient() {
            override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {

                request ?: return false
                if (request.url.host != Uri.parse(redirectUrl).host) {
                    return false
                }

                val matches = tokenCaptureRegex.findAll(request.url!!.toString())
                val token =  matches.elementAt(0).groupValues[1]

                lifecycleScope.launch {
                    sendTokenToServer(token)
                }
                return false
            }
        }
    }

    suspend fun sendTokenToServer(token: String) {
        Log.d("oauthstuff.sendToken", token)
        runCatching {
            val body = Gson().toJson(TokenBody(token))
            Fuel.post("http://192.168.1.16:8080/add/trello").jsonBody(body).awaitString()
        }.onFailure {
            setResult(Activity.RESULT_CANCELED)
            Toast.makeText(this, "Cannot send token to server", Toast.LENGTH_LONG).show()
        }
        finish()
    }
}
