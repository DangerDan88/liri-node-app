require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
//var command = process.argv[2];
//var userInput = process.argv[3];


function spotifySearch() {
    spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data);
    });
} function movieSearch() {
    axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=Trilogy&s=Batman").then(function (data, err) {
        console.log(data.data);
    }).catch(function (err) {
        console.log(err);
    })




}

movieSearch();
function bands() {
var artist = process.argv[2];
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function (data, err) {
console.log(data.data);
    }).catch(function(err){
        console.log(err);
    })


}
bands();


