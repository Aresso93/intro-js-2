// console.log("arrays");

// //ARRAY--------------------------------------------------------------------------------------------

// // const pippo = ['pane', 'pasta', 'latte', 'caffè']; //questo è un array di stringhe. La mia costante è una scatola che contiene diversi elementi

// // console.log (pippo); //mi printa gli elementi in ordine dicendomi anche quanto è lungo l'array. In questo caso è lungo 4 e gli elementi vanno da 0 a 3

// // console.log (pippo.length());

// //posso aggiungere e togliere elementi da questa scatola
// //VEDIAMO COME-------------------------------------------------------------------------------------------------------------------------------------

// //pippo.push('acqua');   //il metodo .push aggiunge un elemento in coda

// //pippo.unshift('biscotti') //il metodo .unshift aggiunge un elemento in testa

// // const elementoCoda = pippo.pop (); //il metodo .pop fa saltare l'elemento in fondo e lo mette in un'altra costante

// // console.log (elementoCoda); //il caffè è stato tolto dall'array e messo in una variabile

// // console.log (pippo);

// // const elementoTesta = pippo.shift (); //il metodo .shift toglie un elemento dalla cima e la mette in una variabile

// // console.log (elementoTesta);

// // console.log (pippo);

// //CICLI ED ARRAY

// const pluto = [1, 2, 23, -4, 345, 0];

// //gli array possono contenere anche elementi di tipo diverso tra stringhe, numeri, boolani ecc. NON FACCIAMOLO MAI O ANDREA CI PESTA

// // for (let i = 0; i < pluto.length; i++) {
// //     const element = pluto[i];
// //     console.log(element);
// // }

// // for (const element of pluto) {  //questo è una compressione del ciclo for di cui sopra
// //     console.log (element);
// // }

// // let i = 0;

// // while (i < pluto.length) {
// //     const element = pluto[i]      //questo è un ciclo while che fa la stessa cosa, ma ovviamente è molto più verboso
// //     console.log (element);
// //     i++;
// // }

// // for (let i = pluto.length - 1; i >= 0; i--) {
// //     const element = pluto[i];
// //     console.log (element);
// // }

// // TRASFORMAZIONI DI ARRAY------------------------------------------------------------------------------
// // MAPPING

// const paperino = [2, 5, -4, 2000, 7, 34];

// // //scriviamo una funzione che faccia fare mapping a questo array. Per esempio moltiplicandoli tutti per 2

// function multiplyArrayBy2(selectedArray) {
//   const newArray = [];

//   for (let i = 0; i < selectedArray.length; i++) {
//     //ciclo l'elemento
//     const element = selectedArray[i];

//     const newElement = element * 2; //trasformo l'elemento come mi è stato chiesto

//     newArray.push(newElement); //metto le cose nell'array vuoto che ho creato
//   }

//   return newArray; //chiedo di ritornare il nuovo array non più vuoto
// }

// console.log("multiply by 2", multiplyArrayBy2(paperino)); //invoco la funzione

// // function divideBy2ifEven(selectedArray) {
// //   const newArray = [];

// //   for (let i = 0; i < selectedArray.length; i++) {
// //     const element = selectedArray[i];
// //     let newElement;

// //     if (element % 2 === 0) {
// //       newElement = element / 2;
// //     } else {
// //       newElement = element;
// //     }

// //     newArray.push(newElement);
// //   }

// //   return newArray;
// // }

// // console.log("divide by 2", divideBy2ifEven(paperino));


// // const paperone = ['qui', 'quo', 'qua'];

// // function upperCaseAll(selectedArray) {
// //     const newArray = [];

// //     for (let i = 0; i < selectedArray.length; i++) {
// //       const element = selectedArray[i];

// //       const newElement = element.toUpperCase();
  
// //       newArray.push(newElement);
// //     }
  
// //     return newArray;
// // }

// // console.log('upperCaseAll', upperCaseAll(paperone));

// // FILTERING--------------------------------------------------------------------------------------------------------------------------

// // const paperoga = [3, 5, 6, 9, 8, 111, -3, -8, 0];

// // function removeEven(selectedArray) {
// //     const newArray = [];

// //      for (let i = 0; i < selectedArray.length; i++) {
// //        const element = selectedArray[i];

// // if (element % 2 !== 0) {
// //     newArray.push(element)
// // }


     
// //      }

// //      return newArray;
// //  }

// //  console.log('remove even', removeEven(paperoga));



// function removeNegative(selectedArray) {

//     const newArray = [];
//     for (let i = 0; i < selectedArray.length; i++) {
//         const element = selectedArray[i];     
//     if (element >= 0) {
//         newArray.push(element);
//     }

//     }
// return newArray;
// }

// // console.log('remove negative', removeNegative(paperoga));

// //FUNCTION COMPOSITION

// const qui = [3, 5, 6, 9, 8, 111, -3, -8, 0, 20, -10000];

// function removeNegativeAndMultiplyBy2 (selectedArray) {

//     // const arrayWithoutNegative = removeNegative(selectedArray));
//     // const arrayMultiplied = multiplyArrayBy2(selectedArray){
//     //     return arrayMultiplied

//     return multiplyArrayBy2(removeNegative(selectedArray));

//     }

//     console.log(removeNegativeAndMultiplyBy2(qui));

//ESERCIZI ----------------------------------------------------------------------------------------------------------

const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];
const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];

// 1) mapping di una function che prende in input un array di numeri e restituisce un array con tutti i numeri diminuiti di uno

// 2) mapping di una function che prende in input un array di numeri e restituisce un array con il valore assoluto dei numeri

// 3) mapping di una function che prende in input un array di numeri e restituisce un array di stringhe con scritto 'PARI' se il numero
// è pari o 'DISPARI' se il numero è dispari

// 4) mapping di una function che prende in input un array di numeri e restituisce un array di stringhe con scritto 'PARI' se il numero
// è pari o 'DISPARI' se il numero è dispari

// 5) mapping di una function che prende in input un array di numeri e restituisce un array di stringhe con scritto 'PARI' se il numero
// è pari o 'DISPARI' se il numero è dispari

// 6) mapping function che prende in input un array di stringhe