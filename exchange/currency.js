let rates = null
let amount = document.querySelector('#amount')
let firstCurr = document.querySelector('#firstCurrency')
let secondCurr = document.querySelector('#secondCurrency')

function eventListeners(){
    // inputa her giriş yapıldığında tetiklenecek
    amount.addEventListener("input", hesapla)

    // birinci select değiştiğinde tettiklenecek
    firstCurr.onchange = function(){
        getData(this.value)
        .then(data => {
            rates = data
            hesapla()
            document.getElementById('outputFirst').innerHTML = this.value
        })
        
    }

    // ikinci select değiştiğinde tettiklenecek
    secondCurr.onchange = function(){
        hesapla()
        document.getElementById('outputSecond').innerHTML = this.value
    }

    // döküman tamamen yüklendiğinde 
    document.addEventListener("DOMContentLoaded", function(event){
        getData(firstCurr.value)
        .then(res => {
            console.log(res)
            rates = res
        })
    })
}

// olay dinleyici fonksiyon en az bir kez çalışıyor
eventListeners()


// veriyi servisten çeken fonksiyon
async function getData(base){
    let promise = new Promise((resolve, reject) => {
        fetch("https://api.exchangeratesapi.io/latest?base=" + base )
        .then(response => response.json())
        .then(data => { resolve(data.rates)})
    })
    const sonuc = await promise
    return sonuc
}


// kullanıcın girdiği değer ve seçtiği kur bilgilerine göre hesap yaparak sonucu yazan fonksiyon
function hesapla(){
    let calculated = amount.value * rates[secondCurr.value]
    document.querySelector('#outputResult').value = calculated.toFixed(2)
}


const car = {
    marka: "BMW",
    motor: '2.0',

}

car.marka = "Mercedes"



