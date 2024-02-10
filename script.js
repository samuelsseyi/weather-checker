const apiKey = "308b780e1a7653426dc43fe146ea7ebd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("searchBox")
const searchButton = document.getElementById("searchButton")



async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();


  console.log(data);
  document.getElementById("country").innerHTML = data.sys.country
  document.getElementById("temp").innerHTML = `${data.main.temp}⁰c`
  document.getElementById("weatherCondition").innerHTML = data.weather[0].description

}

searchButton.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})

checkWeather();

// Current Time Code


  let time = new Date().toLocaleTimeString()
  currentTime.innerHTML = time
