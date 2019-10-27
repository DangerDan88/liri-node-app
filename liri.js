require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");
var command = process.argv[2];
var userInput = process.argv.slice(3).join(" ");

function spotifySearch() {
  spotify.search(
    { type: "track", query: userInput, limit: "2", market: "US" },
    function(err, response) {
      if (err) {
        return console.log("Error occurred: " + err);
      }
      var spotifyArray = Object.values(response);
      for (var i = 0; i < spotifyArray.length; i++) {
        // This logs song name
        console.log(spotifyArray[i].items[i].name);
        //This logs artist name
        console.log(spotifyArray[i].items[i].artists[i].name);
        // This logs the spotify url
        console.log(spotifyArray[i].items[i].external_urls);
        // This logs Album name
        console.log(spotifyArray[i].items[i].album.name);
      }
    }
  );
}

function movieSearch() {
  axios
    .get(
      "http://www.omdbapi.com/?i=tt3896198&apikey=Trilogy&t=" +
        userInput +
        "&r=json"
    )
    .then(function(response, err) {
      console.log(JSON.stringify(response.data.Title));
      console.log(JSON.stringify(response.data.Year));
      console.log(JSON.stringify(response.data.Ratings));
      console.log(JSON.stringify(response.data.Country));
      console.log(JSON.stringify(response.data.Language));
      console.log(JSON.stringify(response.data.Plot));
      console.log(JSON.stringify(response.data.Actors));
    })
    .catch(function(err) {
      console.log(err);
    });
}


function bands() {
  axios
    .get(
      "https://rest.bandsintown.com/artists/" +
        userInput +
        "/events?app_id=codingbootcamp"
    )
    .then(function(response, err) {
      var bandArray = Object.values(response);
      for (var i = 0; i < bandArray.length; i++) {
        // venue but is pulling all venues
        console.log(response.data[i].venue.name);
        console.log(response.data[i].venue.city);
        console.log(response.data[i].venue.country);
        console.log(moment(response.data[i].datetime).format("MM/DD/YYYY"));
      }
    })
    .catch(function(err) {
      console.log(err);
    });
}


switch (command) {
  case "spotify-this-song":
  spotifySearch();
  break;

  case "movie-this":
    movieSearch();
    break;

    case "concert-this":
      bands();
      break;
}