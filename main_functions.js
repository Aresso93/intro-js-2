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

function pow (base, exponent) {

    let result = base;

    for (let i = 1; i < exponent; i++) {
        result = result * base;
    }

    return result;
 }

console.log ('power', pow (3, 4));

// pow (3, 4)

//base * base esponente volte

// function pow(base, exponent){
//     const result = base ** exponent;
//     return result;


//2) definire una funzione 'correctCase' che
//   prende in input una stringa e la restituisce
//   trasformando la prima lettera in maiuscolo

// 'la casa blu' => 'La casa blu'


function correctCase (selectedString) {
    if (selectedString === undefined) {         //se la stringa non è stata definita, ritorna stringa vuota (così capisco che c'è un errore)
        return '';
    }

    const firstChar = selectedString[0];        //qui sto dicendo che il char che voglio è il primo
    const firstCharUpper = firstChar.toUpperCase ();
    const restOfTheString = selectedString.slice(1);           //slice prende tutto quello che c'è dal carattere che gli ho detto in poi. Se gli metto due parametri, taglia da uno all'altro
    const newString = firstCharUpper + restOfTheString;     //abbiamo smontato la stringa per maiuscolarne una parte e l'abbiamo rimontata

    return newString;
}

console.log (correctCase ('viva pippo'));



//3) defininire una funzione 'min' che dati due numeri
//   restituisca il minore

//SONO TROPPO BASATO FUNZIONA (ok, corretto con Andrea ed era giusto)

function min (firstNumber, secondNumber) {
    if (firstNumber < secondNumber) {
        return firstNumber;
    } else {
        return secondNumber;       
    }
    
}

min (38, 56);

console.log ('min', min (6, 12));

//esiste un'alternativa con l'operatore ternario

//const minimum = firstNumber > secondNumber ? secondNumber : firstNumber;
//return minimum;
// dice che se la condizione firstNumber > secondNumber è vera, mi devi stampare secondNumber (primo membro dopo il ?), altrimenti (se è falsa), metti la seconda cosa dopo i :



//4) definire una funzione 'clamp' che prende come parametri
//   tre numeri: valore, massimo e minimo.
//   se valore è minore di minimo, restituisce minimo
//   se valore è maggiore di massimo, restituisce massimo
//   altrimenti restituisce valore

//PURE QUESTO LET'S GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

// function clamp (valore, massimo, minimo) {

//     if (valore < minimo) {
//         return minimo;
//     } else if (valore > massimo) {
//         return massimo;
//     }
//     else { 
//         return valore;
    
//     }
//     }
    
//     console.log ('clamp', clamp (10, 100, 1));

function clamp (value, min, max) {

    if (value < min) {
        return min;
    }

    if (value > max) {
        return max;
    }

    return value;

}    

console.log ('clamp', clamp (10, 100, 1));

//questo è un modo alternativo per scriverla. Quello che succede è che leggere subito il return rende ridondante gli else e fa sì che si possano omettere. Non è necessariamente 
//migliore, ma è più snello e compresso, quello sì. Se il mio codice legge il return, già il return gli dice di smettere di leggere il resto della funzione (quello che rende necessario mettere else if)

//   v=12, min=20, max=100 => 20
//   v=5, min=0, max=3 => 3
//   v=10, min=1, max=100 => 10 

//5) definire una funzione chessboard che prende come parametro
//   'size' e stampa la scacchiera 


//wrappare la griglia dell'altro esercizio in una funzione. Size sarà il parametro della funzione e, richiamando la funzione, uscirà la griglia di quella dimensione

//6) definire una funzione 'ellipse' che prende come parametro una stringa
//   se la stringa è minore di 20 caratteri la ritorna non modificata
//   altrimenti la taglia a 20 caratteri e aggiunge 3 puntini

//   'ciao mamma!' => 'ciao mamma!'
//   'nel mezzo del cammin di nostra vita' = 'nel mezzo del cammin...'


function ellipse (selectedString) {
    if (selectedString.length < 20) {
        return selectedString;
    } else {

        const shortString = selectedString.slice (0, 20);

        const ellipsedString = shortString + '...';
    
        return ellipsedString;
    }

}

console.log ('ellipse', ellipse ('In the first age, in the first battle, when the shadows first lengthened... one stood, burnt by the embers of Armageddon'))

//qui sotto ho fatto una funzione migliorata in cui non siamo più limitati a 20 caratteri, ma abbiamo aggiunto il parametro della size con default a 20 (non è obbligatorio)
//quando la invoco, posso definire il secondo parametro (size) e decidere a quanti caratteri tagliare

function ellipse (selectedString, size = 20) {
    if (selectedString.length < size) {
        return selectedString;
    } else {

        const shortString = selectedString.slice (0, 20);

        const ellipsedString = shortString + '...';
    
        return ellipsedString;
    }

}

console.log ('ellipse', ellipse ('In the first age, in the first battle, when the shadows first lengthened... one stood, burnt by the embers of Armageddon', 3))

//questa versione ha in aggiunta un altro parametro che mi permette di scegiere io che cosa vedere alla fine della stringa, con i tre puntini come default

function ellipse (selectedString, size = 20, endString = '...') {
    if (selectedString.length < size) {
        return selectedString;
    } else {

        const shortString = selectedString.slice (0, 20);

        const ellipsedString = shortString + endString;
    
        return ellipsedString;
    }

}

console.log ('ellipse', ellipse ('In the first age, in the first battle, when the shadows first lengthened... one stood, burnt by the embers of Armageddon', 3, ' blablabla'))

// function ellipse (longString = prompt, limit = 20) {
//         return longString.substring(0, limit);
    
//     }

    

// let longString = prompt ('scrivimi qualcosa');

// function ellipse (longString = ' ', limit = 20) {

// if (longstring.length > 20) {
//     return longString.substring(0, limit) + '...';
// } else {
//     return longString;
// }

// }

// ellipse (longString);


// console.log (ellipse('In the first age, in the first battle, when the shadows first lengthened... one stood, burnt by the embers of Armageddon') + '...') 

// function limit (string = '', limit = 0) {  
//     return string.substring(0, limit)
//   }
  
//   const greeting = limit('Hello Marcus', 6)  

  
//   const greeting = limit('Hello Marcus', 100) 


//7) definire una funzione reverseString che data una stringa
//   la restituisca al contrario

//   'casa rosa' => 'asor asac'


function stringReverse (selectedString) {

    let newString = '';

    for (let i = (selectedString.length - 1); i >= 0 ; i--) {
        const char = selectedString [i];
        newString = newString + char;
    }

    return newString;
}

console.log ('reverse', stringReverse ('la casa rosa'))
