console.log('hello world!')

// Tipi di base ---------------------------------------

// 'feefevfd' // string

// 34 56.6 -23 // number

// true false // boolean

// Tipi strani:

// NaN Not a Number

// undefined

// null

// variabili con let----------------------------------- 

// let pippo = 5;

// console.log(typeof pippo);

// pippo = 'viva il caffè!';

// console.log(typeof pippo);

// console.log(pippo)


// variabili con const----------------------------------- 

// const pluto = 12;

// pluto = 23;

// console.log(pluto);


// variabili con var (guai a chi le usa! vi taglio le mani!!!)---------

// var paperino = true;

// console.log(paperino);

// paperino = -123;

// console.log(paperino);

// // differenza con let

// // topolino = 5;

// // let topolino;

// // minnie = 5;

// // var minnie;

// // console.log(minnie);


// // Number -----------------------------------------------------

// let qui = (5 + 9);
// let qua = (5 * 9);
// let quo = (5 / 9);

// let paperone = 5 ** 3; // elevamento a potenza

// let basettoni = 6 % 5;  // modulo

// console.log(qui);
// console.log(qua);
// console.log(quo);

// console.log(paperone);

// console.log(basettoni);

// let gambaDiLegno = 8 % 2;

// console.log(gambaDiLegno);

// let ilNumeroPiuPiccolo = -Infinity;

// let ilNumeroPiuGrande = Infinity;

// const paperoga = Math.sqrt(16); // libreria Math per tutte le operazioni non comprese nello standard ES

// console.log(paperoga);

// const rockerduck = 'pippo' / 3;

// console.log(rockerduck);


// Boolean ------------------------------------------------------------------------------------

// const etabeta = true;

// console.log(etabeta);

// // ! (not)   !true => false;
// //           !false => true;

// console.log(!etabeta);

// // && (and)  true && true  => true
// //           true && false => false
// //           false && true => false
// //           false && false => false

// const gastone = false;

// console.log(etabeta && gastone);
// console.log(etabeta && !gastone);


// // || (or) true || true => true
// //         true || false => true
// //         false || true => true
// //         false || false => false

// console.log(etabeta || gastone);
// console.log(!etabeta || gastone);

//             // true
// console.log((etabeta || gastone) && etabeta);


// String---------------------------------------------------

// const orazio = 'io adoro javascript';

// console.log(orazio[0]);
// console.log(orazio[9]);

// const clarabella = 'perchè non sono sano di mente';

// console.log(orazio + ' ' + clarabella);

// const aladin = 27;

// console.log(orazio + 27);

// console.log(clarabella.length)

// console.log(clarabella.toUpperCase())

// undefined and null-------------------------------------

// const macchiaNera = 5;

// // console.log(paperinik);

// let paperinik;

// console.log(paperinik);  // undefined => scatolola vuota

// paperinik = 12;

// console.log(paperinik);

// paperinik = undefined // nooooooooooooo;

// console.log(paperinik);

// paperinik = null;

// console.log(paperinik);

// operatori di confronto-------------------------

// const nonnaPapera = true;

// const ciccio = 24;

// const joseCarioca = 'true';

// // > (maggiore)
// // >= (maggiore o uguale)

// console.log(ciccio >= nonnaPapera);

// // < (minore)
// // <= (minore o uguale)

// console.log(ciccio < nonnaPapera);

// // != (diverso) (nooooooooo)
// // !== (diverso)

// console.log(ciccio !== nonnaPapera);

// // == (uguale con cast) (nooooooooo)
// // === (uguale stretto)

// console.log(nonnaPapera == joseCarioca); //(mai usare questo quì!!!!)
// console.log(nonnaPapera === joseCarioca);

// corto circuito degli operatori---------

// let biancaNeve;

// let ariel = 'ciao';

// let cenerentola = biancaNeve || ariel;

// console.log(cenerentola);

// alert e prompt --------------------------------------

// alert('ciao a tutti!');

// const elsa = prompt('come ti chiami?');

// console.log(elsa);

// if else control flow----------------------------------

// const mulan = prompt('dimmi un numero');

// if ((mulan % 2) === 0) {
//     alert('hai inserito un numero pari')
// } else {
//     alert('hai inserito un numero dispari')
// }

// console.log('fine del programma')

// const jasmine = prompt('dimmi un numero');

// const isJasmineDivisibleBy3 = jasmine % 3 === 0;

// const isJasmineDivisibleBy5 = jasmine % 5 === 0;

// if (isJasmineDivisibleBy3 && isJasmineDivisibleBy5) {
//     alert('FIZZBUZZ');
// } else if(isJasmineDivisibleBy3){
//     alert('FIZZ');
// } else if(isJasmineDivisibleBy5){
//     alert('BUZZ');
// } else {
//     alert(jasmine);
// }

// if (isJasmineDivisibleBy3 && isJasmineDivisibleBy5) {
//     alert('FIZZBUZZ');
// }
// if(isJasmineDivisibleBy3){
//     alert('FIZZ');
// }
// if(isJasmineDivisibleBy5){
//     alert('BUZZ');
// }

// switch control flow--------------------------------

const rapunzel = prompt('inserisci FIZZ, BUZZ o FIZZBUZZ')

switch (rapunzel) {
    case 'FIZZ':
        alert('vuoi un numero divisibile per tre');
        break;
    case 'BUZZ':
        alert('vuoi un numero divisibile per cinque');
        break;
    case 'FIZZBUZZ':
        alert('vuoi un numero divisibile per tre e per cinque');
        break;
    default:
        alert('hai sbagliato ad inserire la parola');
        break;
}