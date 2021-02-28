// let degisken = "Merhaba Eren"

// Aritmatiksel Operatörler
//  + , - , * , /, % 
// Atama Operatörleri
//  =, +=, -=, *=, /=, %=
// Karşılaştırma Operatörleri
//  ==, !=, ===, <, <=, >, >=

// let bir = '13'
// let iki = 13

// console.log(bir === iki)

// ve (&&), veya (||), değil !

// console.log(((1 == 1) || (1 > 2)) && !(1 > 10))

// console.log('Hello World!')

// console.log('Burası master dalı')

// // yeni özellikle ilgili....


// console.log('Burası da yeniOzellik dalı')
// 
//
// özellik tamamlandı ve test edildi.

// MAth Metodları

// let x, y

// x = 2
// y = 3

// let sonuc = Math.random()
// sonuc = sonuc * 1000
// sonuc = Math.round(sonuc)
// document.write(sonuc)


// String Metodları


// let meyve = "Elma, Armut"



// let yeniMeyve = meyve + ', Muz, Karpuz, Kavun ,' + meyve  + ', Çilek'
// yeniMeyve = meyve.concat('....')

// let isim = 'Abdullah'
// isim = isim.slice(0,5)

// console.log(isim)

// let haber = "Habe Sitesi"

// console.log(haber.search('Mahmut'))

// Date Metodları

// let tarih = new Date()

// let gun = tarih.getDate() + '/' + (tarih.getMonth() + 1) + '/' + tarih.getFullYear()
// let saat = tarih.getHours() + ':' + tarih.getMinutes()
// let unix_timestamp = 1549312452
// let unix = new Date(unix_timestamp * 1000)

// console.log('Unix: ' + unix.getUTCFullYear())

// console.log(saat)

// document.write('Merhaba, ' + gun + ' - ' + saat)

// let kontrol

// 20 > 30 ? kontrol = 'Doğru' : kontrol = 'Yanlış'


// console.log(`What ${kontrol}`)


// let numbers = [3,2,1, 1071,  56, 98, ] 

// let text = ['C++', 'Java', 'Python']
// let result = 13
// // console.log(numbers)

// // for(let i=0; i<numbers.length;i++){
// //     let item = '<div style="color: #ff3366"><h3>' + numbers[i] + '</h3></div>';
// //     document.writeln(item)
// // }

// numbers.map(function(item){
//     document.writeln(item * item)
// })

// if(Array.isArray(numbers)){
//     numbers.map(function(item){
//         document.writeln(item * item)
//     })
// }
// else{
//     console.log('hata')
// }

// // text.forEach((item) => {
// //     console.log(item)
// // })
// console.log(numbers)

// // result = numbers.sort()

// console.log(Array.isArray(result))
let city = {
    'isim': 'Eskişehir',
    'nufus': 1300000,
    'yuzolcumu': 4600000,
    'egitim': 'lise',
    'hesapla': function(){
        return this.nufus / this.yuzolcumu
    }
}
console.log(city.hesapla())

