const city = document.querySelector(".cityname")
const btn = document.querySelector('.searchbtn')
const weathericon = document.querySelector('.weather-icon')

const API_KEY = "65e3af85f802fb0263c9603ab6ee536a"
const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

const getweather = async(city) =>{
    const response = await fetch(API_URL + city + `&appid=${API_KEY}`);
    const data = await response.json()

    console.log(data)

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= data.main.temp + "&deg;C";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weathericon.src= "assets/cloudy.png"
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src= "assets/sun.png"
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src= "assets/strom.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src= "assets/rain.png"
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src= "assets/mist.png"
    }
    document.querySelector("#weatherResult").style.display="block";
} 


btn.addEventListener("click",()=>{
    getweather(city.value)
})
