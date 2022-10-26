//chiedo all'utente il suo nome
const userFullName = prompt ("Inserisci il tuo nome utente")

//chiedo all'utente l'anno di nascita 
const birthYear = prompt("Inserisci il tuo anno di nascita")
const birthYearNumber = parseInt(birthYear)

console.log("Dato inserito", birthYear);
console.log("Tipologia:", typeof birthYear);
console.log("birthYearNumber:", + birthYearNumber);

// con l'anno calcolo l'eta ed informo l'utente
const userAge = 2022 - birthYear;

console.log("Età utente:", userAge)

//salviamo in una variabile un riferimento all'elemento HTML con id nome_utente
const h2NomeUtente = document.getElementById("nome_utente");
//usiamo il riferimento precedente per modificare l'html interno
// h2NomeUtente.innerHTML = "Mario Rossi"

h2NomeUtente.innerHTML = userFullName;

const paragrafo = document.getElementById("paragrafo")
paragrafo.innerHTML = `L'utente <strong>${userFullName}</strong> è nato nel <em>${birthYear}</em> ed ha <span style="color: orange">${userAge}</span> anni.`
//si può scrivere anche dell'html all'interno di una stringa