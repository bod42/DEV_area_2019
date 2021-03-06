define({ "api": [
  {
    "type": "post",
    "url": "/didi",
    "title": "Send infos",
    "group": "Discord",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   [{\n\"type\": 1,\n  \"id\": \"676028232759509003\",\n  \"name\": \"jeujeu\",\n  \"avatar\": null,\n  \"channel_id\": \"676014768498409495\",\n  \"guild_id\": \"676014768498409492\",\n  \"token\": \"bFkVpmif3dy5xB-bfQ3jBBKdeE2lS_Mtbcmjig9l44OEejGzpP5Sh3Ijo_gL5UykwIB3\"\n   }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Get Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Discord",
    "name": "PostDidi"
  },
  {
    "type": "post",
    "url": "/didi_images",
    "title": "Send images",
    "group": "Discord",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   [{\n\"type\": 1,\n  \"id\": \"676028232759509003\",\n  \"name\": \"jeujeu\",\n  \"avatar\": null,\n  \"channel_id\": \"676014768498409495\",\n  \"guild_id\": \"676014768498409492\",\n  \"token\": \"bFkVpmif3dy5xB-bfQ3jBBKdeE2lS_Mtbcmjig9l44OEejGzpP5Sh3Ijo_gL5UykwIB3\"\n   }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Get Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Discord",
    "name": "PostDidi_images"
  },
  {
    "type": "get",
    "url": "/gitlab",
    "title": "Get last commit and post on Discord",
    "group": "Gitlab",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   [{\n{\n        \"id\": \"3cbaf637e88f4583a4d6fbad8e82c9279d7a4d78\",\n        \"short_id\": \"3cbaf637\",\n        \"created_at\": \"2020-02-28T18:25:10.000+01:00\",\n        \"parent_ids\": [\n            \"3fc01b29b8b00ce6eb63774e724934f0fb868c67\"\n        ],\n        \"title\": \"lol\",\n        \"message\": \"lol\\n\",\n        \"author_name\": \"bod\",\n        \"author_email\": \"baptiste.liger@epitech.eu\",\n        \"authored_date\": \"2020-02-28T18:25:10.000+01:00\",\n        \"committer_name\": \"bod\",\n        \"committer_email\": \"baptiste.liger@epitech.eu\",\n        \"committed_date\": \"2020-02-28T18:25:10.000+01:00\",\n        \"web_url\": \"https://gitlab.com/bod42/testapi/-/commit/3cbaf637e88f4583a4d6fbad8e82c9279d7a4d78\"\n    },\n    {\n        \"id\": \"3fc01b29b8b00ce6eb63774e724934f0fb868c67\",\n        \"short_id\": \"3fc01b29\",\n        \"created_at\": \"2020-02-25T14:35:13.000+01:00\",\n        \"parent_ids\": [\n            \"728d72e8f419fbe1ff80abbb27757a6441df8253\"\n        ],\n        \"title\": \"salut maxine\",\n        \"message\": \"salut maxine\\n\",\n        \"author_name\": \"bod\",\n        \"author_email\": \"baptiste.liger@epitech.eu\",\n        \"authored_date\": \"2020-02-25T14:35:13.000+01:00\",\n        \"committer_name\": \"bod\",\n        \"committer_email\": \"baptiste.liger@epitech.eu\",\n        \"committed_date\": \"2020-02-25T14:35:13.000+01:00\",\n        \"web_url\": \"https://gitlab.com/bod42/testapi/-/commit/3fc01b29b8b00ce6eb63774e724934f0fb868c67\"\n    },\n    {\n        \"id\": \"728d72e8f419fbe1ff80abbb27757a6441df8253\",\n        \"short_id\": \"728d72e8\",\n        \"created_at\": \"2020-01-26T09:13:42.000+00:00\",\n        \"parent_ids\": [],\n        \"title\": \"Initial commit\",\n        \"message\": \"Initial commit\",\n        \"author_name\": \"baptiste liger\",\n        \"author_email\": \"baptiste.liger@epitech.eu\",\n        \"authored_date\": \"2020-01-26T09:13:42.000+00:00\",\n        \"committer_name\": \"baptiste liger\",\n        \"committer_email\": \"baptiste.liger@epitech.eu\",\n        \"committed_date\": \"2020-01-26T09:13:42.000+00:00\",\n        \"web_url\": \"https://gitlab.com/bod42/testapi/-/commit/728d72e8f419fbe1ff80abbb27757a6441df8253\"\n    }\n   }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Get Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Gitlab",
    "name": "GetGitlab"
  },
  {
    "type": "post",
    "url": "/jira_AddNewUser",
    "title": "Add a new user",
    "group": "Jira",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Get Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Jira",
    "name": "PostJira_addnewuser"
  },
  {
    "type": "get",
    "url": "/area",
    "title": "Get lasts updates of Trello",
    "group": "Perso",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   [{\nid: '1',\naction: 'action_moved_card_lower',\ndate: 2019-06-08T19:40:27.915Z\n   }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Get Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Perso",
    "name": "GetArea"
  },
  {
    "type": "get",
    "url": "/client.apk",
    "title": "Download apk",
    "group": "Perso",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Get Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Perso",
    "name": "GetClientApk"
  },
  {
    "type": "get",
    "url": "/pokemon_Berry",
    "title": "Get infos of a berry",
    "group": "Pokemon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of a berry (between 1 and 60).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   [{\n{\n  \"firmness\": {\n    \"name\": \"soft\",\n    \"url\": \"https://pokeapi.co/api/v2/berry-firmness/2/\"\n  },\n  \"flavors\": [\n    {\n      \"flavor\": {\n        \"name\": \"spicy\",\n        \"url\": \"https://pokeapi.co/api/v2/berry-flavor/1/\"\n      },\n      \"potency\": 10\n    },\n    {\n      \"flavor\": {\n        \"name\": \"dry\",\n        \"url\": \"https://pokeapi.co/api/v2/berry-flavor/2/\"\n      },\n      \"potency\": 0\n    },\n    {\n      \"flavor\": {\"type\": 1,\n    \"id\": \"676028232759509003\",\n    \"name\": \"jeujeu\",\n    \"avatar\": null,\n    \"channel_id\": \"676014768498409495\",\n    \"guild_id\": \"676014768498409492\",\n    \"token\": \"bFkVpmif3dy5xB-bfQ3jBBKdeE2lS_Mtbcmjig9l44OEejGzpP5Sh3Ijo_gL5UykwIB3\"\n      \"potency\": 0\n    },\n    {\n      \"flavor\": {\n        \"name\": \"bitter\",\n        \"url\": \"https://pokeapi.co/api/v2/berry-flavor/4/\"\n      },\n      \"potency\": 0\n    },\n    {\n      \"flavor\": {\n        \"name\": \"sour\",\n        \"url\": \"https://pokeapi.co/api/v2/berry-flavor/5/\"\n      },\n      \"potency\": 0\n    }\n  ],\n  \"growth_time\": 3,\n  \"id\": 1,\n  \"item\": {\n    \"name\": \"cheri-berry\",\n    \"url\": \"https://pokeapi.co/api/v2/item/126/\"\n  },\n  \"max_harvest\": 5,\n  \"name\": \"cheri\",\n  \"natural_gift_power\": 60,\n  \"natural_gift_type\": {\n    \"name\": \"fire\",\n    \"url\": \"https://pokeapi.co/api/v2/type/10/\"\n  },\n  \"size\": 20,\n  \"smoothness\": 25,\n  \"soil_dryness\": 15\n}\n   }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Get Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Pokemon",
    "name": "GetPokemon_berry"
  },
  {
    "type": "get",
    "url": "/pokemon_Name",
    "title": "Get infos about a pokemon",
    "group": "Pokemon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "pokemon",
            "description": "<p>Id of a pokemon (between 1 and 600).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   [{\n\"abilities\": [\n  {\n    \"ability\": {\n      \"name\": \"chlorophyll\",\n      \"url\": \"https://pokeapi.co/api/v2/ability/34/\"\n    },\n    \"is_hidden\": true,\n    \"slot\": 3\n  },\n  {\n    \"ability\": {\n      \"name\": \"overgrow\",\n      \"url\": \"https://pokeapi.co/api/v2/ability/65/\"\n    },\n    \"is_hidden\": false,\n    \"slot\": 1\n  }\n],\n\"base_experience\": 64,\n\"forms\": [\n  {\n    \"name\": \"bulbasaur\",\n    \"url\": \"https://pokeapi.co/api/v2/pokemon-form/1/\"\n  }\n],\n\"game_indices\": [\n  {\n    \"game_index\": 1,\n    \"version\": {\n      \"name\": \"white-2\",\n      \"url\": \"https://pokeapi.co/api/v2/version/22/\"\n    }\n  },\n  {\n    \"game_index\": 1,\n    \"version\": {\n      \"name\": \"black-2\",\n      \"url\": \"https://pokeapi.co/api/v2/version/21/\"\n    }\n  },\n  {\n    \"game_index\": 1,\n    \"version\": {\n      \"name\": \"white\",\n      \"url\": \"https://pokeapi.co/api/v2/version/18/\"\n    }\n  },\n  {\n    \"game_index\": 1,\n    \"version\": {\n      \"name\": \"black\",\n      \"url\": \"https://pokeapi.co/api/v2/version/17/\"\n    }\n  },\n  {\n    \"game_index\": 1,\n    \"version\": {\n      \"name\": \"soulsilver\",\n      \"url\": \"https://pokeapi.co/api/v2/version/16/\"\n    }\n  },\n  {\n    \"game_index\": 1,\n    \"version\": {\n      \"name\": \"heartgold\",\n      \"url\": \"https://pokeapi.co/api/v2/version/15/\"\n    }\n  },\n  {\n    \"game_index\": 1,\n    \"version\": {\n      \"name\": \"platinum\",\n      \"url\": \"https://pokeapi.co/api/v2/version/14/\"\n    }\n  },\n  {\n    \"game_index\": 1,\n    \"version\": {\n      \"name\": \"pearl\",\n      \"url\": \"https://pokeapi.co/api/v2/version/13/\"\n    }\n  },\n  {\n    \"game_index\": 1,\n    \"version\": {\n      \"name\": \"diamond\",\n      \"url\": \"https://pokeapi.co/api/v2/version/12/\"\n    }\n  },\n  {\n    \"game_index\": 1,\n    \"version\": {\n      \"name\": \"leafgreen\",\n      \"url\": \"https://pokeapi.co/api/v2/version/11/\"\n    }\n  },\n  {\n    \"game_index\": 1,\n    \"version\": {\n      \"name\": \"firered\",\n      \"url\": \"https://pokeapi.co/api/v2/version/10/\"\n    }\n  },\n  {\n    \"game_index\": 1,\n    \"version\": {\n      \"name\": \"emerald\",\n      \"url\": \"https://pokeapi.co/api/v2/version/9/\"\n    }\n  },\n  {\n    \"game_index\": 1,\n    \"version\": {\n      \"name\": \"sapphire\",\n      \"url\": \"https://pokeapi.co/api/v2/version/8/\"\n    }\n  },\n  {\n    \"game_index\": 1,\n    \"version\": {\n      \"name\": \"ruby\",\n      \"url\": \"https://pokeapi.co/api/v2/version/7/\"\n    }\n  },\n  {\n    \"game_index\": 1,\n    \"version\": {\n      \"name\": \"crystal\",\n      \"url\": \"https://pokeapi.co/api/v2/version/6/\"\n    }\n  },\n  {\n    \"game_index\": 1,\n    \"version\": {\n      \"name\": \"silver\",\n      \"url\": \"https://pokeapi.co/api/v2/version/5/\"\n    }\n  },\n  {\n    \"game_index\": 1,\n    \"version\": {\n      \"name\": \"gold\",\n      \"url\": \"https://pokeapi.co/api/v2/version/4/\"\n    }\n  },\n  {\n    \"game_index\": 153,\n    \"version\": {\n      \"name\": \"yellow\",\n      \"url\": \"https://pokeapi.co/api/v2/version/3/\"\n    }\n  },\n  {\n    \"game_index\": 153,\n    \"version\": {\n      \"name\": \"blue\",\n      \"url\": \"https://pokeapi.co/api/v2/version/2/\"\n    }\n  },\n  {\n    \"game_index\": 153,\n    \"version\": {\n      \"name\": \"red\",\n      \"url\": \"https://pokeapi.co/api/v2/version/1/\"\n    }\n  }\n],\n\"height\": 7,\n\"held_items\": [],\n\"id\": 1,\n\"is_default\": true,\n\"location_area_encounters\": \"https://pokeapi.co/api/v2/pokemon/1/encounters\",\n\"moves\": [\n  {\n    \"move\": {\n      \"name\": \"razor-wind\",\n      \"url\": \"https://pokeapi.co/api/v2/move/13/\"\n    },\n    \"version_group_details\": [\n      {\n        \"level_learned_at\": 0,\n        \"move_learn_method\": {\n          \"name\": \"egg\",\n          \"url\": \"https://pokeapi.co/api/v2/move-learn-method/2/\"\n        },\n        \"version_group\": {\n          \"name\": \"crystal\",\n          \"url\": \"https://pokeapi.co/api/v2/version-group/4/\"\n        }\n      },\n      {\n        \"level_learned_at\": 0,\n        \"move_learn_method\": {\n          \"name\": \"egg\",\n          \"url\": \"https://pokeapi.co/api/v2/move-learn-method/2/\"\n        },\n        \"version_group\": {\n          \"name\": \"gold-silver\",\n          \"url\": \"https://pokeapi.co/api/v2/version-group/3/\"\n        }\n      }\n    ]\n  },\n  {\n    \"move\": {\n      \"name\": \"string-shot\",\n      \"url\": \"https://pokeapi.co/api/v2/move/81/\"\n    },\n    \"version_group_details\": [\n      {\n        \"level_learned_at\": 0,\n        \"move_learn_method\": {\n          \"name\": \"tutor\",\n          \"url\": \"https://pokeapi.co/api/v2/move-learn-method/3/\"\n        },\n        \"version_group\": {\n          \"name\": \"heartgold-soulsilver\",\n          \"url\": \"https://pokeapi.co/api/v2/version-group/10/\"\n        }\n      }\n    ]\n  },\n  {\n    \"move\": {\n      \"name\": \"rage\",\n      \"url\": \"https://pokeapi.co/api/v2/move/99/\"\n    },\n    \"version_group_details\": [\n      {\n        \"level_learned_at\": 0,\n        \"move_learn_method\": {\n          \"name\": \"machine\",\n          \"url\": \"https://pokeapi.co/api/v2/move-learn-method/4/\"\n        },\n        \"version_group\": {\n          \"name\": \"yellow\",\n          \"url\": \"https://pokeapi.co/api/v2/version-group/2/\"\n        }\n      },\n      {\n        \"level_learned_at\": 0,\n        \"move_learn_method\": {\n          \"name\": \"machine\",\n          \"url\": \"https://pokeapi.co/api/v2/move-learn-method/4/\"\n        },\n        \"version_group\": {\n          \"name\": \"red-blue\",\n          \"url\": \"https://pokeapi.co/api/v2/version-group/1/\"\n        }\n      }\n    ]\n  }\n],\n\"name\": \"bulbasaur\",\n\"order\": 1,\n\"species\": {\n  \"name\": \"bulbasaur\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon-species/1/\"\n},\n\"sprites\": {\n  \"back_default\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png\",\n  \"back_female\": null,\n  \"back_shiny\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png\",\n  \"back_shiny_female\": null,\n  \"front_default\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png\",\n  \"front_female\": null,\n  \"front_shiny\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png\",\n  \"front_shiny_female\": null\n},\n\"stats\": [\n  {\n    \"base_stat\": 45,\n    \"effort\": 0,\n    \"stat\": {\n      \"name\": \"speed\",\n      \"url\": \"https://pokeapi.co/api/v2/stat/6/\"\n    }\n  },\n  {\n    \"base_stat\": 65,\n    \"effort\": 0,\n    \"stat\": {\n      \"name\": \"special-defense\",\n      \"url\": \"https://pokeapi.co/api/v2/stat/5/\"\n    }\n  },\n  {\n    \"base_stat\": 65,\n    \"effort\": 1,\n    \"stat\": {\n      \"name\": \"special-attack\",\n      \"url\": \"https://pokeapi.co/api/v2/stat/4/\"\n    }\n  },\n  {\n    \"base_stat\": 49,\n    \"effort\": 0,\n    \"stat\": {\n      \"name\": \"defense\",\n      \"url\": \"https://pokeapi.co/api/v2/stat/3/\"\n    }\n  },\n  {\n    \"base_stat\": 49,\n    \"effort\": 0,\n    \"stat\": {\n      \"name\": \"attack\",\n      \"url\": \"https://pokeapi.co/api/v2/stat/2/\"\n    }\n  },\n  {\n    \"base_stat\": 45,\n    \"effort\": 0,\n    \"stat\": {\n      \"name\": \"hp\",\n      \"url\": \"https://pokeapi.co/api/v2/stat/1/\"\n    }\n  }\n],\n\"types\": [\n  {\n    \"slot\": 2,\n    \"type\": {\n      \"name\": \"poison\",\n      \"url\": \"https://pokeapi.co/api/v2/type/4/\"\n    }\n  },\n  {\n    \"slot\": 1,\n    \"type\": {\n      \"name\": \"grass\",\n      \"url\": \"https://pokeapi.co/api/v2/type/12/\"\n    }\n  }\n],\n\"weight\": 69\n   }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Get Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Pokemon",
    "name": "GetPokemon_name"
  },
  {
    "type": "get",
    "url": "/starwars_People",
    "title": "Get infos about a people",
    "group": "Starwars",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of a people (between 1 and 60).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   [{\n\"name\": \"Luke Skywalker\",\n\t\"height\": \"172\",\n\t\"mass\": \"77\",\n\t\"hair_color\": \"blond\",\n\t\"skin_color\": \"fair\",\n\t\"eye_color\": \"blue\",\n\t\"birth_year\": \"19BBY\",\n\t\"gender\": \"male\",\n\t\"homeworld\": \"https://swapi.co/api/planets/1/\",\n\t\"films\": [\n\t\t\"https://swapi.co/api/films/2/\",\n\t\t\"https://swapi.co/api/films/6/\",\n\t\t\"https://swapi.co/api/films/3/\",\n\t\t\"https://swapi.co/api/films/1/\",\n\t\t\"https://swapi.co/api/films/7/\"\n\t],\n\t\"species\": [\n\t\t\"https://swapi.co/api/species/1/\"\n\t],\n\t\"vehicles\": [\n\t\t\"https://swapi.co/api/vehicles/14/\",\n\t\t\"https://swapi.co/api/vehicles/30/\"\n\t],\n\t\"starships\": [\n\t\t\"https://swapi.co/api/starships/12/\",\n\t\t\"https://swapi.co/api/starships/22/\"\n\t],\n\t\"created\": \"2014-12-09T13:50:51.644000Z\",\n\t\"edited\": \"2014-12-20T21:17:56.891000Z\",\n\t\"url\": \"https://swapi.co/api/people/1/\"\n   }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Get Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Starwars",
    "name": "GetStarwars_people"
  },
  {
    "type": "get",
    "url": "/starwars_Planet",
    "title": "Get infos about a planet",
    "group": "Starwars",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of a planet (between 1 and 60).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   [{\n\"name\": \"Yavin IV\",\n    \"rotation_period\": \"24\",\n    \"orbital_period\": \"4818\",\n    \"diameter\": \"10200\",\n    \"climate\": \"temperate, tropical\",\n    \"gravity\": \"1 standard\",\n    \"terrain\": \"jungle, rainforests\",\n    \"surface_water\": \"8\",\n    \"population\": \"1000\",\n    \"residents\": [],\n    \"films\": [\n      \"https://swapi.co/api/films/1/\"\n    ],\n    \"created\": \"2014-12-10T11:37:19.144000Z\",\n    \"edited\": \"2014-12-20T20:58:18.421000Z\",\n    \"url\": \"https://swapi.co/api/planets/3/\"\n   }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Get Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Starwars",
    "name": "GetStarwars_planet"
  },
  {
    "type": "get",
    "url": "/starwars_Species",
    "title": "Get infos about a specie",
    "group": "Starwars",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of a specie (between 1 and 30).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   [{\n\"name\": \"Human\",\n\t\"classification\": \"mammal\",\n\t\"designation\": \"sentient\",\n\t\"average_height\": \"180\",\n\t\"skin_colors\": \"caucasian, black, asian, hispanic\",\n\t\"hair_colors\": \"blonde, brown, black, red\",\n\t\"eye_colors\": \"brown, blue, green, hazel, grey, amber\",\n\t\"average_lifespan\": \"120\",\n\t\"homeworld\": \"https://swapi.co/api/planets/9/\",\n\t\"language\": \"Galactic Basic\",\n\t\"people\": [\n\t\t\"https://swapi.co/api/people/1/\",\n\t\t\"https://swapi.co/api/people/4/\",\n\t\t\"https://swapi.co/api/people/5/\",\n\t\t\"https://swapi.co/api/people/6/\",\n\t\t\"https://swapi.co/api/people/7/\",\n\t\t\"https://swapi.co/api/people/9/\",\n\t\t\"https://swapi.co/api/people/10/\",\n\t\t\"https://swapi.co/api/people/11/\",\n\t\t\"https://swapi.co/api/people/12/\",\n\t\t\"https://swapi.co/api/people/14/\",\n\t\t\"https://swapi.co/api/people/18/\",\n\t\t\"https://swapi.co/api/people/19/\",\n\t\t\"https://swapi.co/api/people/21/\",\n\t\t\"https://swapi.co/api/people/22/\",\n\t\t\"https://swapi.co/api/people/25/\",\n\t\t\"https://swapi.co/api/people/26/\",\n\t\t\"https://swapi.co/api/people/28/\",\n\t\t\"https://swapi.co/api/people/29/\",\n\t\t\"https://swapi.co/api/people/32/\",\n\t\t\"https://swapi.co/api/people/34/\",\n\t\t\"https://swapi.co/api/people/43/\",\n\t\t\"https://swapi.co/api/people/51/\",\n\t\t\"https://swapi.co/api/people/60/\",\n\t\t\"https://swapi.co/api/people/61/\",\n\t\t\"https://swapi.co/api/people/62/\",\n\t\t\"https://swapi.co/api/people/66/\",\n\t\t\"https://swapi.co/api/people/67/\",\n\t\t\"https://swapi.co/api/people/68/\",\n\t\t\"https://swapi.co/api/people/69/\",\n\t\t\"https://swapi.co/api/people/74/\",\n\t\t\"https://swapi.co/api/people/81/\",\n\t\t\"https://swapi.co/api/people/84/\",\n\t\t\"https://swapi.co/api/people/85/\",\n\t\t\"https://swapi.co/api/people/86/\",\n\t\t\"https://swapi.co/api/people/35/\"\n\t],\n\t\"films\": [\n\t\t\"https://swapi.co/api/films/2/\",\n\t\t\"https://swapi.co/api/films/7/\",\n\t\t\"https://swapi.co/api/films/5/\",\n\t\t\"https://swapi.co/api/films/4/\",\n\t\t\"https://swapi.co/api/films/6/\",\n\t\t\"https://swapi.co/api/films/3/\",\n\t\t\"https://swapi.co/api/films/1/\"\n\t],\n\t\"created\": \"2014-12-10T13:52:11.567000Z\",\n\t\"edited\": \"2015-04-17T06:59:55.850671Z\",\n\t\"url\": \"https://swapi.co/api/species/1/\"\n   }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Get Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Starwars",
    "name": "GetStarwars_species"
  },
  {
    "type": "get",
    "url": "/starwars_Starships",
    "title": "Get infos about a star ship",
    "group": "Starwars",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of a star ship (between 1 and 15)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   [{\n\"name\": \"Death Star\",\n\t\"model\": \"DS-1 Orbital Battle Station\",\n\t\"manufacturer\": \"Imperial Department of Military Research, Sienar Fleet Systems\",\n\t\"cost_in_credits\": \"1000000000000\",\n\t\"length\": \"120000\",\n\t\"max_atmosphering_speed\": \"n/a\",\n\t\"crew\": \"342953\",\n\t\"passengers\": \"843342\",\n\t\"cargo_capacity\": \"1000000000000\",\n\t\"consumables\": \"3 years\",\n\t\"hyperdrive_rating\": \"4.0\",\n\t\"MGLT\": \"10\",\n\t\"starship_class\": \"Deep Space Mobile Battlestation\",\n\t\"pilots\": [],\n\t\"films\": [\n\t\t\"https://swapi.co/api/films/1/\"\n\t],\n\t\"created\": \"2014-12-10T16:36:50.509000Z\",\n\t\"edited\": \"2014-12-22T17:35:44.452589Z\",\n\t\"url\": \"https://swapi.co/api/starships/9/\"\n   }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Get Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Starwars",
    "name": "GetStarwars_starships"
  },
  {
    "type": "get",
    "url": "/trello/Boards",
    "title": "Get boards of Maxime C.",
    "group": "Trello",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n     \"name\": \"Area\",\n     \"desc\": \"\",\n     \"descData\": null,\n     \"closed\": false,\n     \"idOrganization\": null,\n     \"idEnterprise\": null,\n     \"limits\": null,\n     \"pinned\": null,\n     \"shortLink\": \"qTL2HhRn\",\n     \"powerUps\": [],\n     \"dateLastActivity\": \"2020-02-20T16:30:31.315Z\",\n     \"idTags\": [],\n     \"datePluginDisable\": null,\n     \"creationMethod\": null,\n     \"ixUpdate\": null,\n     \"enterpriseOwned\": false,\n     \"idBoardSource\": null,\n     \"id\": \"5e13053a1dd96b6ba2a8586c\",\n     \"starred\": false,\n     \"url\": \"https://trello.com/b/qTL2HhRn/area\",\n     \"prefs\": {\n         \"permissionLevel\": \"private\",\n         \"hideVotes\": false,\n         \"voting\": \"disabled\",\n         \"comments\": \"members\",\n         \"invitations\": \"members\",\n         \"selfJoin\": false,\n         \"cardCovers\": true,\n         \"isTemplate\": false,\n         \"cardAging\": \"regular\",\n         \"calendarFeedEnabled\": false,\n         \"background\": \"5c1216ec145cd92a9982c763\",\n         \"backgroundImage\": \"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2560x1707/5e7194954ab29302e7b06ff0e16ed47d/photo-1542779283-429940ce8336\",\n         \"backgroundImageScaled\": [\n             {\n                 \"width\": 140,\n                 \"height\": 93,\n                 \"url\": \"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/140x93/c3b3405cfa3055a1f67d306d52eb5007/photo-1542779283-429940ce8336.jpg\"\n             },\n             {\n                 \"width\": 256,\n                 \"height\": 171,\n                 \"url\": \"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/256x171/c3b3405cfa3055a1f67d306d52eb5007/photo-1542779283-429940ce8336.jpg\"\n             },\n             {\n                 \"width\": 480,\n                 \"height\": 320,\n                 \"url\": \"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/c3b3405cfa3055a1f67d306d52eb5007/photo-1542779283-429940ce8336.jpg\"\n             },\n             {\n                 \"width\": 960,\n                 \"height\": 640,\n                 \"url\": \"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/960x640/c3b3405cfa3055a1f67d306d52eb5007/photo-1542779283-429940ce8336.jpg\"\n             },\n             {\n                 \"width\": 1024,\n                 \"height\": 683,\n                 \"url\": \"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1024x683/c3b3405cfa3055a1f67d306d52eb5007/photo-1542779283-429940ce8336.jpg\"\n             },\n             {\n                 \"width\": 2048,\n                 \"height\": 1366,\n                 \"url\": \"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2048x1366/c3b3405cfa3055a1f67d306d52eb5007/photo-1542779283-429940ce8336.jpg\"\n             },\n             {\n                 \"width\": 1280,\n                 \"height\": 854,\n                 \"url\": \"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1280x854/c3b3405cfa3055a1f67d306d52eb5007/photo-1542779283-429940ce8336.jpg\"\n             },\n             {\n                 \"width\": 1920,\n                 \"height\": 1280,\n                 \"url\": \"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1920x1280/c3b3405cfa3055a1f67d306d52eb5007/photo-1542779283-429940ce8336.jpg\"\n             },\n             {\n                 \"width\": 2400,\n                 \"height\": 1600,\n                 \"url\": \"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/c3b3405cfa3055a1f67d306d52eb5007/photo-1542779283-429940ce8336.jpg\"\n             },\n             {\n                 \"width\": 2560,\n                 \"height\": 1707,\n                 \"url\": \"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2560x1707/5e7194954ab29302e7b06ff0e16ed47d/photo-1542779283-429940ce8336\"\n             }\n         ],\n         \"backgroundTile\": false,\n         \"backgroundBrightness\": \"dark\",\n         \"backgroundBottomColor\": \"#7e8b89\",\n         \"backgroundTopColor\": \"#041313\",\n         \"canBePublic\": true,\n         \"canBeEnterprise\": true,\n         \"canBeOrg\": true,\n         \"canBePrivate\": true,\n         \"canInvite\": true\n     },\n     \"subscribed\": false,\n     \"labelNames\": {\n         \"green\": \"\",\n         \"yellow\": \"\",\n         \"orange\": \"\",\n         \"red\": \"\",\n         \"purple\": \"\",\n         \"blue\": \"\",\n         \"sky\": \"\",\n         \"lime\": \"\",\n         \"pink\": \"\",\n         \"black\": \"\"\n     },\n     \"dateLastView\": \"2020-02-15T20:40:30.165Z\",\n     \"shortUrl\": \"https://trello.com/b/qTL2HhRn\",\n     \"templateGallery\": null,\n     \"memberships\": [\n         {\n             \"id\": \"5e13053a1dd96b6ba2a8586d\",\n             \"idMember\": \"5a9422302ce747ed6be54073\",\n             \"memberType\": \"admin\",\n             \"unconfirmed\": false,\n             \"deactivated\": false\n         },\n         {\n             \"id\": \"5e3b1f64ccdd32507c8cfb7e\",\n             \"idMember\": \"5c4f0dd4618fed881337b5fd\",\n             \"memberType\": \"normal\",\n             \"unconfirmed\": false,\n             \"deactivated\": false\n         },\n         {\n             \"id\": \"5e3b1fa5791f92050f5dafb9\",\n             \"idMember\": \"5a12ae92fb143c65385e6d36\",\n             \"memberType\": \"normal\",\n             \"unconfirmed\": false,\n             \"deactivated\": false\n         },\n         {\n             \"id\": \"5e3d37b63fbbef7859cbe500\",\n             \"idMember\": \"5cdad97be7fa5c4969df3370\",\n             \"memberType\": \"normal\",\n             \"unconfirmed\": false,\n             \"deactivated\": false\n         }\n     ]\n },\n {\n     \"name\": \"Symbiose\",\n     \"desc\": \"\",\n     \"descData\": null,\n     \"closed\": false,\n     \"idOrganization\": null,\n     \"idEnterprise\": null,\n     \"limits\": null,\n     \"pinned\": null,\n     \"shortLink\": \"oNE0WuFY\",\n     \"powerUps\": [],\n     \"dateLastActivity\": \"2020-01-08T14:20:59.733Z\",\n     \"idTags\": [],\n     \"datePluginDisable\": null,\n     \"creationMethod\": null,\n     \"ixUpdate\": null,\n     \"enterpriseOwned\": false,\n     \"idBoardSource\": null,\n     \"id\": \"5d7786a9ad12f03ac9de0bab\",\n     \"starred\": false,\n     \"url\": \"https://trello.com/b/oNE0WuFY/symbiose\",\n     \"prefs\": {\n         \"permissionLevel\": \"private\",\n         \"hideVotes\": false,\n         \"voting\": \"disabled\",\n         \"comments\": \"members\",\n         \"invitations\": \"members\",\n         \"selfJoin\": false,\n         \"cardCovers\": true,\n         \"isTemplate\": false,\n         \"cardAging\": \"regular\",\n         \"calendarFeedEnabled\": false,\n         \"background\": \"5c05e9e2d733048eb421b482\",\n         \"backgroundImage\": \"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2560x1506/a826bbbb9a0598fc07a05fe4d5a519f5/photo-1450778869180-41d0601e046e\",\n         \"backgroundImageScaled\": [\n             {\n                 \"width\": 140,\n                 \"height\": 82,\n                 \"url\": \"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/140x82/6d721d4838eaeeaa5c742e7c8a04c8b7/photo-1450778869180-41d0601e046e.jpg\"\n             },\n             {\n                 \"width\": 256,\n                 \"height\": 151,\n                 \"url\": \"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/256x151/c11e07b0795675e79c40c443b9688f4f/photo-1450778869180-41d0601e046e.jpg\"\n             },\n             {\n                 \"width\": 480,\n                 \"height\": 282,\n                 \"url\": \"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x282/95d7497f649c9b1eb8df9527aa4ec3cf/photo-1450778869180-41d0601e046e.jpg\"\n             },\n             {\n                 \"width\": 960,\n                 \"height\": 565,\n                 \"url\": \"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/960x565/fd804c027e22946ac029d1f771ebccf5/photo-1450778869180-41d0601e046e.jpg\"\n             },\n             {\n                 \"width\": 1024,\n                 \"height\": 602,\n                 \"url\": \"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1024x602/9b90c3c76f5cc357865edf50afdc30b6/photo-1450778869180-41d0601e046e.jpg\"\n             },\n             {\n                 \"width\": 2048,\n                 \"height\": 1205,\n                 \"url\": \"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2048x1205/ccd00396885e9f4e7119473a0abe03c9/photo-1450778869180-41d0601e046e.jpg\"\n             },\n             {\n                 \"width\": 1280,\n                 \"height\": 753,\n                 \"url\": \"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1280x753/b26fb8a7a4fab76ccb55e12eb0281e75/photo-1450778869180-41d0601e046e.jpg\"\n             },\n             {\n                 \"width\": 1920,\n                 \"height\": 1130,\n                 \"url\": \"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1920x1130/7d506c687ac9bbb18c12610a33463eba/photo-1450778869180-41d0601e046e.jpg\"\n             },\n             {\n                 \"width\": 2560,\n                 \"height\": 1506,\n                 \"url\": \"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2560x1506/a826bbbb9a0598fc07a05fe4d5a519f5/photo-1450778869180-41d0601e046e\"\n             }\n         ],\n         \"backgroundTile\": false,\n         \"backgroundBrightness\": \"dark\",\n         \"backgroundBottomColor\": \"#22312a\",\n         \"backgroundTopColor\": \"#504437\",\n         \"canBePublic\": true,\n         \"canBeEnterprise\": true,\n         \"canBeOrg\": true,\n         \"canBePrivate\": true,\n         \"canInvite\": true\n     },\n     \"subscribed\": false,\n     \"labelNames\": {\n         \"green\": \"DEPLOYED\",\n         \"yellow\": \"URGENT\",\n         \"orange\": \"\",\n         \"red\": \"BROKEN\",\n         \"purple\": \"API\",\n         \"blue\": \"Front\",\n         \"sky\": \"Back\",\n         \"lime\": \"\",\n         \"pink\": \"MVP\",\n         \"black\": \"\"\n     },\n     \"dateLastView\": \"2019-12-07T14:55:39.325Z\",\n     \"shortUrl\": \"https://trello.com/b/oNE0WuFY\",\n     \"templateGallery\": null,\n     \"memberships\": [\n         {\n             \"id\": \"5d7786a9ad12f03ac9de0bac\",\n             \"idMember\": \"5bc616c4a2754a5d986f46ab\",\n             \"memberType\": \"admin\",\n             \"unconfirmed\": false,\n             \"deactivated\": false\n         },\n         {\n             \"id\": \"5d7f7a236e632840bea3ba0d\",\n             \"idMember\": \"5ab4e67bb810fce9f0dbaf70\",\n             \"memberType\": \"normal\",\n             \"unconfirmed\": false,\n             \"deactivated\": false\n         },\n         {\n             \"id\": \"5d7f7a231a7e24419dd61122\",\n             \"idMember\": \"5a12ae92fb143c65385e6d36\",\n             \"memberType\": \"normal\",\n             \"unconfirmed\": false,\n             \"deactivated\": false\n         },\n         {\n             \"id\": \"5d7f7a70fc85b61e7481d912\",\n             \"idMember\": \"5c4f0dd4618fed881337b5fd\",\n             \"memberType\": \"normal\",\n             \"unconfirmed\": false,\n             \"deactivated\": false\n         },\n         {\n             \"id\": \"5daf541126439010b075132b\",\n             \"idMember\": \"5a9422302ce747ed6be54073\",\n             \"memberType\": \"normal\",\n             \"unconfirmed\": false,\n             \"deactivated\": false\n         },\n         {\n             \"id\": \"5daf5411088f244d8f845730\",\n             \"idMember\": \"5cdad97be7fa5c4969df3370\",\n             \"memberType\": \"normal\",\n             \"unconfirmed\": false,\n             \"deactivated\": false\n         },\n         {\n             \"id\": \"5daf54124ab6728834afe656\",\n             \"idMember\": \"5c7d2c584620e64687bd3ab6\",\n             \"memberType\": \"normal\",\n             \"unconfirmed\": false,\n             \"deactivated\": false\n         },\n         {\n             \"id\": \"5dd72978ee8a780f8b3cad29\",\n             \"idMember\": \"5cd473df598aaa759616e6e8\",\n             \"memberType\": \"normal\",\n             \"unconfirmed\": false,\n             \"deactivated\": false\n         }\n     ]\n },\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Get Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Trello",
    "name": "GetTrelloBoards"
  },
  {
    "type": "get",
    "url": "/trello/CreateCheckItems",
    "title": "Create checklist on 1st card of board",
    "group": "Trello",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n [{\n    \"idChecklist\": \"5e3f102fe6049618ae03753f\",\n    \"state\": \"incomplete\",\n    \"idMember\": null,\n    \"id\": \"5e5c0a48a3880b3e9b24684e\",\n    \"name\": \"monferno\",\n    \"nameData\": null,\n    \"pos\": 245760,\n    \"due\": null\n},\n{\n    \"idChecklist\": \"5e3f102fe6049618ae03753f\",\n    \"state\": \"incomplete\",\n    \"idMember\": null,\n    \"id\": \"5e5c0dd6eae8381fe5e4a664\",\n    \"name\": \"grimer\",\n    \"nameData\": null,\n    \"pos\": 262144,\n    \"due\": null\n},\n{\n    \"idChecklist\": \"5e3f102fe6049618ae03753f\",\n    \"state\": \"incomplete\",\n    \"idMember\": null,\n    \"id\": \"5e5d4e3a3a86ff808be0a83a\",\n    \"name\": \"slaking\",\n    \"nameData\": null,\n    \"pos\": 573440,\n    \"due\": null\n},\n{\n    \"idChecklist\": \"5e3f102fe6049618ae03753f\",\n    \"state\": \"incomplete\",\n    \"idMember\": null,\n    \"id\": \"5e5d4e4dee8bfd389f4401f7\",\n    \"name\": \"exploud\",\n    \"nameData\": null,\n    \"pos\": 589824,\n    \"due\": null\n},\n{\n    \"idChecklist\": \"5e3f102fe6049618ae03753f\",\n    \"state\": \"incomplete\",\n    \"idMember\": null,\n    \"id\": \"5e6673e6eff601633a96bb5c\",\n    \"name\": \"manaphy\",\n    \"nameData\": null,\n    \"pos\": 704512,\n    \"due\": null\n }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Get Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Trello",
    "name": "GetTrelloCreatecheckitems"
  },
  {
    "type": "post",
    "url": "/trello/AddCart",
    "title": "Create cart on 1st list of board",
    "group": "Trello",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   [{\n\"id\":\"5e6903599d67db2fbd21ae29\"\n  \"badges\":{\n    \"attachmentsByType\":{\n      \"trello\":{\n        \"board\":0\n        \"card\":0\n      }\n    }\n    \"location\":false\n    \"votes\":0\n    \"viewingMemberVoted\":false\n    \"subscribed\":false\n    \"fogbugz\":\"\"\n    \"checkItems\":0\n    \"checkItemsChecked\":0\n    \"checkItemsEarliestDue\":NULL\n    \"comments\":0\n    \"attachments\":0\n    \"description\":false\n    \"due\":NULL\n    \"dueComplete\":false\n  }\n  \"checkItemStates\":[\n  ]\n  \"closed\":false\n  \"dueComplete\":false\n  \"dateLastActivity\":\"2020-03-11T15:27:21.054Z\"\n  \"desc\":\"\"\n  \"descData\":{\n    \"emoji\":{\n    }\n  }\n  \"due\":NULL\n  \"dueReminder\":NULL\n  \"email\":NULL\n  \"idBoard\":\"5a12b093e0048549cccd943d\"\n  \"idChecklists\":[\n  ]\n  \"attachments\":[\n  ]\n  \"idList\":\"5e68feff1333c87a5b04c832\"\n  \"idMembers\":[\n  ]\n  \"idMembersVoted\":[\n  ]\n  \"idShort\":5\n  \"idAttachmentCover\":NULL\n  \"labels\":[\n  ]\n  \"idLabels\":[\n  ]\n  \"manualCoverAttachment\":false\n  \"name\":\"test\"\n  \"pos\":16384\n  \"shortLink\":\"5adVRkGw\"\n  \"shortUrl\":\"https://trello.com/c/5adVRkGw\"\n  \"subscribed\":false\n  \"stickers\":[\n  ]\n  \"url\":\"https://trello.com/c/5adVRkGw/5-test\"\n  \"cover\":{\n    \"idAttachment\":NULL\n    \"color\":NULL\n    \"idUploadedBackground\":NULL\n    \"size\":\"normal\"\n    \"brightness\":\"light\"\n  }\n  \"isTemplate\":false\n  \"limits\":{\n  }\n   }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Get Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Trello",
    "name": "PostTrelloAddcart"
  },
  {
    "type": "post",
    "url": "/trello/AddCartComment",
    "title": "Create new comment on 1st card of 1st board",
    "group": "Trello",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Content of the comment to post.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   [{\n\"id\":\"5e6902820dfe2a45450b8fba\"\n  \"idMemberCreator\":\"5a12ae92fb143c65385e6d36\"\n  \"data\":{\n    \"text\":\"test 1 2 1 2\"\n    \"textData\":{\n      \"emoji\":{\n      }\n    }\n    \"card\":{\n      \"id\":\"5e68fa99df34f171e5832a1b\"\n      \"name\":\"yeeees\"\n      \"idShort\":4\n      \"shortLink\":\"Z30Gkdvb\"\n    }\n    \"board\":{\n      \"id\":\"5a12b093e0048549cccd943d\"\n      \"name\":\"Epitech\"\n      \"shortLink\":\"yvj0I4HF\"\n    }\n    \"list\":{\n      \"id\":\"5e68fa85e4c571623e3ff6a6\"\n      \"name\":\"test api\"\n    }\n  }\n  \"type\":\"commentCard\"\n  \"date\":\"2020-03-11T15:23:46.785Z\"\n  \"limits\":{\n    \"reactions\":{\n      \"perAction\":{\n        \"status\":\"ok\"\n        \"disableAt\":1000\n        \"warnAt\":900\n      }\n      \"uniquePerAction\":{\n        \"status\":\"ok\"\n        \"disableAt\":17\n        \"warnAt\":16\n      }\n    }\n  }\n  \"display\":{\n  \"translationKey\":\"action_comment_on_card\"\n  \"entities\":{\n    \"contextOn\":{\n      \"type\":\"translatable\"\n      \"translationKey\":\"action_on\"\n      \"hideIfContext\":true\n      \"idContext\":\"5e68fa99df34f171e5832a1b\"\n    }\n    \"card\":{\n      \"type\":\"card\"\n      \"hideIfContext\":true\n      \"id\":\"5e68fa99df34f171e5832a1b\"\n      \"shortLink\":\"Z30Gkdvb\"\n      \"text\":\"yeeees\"\n    }\n    \"comment\":{\n      \"type\":\"comment\"\n      \"text\":\"test 1 2 1 2\"\n    }\n    \"memberCreator\":{\n      \"type\":\"member\"\n      \"id\":\"5a12ae92fb143c65385e6d36\"\n      \"username\":\"alicelanneau\"\n      \"text\":\"Alice Lanneau\"\n      }\n    }\n  }\n  \"entities\":[\n  0:{\n    \"type\":\"member\"\n    \"id\":\"5a12ae92fb143c65385e6d36\"\n    \"username\":\"alicelanneau\"\n    \"text\":\"Alice Lanneau\"\n  }\n  1:{\n    \"type\":\"text\"\n    \"text\":\"on\"\n    \"hideIfContext\":true\n    \"idContext\":\"5e68fa99df34f171e5832a1b\"\n  }\n  2:{\n    \"type\":\"card\"\n    \"hideIfContext\":true\n    \"id\":\"5e68fa99df34f171e5832a1b\"\n    \"shortLink\":\"Z30Gkdvb\"\n    \"text\":\"yeeees\"\n  }\n  3:{\n    \"type\":\"comment\"\n    \"text\":\"test 1 2 1 2\"\n  }\n  ]\n  \"memberCreator\":{\n    \"id\":\"5a12ae92fb143c65385e6d36\"\n    \"activityBlocked\":false\n    \"avatarHash\":\"3d3a269a0cf92575c3465834b911e7a1\"\n    \"avatarUrl\":\"https://trello-members.s3.amazonaws.com/5a12ae92fb143c65385e6d36/3d3a269a0cf92575c3465834b911e7a1\"\n    \"fullName\":\"Alice Lanneau\"\n    \"idMemberReferrer\":NULL\n    \"initials\":\"AL\"\n    \"nonPublic\":{}\n    \"nonPublicAvailable\":false\n    \"username\":\"alicelanneau\"\n}\n   }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Get Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Trello",
    "name": "PostTrelloAddcartcomment"
  },
  {
    "type": "post",
    "url": "/trello/AddList",
    "title": "Create new list",
    "group": "Trello",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   [{\n\"id\":\"5e68feff1333c87a5b04c832\"\n      \"name\":\"test\"\n      \"closed\":false\n      \"idBoard\":\"5a12b093e0048549cccd943d\"\n      \"pos\":32767.5\n      \"limits\":{\n      }\n   }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Get Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Trello",
    "name": "PostTrelloAddlist"
  },
  {
    "type": "get",
    "url": "/Weather",
    "title": "Get weather infos",
    "group": "Weather",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>Name of a city with a capital letter. (ex: London)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "country",
            "description": "<p>Name of the country where the city is, in abreviation. (ex:uk)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   [{\n     {\n       \"coord\": {\n       \"lon\": -0.13,\n       \"lat\": 51.51\n     },\n     \"weather\": [\n       {\n         \"id\": 804,\n         \"main\": \"Clouds\",\n         \"description\": \"couvert\",\n         \"icon\": \"04d\"\n       }],\n \"base\": \"stations\",\n \"main\": {\n   \"temp\": 13.85,\n   \"feels_like\": 9.09,\n   \"temp_min\": 11.67,\n   \"temp_max\": 15.56,\n   \"pressure\": 1003,\n   \"humidity\": 82\n },\n \"visibility\": 10000,\n \"wind\": {\n   \"speed\": 7.2,\n   \"deg\": 250\n },\n \"clouds\": {\n   \"all\": 90\n },\n \"dt\": 1583845841,\n \"sys\": {\n   \"type\": 1,\n   \"id\": 1414,\n   \"country\": \"GB\",\n   \"sunrise\": 1583821515,\n   \"sunset\": 1583862983\n },\n \"timezone\": 0,\n \"id\": 2643743,\n \"name\": \"London\",\n \"cod\": 200\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Get Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Weather",
    "name": "GetWeather"
  }
] });
