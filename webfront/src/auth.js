import axios from "axios"


async function auth2(port) {
    var backUrl = "http://localhost:" + port;
    const authEndpoint = "https://trello.com"
    console.log("authentification start")
    try {
        let res = await axios.get(backUrl + "/registered");
        if (res.data.registered) {
            console.log("already logged in")
            return;
        }
    } catch (e) {
        console.log(e)
        console.log('cannot know if we\'re already logged in with trello, relogging by default')
    }

    window.addEventListener("message", receiver)
    let TrelloAuth = window.open(
        "https://trello.com/1/authorize/?key=7c43d9375c9d0eea9ed807cf10f0c588&name=test&response_type=token&expiration=never&callback_method=postMessage&scope=read,write&return_url=http://localhost:8081/", "Authentification Trello",
        "resizable,scrollbars,status,location=yes,height=600,width=400,_blank",
    )

    function receiver(event) {
        // console.log(event)
        var ref;
        var token;
        let eventOrigin = new URL(event.origin)
        let authPointURL = new URL(authEndpoint)
        if (eventOrigin.hostname !== authPointURL.hostname || event.source !== TrelloAuth) {
            return;
        }
        if ((event.data != null) && /[0-9a-fA-F]{64}/.test(event.data)) {
            token = event.data;
        } else {
            return;
        }
        if ((ref = event.source) != null) {
            ref.close()
        }
        if (typeof window.removeEventListener === "function") {
            window.removeEventListener("message", receiver, false)
        }

        // TrelloAuth.close()
        // console.log("url: " + backUrl + "/add/trello")
        // console.log("access_token: " + token)
        console.log("authentificated")
        console.log("posting oauth token to server")
        axios.post(backUrl + "/add/trello", {
            token: token,
        }).then((response) => {
            // console.log(response)
            console.log("token posted")
        }).catch((error) => {
            console.log("token post failed:")
            console.log(error)
        })
        // console.log("value: " + token)
    }



}
export default auth2;