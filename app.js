function foo(){
    var number = 3;
    function foo2(){
        return number
    }
    return foo2 // bu scope kapı aralıyoruz
}

var test = foo() // kapıyı açıyoruz

console.log(test());

let student = {
    yas: 17,
    yasKac: function (){
        console.log(this.yas)
    }
}

for(var i=0; i<10; i++){
    console.log(i)
}


for(var i=11; i>1; i--){
    console.log(i)
}

const pi = 3.14;

// pi = pi * 3



const car = {
    marka: 'BMW',
    motor: '2.0'
}

car.marka = 'Mercedes'
console.log(car)




// GB eğer bir değişkenin işi işi bittiyse veya başka bir fonsiyona referans edilmediyse siler!