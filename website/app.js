
/* Global Variables */


// Base URL and API Key for OpenWeatherMap API
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '5beb43e13dc3fa8be428191e6e50a00c';

//Get the date
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction() {
  // get user input values
  const newZip = document.getElementById('zip').value;
  const content = document.getElementById('feelings').value;

  getWeather(baseURL, newZip, apiKey)
    .then(temperatureData => {
      // add data to POST request
      postData('/add', { date: newDate, temp: temperatureData.main.temp , content })
    })// call updateUI to update browser content
    .then(updateUI)
}

/* Function to GET Web API Data*/
const getWeather = async (baseURL, newZip, apiKey) => {
  // res equals to the result of fetch function
  const res = await fetch(baseURL + newZip + '&appid=' + apiKey + '&units=metric');
  try {
    // userData equals to the result of fetch function
    const userData = await res.json();
    console.log(userData)
    return userData;
  } catch (error) {
    console.log("Error in getting Data ", error);
  }
}

/* Function to POST data */
const postData = async (url = '', data = {}) => {
  const req = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      date: data.date,
      temp: data.temp,
      content: data.content
    })
  })
};


const updateUI = async () => {
  const request = await fetch('/all');
  try {
    const allData = await request.json()
    // show icons on the page.
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('temp').innerHTML = Math.round(allData.temp) + ' Degree in Celsius ';
    document.getElementById('content').innerHTML = allData.content;
  }
  catch (error) {
    console.log("error", error);
  }
};