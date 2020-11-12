import React from 'react';
import './App.css';
import axios from 'axios';
import heart from './pixel_heart.jpg';
import contains_icon from './contains_icon.png';
import planet_icon from './planet_icon.png';
import pokeball from './pokeball_pixelart.jpg';
import myConfig from "./config"
import auth2 from './auth'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import Apk from "./dowload_apk";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = myConfig
    this.getRandomInt = this.getRandomInt.bind(this);
    this.updateApp = this.updateApp.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.getBerryToPlanet = this.getBerryToPlanet.bind(this);
    this.getPlanetToPok = this.getPlanetToPok.bind(this);
    this.setPokemon = this.setPokemon.bind(this);
    this.getPokFavBerry = this.getPokFavBerry.bind(this);
    this.createUserJira = this.createUserJira.bind(this);
    this.getPeopleFavPok = this.getPeopleFavPok.bind(this);
    this.getPeopleFavBerry = this.getPeopleFavBerry.bind(this);
    this.getStarshipCarryPok = this.getStarshipCarryPok.bind(this);
    this.getStarshipCarryBerry = this.getStarshipCarryBerry.bind(this);
    this.getPokBestSpecie = this.getPokBestSpecie.bind(this);
    this.getSpecieFavBerry = this.getSpecieFavBerry.bind(this);
    this.getPeopleFavSpecie = this.getPeopleFavSpecie.bind(this);
    this.handletest = this.handletest.bind(this);
    this.getRandomCapture = this.getRandomCapture.bind(this)
    this.setPokedex = this.setPokedex.bind(this);
    this.is_logend = this.is_logend.bind(this);
  }

  handleLogout() {
  };



  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getRandomCapture(max) {
    let capture_rand = Math.floor(Math.random() * Math.floor(max));
    this.setState({ rand: capture_rand })
    if (this.alone_pokemon !== "") {
      if (capture_rand >= 50) {
        this.setState({ sentence: "Catch" })
        this.setPokemon();
        this.setState({ pokemon_picture: '' })
      }
      else {
        this.setState({ sentence: "Run away" })
        this.setPokedex();
        this.setState({ pokemon_picture: '' })
      }
    }
  }

  handletest(event) {
    event.preventDefault();
    this.getRandomCapture(100);
  }

  setPokedex() {
    axios.get(`http://localhost:8080/trello/AddCart`,
      {
        params: {
          pokedex: this.state.alone_pokemon
        }
      })
      .then((response) => {
      })
      .catch(function (error) {
        console.log(error);
      })
    axios.get(`http://localhost:8080/didi_image`,
      {
        params: {
          Team: this.state.pokemon_picture
        }
      })
      .then((response) => {
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  updateApp() {
    axios.get(`http://localhost:8080/area`)
      .then((response) => {
        this.setState((state) => {
          return { ifId: response.data.id }
        });
        this.setState((state) => {
          return { tmp_date: response.data.date }
        });
      })
      .catch(function (error) {
        console.log(error);
      })
    //  console.log(this.state.ifId);
    if (this.state.last_date !== this.state.tmp_date) {
      this.setState((state) => {
        return { last_date: this.state.tmp_date }
      });
      //carte montée 1
      if (this.state.ifId === '1') {
        axios.get(`http://localhost:8080/pokemon_Name/?pokemon=${this.getRandomInt(2, 500)}`)
          .then((response) => {
            console.log(response.data)
            this.setState((state) => {
              return { alone_pokemon: response.data.forms[0].name }
            });
            this.setState((state) => {
              return { pokemon_data_id: response.data.id }
            });
            this.setState((state) => {
              console.log(response.data.moves[0].move.name)
              return { pokemon_move: response.data.types[0].type.name }
            });

            this.setState((state) => {
              return { pokemon_picture: response.data.sprites.front_default }
            });
          })
          .catch(function (error) {
            console.log(error);
          })
      }
      //carte descendue 2
      if (this.state.ifId === '2') {
        this.setState((state) => {
          return { berry: this.getRandomInt(1, 60) }
        });
        this.getBerryToPlanet();
      }
      //added list to board 3
      if (this.state.ifId === '3') {
        this.setState((state) => {
          return { planet: this.getRandomInt(1, 60) }
        });
        this.getPlanetToPok();
      }
      //moved list left 4
      if (this.state.ifId === '4') {
        this.setState((state) => {
          return { pokemon_id: this.getRandomInt(1, 60) }
        });
        this.getPokFavBerry();
      }
      //archived list 5
      if (this.state.ifId === '5') {
        this.setState((state) => {
          return { people_id: this.getRandomInt(1, 60) }
        });
        this.getPeopleFavPok();
      }
      //list moved to right 6
      if (this.state.ifId === '6') {
        this.setState((state) => {
          return { ppl_idb: this.getRandomInt(1, 60) }
        });
        this.getPeopleFavBerry();
      }
      //created carte 7
      if (this.state.ifId === '7') {
        this.setState((state) => {
          return { id_starship: this.getRandomInt(1, 15) }
        });
        this.getStarshipCarryPok();
      }
      //renamed carte 8
      if (this.state.ifId === '8') {
        axios.get(`http://localhost:8080/pokemon_Berry/?berry_id=${this.getRandomInt(1, 60)}`)
          .then((response) => {
            this.setState((state) => {
              return { alone_berry: response.data.name }

            });
            this.setState((state) => {
              return { berry_data_id: response.data.id }
            });
            this.setState((state) => {
              console.log(response.data.flavors)
              return { berry_flavor: response.data.flavors[0].flavor.name }

            });
          })
          .catch(function (error) {
            console.log(error);
          })
      }
      //moved carte from list to list 9
      if (this.state.ifId === '9') {
        axios.get(`http://localhost:8080/starwars_Planet/?id=${this.getRandomInt(1, 60)}`)
          .then((response) => {
            this.setState((state) => {
              return { alone_planet: response.data.name }
            });
            this.setState((state) => {
              return { climate_planet: response.data.climate }
            });
            this.setState((state) => {
              return { terrain_planet: response.data.terrain }
            });
            this.setState((state) => {
              return { population_planet: response.data.population }
            });
          })
          .catch(function (error) {
            console.log(error);
          })
      }
      //member joined card 10
      if (this.state.ifId === '10') {
        axios.get(`http://localhost:8080/starwars_Species/?id=${this.getRandomInt(1, 30)}`)
          .then((response) => {
            this.setState((state) => {
              return { alone_specie: response.data.name }
            });
            this.setState((state) => {
              return { specie_lifespan: response.data.average_lifespan }
            });
            this.setState((state) => {
              return { specie_height: response.data.average_height }
            });
            this.setState((state) => {
              return { specie_classification: response.data.classification }
            });
          })
          .catch(function (error) {
            console.log(error);
          })
      }
      //member left card 11
      if (this.state.ifId === '11') {
        this.setState((state) => {
          return { pokefriend_id: this.getRandomInt(1, 30) }
        });
        this.getPokBestSpecie();
        this.createUserJira();
      }
      //sent carte to board 12
      if (this.state.ifId === '12') {
        this.setState((state) => {
          return { id_starber: this.getRandomInt(1, 15) }
        });
        this.getStarshipCarryBerry();
      }
      //delete card 13
      if (this.state.ifId === '13') {
        this.setState((state) => {
          return { place: 'Paris,fr' }
        });
        this.getWeather();
      }
      //archived carte 14
      if (this.state.ifId === '14') {
        axios.get(`http://localhost:8080/starwars_People/?id=${this.getRandomInt(1, 60)}`)
          .then((response) => {
            this.setState((state) => {
              return { alone_people: response.data.name }
            });
            this.setState((state) => {
              return { people_gender: response.data.gender }
            });
            this.setState((state) => {
              return { people_height: response.data.height }
            });
            this.setState((state) => {
              return { people_mass: response.data.mass }
            });
            this.setState((state) => {
              return { people_birth_year: response.data.birth_year }
            });
          })
          .catch(function (error) {
            console.log(error);
          })
      }
      //changed desc of card 15
      if (this.state.ifId === '15') {
        axios.get(`http://localhost:8080/starwars_Starships/?id=${this.getRandomInt(1, 13)}`)
          .then((response) => {
            this.setState((state) => {
              return { alone_starship: response.data.name }
            });
            console.log(response.data)
            this.setState((state) => {
              return { starship_passager: response.data.passengers }
            });
            this.setState((state) => {
              return { starship_crew: response.data.crew }
            });
            this.setState((state) => {
              return { starship_model: response.data.model }
            });
          })
          .catch(function (error) {
            console.log(error);
          })
      }
      //changed due date 16
      if (this.state.ifId === '16') {
        this.setState((state) => {
          return { ppl_idsp: this.getRandomInt(1, 30) }
        });
        this.getPeopleFavSpecie();
      }
      //added due date 17
      if (this.state.ifId === '17') {
        this.setState((state) => {
          return { specie_id: this.getRandomInt(1, 30) }
        });
        this.getSpecieFavBerry();
      }
    }
    setTimeout(this.updateApp, 2000);
  }

  getWeather() {
    axios.get(`http://localhost:8080/weather/?city=${this.state.place}&country=uk`)
      .then((response) => {
        this.setState((state) => {
          return { temp: response.data.main.temp }
        });
        this.setState((state) => {
          return { desc: response.data.weather[0].description }
        });
      })
    axios.get(`http://localhost:8080/trello/AddCartComment/?comment=${this.state.place + ' ' + this.state.desc}`)
      .catch(function (error) {
        console.log(error);
      })
  }

  createUserJira() {
    axios.get(`http://localhost:8080/jira_AddNewUser`)
      .then((response) => {
      })
      .catch(function (error) {
        console.log(error);
      })
    axios.get(`http://localhost:8080/trello/AddList`,
      {
        params: {
          name: "coucou_ça_marche"
        }
      })
      .then((response) => {
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  getBerryToPlanet() {
    axios.get(`http://localhost:8080/pokemon_Berry/?berry_id=${this.state.berry}`)
      .then((response) => {
        this.setState((state) => {
          return { name_berry: response.data.name }
        });
      })
    axios.get(`http://localhost:8080/starwars_Planet/?id=${this.state.berry}`)
      .then((response) => {
        this.setState((state) => {
          return { ber_planet_name: response.data.name }
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  getPlanetToPok() {
    axios.get(`http://localhost:8080/starwars_Planet/?id=${this.state.planet}`)
      .then((response) => {
        this.setState((state) => {
          return { name: response.data.name }
        });
        this.setState((state) => {
          return { pop: response.data.population }
        });
      })
    axios.get(`http://localhost:8080/pokemon_Name/?pokemon=${this.state.planet}`)
      .then((response) => {
        this.setState((state) => {
          return { sw_poke_name: response.data.forms[0].name }
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  setPokemon() {
    axios.get(`http://localhost:8080/trello/CreateCheckItems`,
      {
        params: {
          checkitem: this.state.alone_pokemon
        }
      })
      .then((response) => {
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  getPokFavBerry() {
    axios.get(`http://localhost:8080/pokemon_Name/?pokemon=${this.state.pokemon_id}`)
      .then((response) => {
        this.setState((state) => {
          return { poke_name: response.data.forms[0].name }
        });
      })
    axios.get(`http://localhost:8080/pokemon_Berry/?berry_id=${this.state.pokemon_id}`)
      .then((response) => {
        this.setState((state) => {
          return { fav_berry: response.data.name }
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  getPeopleFavPok() {
    axios.get(`http://localhost:8080/starwars_People/?id=${this.state.people_id}`)
      .then((response) => {
        this.setState((state) => {
          return { ppl_name: response.data.name }
        });
      })
    axios.get(`http://localhost:8080/pokemon_Name/?pokemon=${this.state.people_id}`)
      .then((response) => {
        this.setState((state) => {
          return { fav_poke: response.data.forms[0].name }
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  getPeopleFavBerry() {
    axios.get(`http://localhost:8080/starwars_People/?id=${this.state.ppl_idb}`)
      .then((response) => {
        this.setState((state) => {
          return { ppl_nameb: response.data.name }
        });
      })
    axios.get(`http://localhost:8080/pokemon_Berry/?berry_id=${this.state.ppl_idb}`)
      .then((response) => {
        this.setState((state) => {
          return { fav_berryppl: response.data.name }
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  getStarshipCarryPok() {
    axios.get(`http://localhost:8080/starwars_Starships/?id=${this.state.id_starship}`)
      .then((response) => {
        this.setState((state) => {
          return { starship_name: response.data.name }
        });
      })
    axios.get(`http://localhost:8080/pokemon_Name/?pokemon=${this.state.id_starship}`)
      .then((response) => {
        this.setState((state) => {
          return { ship_poke: response.data.forms[0].name }
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  getStarshipCarryBerry() {
    axios.get(`http://localhost:8080/starwars_Starships/?id=${this.state.id_starber}`)
      .then((response) => {
        this.setState((state) => {
          return { starber_name: response.data.name }
        });
      })
    axios.get(`http://localhost:8080/pokemon_Berry/?berry_id=${this.state.id_starber}`)
      .then((response) => {
        this.setState((state) => {
          return { berry_ship: response.data.name }
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  getPokBestSpecie() {
    axios.get(`http://localhost:8080/pokemon_Name/?pokemon=${this.state.pokefriend_id}`)
      .then((response) => {
        this.setState((state) => {
          return { pokefriend_name: response.data.forms[0].name }
        });
      })
    axios.get(`http://localhost:8080/starwars_Species/?id=${this.state.pokefriend_id}`)
      .then((response) => {
        this.setState((state) => {
          return { friend_specie: response.data.name }
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  getSpecieFavBerry() {
    axios.get(`http://localhost:8080/starwars_Species/?id=${this.state.specie_id}`)
      .then((response) => {
        this.setState((state) => {
          return { specie_name: response.data.name }
        });
      })
    axios.get(`http://localhost:8080/pokemon_Berry/?berry_id=${this.state.specie_id}`)
      .then((response) => {
        this.setState((state) => {
          return { fav_berryspe: response.data.name }
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  getPeopleFavSpecie() {
    axios.get(`http://localhost:8080/starwars_People/?id=${this.state.ppl_idsp}`)
      .then((response) => {
        this.setState((state) => {
          return { ppl_namesp: response.data.name }
        });
      })
    axios.get(`http://localhost:8080/starwars_Species/?id=${this.state.ppl_idsp}`)
      .then((response) => {
        this.setState((state) => {
          return { fav_spe: response.data.name }
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  componentDidMount() {

    this.updateApp();
    this.getWeather();
    this.getPlanetToPok();
    this.getBerryToPlanet();
    this.setPokemon();
    this.getPokFavBerry();
    this.getPeopleFavPok();
    this.getPeopleFavBerry();
    this.getStarshipCarryPok();
    this.getStarshipCarryBerry();
    this.getPokBestSpecie();
    this.getSpecieFavBerry();
    this.getPeopleFavSpecie();
    auth2(8080);
  }

  is_logend(login) {
    this.setState({
      connected: login
    })
  }
  dl() {
    this.is_logend(4)
  }
  render() {
    return (
      <div className="App">
        <div>
          <BrowserRouter>
          <Switch>
          <Route exact path="/client.apk" render={(props) =>
          <Apk {...props} connected={this.is_logend} />} />
            <Route exact path={"/"}
              render={props => (
                <div>
                  {this.state.connected === 3 ?
                  <div id="apkDls">
                     <Link to="/client.apk">
                        <button id="dlsApkBtn"
                        type="button"
                        onClick={() => this.dl()}>
                        Dowload apk
                        </button>
                    </Link>
                  </div>
                  : ''}
                  {this.state.connected === 1 ?
                    <Registration conected={this.is_logend} /> : ''}
                  {!this.state.connected ?
                    <div>
                      <Login conected={this.is_logend} />
                      <button id="dlsApkBtn"  onClick={() => this.is_logend(1)}>register</button>
                    </div> : ''}
                </div>
              )} />
              </Switch>
          </BrowserRouter>
        </div>
        <div> {this.state.connected === 3 ?
          <div>
            <div id="header">
              <p id="headerTitle">
                STAR WARS x Pokemon
              </p>
            </div>
            <div id="container">
              <div id="category">
                <div className="title">
                  <span>Favorite</span>
                </div>
                <div className="content">
                  <div className="card">
                    <p className="cardTitle">Favorite Pokemon of StarWars caracter</p>
                    <p className="txtel left">{this.state.ppl_name}</p>
                    <p className="txtel right">{this.state.fav_poke}</p>
                    <img className="middleimg" src={heart} alt="pixelart heart" />
                  </div>
                  <div className="card">
                    <p className="cardTitle">Favorite Berry of Specie</p>
                    <p className="txtel left">{this.state.specie_name}</p>
                    <p className="txtel right">{this.state.fav_berryspe}</p>
                    <img className="middleimg" src={heart} alt="pixelart heart" />
                  </div>
                  <div className="card">
                    <p className="cardTitle">Favorite Specie of StarWars caracter</p>
                    <p className="txtel left">{this.state.ppl_namesp}</p>
                    <p className="txtel right">{this.state.fav_spe}</p>
                    <img className="middleimg" src={heart} alt="pixelart heart" />
                  </div>
                  <div className="card">
                    <p className="cardTitle">Favorite Specie of Pokemon</p>
                    <p className="txtel left">{this.state.pokefriend_name}</p>
                    <p className="txtel right">{this.state.friend_specie}</p>
                    <img className="middleimg" src={heart} alt="pixelart heart" />
                  </div>
                  <div className="card">
                    <p className="cardTitle">Favorite Berry of StarWars caracter</p>
                    <p className="txtel left">{this.state.ppl_nameb}</p>
                    <p className="txtel right">{this.state.fav_berryppl}</p>
                    <img className="middleimg" src={heart} alt="pixelart heart" />
                  </div>
                  <div className="card">
                    <p className="cardTitle">Favorite Berry of Pokemon</p>
                    <p className="txtel left">{this.state.poke_name}</p>
                    <p className="txtel right">{this.state.fav_berry}</p>
                    <img className="middleimg" src={heart} alt="pixelart heart" />
                  </div>
                </div>
                <div className="title">
                  <span>Starships Stock</span>
                </div>
                <div className="content">
                  <div className="card">
                    <p className="cardTitle">Starship contains Pokemon</p>
                    <p className="txtel left">{this.state.starship_name}</p>
                    <p className="txtel right">{this.state.ship_poke}</p>
                    <img className="middleimg" src={contains_icon} alt="contains icon" />
                  </div>
                  <div className="card">
                    <p className="cardTitle">Starship contains Berry</p>
                    <p className="txtel left">{this.state.starber_name}</p>
                    <p className="txtel right">{this.state.berry_ship}</p>
                    <img className="middleimg" src={contains_icon} alt="contains icon" />
                  </div>
                </div>
                <div className="title">
                  <span>Planet</span>
                </div>
                <div className="content">
                  <div className="card">
                    <p className="cardTitle">The Berry grow on Planet</p>
                    <p className="txtel left">{this.state.name_berry}</p>
                    <p className="txtel right">{this.state.ber_planet_name}</p>
                    <img className="middleimg" src={planet_icon} alt="planet icon" />
                  </div>
                  <div className="card">
                    <p className="cardTitle">This Pokemon lives on Planet</p>
                    <p className="txtel left">{this.state.name}</p>
                    <p className="txtel right">{this.state.sw_poke_name}</p>
                    <img className="middleimg" src={planet_icon} alt="planet icon" />
                  </div>
                </div>
                <div className="title">
                  <span>Random</span>
                </div>
                <div className="content">
                  <div className="card">
                    <p className="cardTitle">Berry</p>
                    <p className="txtel middle">{this.state.alone_berry} {this.state.berry_data_id} {this.state.berry_flavor}</p>
                  </div>
                  <div className="card">
                    <p className="cardTitle">Planet</p>
                    <p className="txtel middle">{this.state.alone_planet} {this.state.climate_planet} {this.state.population_planet} {this.state.terrain_planet}</p>
                  </div>
                  <div className="card">
                    <p className="cardTitle">Starship</p>
                    <p className="txtel middle">{this.state.alone_starship} {this.state.starship_passager} {this.state.starship_crew} {this.state.starship_model}</p>
                  </div>
                  <div className="card">
                    <p className="cardTitle">Poeple</p>
                    <p className="txtel middle">{this.state.alone_people} {this.state.people_gender} {this.state.people_height} {this.state.people_birth_year}</p>
                  </div>
                  <div className="card">
                    <p className="cardTitle">Pokemon</p>
                    <p className="txtel middle">{this.state.alone_pokemon} {this.state.pokemon_data_id} {this.state.pokemon_move}</p>
                  </div>
                  <div className="card">
                    <p className="cardTitle">Specie</p>
                    <p className="txtel middle">{this.state.alone_specie}  {this.state.specie_lifespan}  {this.state.specie_height}  {this.state.specie_classification}</p>
                  </div>
                  <div className="card">
                    <p className="cardTitle">Weather</p>
                    <p className="txtel middle">{this.state.temp} {this.state.place}</p>
                  </div>
                </div>
                <div className="title">
                  <span>Capture</span>
                </div>
                <div className="content">
                  <div className="card">
                    <p className="cardTitle">Pokemon - {this.state.sentence}</p>
                    <img className="leftimg" src={pokeball} onClick={this.handletest} type="button" alt="pixelart pokeball" />
                    <img className="rightimg" src={this.state.pokemon_picture} alt="pixelart pokemon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        : ''} </div>
      </div>
    );
  }
}
export default App;
