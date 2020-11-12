const express = require('express');
const app = express();
const axios = require('axios');
var cors = require('cors');
const port = process.env.PORT || 3000;
var request = require('request');
var bodyParser = require('body-parser');
const webhook = require('discord-webhook-node');
const { Webhook, MessageBuilder } = require('discord-webhook-node');
const delay = require('delay');
var move = null;
const fs = require('fs')
const route = express.Router();
require('./about.js')(route)
app.use(cors())
app.set('view-engine', 'ejs')
app.use(bodyParser.json())
app.use(route)
app.use('/docs', express.static('./public/apidoc'));
app.use(bodyParser.urlencoded({
  extended: true
}));
var token_trello = null

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
app.listen(port, () => {
  console.log('Server is up and running on port', port);

  // app.get('/docs', function(req,res) {
  //   request(options, function (error, response, body) {
  //     if (error) throw new Error(error);
  //     // console.log(
  //       //    'Response: ' + response.statusCode + ' ' + response.statusMessage
  //       // );
  //     });
  //   })


  app.post('/add/trello', function (req, res) {
    // console.log("stp soit la" + JSON.stringify(req.query))
    // console.log(req.body.token)
    // console.log(req)
    if (req.body.token != null)
      token_trello = req.body.token
    console.log("token :" + token_trello)
    res.status(200).send("OK")
  })


  app.get('/registered', function (req, res) {
    res.status(200).send({registered : (token_trello != null)})
  })

  /**
 * @api {get} /Weather Get weather infos
 * @apiGroup Weather
 * @apiParam {string} city Name of a city with a capital letter. (ex: London)
 * @apiParam {string} country Name of the country where the city is, in abreviation. (ex:uk)
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      {
 *        "coord": {
 *        "lon": -0.13,
 *        "lat": 51.51
 *      },
 *      "weather": [
 *        {
 *          "id": 804,
 *          "main": "Clouds",
 *          "description": "couvert",
 *          "icon": "04d"
 *        }],
 *  "base": "stations",
 *  "main": {
 *    "temp": 13.85,
 *    "feels_like": 9.09,
 *    "temp_min": 11.67,
 *    "temp_max": 15.56,
 *    "pressure": 1003,
 *    "humidity": 82
 *  },
 *  "visibility": 10000,
 *  "wind": {
 *    "speed": 7.2,
 *    "deg": 250
 *  },
 *  "clouds": {
 *    "all": 90
 *  },
 *  "dt": 1583845841,
 *  "sys": {
 *    "type": 1,
 *    "id": 1414,
 *    "country": "GB",
 *    "sunrise": 1583821515,
 *    "sunset": 1583862983
 *  },
 *  "timezone": 0,
 *  "id": 2643743,
 *  "name": "London",
 *  "cod": 200
 * }]
 * @apiErrorExample {json} Get Error
 *    HTTP/1.1 500 Internal Server Error
 */
  app.get('/Weather', function (req, res) {
    let City = req.query.city;
    let Country = req.query.country
    console.log(City)
    var options = {
      method: 'GET',
      url: 'https://api.openweathermap.org/data/2.5/weather?q=' + City + ',' + Country + '&lang=fr&units=metric&appid=c6c20174beb98a67e203bee492b16780',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      // console.log(
      //    'Response: ' + response.statusCode + ' ' + response.statusMessage
      // );
      // console.log(body);
      res.setHeader('Content-Type', 'application/json');
      res.send(body);
    });
  })

  /**
 * @api {get} /client.apk Download apk
 * @apiGroup Perso
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 * @apiErrorExample {json} Get Error
 *    HTTP/1.1 500 Internal Server Error
 */
  app.get('/client.apk', function (req, res) {
    const file = "./app-debug.apk";
    res.download(file);
  });

  /**
 * @api {get} /trello/CreateCheckItems Create checklist on 1st card of board
 * @apiGroup Trello
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
      "idChecklist": "5e3f102fe6049618ae03753f",
      "state": "incomplete",
      "idMember": null,
      "id": "5e5c0a48a3880b3e9b24684e",
      "name": "monferno",
      "nameData": null,
      "pos": 245760,
      "due": null
  },
  {
      "idChecklist": "5e3f102fe6049618ae03753f",
      "state": "incomplete",
      "idMember": null,
      "id": "5e5c0dd6eae8381fe5e4a664",
      "name": "grimer",
      "nameData": null,
      "pos": 262144,
      "due": null
  },
  {
      "idChecklist": "5e3f102fe6049618ae03753f",
      "state": "incomplete",
      "idMember": null,
      "id": "5e5d4e3a3a86ff808be0a83a",
      "name": "slaking",
      "nameData": null,
      "pos": 573440,
      "due": null
  },
  {
      "idChecklist": "5e3f102fe6049618ae03753f",
      "state": "incomplete",
      "idMember": null,
      "id": "5e5d4e4dee8bfd389f4401f7",
      "name": "exploud",
      "nameData": null,
      "pos": 589824,
      "due": null
  },
  {
      "idChecklist": "5e3f102fe6049618ae03753f",
      "state": "incomplete",
      "idMember": null,
      "id": "5e6673e6eff601633a96bb5c",
      "name": "manaphy",
      "nameData": null,
      "pos": 704512,
      "due": null
 *    }]
 * @apiErrorExample {json} Get Error
 *    HTTP/1.1 500 Internal Server Error
 */
  app.get('/trello/CreateCheckItems', function (req, res) {
    let checkitem = req.query.checkitem;
    var options = {
      method: 'POST',
      url: 'https://api.trello.com/1/checklists/5e3f102fe6049618ae03753f/checkItems',
      qs: {
        name: checkitem,
        pos: 'bottom',
        checked: 'false',
        key: '7c43d9375c9d0eea9ed807cf10f0c588',
        //token: 'e4395ce571d094d860753e7fc31c6ac2994f8bbc5f9767825394b182c2639733'
        token: token_trello
      }
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      // console.log(body);
      res.setHeader('Content-Type', 'application/json');
      res.send(body);
    });
  })

  app.post('/register', function (req, res) {
    res.send('created');
    let donnees = JSON.stringify(req.body)
    fs.appendFileSync('user.json', donnees + '\n')
  });

  app.get('/login', function (req, res) {
    const { email, password, } = req.query;
    console.log(email + password);
    let file = fs.readFileSync('user.json')
    if (file.includes(email) === true
      && file.includes(password) === true)
      res.send("connected");
    else
      res.send("bad passeword or email");

  });

  /**
 * @api {post} /trello/AddCart Create cart on 1st list of board
 * @apiGroup Trello
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 * "id":"5e6903599d67db2fbd21ae29"
  "badges":{
    "attachmentsByType":{
      "trello":{
        "board":0
        "card":0
      }
    }
    "location":false
    "votes":0
    "viewingMemberVoted":false
    "subscribed":false
    "fogbugz":""
    "checkItems":0
    "checkItemsChecked":0
    "checkItemsEarliestDue":NULL
    "comments":0
    "attachments":0
    "description":false
    "due":NULL
    "dueComplete":false
  }
  "checkItemStates":[
  ]
  "closed":false
  "dueComplete":false
  "dateLastActivity":"2020-03-11T15:27:21.054Z"
  "desc":""
  "descData":{
    "emoji":{
    }
  }
  "due":NULL
  "dueReminder":NULL
  "email":NULL
  "idBoard":"5a12b093e0048549cccd943d"
  "idChecklists":[
  ]
  "attachments":[
  ]
  "idList":"5e68feff1333c87a5b04c832"
  "idMembers":[
  ]
  "idMembersVoted":[
  ]
  "idShort":5
  "idAttachmentCover":NULL
  "labels":[
  ]
  "idLabels":[
  ]
  "manualCoverAttachment":false
  "name":"test"
  "pos":16384
  "shortLink":"5adVRkGw"
  "shortUrl":"https://trello.com/c/5adVRkGw"
  "subscribed":false
  "stickers":[
  ]
  "url":"https://trello.com/c/5adVRkGw/5-test"
  "cover":{
    "idAttachment":NULL
    "color":NULL
    "idUploadedBackground":NULL
    "size":"normal"
    "brightness":"light"
  }
  "isTemplate":false
  "limits":{
  }
 *    }]
 * @apiErrorExample {json} Get Error
 *    HTTP/1.1 500 Internal Server Error
 */
  app.get('/trello/AddCart', function (req, res) {
    let pokedex = req.query.pokedex;
    var options = {
      method: 'POST',
      url: 'https://api.trello.com/1/cards',
      qs: {
        name: pokedex,
        idList: '5e57c189e12dc760595bb9b0',
        keepFromSource: 'all',
        key: '7c43d9375c9d0eea9ed807cf10f0c588',
        //token: 'e4395ce571d094d860753e7fc31c6ac2994f8bbc5f9767825394b182c2639733'
        token: token_trello
      }
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      // console.log(body);
      res.setHeader('Content-Type', 'application/json');
      res.send(body);
    });
  })

  /**
 * @api {post} /trello/AddCartComment Create new comment on 1st card of 1st board
 * @apiGroup Trello
 * @apiParam {string} comment Content of the comment to post.
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 * "id":"5e6902820dfe2a45450b8fba"
  "idMemberCreator":"5a12ae92fb143c65385e6d36"
  "data":{
    "text":"test 1 2 1 2"
    "textData":{
      "emoji":{
      }
    }
    "card":{
      "id":"5e68fa99df34f171e5832a1b"
      "name":"yeeees"
      "idShort":4
      "shortLink":"Z30Gkdvb"
    }
    "board":{
      "id":"5a12b093e0048549cccd943d"
      "name":"Epitech"
      "shortLink":"yvj0I4HF"
    }
    "list":{
      "id":"5e68fa85e4c571623e3ff6a6"
      "name":"test api"
    }
  }
  "type":"commentCard"
  "date":"2020-03-11T15:23:46.785Z"
  "limits":{
    "reactions":{
      "perAction":{
        "status":"ok"
        "disableAt":1000
        "warnAt":900
      }
      "uniquePerAction":{
        "status":"ok"
        "disableAt":17
        "warnAt":16
      }
    }
  }
  "display":{
  "translationKey":"action_comment_on_card"
  "entities":{
    "contextOn":{
      "type":"translatable"
      "translationKey":"action_on"
      "hideIfContext":true
      "idContext":"5e68fa99df34f171e5832a1b"
    }
    "card":{
      "type":"card"
      "hideIfContext":true
      "id":"5e68fa99df34f171e5832a1b"
      "shortLink":"Z30Gkdvb"
      "text":"yeeees"
    }
    "comment":{
      "type":"comment"
      "text":"test 1 2 1 2"
    }
    "memberCreator":{
      "type":"member"
      "id":"5a12ae92fb143c65385e6d36"
      "username":"alicelanneau"
      "text":"Alice Lanneau"
      }
    }
  }
  "entities":[
  0:{
    "type":"member"
    "id":"5a12ae92fb143c65385e6d36"
    "username":"alicelanneau"
    "text":"Alice Lanneau"
  }
  1:{
    "type":"text"
    "text":"on"
    "hideIfContext":true
    "idContext":"5e68fa99df34f171e5832a1b"
  }
  2:{
    "type":"card"
    "hideIfContext":true
    "id":"5e68fa99df34f171e5832a1b"
    "shortLink":"Z30Gkdvb"
    "text":"yeeees"
  }
  3:{
    "type":"comment"
    "text":"test 1 2 1 2"
  }
  ]
  "memberCreator":{
    "id":"5a12ae92fb143c65385e6d36"
    "activityBlocked":false
    "avatarHash":"3d3a269a0cf92575c3465834b911e7a1"
    "avatarUrl":"https://trello-members.s3.amazonaws.com/5a12ae92fb143c65385e6d36/3d3a269a0cf92575c3465834b911e7a1"
    "fullName":"Alice Lanneau"
    "idMemberReferrer":NULL
    "initials":"AL"
    "nonPublic":{}
    "nonPublicAvailable":false
    "username":"alicelanneau"
}
 *    }]
 * @apiErrorExample {json} Get Error
 *    HTTP/1.1 500 Internal Server Error
 */
  app.get('/trello/AddCartComment', function (req, res) {
    let Comment = req.query.comment;

    var options = {
      method: 'POST',
      url: 'https://api.trello.com/1/cards/5e2718c2a2c8757b411e8711/actions/comments',
      qs: {
        text: Comment,
        key: '7c43d9375c9d0eea9ed807cf10f0c588',
        //token: 'e4395ce571d094d860753e7fc31c6ac2994f8bbc5f9767825394b182c2639733'
        token: token_trello
      }
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      // console.log(body);
      res.setHeader('Content-Type', 'application/json');
      res.send(body);
    });
  })

  /**
	 * @api {get} /trello/Boards Get boards of Maxime C.
	 * @apiGroup Trello
	 * @apiSuccessExample {json} Success
	 *    HTTP/1.1 200 OK
	 *    [{
        "name": "Area",
        "desc": "",
        "descData": null,
        "closed": false,
        "idOrganization": null,
        "idEnterprise": null,
        "limits": null,
        "pinned": null,
        "shortLink": "qTL2HhRn",
        "powerUps": [],
        "dateLastActivity": "2020-02-20T16:30:31.315Z",
        "idTags": [],
        "datePluginDisable": null,
        "creationMethod": null,
        "ixUpdate": null,
        "enterpriseOwned": false,
        "idBoardSource": null,
        "id": "5e13053a1dd96b6ba2a8586c",
        "starred": false,
        "url": "https://trello.com/b/qTL2HhRn/area",
        "prefs": {
            "permissionLevel": "private",
            "hideVotes": false,
            "voting": "disabled",
            "comments": "members",
            "invitations": "members",
            "selfJoin": false,
            "cardCovers": true,
            "isTemplate": false,
            "cardAging": "regular",
            "calendarFeedEnabled": false,
            "background": "5c1216ec145cd92a9982c763",
            "backgroundImage": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2560x1707/5e7194954ab29302e7b06ff0e16ed47d/photo-1542779283-429940ce8336",
            "backgroundImageScaled": [
                {
                    "width": 140,
                    "height": 93,
                    "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/140x93/c3b3405cfa3055a1f67d306d52eb5007/photo-1542779283-429940ce8336.jpg"
                },
                {
                    "width": 256,
                    "height": 171,
                    "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/256x171/c3b3405cfa3055a1f67d306d52eb5007/photo-1542779283-429940ce8336.jpg"
                },
                {
                    "width": 480,
                    "height": 320,
                    "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/c3b3405cfa3055a1f67d306d52eb5007/photo-1542779283-429940ce8336.jpg"
                },
                {
                    "width": 960,
                    "height": 640,
                    "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/960x640/c3b3405cfa3055a1f67d306d52eb5007/photo-1542779283-429940ce8336.jpg"
                },
                {
                    "width": 1024,
                    "height": 683,
                    "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1024x683/c3b3405cfa3055a1f67d306d52eb5007/photo-1542779283-429940ce8336.jpg"
                },
                {
                    "width": 2048,
                    "height": 1366,
                    "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2048x1366/c3b3405cfa3055a1f67d306d52eb5007/photo-1542779283-429940ce8336.jpg"
                },
                {
                    "width": 1280,
                    "height": 854,
                    "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1280x854/c3b3405cfa3055a1f67d306d52eb5007/photo-1542779283-429940ce8336.jpg"
                },
                {
                    "width": 1920,
                    "height": 1280,
                    "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1920x1280/c3b3405cfa3055a1f67d306d52eb5007/photo-1542779283-429940ce8336.jpg"
                },
                {
                    "width": 2400,
                    "height": 1600,
                    "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/c3b3405cfa3055a1f67d306d52eb5007/photo-1542779283-429940ce8336.jpg"
                },
                {
                    "width": 2560,
                    "height": 1707,
                    "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2560x1707/5e7194954ab29302e7b06ff0e16ed47d/photo-1542779283-429940ce8336"
                }
            ],
            "backgroundTile": false,
            "backgroundBrightness": "dark",
            "backgroundBottomColor": "#7e8b89",
            "backgroundTopColor": "#041313",
            "canBePublic": true,
            "canBeEnterprise": true,
            "canBeOrg": true,
            "canBePrivate": true,
            "canInvite": true
        },
        "subscribed": false,
        "labelNames": {
            "green": "",
            "yellow": "",
            "orange": "",
            "red": "",
            "purple": "",
            "blue": "",
            "sky": "",
            "lime": "",
            "pink": "",
            "black": ""
        },
        "dateLastView": "2020-02-15T20:40:30.165Z",
        "shortUrl": "https://trello.com/b/qTL2HhRn",
        "templateGallery": null,
        "memberships": [
            {
                "id": "5e13053a1dd96b6ba2a8586d",
                "idMember": "5a9422302ce747ed6be54073",
                "memberType": "admin",
                "unconfirmed": false,
                "deactivated": false
            },
            {
                "id": "5e3b1f64ccdd32507c8cfb7e",
                "idMember": "5c4f0dd4618fed881337b5fd",
                "memberType": "normal",
                "unconfirmed": false,
                "deactivated": false
            },
            {
                "id": "5e3b1fa5791f92050f5dafb9",
                "idMember": "5a12ae92fb143c65385e6d36",
                "memberType": "normal",
                "unconfirmed": false,
                "deactivated": false
            },
            {
                "id": "5e3d37b63fbbef7859cbe500",
                "idMember": "5cdad97be7fa5c4969df3370",
                "memberType": "normal",
                "unconfirmed": false,
                "deactivated": false
            }
        ]
    },
    {
        "name": "Symbiose",
        "desc": "",
        "descData": null,
        "closed": false,
        "idOrganization": null,
        "idEnterprise": null,
        "limits": null,
        "pinned": null,
        "shortLink": "oNE0WuFY",
        "powerUps": [],
        "dateLastActivity": "2020-01-08T14:20:59.733Z",
        "idTags": [],
        "datePluginDisable": null,
        "creationMethod": null,
        "ixUpdate": null,
        "enterpriseOwned": false,
        "idBoardSource": null,
        "id": "5d7786a9ad12f03ac9de0bab",
        "starred": false,
        "url": "https://trello.com/b/oNE0WuFY/symbiose",
        "prefs": {
            "permissionLevel": "private",
            "hideVotes": false,
            "voting": "disabled",
            "comments": "members",
            "invitations": "members",
            "selfJoin": false,
            "cardCovers": true,
            "isTemplate": false,
            "cardAging": "regular",
            "calendarFeedEnabled": false,
            "background": "5c05e9e2d733048eb421b482",
            "backgroundImage": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2560x1506/a826bbbb9a0598fc07a05fe4d5a519f5/photo-1450778869180-41d0601e046e",
            "backgroundImageScaled": [
                {
                    "width": 140,
                    "height": 82,
                    "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/140x82/6d721d4838eaeeaa5c742e7c8a04c8b7/photo-1450778869180-41d0601e046e.jpg"
                },
                {
                    "width": 256,
                    "height": 151,
                    "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/256x151/c11e07b0795675e79c40c443b9688f4f/photo-1450778869180-41d0601e046e.jpg"
                },
                {
                    "width": 480,
                    "height": 282,
                    "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x282/95d7497f649c9b1eb8df9527aa4ec3cf/photo-1450778869180-41d0601e046e.jpg"
                },
                {
                    "width": 960,
                    "height": 565,
                    "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/960x565/fd804c027e22946ac029d1f771ebccf5/photo-1450778869180-41d0601e046e.jpg"
                },
                {
                    "width": 1024,
                    "height": 602,
                    "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1024x602/9b90c3c76f5cc357865edf50afdc30b6/photo-1450778869180-41d0601e046e.jpg"
                },
                {
                    "width": 2048,
                    "height": 1205,
                    "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2048x1205/ccd00396885e9f4e7119473a0abe03c9/photo-1450778869180-41d0601e046e.jpg"
                },
                {
                    "width": 1280,
                    "height": 753,
                    "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1280x753/b26fb8a7a4fab76ccb55e12eb0281e75/photo-1450778869180-41d0601e046e.jpg"
                },
                {
                    "width": 1920,
                    "height": 1130,
                    "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1920x1130/7d506c687ac9bbb18c12610a33463eba/photo-1450778869180-41d0601e046e.jpg"
                },
                {
                    "width": 2560,
                    "height": 1506,
                    "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2560x1506/a826bbbb9a0598fc07a05fe4d5a519f5/photo-1450778869180-41d0601e046e"
                }
            ],
            "backgroundTile": false,
            "backgroundBrightness": "dark",
            "backgroundBottomColor": "#22312a",
            "backgroundTopColor": "#504437",
            "canBePublic": true,
            "canBeEnterprise": true,
            "canBeOrg": true,
            "canBePrivate": true,
            "canInvite": true
        },
        "subscribed": false,
        "labelNames": {
            "green": "DEPLOYED",
            "yellow": "URGENT",
            "orange": "",
            "red": "BROKEN",
            "purple": "API",
            "blue": "Front",
            "sky": "Back",
            "lime": "",
            "pink": "MVP",
            "black": ""
        },
        "dateLastView": "2019-12-07T14:55:39.325Z",
        "shortUrl": "https://trello.com/b/oNE0WuFY",
        "templateGallery": null,
        "memberships": [
            {
                "id": "5d7786a9ad12f03ac9de0bac",
                "idMember": "5bc616c4a2754a5d986f46ab",
                "memberType": "admin",
                "unconfirmed": false,
                "deactivated": false
            },
            {
                "id": "5d7f7a236e632840bea3ba0d",
                "idMember": "5ab4e67bb810fce9f0dbaf70",
                "memberType": "normal",
                "unconfirmed": false,
                "deactivated": false
            },
            {
                "id": "5d7f7a231a7e24419dd61122",
                "idMember": "5a12ae92fb143c65385e6d36",
                "memberType": "normal",
                "unconfirmed": false,
                "deactivated": false
            },
            {
                "id": "5d7f7a70fc85b61e7481d912",
                "idMember": "5c4f0dd4618fed881337b5fd",
                "memberType": "normal",
                "unconfirmed": false,
                "deactivated": false
            },
            {
                "id": "5daf541126439010b075132b",
                "idMember": "5a9422302ce747ed6be54073",
                "memberType": "normal",
                "unconfirmed": false,
                "deactivated": false
            },
            {
                "id": "5daf5411088f244d8f845730",
                "idMember": "5cdad97be7fa5c4969df3370",
                "memberType": "normal",
                "unconfirmed": false,
                "deactivated": false
            },
            {
                "id": "5daf54124ab6728834afe656",
                "idMember": "5c7d2c584620e64687bd3ab6",
                "memberType": "normal",
                "unconfirmed": false,
                "deactivated": false
            },
            {
                "id": "5dd72978ee8a780f8b3cad29",
                "idMember": "5cd473df598aaa759616e6e8",
                "memberType": "normal",
                "unconfirmed": false,
                "deactivated": false
            }
        ]
    },
	 *    }]
	 * @apiErrorExample {json} Get Error
	 *    HTTP/1.1 500 Internal Server Error
	 */
  app.get('/trello/Boards', function (req, res) {

    var options = {
      method: 'GET',
      url: 'https://api.trello.com/1/members/me/boards',
      qs: {
        key: '7c43d9375c9d0eea9ed807cf10f0c588',
        //token: 'e4395ce571d094d860753e7fc31c6ac2994f8bbc5f9767825394b182c2639733'
        token: token_trello
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      // console.log(
      //    'Response: ' + response.statusCode + ' ' + response.statusMessage
      // );
      // console.log(body);
      res.setHeader('Content-Type', 'application/json');
      res.send(body);
    });
  })

  /**
 * @api {post} /didi_images Send images
 * @apiGroup Discord
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 * "type": 1,
  "id": "676028232759509003",
  "name": "jeujeu",
  "avatar": null,
  "channel_id": "676014768498409495",
  "guild_id": "676014768498409492",
  "token": "bFkVpmif3dy5xB-bfQ3jBBKdeE2lS_Mtbcmjig9l44OEejGzpP5Sh3Ijo_gL5UykwIB3"
 *    }]
 * @apiErrorExample {json} Get Error
 *    HTTP/1.1 500 Internal Server Error
 */
  app.get('/didi_image', function (req, res) {
    let Team = req.query.Team;
    const hook = new Webhook("https://discordapp.com/api/webhooks/676028232759509003/bFkVpmif3dy5xB-bfQ3jBBKdeE2lS_Mtbcmjig9l44OEejGzpP5Sh3Ijo_gL5UykwIB3");
    const embed = new MessageBuilder()
      .setTitle('Who is that pokemon ?')
      .setImage(Team)
    hook.send(embed);
  })

  /**
 * @api {post} /didi Send infos
 * @apiGroup Discord
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 * "type": 1,
  "id": "676028232759509003",
  "name": "jeujeu",
  "avatar": null,
  "channel_id": "676014768498409495",
  "guild_id": "676014768498409492",
  "token": "bFkVpmif3dy5xB-bfQ3jBBKdeE2lS_Mtbcmjig9l44OEejGzpP5Sh3Ijo_gL5UykwIB3"
 *    }]
 * @apiErrorExample {json} Get Error
 *    HTTP/1.1 500 Internal Server Error
 */
  app.get('/didi', function (req, res) {
    let Team = req.query.Team;
    const hook = new Webhook("https://discordapp.com/api/webhooks/676028232759509003/bFkVpmif3dy5xB-bfQ3jBBKdeE2lS_Mtbcmjig9l44OEejGzpP5Sh3Ijo_gL5UykwIB3");
    const embed = new MessageBuilder()
      .setTitle('Pokemon')
      .setColor(7785669)
      .setDescription(Team);
    hook.send(embed);
  })

  /**
 * @api {get} /pokemon_Name Get infos about a pokemon
 * @apiGroup Pokemon
 * @apiParam {number} pokemon Id of a pokemon (between 1 and 600).
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
"abilities": [
  {
    "ability": {
      "name": "chlorophyll",
      "url": "https://pokeapi.co/api/v2/ability/34/"
    },
    "is_hidden": true,
    "slot": 3
  },
  {
    "ability": {
      "name": "overgrow",
      "url": "https://pokeapi.co/api/v2/ability/65/"
    },
    "is_hidden": false,
    "slot": 1
  }
],
"base_experience": 64,
"forms": [
  {
    "name": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon-form/1/"
  }
],
"game_indices": [
  {
    "game_index": 1,
    "version": {
      "name": "white-2",
      "url": "https://pokeapi.co/api/v2/version/22/"
    }
  },
  {
    "game_index": 1,
    "version": {
      "name": "black-2",
      "url": "https://pokeapi.co/api/v2/version/21/"
    }
  },
  {
    "game_index": 1,
    "version": {
      "name": "white",
      "url": "https://pokeapi.co/api/v2/version/18/"
    }
  },
  {
    "game_index": 1,
    "version": {
      "name": "black",
      "url": "https://pokeapi.co/api/v2/version/17/"
    }
  },
  {
    "game_index": 1,
    "version": {
      "name": "soulsilver",
      "url": "https://pokeapi.co/api/v2/version/16/"
    }
  },
  {
    "game_index": 1,
    "version": {
      "name": "heartgold",
      "url": "https://pokeapi.co/api/v2/version/15/"
    }
  },
  {
    "game_index": 1,
    "version": {
      "name": "platinum",
      "url": "https://pokeapi.co/api/v2/version/14/"
    }
  },
  {
    "game_index": 1,
    "version": {
      "name": "pearl",
      "url": "https://pokeapi.co/api/v2/version/13/"
    }
  },
  {
    "game_index": 1,
    "version": {
      "name": "diamond",
      "url": "https://pokeapi.co/api/v2/version/12/"
    }
  },
  {
    "game_index": 1,
    "version": {
      "name": "leafgreen",
      "url": "https://pokeapi.co/api/v2/version/11/"
    }
  },
  {
    "game_index": 1,
    "version": {
      "name": "firered",
      "url": "https://pokeapi.co/api/v2/version/10/"
    }
  },
  {
    "game_index": 1,
    "version": {
      "name": "emerald",
      "url": "https://pokeapi.co/api/v2/version/9/"
    }
  },
  {
    "game_index": 1,
    "version": {
      "name": "sapphire",
      "url": "https://pokeapi.co/api/v2/version/8/"
    }
  },
  {
    "game_index": 1,
    "version": {
      "name": "ruby",
      "url": "https://pokeapi.co/api/v2/version/7/"
    }
  },
  {
    "game_index": 1,
    "version": {
      "name": "crystal",
      "url": "https://pokeapi.co/api/v2/version/6/"
    }
  },
  {
    "game_index": 1,
    "version": {
      "name": "silver",
      "url": "https://pokeapi.co/api/v2/version/5/"
    }
  },
  {
    "game_index": 1,
    "version": {
      "name": "gold",
      "url": "https://pokeapi.co/api/v2/version/4/"
    }
  },
  {
    "game_index": 153,
    "version": {
      "name": "yellow",
      "url": "https://pokeapi.co/api/v2/version/3/"
    }
  },
  {
    "game_index": 153,
    "version": {
      "name": "blue",
      "url": "https://pokeapi.co/api/v2/version/2/"
    }
  },
  {
    "game_index": 153,
    "version": {
      "name": "red",
      "url": "https://pokeapi.co/api/v2/version/1/"
    }
  }
],
"height": 7,
"held_items": [],
"id": 1,
"is_default": true,
"location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
"moves": [
  {
    "move": {
      "name": "razor-wind",
      "url": "https://pokeapi.co/api/v2/move/13/"
    },
    "version_group_details": [
      {
        "level_learned_at": 0,
        "move_learn_method": {
          "name": "egg",
          "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
        },
        "version_group": {
          "name": "crystal",
          "url": "https://pokeapi.co/api/v2/version-group/4/"
        }
      },
      {
        "level_learned_at": 0,
        "move_learn_method": {
          "name": "egg",
          "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
        },
        "version_group": {
          "name": "gold-silver",
          "url": "https://pokeapi.co/api/v2/version-group/3/"
        }
      }
    ]
  },
  {
    "move": {
      "name": "string-shot",
      "url": "https://pokeapi.co/api/v2/move/81/"
    },
    "version_group_details": [
      {
        "level_learned_at": 0,
        "move_learn_method": {
          "name": "tutor",
          "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
        },
        "version_group": {
          "name": "heartgold-soulsilver",
          "url": "https://pokeapi.co/api/v2/version-group/10/"
        }
      }
    ]
  },
  {
    "move": {
      "name": "rage",
      "url": "https://pokeapi.co/api/v2/move/99/"
    },
    "version_group_details": [
      {
        "level_learned_at": 0,
        "move_learn_method": {
          "name": "machine",
          "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
        },
        "version_group": {
          "name": "yellow",
          "url": "https://pokeapi.co/api/v2/version-group/2/"
        }
      },
      {
        "level_learned_at": 0,
        "move_learn_method": {
          "name": "machine",
          "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
        },
        "version_group": {
          "name": "red-blue",
          "url": "https://pokeapi.co/api/v2/version-group/1/"
        }
      }
    ]
  }
],
"name": "bulbasaur",
"order": 1,
"species": {
  "name": "bulbasaur",
  "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
},
"sprites": {
  "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
  "back_female": null,
  "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
  "back_shiny_female": null,
  "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  "front_female": null,
  "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
  "front_shiny_female": null
},
"stats": [
  {
    "base_stat": 45,
    "effort": 0,
    "stat": {
      "name": "speed",
      "url": "https://pokeapi.co/api/v2/stat/6/"
    }
  },
  {
    "base_stat": 65,
    "effort": 0,
    "stat": {
      "name": "special-defense",
      "url": "https://pokeapi.co/api/v2/stat/5/"
    }
  },
  {
    "base_stat": 65,
    "effort": 1,
    "stat": {
      "name": "special-attack",
      "url": "https://pokeapi.co/api/v2/stat/4/"
    }
  },
  {
    "base_stat": 49,
    "effort": 0,
    "stat": {
      "name": "defense",
      "url": "https://pokeapi.co/api/v2/stat/3/"
    }
  },
  {
    "base_stat": 49,
    "effort": 0,
    "stat": {
      "name": "attack",
      "url": "https://pokeapi.co/api/v2/stat/2/"
    }
  },
  {
    "base_stat": 45,
    "effort": 0,
    "stat": {
      "name": "hp",
      "url": "https://pokeapi.co/api/v2/stat/1/"
    }
  }
],
"types": [
  {
    "slot": 2,
    "type": {
      "name": "poison",
      "url": "https://pokeapi.co/api/v2/type/4/"
    }
  },
  {
    "slot": 1,
    "type": {
      "name": "grass",
      "url": "https://pokeapi.co/api/v2/type/12/"
    }
  }
],
"weight": 69
 *    }]
 * @apiErrorExample {json} Get Error
 *    HTTP/1.1 500 Internal Server Error
 */
  app.get('/pokemon_Name', function (req, res) {
    let pokemon = req.query.pokemon;

    var options = {
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/' + pokemon + '/',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      // console.log(
      //    'Response: ' + response.statusCode + ' ' + response.statusMessage
      // );
      // console.log(body);
      res.setHeader('Content-Type', 'application/json');
      res.send(body);
    });
  })

  /**
	 * @api {get} /pokemon_Berry Get infos of a berry
	 * @apiGroup Pokemon
   * @apiParam {number} id Id of a berry (between 1 and 60).
	 * @apiSuccessExample {json} Success
	 *    HTTP/1.1 200 OK
	 *    [{
   * {
  "firmness": {
    "name": "soft",
    "url": "https://pokeapi.co/api/v2/berry-firmness/2/"
  },
  "flavors": [
    {
      "flavor": {
        "name": "spicy",
        "url": "https://pokeapi.co/api/v2/berry-flavor/1/"
      },
      "potency": 10
    },
    {
      "flavor": {
        "name": "dry",
        "url": "https://pokeapi.co/api/v2/berry-flavor/2/"
      },
      "potency": 0
    },
    {
      "flavor": {"type": 1,
    "id": "676028232759509003",
    "name": "jeujeu",
    "avatar": null,
    "channel_id": "676014768498409495",
    "guild_id": "676014768498409492",
    "token": "bFkVpmif3dy5xB-bfQ3jBBKdeE2lS_Mtbcmjig9l44OEejGzpP5Sh3Ijo_gL5UykwIB3"
      "potency": 0
    },
    {
      "flavor": {
        "name": "bitter",
        "url": "https://pokeapi.co/api/v2/berry-flavor/4/"
      },
      "potency": 0
    },
    {
      "flavor": {
        "name": "sour",
        "url": "https://pokeapi.co/api/v2/berry-flavor/5/"
      },
      "potency": 0
    }
  ],
  "growth_time": 3,
  "id": 1,
  "item": {
    "name": "cheri-berry",
    "url": "https://pokeapi.co/api/v2/item/126/"
  },
  "max_harvest": 5,
  "name": "cheri",
  "natural_gift_power": 60,
  "natural_gift_type": {
    "name": "fire",
    "url": "https://pokeapi.co/api/v2/type/10/"
  },
  "size": 20,
  "smoothness": 25,
  "soil_dryness": 15
}
	 *    }]
	 * @apiErrorExample {json} Get Error
	 *    HTTP/1.1 500 Internal Server Error
	 */
  app.get('/pokemon_Berry', function (req, res) {
    let berry_id = req.query.berry_id;

    var options = {
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/berry/' + berry_id + '/',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      // console.log(
      //    'Response: ' + response.statusCode + ' ' + response.statusMessage
      // );
      // console.log(body);
      res.setHeader('Content-Type', 'application/json');
      res.send(body);
    });
  })

  /**
     * @api {get} /starwars_Planet Get infos about a planet
     * @apiGroup Starwars
     * @apiParam {number} id Id of a planet (between 1 and 60).
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    [{
     * "name": "Yavin IV",
    "rotation_period": "24",
    "orbital_period": "4818",
    "diameter": "10200",
    "climate": "temperate, tropical",
    "gravity": "1 standard",
    "terrain": "jungle, rainforests",
    "surface_water": "8",
    "population": "1000",
    "residents": [],
    "films": [
      "https://swapi.co/api/films/1/"
    ],
    "created": "2014-12-10T11:37:19.144000Z",
    "edited": "2014-12-20T20:58:18.421000Z",
    "url": "https://swapi.co/api/planets/3/"
     *    }]
     * @apiErrorExample {json} Get Error
     *    HTTP/1.1 500 Internal Server Error
     */
  app.get('/starwars_Planet', function (req, res) {
    let id = req.query.id;
    var options = {
      method: 'GET',
      url: 'https://swapi.co/api/planets/' + id + '/',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      // console.log(
      //    'Response: ' + response.statusCode + ' ' + response.statusMessage
      // );
      // console.log(body);
      res.setHeader('Content-Type', 'application/json');
      res.send(body);
    });
  })

  /**
	 * @api {get} /starwars_People Get infos about a people
	 * @apiGroup Starwars
   * @apiParam {number} id Id of a people (between 1 and 60).
	 * @apiSuccessExample {json} Success
	 *    HTTP/1.1 200 OK
	 *    [{
   * "name": "Luke Skywalker",
	"height": "172",
	"mass": "77",
	"hair_color": "blond",
	"skin_color": "fair",
	"eye_color": "blue",
	"birth_year": "19BBY",
	"gender": "male",
	"homeworld": "https://swapi.co/api/planets/1/",
	"films": [
		"https://swapi.co/api/films/2/",
		"https://swapi.co/api/films/6/",
		"https://swapi.co/api/films/3/",
		"https://swapi.co/api/films/1/",
		"https://swapi.co/api/films/7/"
	],
	"species": [
		"https://swapi.co/api/species/1/"
	],
	"vehicles": [
		"https://swapi.co/api/vehicles/14/",
		"https://swapi.co/api/vehicles/30/"
	],
	"starships": [
		"https://swapi.co/api/starships/12/",
		"https://swapi.co/api/starships/22/"
	],
	"created": "2014-12-09T13:50:51.644000Z",
	"edited": "2014-12-20T21:17:56.891000Z",
	"url": "https://swapi.co/api/people/1/"
	 *    }]
	 * @apiErrorExample {json} Get Error
	 *    HTTP/1.1 500 Internal Server Error
	 */
  app.get('/starwars_People', function (req, res) {
    let id = req.query.id;
    var options = {
      method: 'GET',
      url: 'https://swapi.co/api/people/' + id + '/',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      // console.log(
      //    'Response: ' + response.statusCode + ' ' + response.statusMessage
      // );
      // console.log(body);
      res.setHeader('Content-Type', 'application/json');
      res.send(body);
    });
  })

  /**
	 * @api {get} /starwars_Species Get infos about a specie
	 * @apiGroup Starwars
   * @apiParam {number} id Id of a specie (between 1 and 30).
	 * @apiSuccessExample {json} Success
	 *    HTTP/1.1 200 OK
	 *    [{
   * "name": "Human",
	"classification": "mammal",
	"designation": "sentient",
	"average_height": "180",
	"skin_colors": "caucasian, black, asian, hispanic",
	"hair_colors": "blonde, brown, black, red",
	"eye_colors": "brown, blue, green, hazel, grey, amber",
	"average_lifespan": "120",
	"homeworld": "https://swapi.co/api/planets/9/",
	"language": "Galactic Basic",
	"people": [
		"https://swapi.co/api/people/1/",
		"https://swapi.co/api/people/4/",
		"https://swapi.co/api/people/5/",
		"https://swapi.co/api/people/6/",
		"https://swapi.co/api/people/7/",
		"https://swapi.co/api/people/9/",
		"https://swapi.co/api/people/10/",
		"https://swapi.co/api/people/11/",
		"https://swapi.co/api/people/12/",
		"https://swapi.co/api/people/14/",
		"https://swapi.co/api/people/18/",
		"https://swapi.co/api/people/19/",
		"https://swapi.co/api/people/21/",
		"https://swapi.co/api/people/22/",
		"https://swapi.co/api/people/25/",
		"https://swapi.co/api/people/26/",
		"https://swapi.co/api/people/28/",
		"https://swapi.co/api/people/29/",
		"https://swapi.co/api/people/32/",
		"https://swapi.co/api/people/34/",
		"https://swapi.co/api/people/43/",
		"https://swapi.co/api/people/51/",
		"https://swapi.co/api/people/60/",
		"https://swapi.co/api/people/61/",
		"https://swapi.co/api/people/62/",
		"https://swapi.co/api/people/66/",
		"https://swapi.co/api/people/67/",
		"https://swapi.co/api/people/68/",
		"https://swapi.co/api/people/69/",
		"https://swapi.co/api/people/74/",
		"https://swapi.co/api/people/81/",
		"https://swapi.co/api/people/84/",
		"https://swapi.co/api/people/85/",
		"https://swapi.co/api/people/86/",
		"https://swapi.co/api/people/35/"
	],
	"films": [
		"https://swapi.co/api/films/2/",
		"https://swapi.co/api/films/7/",
		"https://swapi.co/api/films/5/",
		"https://swapi.co/api/films/4/",
		"https://swapi.co/api/films/6/",
		"https://swapi.co/api/films/3/",
		"https://swapi.co/api/films/1/"
	],
	"created": "2014-12-10T13:52:11.567000Z",
	"edited": "2015-04-17T06:59:55.850671Z",
	"url": "https://swapi.co/api/species/1/"
	 *    }]
	 * @apiErrorExample {json} Get Error
	 *    HTTP/1.1 500 Internal Server Error
	 */
  app.get('/starwars_Species', function (req, res) {
    let id = req.query.id;
    var options = {
      method: 'GET',
      url: 'https://swapi.co/api/species/' + id + '/',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      // console.log(
      //    'Response: ' + response.statusCode + ' ' + response.statusMessage
      // );
      // console.log(body);
      res.setHeader('Content-Type', 'application/json');
      res.send(body);
    });
  })

  /**
	 * @api {get} /starwars_Starships Get infos about a star ship
	 * @apiGroup Starwars
   * @apiParam {number} id Id of a star ship (between 1 and 15)
	 * @apiSuccessExample {json} Success
	 *    HTTP/1.1 200 OK
	 *    [{
   * "name": "Death Star",
	"model": "DS-1 Orbital Battle Station",
	"manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
	"cost_in_credits": "1000000000000",
	"length": "120000",
	"max_atmosphering_speed": "n/a",
	"crew": "342953",
	"passengers": "843342",
	"cargo_capacity": "1000000000000",
	"consumables": "3 years",
	"hyperdrive_rating": "4.0",
	"MGLT": "10",
	"starship_class": "Deep Space Mobile Battlestation",
	"pilots": [],
	"films": [
		"https://swapi.co/api/films/1/"
	],
	"created": "2014-12-10T16:36:50.509000Z",
	"edited": "2014-12-22T17:35:44.452589Z",
	"url": "https://swapi.co/api/starships/9/"
	 *    }]
	 * @apiErrorExample {json} Get Error
	 *    HTTP/1.1 500 Internal Server Error
	 */
  app.get('/starwars_Starships', function (req, res) {
    let id = req.query.id;
    var options = {
      method: 'GET',
      url: 'https://swapi.co/api/starships/' + id + '/',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      // console.log(
      //    'Response: ' + response.statusCode + ' ' + response.statusMessage
      // );
      // console.log(body);
      res.setHeader('Content-Type', 'application/json');
      res.send(body);
    });
  })

  /**
     * @api {post} /jira_AddNewUser Add a new user
     * @apiGroup Jira
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     * @apiErrorExample {json} Get Error
     *    HTTP/1.1 500 Internal Server Error
     */
  app.get('/jira_AddNewUser', function (req, res) {

    var bodyData = `{
      "password": "abracadabra",
      "emailAddress": "mia@atlassian.com",
      "displayName": "Mia Krystof",
      "name": "coucou_ça_marche"
    }`;

    var options = {
      method: 'POST',
      url: 'https://mcailliau1.atlassian.net/rest/api/3/user',
      auth: { username: 'mcailliau@henix.fr', password: 'JgUQsNh5u1xEfMjuN3HZ1A2E' },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: bodyData
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      // console.log(
      //    'Response: ' + response.statusCode + ' ' + response.statusMessage
      // );
      // console.log(body);
    });
    return res.send("hi new user in jira");
  })

  /**
     * @api {post} /trello/AddList Create new list
     * @apiGroup Trello
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    [{
     * "id":"5e68feff1333c87a5b04c832"
      "name":"test"
      "closed":false
      "idBoard":"5a12b093e0048549cccd943d"
      "pos":32767.5
      "limits":{
      }
     *    }]
     * @apiErrorExample {json} Get Error
     *    HTTP/1.1 500 Internal Server Error
     */
  app.get('/trello/AddList', function (req, res) {
    let jira_name = req.query.name;

    var options = {
      method: 'POST',
      url: 'https://api.trello.com/1/boards/',
      qs: {
        name: jira_name,
        defaultLabels: 'true',
        defaultLists: 'true',
        keepFromSource: 'none',
        prefs_permissionLevel: 'private',
        prefs_voting: 'disabled',
        prefs_comments: 'members',
        prefs_invitations: 'members',
        prefs_selfJoin: 'true',
        prefs_cardCovers: 'true',
        prefs_background: 'blue',
        prefs_cardAging: 'regular',
        key: '7c43d9375c9d0eea9ed807cf10f0c588',
        //token: 'e4395ce571d094d860753e7fc31c6ac2994f8bbc5f9767825394b182c2639733'
        token: token_trello
      }
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      // console.log(body);
    });
  })
  const gitlabPost = (Formatmessage) => {
    let newMessage = {
      "username": 'bot-gitlab',
      "content": 'message from gitlab',
      "embeds": [{
        title: Formatmessage.title,
        color: 3447003,
        description: Formatmessage.author + " [" + Formatmessage.authoremail + "] pushed in repository" + "\n of the date " + Formatmessage.date,
        footer: {
          text: "commit message; " + Formatmessage.message
        }
      }]
    }
    request({
      url: 'https://discordapp.com/api/webhooks/676028232759509003/bFkVpmif3dy5xB-bfQ3jBBKdeE2lS_Mtbcmjig9l44OEejGzpP5Sh3Ijo_gL5UykwIB3',
      method: 'POST',
      json: true,
      body: newMessage
    }, function (error, response, body) {
      if (error) throw new Error(error);
      // console.log(
      //   'Response: ' + response.statusCode + ' ' + response.statusMessage
      // );
      // console.log('gitlab message sent.');
    });
  }

  const post2 = (Formatmessage) => {
    //console.log('Posting message...');
    gitlabPost(Formatmessage);
  }

  /**
     * @api {get} /gitlab Get last commit and post on Discord
     * @apiGroup Gitlab
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    [{
     * {
        "id": "3cbaf637e88f4583a4d6fbad8e82c9279d7a4d78",
        "short_id": "3cbaf637",
        "created_at": "2020-02-28T18:25:10.000+01:00",
        "parent_ids": [
            "3fc01b29b8b00ce6eb63774e724934f0fb868c67"
        ],
        "title": "lol",
        "message": "lol\n",
        "author_name": "bod",
        "author_email": "baptiste.liger@epitech.eu",
        "authored_date": "2020-02-28T18:25:10.000+01:00",
        "committer_name": "bod",
        "committer_email": "baptiste.liger@epitech.eu",
        "committed_date": "2020-02-28T18:25:10.000+01:00",
        "web_url": "https://gitlab.com/bod42/testapi/-/commit/3cbaf637e88f4583a4d6fbad8e82c9279d7a4d78"
    },
    {
        "id": "3fc01b29b8b00ce6eb63774e724934f0fb868c67",
        "short_id": "3fc01b29",
        "created_at": "2020-02-25T14:35:13.000+01:00",
        "parent_ids": [
            "728d72e8f419fbe1ff80abbb27757a6441df8253"
        ],
        "title": "salut maxine",
        "message": "salut maxine\n",
        "author_name": "bod",
        "author_email": "baptiste.liger@epitech.eu",
        "authored_date": "2020-02-25T14:35:13.000+01:00",
        "committer_name": "bod",
        "committer_email": "baptiste.liger@epitech.eu",
        "committed_date": "2020-02-25T14:35:13.000+01:00",
        "web_url": "https://gitlab.com/bod42/testapi/-/commit/3fc01b29b8b00ce6eb63774e724934f0fb868c67"
    },
    {
        "id": "728d72e8f419fbe1ff80abbb27757a6441df8253",
        "short_id": "728d72e8",
        "created_at": "2020-01-26T09:13:42.000+00:00",
        "parent_ids": [],
        "title": "Initial commit",
        "message": "Initial commit",
        "author_name": "baptiste liger",
        "author_email": "baptiste.liger@epitech.eu",
        "authored_date": "2020-01-26T09:13:42.000+00:00",
        "committer_name": "baptiste liger",
        "committer_email": "baptiste.liger@epitech.eu",
        "committed_date": "2020-01-26T09:13:42.000+00:00",
        "web_url": "https://gitlab.com/bod42/testapi/-/commit/728d72e8f419fbe1ff80abbb27757a6441df8253"
    }
     *    }]
     * @apiErrorExample {json} Get Error
     *    HTTP/1.1 500 Internal Server Error
     */
  app.get('/gitlab', function (req, res) {
    res.send('hello world')
    console.log('gitlab change recieved!');
    var options = {
      method: 'GET',
      url: 'https://gitlab.com/api/v4/projects/bod42%2Ftestapi/repository/commits',
      header: {
        token: 'HiSwsj-ifDzPwsXsYR6S'
      }
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      // console.log(
      //   'Response: ' + response.statusCode + ' ' + response.statusMessage
      // );
      returnJson = JSON.parse(body);

      var Formatmessage = {
        'title': returnJson[0].title,
        'author': returnJson[0].author_name,
        'authoremail': returnJson[0].author_email,
        'date': returnJson[0].authored_date,
        'message': returnJson[0].message
      }
      post2(Formatmessage);
    });
  });

  const discordPost = (Formatmessage) => {
    let newMessage = {
      "username": 'bot-trello',
      "content": 'message from trello ',
      embeds: [{
        title: Formatmessage.user + " edit trello " + Formatmessage.boardname,
        color: 3447003,
        description: " in trello board " + "[ " + Formatmessage.boardname + "](https://trello.com/b/iB5GsQNQ/name) " + " user: " + Formatmessage.user + " perform the following action: " + Formatmessage.desc,
        url: Formatmessage.link,
        footer: {
          text: Formatmessage.footer
        }
      }]
    }
    request({
      url: 'https://discordapp.com/api/webhooks/676028232759509003/bFkVpmif3dy5xB-bfQ3jBBKdeE2lS_Mtbcmjig9l44OEejGzpP5Sh3Ijo_gL5UykwIB3',
      method: 'POST',
      json: true,
      body: newMessage
    }, function (error, response, body) {
      if (error) throw new Error(error);
      // console.log(
      //   'Response: ' + response.statusCode + ' ' + response.statusMessage
      // );
      // console.log('Discord message sent.');
    });
  }

  const post = (Formatmessage) => {
    //console.log('Posting message...');
    discordPost(Formatmessage);
  }

  /**
     * @api {get} /area Get lasts updates of Trello
     * @apiGroup Perso
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    [{
     * id: '1',
     * action: 'action_moved_card_lower',
     * date: 2019-06-08T19:40:27.915Z
     *    }]
     * @apiErrorExample {json} Get Error
     *    HTTP/1.1 500 Internal Server Error
     */
  app.get('/area', async function (req, res) {
    //console.log('Trello change recieved!');

    var options = {
      method: 'GET',
      url: 'https://api.trello.com/1/boards/5e27157dc73f207c88174602/actions/?limit=5',
      qs: {
        display: 'true',
        entities: 'false',
        fields: 'all',
        member: 'true',
        member_fields: 'avatarHash,fullName,initials,username',
        memberCreator: 'true',
        memberCreator_fields: 'avatarHash,fullName,initials,username',
        key: '7c43d9375c9d0eea9ed807cf10f0c588',
        token: 'e4395ce571d094d860753e7fc31c6ac2994f8bbc5f9767825394b182c2639733'
      }
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      // console.log(
      //   'Response: ' + response.statusCode + ' ' + response.statusMessage
      // );

      req = body;
      returnJson = JSON.parse(req);
      let date_save = returnJson[0].date
      if (returnJson[0].display.translationKey === 'action_moved_card_lower') {
        var Footer = ' card: ' + returnJson[0].data.card.name + ' card goes up'
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var myObj = {
          id: '1',
          action: 'action_moved_card_lower',
          date: date_save
        };
        res.end(JSON.stringify(myObj))
      }
      if (returnJson[0].display.translationKey === 'action_moved_card_higher') {
        var Footer = ' card: ' + returnJson[0].data.card.name + ' card goes down'
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var myObj = {
          id: '2',
          action: 'action_moved_card_higher',
          date: date_save
        };
        res.end(JSON.stringify(myObj))
      }
      if (returnJson[0].display.translationKey === 'action_added_list_to_board') {
        var Footer = " list add to board"
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var myObj = {
          id: '3',
          action: 'action_added_list_to_board',
          date: date_save,
        };
        res.end(JSON.stringify(myObj))
      }

      if (returnJson[0].display.translationKey === 'action_moved_list_left') {
        var Footer = ' list: moved to left'
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var myObj = {
          id: '4',
          action: 'action_moved_list_left',
          date: date_save
        };
        res.end(JSON.stringify(myObj))
      }

      if (returnJson[0].display.translationKey === 'action_archived_list') {
        var Footer = ' list archived'
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var myObj = {
          id: '5',
          action: 'action_archived_list',
          date: date_save
        };
        res.end(JSON.stringify(myObj))
      }

      if (returnJson[0].display.translationKey === 'action_moved_list_right') {
        var Footer = ' list moved to right'
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var myObj = {
          id: '6',
          action: 'action_moved_list_right',
          date: date_save
        };
        res.end(JSON.stringify(myObj))
      }

      if (returnJson[0].display.translationKey === 'action_create_card') {
        var Footer = ' card created'
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var myObj = {
          id: '7',
          action: 'action_create_card',
          date: date_save
        };
        res.end(JSON.stringify(myObj))
      }

      if (returnJson[0].display.translationKey === 'action_renamed_card') {
        var Footer = ' card renamed'
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var myObj = {
          id: '8',
          action: 'action_renamed_card',
          date: date_save,
        };
        res.end(JSON.stringify(myObj))
      }

      if (returnJson[0].display.translationKey === 'action_move_card_from_list_to_list') {
        var Footer = ' card move list to list'
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var myObj = {
          id: '9',
          action: 'action_move_card_from_list_to_list',
          date: date_save
        };
        res.end(JSON.stringify(myObj))
      }

      if (returnJson[0].display.translationKey === 'action_added_a_due_date') {
        var Footer = ' Due Date added date'
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var myObj = {
          id: '17',
          action: 'action_member_joined_card',
          date: date_save
        };
        res.end(JSON.stringify(myObj))
      }
      if (returnJson[0].display.translationKey === 'action_changed_a_due_date') {
        var Footer = ' Due Date Changed '
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var myObj = {
          id: '16',
          action: 'action_member_joined_card',
          date: date_save
        };
        res.end(JSON.stringify(myObj))
      }

      if (returnJson[0].display.translationKey === 'action_member_joined_card') {
        var Footer = ' menber joined card '
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var myObj = {
          id: '10',
          action: 'action_member_joined_card',
          date: date_save
        };
        res.end(JSON.stringify(myObj))
      }

      if (returnJson[0].display.translationKey === 'action_member_left_card') {
        var Footer = ' menber left card '
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var myObj = {
          id: '11',
          action: 'action_member_left_card',
          date: date_save,
        };
        res.end(JSON.stringify(myObj))
      }

      if (returnJson[0].display.translationKey === 'action_sent_card_to_board') {
        var Footer = ' User nMoved card '
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var myObj = {
          id: '12',
          action: 'action_sent_card_to_board',
          date: date_save,
        };
        res.end(JSON.stringify(myObj))
      }

      if (returnJson[0].display.translationKey === 'action_delete_card') {
        var Footer = ' card delete'
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var myObj = {
          id: '13',
          action: 'action_delete_card',
          date: date_save,
        };
        res.end(JSON.stringify(myObj))
      }

      if (returnJson[0].display.translationKey === 'action_archived_card') {
        var Footer = ' card archived by User '
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var myObj = {
          id: '14',
          action: 'action_archived_card',
          date: date_save,

        };
        res.end(JSON.stringify(myObj))
      }

      if (returnJson[0].display.translationKey === 'action_changed_description_of_card') {
        var Footer = ' description of card changed '
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var myObj = {
          id: '15',
          action: 'action_changed_description_of_card',
          date: date_save
        };
        res.end(JSON.stringify(myObj))
      }

      if (returnJson[0].display.translationKey === 'action_comment_on_card') {
        var Footer = 'User Commented on card '
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var myObj = {
          id: '0',
          action: 'action_changed_description_of_card',
          date: date_save,
        };
        res.end(JSON.stringify(myObj))
      }

      var Formatmessage = {
        'user': returnJson[0].memberCreator.username,
        'boardname': returnJson[0].data.board.name,
        'desc': returnJson[0].display.translationKey,
        'footer': Footer
      }
      post(Formatmessage);
    });
  });
})