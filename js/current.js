let data
let city = 'eskişehir'

fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=0a37e45a7316753630171c74608e2160&units=metric&lang=tr')
    .then(res => {
        return res.json()
    })
    .then(function(res){
        // console.log(res)
        document.querySelector('#desc').innerHTML = res.weather[0].description

    })