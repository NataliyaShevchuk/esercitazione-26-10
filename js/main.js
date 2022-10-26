
const nomeUtente = "Mario";
const cognomeUtente = "Rossi"; 
const annoNascita = 1991;
const annoCorrente = 2022;

// variabile con valore stringa
let nomeCompleto = nomeUtente + " " + cognomeUtente
let eta; 

eta = 2022 - annoNascita
eta = annoCorrente - annoNascita;

console.log("Ciao come va?")
console.log("Giuseppe Verdi")

console.log(nomeCompleto)

//stampa una frase lunga 
console.log("L'utente x ha x anni ed è nato nel x")

// inserisco le variabili
console.log("L'utente " + nomeCompleto + " ha " + eta + " anni ed è nato nel " + annoNascita + " . ")

//template literal
console.log(`L'utente ${nomeCompleto} ha ${eta} anni ed è nato nel ${annoNascita}.`)

//con numeri e stringhe
console.log(10 + 5); // fa l'operazione matematica 
console.log( "10" + 5); // fa la concatenazione 

// - con numeri e stringhe
console.log( "10" - 5);

// NaN = not a number aka errore di calcolo (calcolo non possibile)
console.log( "10gatti" - 5);

// le stringhe/ testi vengono convertiti automaticamente in number e poi si tenta l'operazione matematica
// se la stringa non può essere convertita in un number, avremo come risultato NaN
console.log( "10" - 5);
console.log( "10" / 5);
console.log( "10" * 5);

console.log(eta - 5)

//permette di vedere il Type di una variabile 
console.log(typeof eta); // number
console.log(typeof nomeCompleto); //string
console.log(typeof "ciso come va?"); // string
console.log(typeof 120); // number

console.log((10 * 2) - 5); // legge prima le parantesi tonde - funziona seguende le leggi dell'algebra 




