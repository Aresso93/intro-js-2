// // FUNZIONI------------------------------------------

// function square( specialNumber ){
//     const result = specialNumber * specialNumber;
//     return result;
// }

// function logUppercase(stringToLog){
//     const uppercaseString = stringToLog.toUpperCase()
//     console.log(uppercaseString);
// }

// function gentleAllert(){
//     alert('caro amico, non vorrei farmi gli affari tuoi, ma sarà il caso che ti metti a studiare!')
// }

// function logMultipleTimes(stringToLog, times){
//     for (let i = 0; i < times; i++) {
//         console.log(stringToLog);     
//     }
// }

// function isEven(number){
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const pluto = isEven(27);

// console.log (pluto);

// function pow(base, exponent){
//     const result = base ** exponent;
//     return result;
// }

// const output = pow (2, 3);

// console.log (output)

// function lastCharUpperCase(selectedString){
//     const char = selectedString[selectedString.length - 1];
//     const charUpperCase = char.toUpperCase();
//     return charUpperCase;
// }


// const steve = lastCharUpperCase('steve');

// console.log (steve)

// //pippo  l=5
// //01234

// //clarabella  l=10
// //0123456789



// const pippo = square(16);

// console.log(pippo);

// logUppercase('viva le funzioni!')

// gentleAllert();

// logMultipleTimes('pizza', 100)

// 

// console.log(pluto);

// const paperino = pow(2, 10);

// console.log(paperino);

// const gastone = lastCharUpperCase('genova');

// console.log(gastone)


// SINTASSI ALTERNATIVE

// function square(number) {
//     // const result = number * number;
//     // return result;
//     return number * number;
// }

// const superSquare = square;

// console.log(square(3));
// console.log(superSquare(12));


// const square2 = function(number){
//     const result = number * number;
//     return result;
// } // anonymous function

// console.log(square2(10));

// const square3 = (number) => {
//     const result = number * number;
//     return result;
// } // lambda function (arrow function);

// console.log(square3(4));

// const square4 = number => number * number;

// const pow = (base, exponent) => base ** exponent;

// console.log(square4(8));

// console.log(pow(4, 3));

// PARAMETRI----------------------

// function logParameters(parameter1, parameter2){
//     console.log('parametro 1', parameter1);
//     console.log('parametro 2', parameter2);
// }
// logParameters('pippo', 5);

// logParameters(27);

// logParameters();

// function pow(base, exponent){

//     if (base === undefined) {
//         return "che cavolo stai facendo?!?!"
//     }
    
//     if (exponent !== undefined) {
//         const result = base ** exponent;
//         return result;
//     } else {
//         const result2 = base ** 2;
//         return result2;
//     }
// }

// const pippo = pow(4, 4);

// console.log(pippo);

// const pluto = pow(4);

// console.log(pluto);

// const paperino = pow();

// console.log(paperino);

// VALORI DI DEFAULT---------------------


// function pow(base, exponent = 2) {
//   const result = base ** exponent;
//   return result;
// }

// console.log(pow(5, 3));

// console.log(pow(5));


// const startingString = '11';


// const startingNumber = parseInt(startingString, 2);

// console.log(startingString, typeof startingString);

// console.log(startingNumber, typeof startingNumber);


//1) definire una funzione 'pow' 
//   che non faccia uso dell' operatore '**'
//   ne della libreria Math

// function pow (b, e) {
//     const result = (b * b * b);
// }



// pow (3, 4)

//base * base esponente volte

// function pow(base, exponent){
//     const result = base ** exponent;
//     return result;


//2) definire una funzione 'correctCase' che
//   prende in input una stringa e la restituisce
//   trasformando la prima lettera in maiuscolo

// 'la casa blu' => 'La casa blu'


//3) defininire una funzione 'min' che dati due numeri
//   restituisca il minore

//SONO TROPPO BASATO FUNZIONA

function min (firstNumber, secondNumber) {
    if (firstNumber < secondNumber) {
        return firstNumber;
    } else {
        return secondNumber;       
    }
    
}

min (38, 56);

console.log (min (6, 12));

//4) definire una funzione 'clamp' che prende come parametri
//   tre numeri: valore, massimo e minimo.
//   se valore è minore di minimo, restituisce minimo
//   se valore è maggiore di massimo, restituisce massimo
//   altrimenti restituisce valore

//   v=12, min=20, max=100 => 20
//   v=5, min=0, max=3 => 3
//   v=10, min=1, max=100 => 10 

//5) definire una funzione chessboard che prende come parametro
//   'size' e stampa la scacchiera 

//6) definire una funzione 'ellipse' che prende come parametro una stringa
//   se la stringa è minore di 20 caratteri la ritorna non modificata
//   altrimenti la taglia a 20 caratteri e aggiunge 3 puntini

//   'ciao mamma!' => 'ciao mamma!'
//   'nel mezzo del cammin di nostra vita' = 'nel mezzo del cammin...'




// function ellipse (longString = prompt, limit = 20) {
//         return longString.substring(0, limit);
    
//     }

    

let longString = prompt ('scrivimi qualcosa');

function ellipse (longString = ' ', limit = 20) {

if (longstring.length > 20) {
    return longString.substring(0, limit) + '...';
} else {
    return longString;
}

}

ellipse (longString);


// console.log (ellipse('In the first age, in the first battle, when the shadows first lengthened... one stood, burnt by the embers of Armageddon') + '...') 

// function limit (string = '', limit = 0) {  
//     return string.substring(0, limit)
//   }
  
//   const greeting = limit('Hello Marcus', 6)  

  
//   const greeting = limit('Hello Marcus', 100) 


//7) definire una funzione reverseString che data una stringa
//   la restituisca al contrario

//   'casa rosa' => 'asor asac'


// function reverseString ()


//PURE QUESTO LET'S GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

function clamp (valore, massimo, minimo) {

    if (valore < minimo) {
        return minimo;
    } else if (valore > massimo) {
        return massimo;
    }
    else { 
        return valore;
    
    }
    }
    
    
    console.log (clamp (10, 100, 1));
