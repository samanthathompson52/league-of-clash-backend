const express = require("express");
const bodyParser = require("body-parser");
const path = __dirname + '/app/views/';
const cors = require("cors");
const app = express();

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
  res.status(200).send({message: "Hello World"});
});
  
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});