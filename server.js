const express = require("express");
const bodyParser = require("body-parser");
const path = __dirname + '/app/views/';
const cors = require("cors");
const app = express();
const axios = require("axios");

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(express.static(path));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.sendFile(path + "index.html");
  });

app.get('/helloWorld', (req, res) => {
  console.log("Request recieved!")
  let data = leagueAPI();
  res.status(200).send({message: data});
});
  
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


function leagueAPI(){
  axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Samaara`)
  .then(response => {
    console.log("leagueAPI");
    // JSON responses are automatically parsed.
      this.posts = response.data
      console.log(response);
    })
    .catch(e => {
      this.errors.push(e)
    })

  return 10;
};