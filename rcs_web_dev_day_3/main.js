var someNumber = 123; // integer
var someDecimal = 3.14; // float
var someWord = 'Hello world'; // string '' "" ``
var someTrue = true; // boolean (bool)
var someNothing = null; // null 

var someArray = ['var', 
'zaz', 
'gaz',
'maz', 
'bmw', 
1, 
3.14, 
true,
]; // array
// var i = 1;

var johnny = {
    name: 'Johnny',
    surname: 'Doe',
    fullName: 'Johnny Doe',
    age: '21',
}; // object

// console.log(johnny.fullName);

// var i = 1;
// console.log(i);
// i = 2;
// console.log(i);
// i = 'foo';
// console.log(i);

// var i = 'foo';
// console.log(i);
// i = 'bar';
// console.log(i);
// i = 'baz';
// console.log(i);
// i = 1;
// console.log(i);
// i = 2;
// console.log(i);
// i = 3;
// console.log(i);

// + 
// - 
// *
// /
// %

// var number1 = 2;
// var number2 = 4;
// console.log(1 + 1);
// console.log(2 + 2 * 2);
// console.log(number1 + number2);
// console.log(number1 + 3);
// var number3 = number1 - number2;
// console.log(number3);
// console.log((2 + 2) * 2); // 8
// console.log(2 + 2 * 2);
// number1 = number1 + 1;
// number1 += 2;
// number1++; //pieskaita 1 konkretajam mainigajam
// number1--; //atnem 1
// console.log(number1);

// console.log(1 / 0); //infinity

// console.log(5 % 2);

// console.log('foo ' + 'bar');
// console.log(1 + '1');
// console.log('1' + 1);

// == ir vienads
// != nav vienads
// >
// <
// >=
// <=
// === strict comparison (equal) piem.1 === true nebuus patiess, jo 1 ir skaitlis, bet true ir cits tips
// !== strict comparison (not equal)


// if (1 === true) {
//     console.log('was true');
// } else {
//     console.log('was not true');
// }


// uzdevums
// // anna => Čau, Anna, Jānis => Whats up Jānis, anything else => Nepazīstu tevi


// var name = 'Kārlis';
// if (name == 'Anna') {
//     console.log('Čau Anna');
// } else if(name == 'Jānis') {
//     console.log('Whats up Jānis')
// }  else {console.log('Nepazīstu tevi');
// }

// var a = 1;
// var b = 2;
// var c = 3;

// // && = and
// // || = or
// if (a == 2 && (b == 3 || c == 3) { // ja ifaa ir gan and gan or, tad or dalju parasti ieraksta iekavaas

// }

// var name = 'Jānis';
// // Jānis vai Kārlis, vai Zane -> Čau zināmais cilvēk
// // else -> Nepazīstu Tevi

// if (name == 'Jānis' 
//     || name == 'Kārlis' 
//     || name == 'Zane'
// ) {
//     console.log('Čau zināmais cilvēk');
// } else {console.log('Nepazīstu Tevi');
// }


// var name = 'Kārlis';
// switch (name) {
//     case 'Jānis':
//     console.log('Čau zināmais cilvēk');
//     break;          //break statement
//     case 'Kārlis':
//     console.log('Čau zināmais cilvēk');
//     break;
//     case 'Zane':
//     console.log('Čau zināmais cilvēk');
//     break;
//     default:
//     console.log('Nepazīstu Tevi');
// }

// var i = 0;
// while (i < 10) {
//     if (i < 5) {
// console.log(i);
// }
// i++;
// }
// console.log(i);

// var a = 0;
// while (a < 20) {
// if (a % 2 == 0) {
//     console.log(a);
//     }
//     a++;
// }
// console.log(a);

// var i = 0;
// while (i < 20) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i++;
// }

// i = 0;
// while (i < 20) {
//     console.log(i);
//     i += 2;
// }

// var i3 = 20;
// while (i3 >= 0) {
//     i3--;
//     console.log(i3);
// }

// var i = 0;
// while (i < 20) {
//     if (i == 5) {
// break; //paartrauc, kad sasniedz 5
//     }
//     console.log(i);
//     i++;
// }


