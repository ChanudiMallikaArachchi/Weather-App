  const sbtn = document.querySelector("#btn");

  sbtn.addEventListener("click",inputcity);

  function inputcity(){
    
    let country = document.getElementById('city').value;
    const apiKey = "0b7ff76700fe41a5bf685712242511";
    const url = `http://api.weatherapi.com/v1/current.json?key=0b7ff76700fe41a5bf685712242511&q=` + country + `&aqi=no` ;

    fetch(url) // Use the dynamically created URL
    .then(response => response.json())
    .then(data => {

       //Set Temperature
      document.getElementById("todaytemp").innerHTML = data.current.temp_c+"<sup>o</sup>C";
      document.getElementById("todaytemp1").innerHTML = data.current.temp_c+"<sup>o</sup>C";

    
       //Set Weather Discription
      document.getElementById("todaywe").innerHTML = data.current.condition.text;
      document.getElementById("todaywe1").innerHTML = data.current.condition.text;


       //Set Location(city/country)
      document.getElementById("todaycou").innerHTML = data.location.name;

       //Set Weather Icon
      const iconUrl = "https:" + data.current.condition.icon;
      document.getElementById("todayicon").src = iconUrl; 
      document.getElementById("todayicon1").src = iconUrl; 

    })
    .catch(error => console.error("Error fetching current weather:", error));


    //-----------------------------------------Tomorrow weather-----------------------------------------//
  const url2 = "http://api.weatherapi.com/v1/forecast.json?key=0b7ff76700fe41a5bf685712242511&q= "+ country + "&days=3&aqi=no&alerts=no";

  fetch(url2)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      // Extract tomorrow's weather
      const tomorrow = data.forecast.forecastday[1]; // Index 1 is for tomorrow
      const tempDay = tomorrow.day.avgtemp_c;
      const weatherDescription = tomorrow.day.condition.text; // Weather description
  
      
      document.getElementById("Ttemp").innerHTML = tempDay+"<sup>o</sup>C";

        //Set Weather Discription
      document.getElementById("Tdesc").innerHTML = weatherDescription;
  
         //Set Weather Icon
      const iconUrl = "https:" + tomorrow.day.condition.icon;
      document.getElementById("Ticon").src = iconUrl;


    })
    .catch(error => console.error("Error fetching forecast weather:", error));


//----------------------------------yesterday weather-----------------------------------------//
/*
// Get today's date
const today = new Date();

// Clone today's date and subtract 1 day
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);

// Format the date as "YYYY-MM-DD"
const year = yesterday.getFullYear();
const month = String(yesterday.getMonth() + 1).padStart(2, '0'); // Months are 0-based
const day = String(yesterday.getDate()).padStart(2, '0');

// Combine into "YYYY-MM-DD" format
const yesterdayDate = "${" +year+ "}-${" +month+ "}-${" +day+ "}";

// Build the API URL
const url3 = "http://api.weatherapi.com/v1/history.json?key=${0b7ff76700fe41a5bf685712242511}&q=${" +country+ "}&dt=${" +yesterdayDate+ "}";

// Fetch Yesterday's Weather
fetch(url3)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    // Extract yesterday's weather
    const yesterdayWeather = data.forecast.forecastday[0]; // Index 0 is for yesterday
    const tempDay = yesterdayWeather.day.avgtemp_c; // Average temperature in Celsius
    const weatherDescription = yesterdayWeather.day.condition.text; // Weather description
    const iconUrl = "https:" + yesterdayWeather.day.condition.icon; // Weather icon URL

    // Update HTML Elements
    document.getElementById("Ytemp").innerHTML = tempDay + "<sup>o</sup>C";
    document.getElementById("Ydesc").innerHTML = weatherDescription;
    document.getElementById("Yicon").src = iconUrl;
  })
  .catch(error => console.error("Error fetching yesterday's weather:", error));
*/

const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const YDate = yesterday.toISOString().split('T')[0]; // Format as YYYY-MM-DD

const url3 = "http://api.weatherapi.com/v1/history.json?key=0b7ff76700fe41a5bf685712242511&q=" +country+ "&dt=" +YDate;

fetch(url3) // Use the dynamically created URL
    .then(response => response.json())
    .then(data => {

       //Set Temperature
      document.getElementById("Ytemp").innerHTML = data.forecast.forecastday[0].day.avgtemp_c+"<sup>o</sup>C";
    
       //Set Weather Discription
      document.getElementById("Ydesc").innerHTML = data.forecast.forecastday[0].day.condition.text;

       //Set Weather Icon
      const iconUrl = "https:" + data.forecast.forecastday[0].day.condition.icon;
      document.getElementById("Yicon").src = iconUrl; 

    })
    .catch(error => console.error("Error fetching current weather:", error));

  }