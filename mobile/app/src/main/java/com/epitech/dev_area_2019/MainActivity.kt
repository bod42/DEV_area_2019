package com.epitech.dev_area_2019

import android.app.Activity
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.lifecycle.lifecycleScope
import com.bumptech.glide.Glide
import com.github.kittinunf.fuel.Fuel
import com.github.kittinunf.fuel.coroutines.awaitString
import com.google.gson.Gson
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import com.bumptech.glide.annotation.GlideModule
import com.bumptech.glide.module.AppGlideModule
import kotlin.math.log
import kotlin.random.Random
import kotlin.random.nextInt

@GlideModule
class AppGlideModule : AppGlideModule()

class MainActivity : AppCompatActivity() {

    data class AREA_responce(val id: Int, val action: String, val date: String)
    data class Sprites(val front_default: String)
    data class PokemonType(val name: String)
    data class PokemonTypes(val type: PokemonType)
    data class Pokemon(val name: String, val sprites: Sprites, val id: Int, val types: List<PokemonTypes>)
    data class BerryFlavor(val name: String)
    data class BerryFlavors(val flavor: BerryFlavor)
    data class Berry(val id: Int, val name: String, val flavors: List<BerryFlavors>)
    data class SwapiPlanet(val name: String, val climate: String, val population: String, val terrain: String)
    data class SwapiPeople(val name: String, val birth_year: String, val gender: String, val height: String, val mass: String)
    data class SwapiStarships(val name: String, val crew: String, val model: String, val passengers: String)
    data class SwapiSpecies(val name: String, val average_height: String, val average_lifespan: String, val classification: String)
    data class WeatherMain(val temp: Float)
    data class Weather(val description: String)
    data class WeatherAPI(val name: String, val weather:List<Weather>, val main: WeatherMain)

