let data
let city = 'istanbul'

fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=0a37e45a7316753630171c74608e2160&units=metric&lang=tr')
    .then(res => {
        return res.json()
    })
    .then(function(res){
        console.log(res)
        // document.querySelector('#desc').innerHTML = res.weather[0].description
        document.querySelector('#city').innerHTML = res.name
        document.querySelector('#temp').innerHTML = Math.round(res.main.temp)
        document.querySelector('#feelsLike').innerHTML = res.main.feels_like
        document.querySelector('#wind').innerHTML = res.wind.speed
        document.querySelector('#pressure').innerHTML = res.main.pressure
        // <i class="wi wi-night-sleet"></i>
        document.querySelector('#main-icon').innerHTML = '<i style="font-size: 70px;color: #23b3db;" class="wi wi-owm-' + res.weather[0].id +'"></i>'
        let date = new Date(res.dt * 1000)
        date = date.toString()
        let tarih = date.split(' ')
        let today = tarih[2] + ' ' + tarih[1] + '/' + tarih[3]
        console.log(today)
        document.querySelector('#day').innerHTML = tarih[0]
        document.querySelector('#date').innerHTML = today
    })

    
function getData(sehir){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + sehir + '&appid=0a37e45a7316753630171c74608e2160&units=metric&lang=tr')
    .then(res => {
        return res.json()
    })
    .then(function(res){
        // console.log(res)
        // document.querySelector('#desc').innerHTML = res.weather[0].description
        document.querySelector('#city').innerHTML = res.name
        document.querySelector('#temp').innerHTML = Math.round(res.main.temp)
        document.querySelector('#feelsLike').innerHTML = res.main.feels_like
        document.querySelector('#wind').innerHTML = res.wind.speed
        document.querySelector('#pressure').innerHTML = res.main.pressure
        // <i class="wi wi-night-sleet"></i>
        document.querySelector('#main-icon').innerHTML = '<i style="font-size: 70px;color: #23b3db;" class="wi wi-owm-' + res.weather[0].id +'"></i>'
        let date = new Date(res.dt * 1000)
        date = date.toString()
        let tarih = date.split(' ')
        let today = tarih[2] + ' ' + tarih[1] + '/' + tarih[3]
        console.log(today)
        document.querySelector('#day').innerHTML = tarih[0]
        document.querySelector('#date').innerHTML = today


    })
}
    