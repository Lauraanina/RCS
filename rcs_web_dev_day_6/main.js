// function foo(a, b) {
//     return a + b;
// }
// console.log(foo(1,2));

// function bar(a, b) {
//     console.log(a + b);
// }
// bar(1, 2);

// isEven
// true / false

// function isEven(number) {
//     if (number % 2 == 0) {
//    return true;
// } else {
//     return false;
// }
// }
// console.log('number 2 is even ' + isEven(2));
// console.log('number 3 is even ' + isEven(3));
// console.log('number 4 is even ' + isEven(4));
// console.log('number 5 is even ' + isEven(5));
// console.log('number 2232342345 is even ' + isEven(2232342345));
// //-----------------------

// function isEven(number) {
//     if (number % 2 == 0) {
//    return true;
// } 
//     return false;

// }
// console.log('number 2 is even ' + isEven(2));
// console.log('number 3 is even ' + isEven(3));
// console.log('number 4 is even ' + isEven(4));
// console.log('number 5 is even ' + isEven(5));
// console.log('number 2232342345 is even ' + isEven(2232342345));
//---------------
// function isEven(number) {
//    return number % 2 == 0;
 
// } 
// console.log('number 2 is even ' + isEven(2));
// console.log('number 3 is even ' + isEven(3));
// console.log('number 4 is even ' + isEven(4));
// console.log('number 5 is even ' + isEven(5));
// console.log('number 2232342345 is even ' + isEven(2232342345));
//-------------


// function isEven(number) {
//     return number % 2 == 0 ? 'is even' : 'is odd';
//                         // saiisinaats if else statements
// }
// console.log('number 2 ' + isEven(2));
// console.log('number 3 ' + isEven(3));
// console.log('number 4 ' + isEven(4));
// console.log('number 5 ' + isEven(5));
// console.log('number 2232342345 ' + isEven(2232342345));
//------------------------

// function fizzBazz(number) {

//     if (number % 2 == 0) {
//         return 'Fizz';
//     } if (number % 3 == 0) {
//         return 'Bazz';
//     } if (number % 2 == 0 && number % 3 == 0) {
//         return 'Fizz Bazz';
//     } return number;
// }
// console.log(fizzBazz(5));
// console.log(fizzBazz(6));
// console.log(fizzBazz(15));
// console.log(fizzBazz(10));
//------------------------------------------

function fizzBazz(number) {
var output = '';
    if (number % 2 === 0) {
        output = 'Fizz ';
    }
    if (number % 3 === 0) {
        output += 'Bazz';
    }
    if (output === '' ) {
        output = number;
    } 
    return output;
}
// console.log(fizzBazz(6));
//??--------------------------------------------

// var foo = function(){

// }                       //mainiigais, kas ir funkcija (nelieto loti biezi)

// var isEven2 = function(number){
// return number % 2 == 0 ? 'is even' : 'is odd';
// } 
// console.log('number 2 ' + isEven2(2));
// console.log('number 3 ' + isEven2(3));
// console.log('number 4 ' + isEven2(4));
// console.log('number 5 ' + isEven2(5));
// console.log('number 2232342345 ' + isEven2(2232342345));

var cat = {
    name: 'Muris',
    hunger: 10,
    feed: function() {
        this.hunger--;
    }
}
console.log(cat);
cat.feed();
cat.feed();
cat.feed();
cat.feed();
cat.feed();
console.log(cat);

//---------------

console.log(Math.pow(2, 3)); // divnieku kaapina 3. pakaapee //iebuuveeta js funkcija, saakas ar lielo burtu as in Math

console.log(Math.ceil(1.12242));

// var now = new Date();
// console.log(now); //izdrukaa UTC - universal time sth


// var foo = 'var';
// console.log(foo.length);

// console.log(foo.split(''));

// 1. jāuztaisa funkcija, kas kā parametru saņem vienu vārdu un atgriež šo vārdu spoguļrakstā.
// 2. uztaisīst funkciju, kas kā parametru saņem tekstu un atgirež true / false, vai šis teksts in palindroms

// function palindrome(word) {
//     return true;
 
// }
// console.log(palindrome.split('').reverse().join(''));
// palindrome(berry);

function reverseWord(word) {
//     var wordSplitted = word.split('');
// console.log(wordSplitted);
// var reverseArray = wordSplitted.reverse();
// console.log(reverseArray);
// var joinedArray = reverseArray.join('');
return word.split('').reverse().join('');

}
// console.log(reverseWord('Jānis'));
// console.log(reverseWord('Liga'));
// console.log(reverseWord('alus ari ira sula'));

function isPalindrome(word) {
    return word == reverseWord(word);

}
console.log(isPalindrome('Liga'));
console.log(isPalindrome('eye'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('alus ari ira sula'));

//---------------------------------------------------------------