    private var lastCall = ""
    private var lastPokemon = ""
    private var discordSprite = ""

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val it = Intent(this, OAuthStuff::class.java)
        startActivityForResult(it, OAuthStuff.resultCode)
        lifecycleScope.launch {
            while (true) {
                var body = AREA_responce(0, "", "")
                runCatching {
                    val bodyStr = Fuel.get("http://192.168.1.16:8080/area")
                        .awaitString()
                    body = Gson().fromJson<AREA_responce>(bodyStr, AREA_responce::class.java)
                    Log.d("MainActivity", "ID is ${body.id} and Date is ${body.date}")
                }.onFailure {
                    Log.e(
                        "MainActivity.OnCreate.getIdFromTrello",
                        "Cannot Get ID from Trello",
                        it
                    )
                }
                doReaction(body)
                delay(2000)
            }
        }
        lifecycleScope.launch {
            capture()
        }
    }

    private suspend fun doReaction(body: AREA_responce) {
        if (body.date == lastCall) {
            Log.d("MainActivity.OnCreate", "Nothing new to do")
            return
        }
        lifecycleScope.launch {
            when (body.id) {
                1 -> reactionIdOne()
                2 -> reactionIdTwo()
                3 -> reactionIdThree()
                4 -> reactionIdFour()
                5 -> reactionIdFive()
                6 -> reactionIdSix()
                7 -> reactionIdSeven()
                8 -> reactionIdEight()
                9 -> reactionIdNine()
                10 -> reactionIdTen()
                11 -> reactionIdEleven()
                12 -> reactionIdTwelve()
                13 -> reactionIdThirteen()
                14 -> reactionIdFourteen()
                15 -> reactionIdFifteen()
                16 -> reactionIdSixteen()
                17 -> reactionIdSeventeen()
            }
        }
        lastCall = body.date
    }

    private fun capture() {
        MainActivity_Capture_Button.setOnClickListener {
            if (lastPokemon == "") return@setOnClickListener
            Log.d("pomme", lastPokemon)
            val rand = Random.nextInt(0..100)
            runOnUiThread {
                MainActivity_TextView.text = "You are throwing a pokeball at ${lastPokemon}"
            }
            if (rand in 0..49) {
                Toast.makeText(this, "Success! ${lastPokemon} is added to your equipe", Toast.LENGTH_SHORT).show()
                lifecycleScope.launch {
                    runCatching {
                        Fuel.get("http://192.168.1.16:8080/trello/CreateCheckItems/?checkitem=${lastPokemon}").awaitString()
                    }.onFailure { Log.e("MainActivity.capture.success", "Cannot Get Info from Area Server", it) }
                }
            } else {
                Toast.makeText(this, "Failure... ${lastPokemon} is added to Pokedex", Toast.LENGTH_SHORT).show()
                lifecycleScope.launch {
                    runCatching {
                        Fuel.get("http://192.168.1.16:8080/trello/AddCart/?pokedex=${lastPokemon}").awaitString()
                    }.onFailure { Log.e("MainActivity.capture.failure", "Cannot Get Info from Area Server", it) }
                }
            }
            lifecycleScope.launch {
                runCatching {
                    Fuel.get("http://192.168.1.16:8080/didi_image?Team=${discordSprite}").awaitString()
                }.onFailure { Log.e("MainActivity.capture.discord", "Cannot Get Info from Area Server", it) }
            }
            MainActivity_ImageView.setImageResource(0)
            lastPokemon = ""
            discordSprite = ""
            lastCall = "" //subject to change
        }
    }

    private suspend fun reactionIdOne() {
        runCatching {
            val bodyStr =
                Fuel.get("http://192.168.1.16:8080/pokemon_name/?pokemon=${Random.nextInt(1, 802)}")
                    .awaitString()
            val body = Gson().fromJson<Pokemon>(bodyStr, Pokemon::class.java)
            lastPokemon = body.name
            discordSprite = body.sprites.front_default
            Glide.with(this@MainActivity)
                .load(body.sprites.front_default)
                .into(MainActivity_ImageView)
            runOnUiThread {
                MainActivity_TextView.text = "Name : ${body.name}\nId : ${body.id}\nType : ${body.types[0].type.name}"
            }
        }.onFailure { Log.e("MainActivity.reactionIdOne", "Cannot Get Info from Area Server", it) }
    }

    private suspend fun reactionIdTwo() {
        runCatching {
            val rand = Random.nextInt(1, 60)
            val bodyStr =
                Fuel.get("http://192.168.1.16:8080/pokemon_Berry/?berry_id=${rand}").awaitString()
            val body = Gson().fromJson<Berry>(bodyStr, Berry::class.java)
            val bodyStr2 =
                Fuel.get("http://192.168.1.16:8080/starwars_Planet/?id=${rand}").awaitString()
            val body2 = Gson().fromJson<SwapiPlanet>(bodyStr2, SwapiPlanet::class.java)
            runOnUiThread {
                MainActivity_TextView.text = "The ${body.name} berries is growning on ${body2.name}"
            }
            Log.d("onIdTwo", "${body.name} pousse sur ${body2.name}")
        }.onFailure { Log.e("MainActivity.reactionIdTwo", "Cannot Get Info from Area Server", it) }
    }

    private suspend fun reactionIdThree() {
        runCatching {
            val bodyStr =
                Fuel.get("http://192.168.1.16:8080/pokemon_name/?pokemon=${Random.nextInt(1, 802)}")
                    .awaitString()
            val body = Gson().fromJson<Pokemon>(bodyStr, Pokemon::class.java)
            val bodyStr2 =
                Fuel.get("http://192.168.1.16:8080/starwars_Planet/?id=${Random.nextInt(1, 30)}")
                    .awaitString()
            val body2 = Gson().fromJson<SwapiPlanet>(bodyStr2, SwapiPlanet::class.java)
            runOnUiThread {
                MainActivity_TextView.text = "${body.name}s are living on ${body2.name}"
            }
            Log.d("onIdThree", "${body.name} vie sur ${body2.name}")
        }.onFailure {
            Log.e(
                "MainActivity.reactionIdThree",
                "Cannot Get Info from Area Server",
                it
            )
        }
    }

    private suspend fun reactionIdFour() {
        runCatching {
            val bodyStr =
                Fuel.get("http://192.168.1.16:8080/pokemon_name/?pokemon=${Random.nextInt(1, 802)}")
                    .awaitString()
            val body = Gson().fromJson<Pokemon>(bodyStr, Pokemon::class.java)
            val bodyStr2 = Fuel.get(
                "http://192.168.1.16:8080/pokemon_Berry/?berry_id=${Random.nextInt(1, 60)}")
                .awaitString()
            val body2 = Gson().fromJson<Berry>(bodyStr2, Berry::class.java)
            runOnUiThread {
                MainActivity_TextView.text = "${body.name} love ${body2.name} berries"
            }
            Log.d("onIdFour", "${body2.name} est la baie preferer de ${body.name}")
        }.onFailure { Log.e("MainActivity.reactionIdFour", "Cannot Get Info from Area Server", it) }
    }

    private suspend fun reactionIdFive() {
        runCatching {
            val bodyStr =
                Fuel.get("http://192.168.1.16:8080/pokemon_name/?pokemon=${Random.nextInt(1, 802)}")
                    .awaitString()
            val body = Gson().fromJson<Pokemon>(bodyStr, Pokemon::class.java)
            val bodyStr2 =
                Fuel.get("http://192.168.1.16:8080/starwars_People/?id=${Random.nextInt(1, 60)}")
                    .awaitString()
            val body2 = Gson().fromJson<SwapiPeople>(bodyStr2, SwapiPeople::class.java)
            runOnUiThread {
                MainActivity_TextView.text = "${body.name} is ${body2.name}'s favorite pokemon"
            }
            Log.d("onIdFive", "${body.name} est le pokemon preferer de ${body2.name}")
        }.onFailure { Log.e("MainActivity.reactionIdFive", "Cannot Get Info from Area Server", it) }
    }

    private suspend fun reactionIdSix() {
        runCatching {
            val rand = Random.nextInt(1, 60)
            val bodyStr =
                Fuel.get("http://192.168.1.16:8080/pokemon_Berry/?berry_id=${rand}").awaitString()
            val body = Gson().fromJson<Berry>(bodyStr, Berry::class.java)
            val bodyStr2 =
                Fuel.get("http://192.168.1.16:8080/starwars_People/?id=${rand}").awaitString()
            val body2 = Gson().fromJson<SwapiPeople>(bodyStr2, SwapiPeople::class.java)
            runOnUiThread {
                MainActivity_TextView.text = "${body.name} berrys are ${body2.name}'s favorite berrys"
            }
            Log.d("onIdSix", "${body.name} est la baie preferer de ${body2.name}")
        }.onFailure { Log.e("MainActivity.reactionIdSix", "Cannot Get Info from Area Server", it) }
    }

    private suspend fun reactionIdSeven() {
        runCatching {
            val bodyStr =
                Fuel.get("http://192.168.1.16:8080/pokemon_name/?pokemon=${Random.nextInt(1, 802)}")
                    .awaitString()
            val body = Gson().fromJson<Pokemon>(bodyStr, Pokemon::class.java)
            val bodyStr2 =
                Fuel.get("http://192.168.1.16:8080/starwars_Starships/?id=${Random.nextInt(1, 15)}")
                    .awaitString()
            val body2 = Gson().fromJson<SwapiStarships>(bodyStr2, SwapiStarships::class.java)
            runOnUiThread {
                MainActivity_TextView.text = "${body.name}s are transported in ${body2.name} starship"
            }
            Log.d("onIdSeven", "${body.name} est transporter par le vaisseau ${body2.name}")
        }.onFailure {
            Log.e(
                "MainActivity.reactionIdSeven",
                "Cannot Get Info from Area Server",
                it
            )
        }
    }

    private suspend fun reactionIdEight() {
        runCatching {
            val bodyStr = Fuel.get(
                "http://192.168.1.16:8080/pokemon_Berry/?berry_id=${Random.nextInt(1, 60)}"
            ).awaitString()
            val body = Gson().fromJson<Berry>(bodyStr, Berry::class.java)
            runOnUiThread {
                MainActivity_TextView.text = "Name : ${body.name}\nId : ${body.id}\nFlavor : ${body.flavors[0].flavor.name}"
            }
            Log.d("onIdEight", body.name)
        }.onFailure {
            Log.e("MainActivity.reactionIdEight", "Cannot Get Info from Area Server", it)
        }
    }

    private suspend fun reactionIdNine() {
        runCatching {
            val bodyStr =
                Fuel.get("http://192.168.1.16:8080/starwars_Planet/?id=${Random.nextInt(1, 60)}")
                    .awaitString()
            val body = Gson().fromJson<SwapiPlanet>(bodyStr, SwapiPlanet::class.java)
            runOnUiThread {
                MainActivity_TextView.text = "Name : ${body.name}\nPopulation : ${body.population}\nClimate : ${body.climate}\nTerrain : ${body.terrain}"
            }
            Log.d("onIdNine", body.name)
        }.onFailure { Log.e("MainActivity.reactionIdNine", "Cannot Get Info from Area Server", it) }
    }

    private suspend fun reactionIdTen() {
        runCatching {
            val bodyStr =
                Fuel.get("http://192.168.1.16:8080/starwars_Species/?id=${Random.nextInt(1, 30)}")
                    .awaitString()
            val body = Gson().fromJson<SwapiSpecies>(bodyStr, SwapiSpecies::class.java)
            runOnUiThread {
                MainActivity_TextView.text = "Name : ${body.name}\nLifespan : ${body.average_lifespan}\nHeight : ${body.average_height}\nClassification : ${body.classification}"
            }
            Log.d("onIdTen", body.name)
        }.onFailure { Log.e("MainActivity.reactionIdTen", "Cannot Get Info from Area Server", it) }
    }

    private suspend fun reactionIdEleven() {
        runCatching {
            val bodyStr =
                Fuel.get("http://192.168.1.16:8080/pokemon_name/?pokemon=${Random.nextInt(1, 802)}")
                    .awaitString()
            val body = Gson().fromJson<Pokemon>(bodyStr, Pokemon::class.java)
            val bodyStr2 =
                Fuel.get("http://192.168.1.16:8080/starwars_Species/?id=${Random.nextInt(1, 30)}")
                    .awaitString()
            val body2 = Gson().fromJson<SwapiSpecies>(bodyStr2, SwapiSpecies::class.java)
            runOnUiThread {
                MainActivity_TextView.text = "${body.name} is ${body2.name}'s best friend !"
            }
            Log.d("onIdEleven", "${body.name} est meilleur ami avec ${body2.name}")
        }.onFailure {
            Log.e(
                "MainActivity.reactionIdE  leven",
                "Cannot Get Info from Area Server",
                it
            )
        }
    }

    private suspend fun reactionIdTwelve() {
        runCatching {
            val bodyStr = Fuel.get(
                "http://192.168.1.16:8080/pokemon_Berry/?berry_id=${Random.nextInt(1, 60)}"
            ).awaitString()
            val body = Gson().fromJson<Berry>(bodyStr, Berry::class.java)
            val bodyStr2 =
                Fuel.get("http://192.168.1.16:8080/starwars_Starships/?id=${Random.nextInt(1, 15)}")
                    .awaitString()
            val body2 = Gson().fromJson<SwapiStarships>(bodyStr2, SwapiStarships::class.java)
            runOnUiThread {
                MainActivity_TextView.text = "${body.name} berrys are transported in ${body2.name} starship"
            }
            Log.d("onIdTwelve", "${body.name} sont transporter par le vaisseau ${body2.name}")
        }.onFailure {
            Log.e(
                "MainActivity.reactionIdTwelve",
                "Cannot Get Info from Area Server",
                it
            )
        }
    }

    private suspend fun reactionIdThirteen() {
        runCatching {
            val bodyStr =
                Fuel.get("http://192.168.1.16:8080/Weather/?city=paris&country=france")
                    .awaitString()
            val body = Gson().fromJson<WeatherAPI>(bodyStr, WeatherAPI::class.java)
            Fuel.get("http://192.168.1.16:8080/trello/AddCartComment/?comment=City : ${body.name} Weather : ${body.weather[0].description} Temperature : ${body.main.temp}")
                .awaitString()
            runOnUiThread {
                MainActivity_TextView.text = "City : ${body.name}\nWeather : ${body.weather[0].description}\nTemperature : ${body.main.temp}"
            }
            Log.d("onIdThirteen", " A ${body.name} il y a ${body.weather[0].description}")
        }.onFailure {
            Log.e("MainActivity.reactionIdThirteen", "Cannot Get Info from Area Server", it)
        }
    }

    private suspend fun reactionIdFourteen() {
        runCatching {
            val bodyStr =
                Fuel.get("http://192.168.1.16:8080/starwars_People/?id=${Random.nextInt(1, 60)}")
                    .awaitString()
            val body = Gson().fromJson<SwapiPeople>(bodyStr, SwapiPeople::class.java)
            runOnUiThread {
                MainActivity_TextView.text = "Name : ${body.name}\nBirth year : ${body.birth_year}\nGender : ${body.gender}, Height : ${body.height}\nMass : ${body.mass}"
            }
            Log.d("onIdFourteen", "${body.name} ")
        }.onFailure {
            Log.e("MainActivity.reactionIdFourteen", "Cannot Get Info from Area Server", it)
        }
    }

    private suspend fun reactionIdFifteen() {
        runCatching {
            val bodyStr =
                Fuel.get("http://192.168.1.16:8080/starwars_Starships/?id=${Random.nextInt(1, 15)}")
                    .awaitString()
            val body = Gson().fromJson<SwapiStarships>(bodyStr, SwapiStarships::class.java)
            runOnUiThread {
                MainActivity_TextView.text = "Name : ${body.name}\nModel : ${body.model}\nCrew member : ${body.crew}\nNumber of passengers : ${body.passengers}"
            }
            Log.d("onIdFifteen", "${body.name} ")
        }.onFailure {
            Log.e("MainActivity.reactionIdFifteen", "Cannot Get Info from Area Server", it)
        }
    }

    private suspend fun reactionIdSixteen() {
        runCatching {
            val bodyStr =
                Fuel.get("http://192.168.1.16:8080/starwars_People/?id=${Random.nextInt(1, 60)}")
                    .awaitString()
            val body = Gson().fromJson<SwapiPeople>(bodyStr, SwapiPeople::class.java)
            val bodyStr2 =
                Fuel.get("http://192.168.1.16:8080/starwars_Species/?id=${Random.nextInt(1, 30)}")
                    .awaitString()
            val body2 = Gson().fromJson<SwapiSpecies>(bodyStr2, SwapiSpecies::class.java)
            runOnUiThread {
                MainActivity_TextView.text = "${body2.name} is ${body.name}'s favorite specie !"
            }
            Log.d("onIdSixteen", "${body.name} est meilleur ami avec ${body2.name}")
        }.onFailure {
            Log.e("MainActivity.reactionIdSixteen", "Cannot Get Info from Area Server", it)
        }
    }

    private suspend fun reactionIdSeventeen() {
        runCatching {
            val rand = Random.nextInt(1, 60)
            val bodyStr = Fuel.get(
                "http://192.168.1.16:8080/pokemon_Berry/?berry_id=${rand}"
            ).awaitString()
            val body = Gson().fromJson<Berry>(bodyStr, Berry::class.java)
            val bodyStr2 =
                Fuel.get("http://192.168.1.16:8080/starwars_People/?id=${rand}")
                    .awaitString()
            val body2 = Gson().fromJson<SwapiPeople>(bodyStr2, SwapiPeople::class.java)
            runOnUiThread {
                MainActivity_TextView.text = "${body.name} is ${body2.name}'s favorite berry !"
            }
            Log.d("onIdSeventeen", "${body.name} est la baie preferer des ${body2.name}")
        }.onFailure {
            Log.e("MainActivity.reactionIdSeventeen", "Cannot Get Info from Area Server", it)
        }
    }
/*
    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        if (requestCode == OAuthStuff.resultCode && resultCode == Activity.RESULT_CANCELED) {
            val it = Intent(this, OAuthStuff::class.java)
            startActivityForResult(it, OAuthStuff.resultCode)
            Log.d("oauthstuff", "Cannot get token from Trello restarting webview activity")
        }
    }
*/
}