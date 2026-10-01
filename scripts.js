const apiKey = "5c6e21d043c582da0b256f1f61a35ebc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weathericon = document.querySelector(".weather-icon")

async function CheckWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }
    var data = await response.json();



    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        weathericon.src = "images/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        weathericon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Rain") {
        weathericon.src = "images/Rain.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
        weathericon.src = "images/mist.png"
    }

    document.querySelector(".weather").style.display="block";

}

searchbtn.addEventListener("click", () => {
    CheckWeather(searchbox.value);
})
