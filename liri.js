require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
//var command = process.argv[2];
//var userInput = process.argv[3];


function spotifySearch() {
    spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, response) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

       // console.log(response.data);
    });
} function movieSearch() {
    axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=Trilogy&t=Batman-Begins&r=json").then(function (response, err) {
    console.log(JSON.stringify(response.data.Title))  
    console.log(JSON.stringify(response.data.Year));
    console.log(JSON.stringify(response.data.Ratings))
    console.log(JSON.stringify(response.data.Country));
    console.log(JSON.stringify(response.data.Language));
    console.log(JSON.stringify(response.data.Plot));
    console.log(JSON.stringify(response.data.Actors));
    //console.log(JSON.stringify(response.data))
        
    }).catch(function (err) {
        console.log(err);
    })




}

//movieSearch();
function bands() {
var artist = process.argv[2];
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function (response, err) {
    console.log(JSON.stringify(response.data.name));
    //console.log(response.data);
    }).catch(function(err){
        console.log(err);
    })


}
bands();



