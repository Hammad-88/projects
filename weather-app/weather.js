
let searchbox=document.querySelector('#place')
let btn = document.querySelector('.btn')
console.log(searchbox)
console.log(btn)
const apiKey = '8e35ad4765a2dd93a8c88b0d0637b31a'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
async function weatherinfo(city){
    try {
        let response = await fetch(apiUrl + city + `&appid=${apiKey}`)
        let data = await response.json()
        console.log(data)
        const cityname = data.name;
        const temperature = data.main.temp;
        const weather = data.weather[0].description;
        console.log(weather)
        console.log(cityname)
        console.log(temperature)

       document.querySelector('.hea h2').innerHTML = `City : ${cityname}`
       document.querySelector('.hea h3').innerHTML = `Temperature : ${temperature}°C`
       document.querySelector('.hea h4').innerHTML = `weather : ${weather}`

    } catch (error) {
        console.log(error)
    }
}

btn.addEventListener('click',()=>{
    weatherinfo(searchbox.value)
})
