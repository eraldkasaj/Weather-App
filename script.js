
const apiKey = "adc2740c7ed768a9e88a7411361bd4c3"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const searchBtn = document.querySelector('.search button')
const inputSearch = document.querySelector('.search input')
const weatherImg = document.querySelector('.weather-icon')

 

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`)

    if(response.status == 404 || response.status == 400) {
        document.querySelector('.error').style.display='block'
        document.querySelector('.weather').style.display='none'
    }else {
        const data = await response.json()
        console.log(data)
    
        document.querySelector('.city').innerHTML =data.name
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + `°C`
        document.querySelector('.humidity').innerHTML =data.main.humidity + `%`
        document.querySelector('.wind').innerHTML =data.wind.speed + `km/h`
    
        if(data.weather[0].main == 'Clear') {
            weatherImg.src ="/images/clear.png"
        }else if(data.weather[0].main == 'Clouds') {
            weatherImg.src ="/images/clouds.png"
        }else if(data.weather[0].main == 'Rain') {
            weatherImg.src ="/images/rain.webp"
        }else if(data.weather[0].main == 'Drizzle') {
            weatherImg.src ="/images/drizzle.png"
        }

        document.querySelector('.weather').style.display='block'
        document.querySelector('.error').style.display='none'
    }

   
}



searchBtn.addEventListener('click', () => {
    checkWeather(inputSearch.value)
})

