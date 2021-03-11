// function one(callback){
//     setTimeout(() => {
//         console.log('Hello')
//         callback()
//     }, 5000);
// }

// function two(){
//     console.log('World!')
// }

// one(two)

// function addThree(number){
//    let result  = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(typeof number === 'number')
//                 resolve(number + 3) // return
//             else{
//                 reject(new Error('Lütfen bir sayı girin!')) // return
//             }
//         }, 3000);
//    })
//    return result
// }

// addThree(7)
// .then(res => {
//     console.log(res)
//     return res + 2
// })
// .then(res2 => console.log(res2))

// .catch(err => console.log(err))



// function merhaba(){
//     console.log('Hello World!')
// }

// merhaba = (key, number) => {
//     for(let i=0;i<number;i++)
//         console.log(key)
// }

// merhaba('Merhaba', 10)

// console.log(i)


console.log(this)

let car = {
    marka: 'BMW',
    motor: '2.0',

    tellMarka: function(){
        console.log(this)
    }
}


car.tellMarka()






