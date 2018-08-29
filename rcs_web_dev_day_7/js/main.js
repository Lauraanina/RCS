function buttonClick() {
    //   var element = document.getElementById('some-paragraph');
    var element = document.querySelector('#some-paragraph');
    //   console.log(element.innerHTML); //ja grib manipulet ar html, izmanto so
    //   console.log(element.innerText); //ja grib manipulet ar tekstu, izmanto sho
    if (element.innerText == 'foo') {
        element.innerText = 'bar';

    } else {
        element.innerText = 'foo';
    }

}
// setTimeout(buttonClick, 2000); //2000 milisekundes
// setInterval(buttonClick, 500);

// console.log(document.querySelectorAll('.other-paragraph'));
// console.log(document.querySelector('.other-paragraph').innerText);

function checkParagraphContent() {
    var elements = document.querySelectorAll('.other-paragraph');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var number = i + 1;
        if (element.innerText == 'foo ' + number) {
            element.innerText = 'bar ' + number;

        } else {
            element.innerText = 'foo ' + number;
        }
    }


}

function add(number) {
    var element = document
        .getElementById('number');
    var currentValue = parseInt(element.innerText);
    element.innerText = currentValue + number;
}
var count = 0; //globaalais mainiigais
function addCount() {
    count++;
    document
        .getElementById('counter')
        .innerText = count;
}

//--------ANAGRAMMA---------------------

// uzrakstīt funkciju, kas saņem kā parametrus divus vārdus vai 
//frāzes un atgriež true / false, vai šīs frāzes ir anagrammas


//------------------lekcijas variants------------------

// function isAnagram(str1, str2) {
//     str1 = str1.replace(' ', '').split('').sort().join('')
//     str2 = str2.replace(' ', '').split('').sort().join('')
//     return str1 == str2;
// }
// console.log('sula ' + isAnagram('sula', 'alus'));
// console.log('mobil ' + isAnagram('mobil', 'limbo'));
// console.log('aaa ' + isAnagram('a a b', 'a b b a'));
// console.log('random ' + isAnagram('aasdad', 'fghgj'));

// }

// function changeWord2() {
//     var element = document.getElementById('bar');

//     if (element.innerText == 'bar') {
//         element.innerText = 'foo';

//     } else {
//         element.innerText = 'bar';
//     }
// }

//     function changeWord() {
//         var element = document.getElementById('some-button');
    
//         if (element.innerText == 'bar') {
//             element.innerText = 'foo';
    
//         } else if (element.innerText == 'foo') { 
//             element.innerText = 'baz';
//         } else {
//             element.innerText = 'bar';
//         }
// }

//------------------------------------

function changeWord2() {
    var element = document.getElementById('bar')
    if (element.innerText == 'bar') {
        element.innerText = 'foo';
    } else {element.innerText = 'bar'}
}

function changeWord() {
    var element = document.getElementById('some-button')
    if (element.innerText == 'bar') {
element.innerText = 'foo';
    } else if (element.innerText == 'foo') {
        element.innerText = 'baz';
    } else {
        element.innerText = 'bar';
    }
}