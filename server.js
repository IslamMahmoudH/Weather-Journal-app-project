// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express= require('express');

// Start up an instance of app
const app= express()
/* Middleware*/
const bodyParser= require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors= require('cors');
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port=3000;
const server=app.listen(port,start_server);
function start_server(){
    console.log(`Server is running on localhost ${port}`)
}

// Post Route
const data = [];
app.post('/add', addData);

function addData(req, res) {
  const reqData = req.body
  projectData['date'] = reqData.date;
  projectData['temp'] = reqData.temp;
  projectData['content'] = reqData.content;
  res.send(projectData);
  // console.log(projectData)
  data.push(projectData)
  // console.log(data)
}

// Callback function to complete GET '/all'
app.get('/all', getData);

function getData(req, res) {
  res.send(projectData);
  console.log(projectData)
  // console.log(data)
}