// var i = 0;
// while (i < 20) {
//     i++;
//     if (i == 5) {
// continue; //turpina / atkaarto
//     }
//     console.log(i);
    
// }

// var i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 20); //do while izmanto retaak

// for (var i = 0; i < 20; i++) {
//     console.log(i);
// } // biezhi izmanto, lai skaitiitu

// for (var i = 20; i > 0; i--) {
//     console.log(i);
// }

// var cars = ['vaz', 'gaz', 'zaz', 'maz', 'uaz', 'bmw'];
// for (var index = 0; index < cars.length; index++) {
//     var car = cars[index];
//     console.log(cars[5]);
// }

// var cars = ['vaz', 'gaz', 'zaz', 'maz', 'uaz', 'bmw'];
// for (var index = 0; index < cars.lenght; index++) {
//     var car = cars[index];
//     console.log(car);
// }

// var cars = ['vaz', 'gaz', 'zaz', 'maz', 'uaz', 'bmw'];
// for (var index = 0; index < cars.length; index++) {
//     var car = cars[index];
//     if (index == 2) {
//     console.log(car);
// }
// }

// var cars = ['vaz', 'gaz', 'zaz', 'maz', 'uaz', 'bmw'];
// for (var index = 0; index < cars.length; index++) {
//     var car = cars[index];
//     if (index != 2) {
//     console.log(car);
// }
// }

// var cars = ['vaz', 'gaz', 'bmw'];
// var superCar = 'gaz';
// for (var index = 0; index < cars.length; index++) {
//     var car = cars[index];
//     if (car == superCar) {
//     console.log(car);
//     }
// }

// function addTwoNumbers (number1, number2) {
//     return number1 + number2;
// }

// console.log(addTwoNumbers(2, 3));



// addTwoNumbers(2, 3);
// function addTwoNumbers (number1, number2) {
//    var sum = number1 + number2;
//    console.log(sum);
// }

// console.log(addTwoNumbers(2, 3));


// function greetPerson (name, age) {


//     console.log('Čau ' + name + ', Tev ir ' + age + ' gadi!'); }
//     greetPerson('Kārlis', 50);
//     greetPerson('Anna', 34);
//     greetPerson('Jānis', 51);

// Fizz Bazz
// Uzrakstīt programmu, kas izskaita no 0 līdz 30.
// Ja skaitlis dalās bez atlikuma ar 2 (ir pāra skaitlis), tad izdrukā vārdu "Fizz"
// Ja skaitlis dalās bez atlikuma ar 3, tad izvada "Bazz"
// Ja bez atlikuma dalās ar abiem, tad izvada "Fizz Bazz"
// Ja nedalās bez atlikuma ar nevienu, tad izvada skaitli

//  for vai while cikls, ciklaa nosacijumi, mainiigais,vairaaki ifi

// var i = 0;
// while (i < 30) {
//     console.log(i);
//    i++;
//    if (i % 2 == 0) {
//     console.log('Fizz');
// }
// if (i % 3 == 0) {
//     console.log('Bazz');

// if 
// }
//     }

// for (var i = 0; i < 30; i++)
// {
//     if (i % 2 == 0) 
//         console.log('Fizz');
//     else if (i % 3 == 0)
//         console.log('Bazz');
//     else if (i % 2 == 0 || i % 3 == 0) //???????????????????
//         console.log('Fizz Bazz'); 
//     else
//         console.log(i);
// }   

// for (var i = 0; i  <= 30; i++) {
//     if (i % 2 == 0 && i % 3 == 0) {
//         console.log('Fizz Bazz');
//     } else if (i % 3 == 0) {
//         console.log('Bazz');
//     } else if (i % 2 == 0) {
//         console.log('Fizz');
//     } else {
//         console.log(i);
//     }
// }

// for (var i = 0; i  <= 30; i++) {
//     var output = '';
//     if (i % 2 == 0) {
//        output = 'Fizz ';
//     }
//     if (i % 3 == 0) {
//         output += 'Bazz';
//     }
//     if (output == '') {
//         output = i;
//     }

//     console.log(output);
// }

//-----------------------------------

