// Variabile per creare un numero vuoto
let numeroArray = [];

let somma = 0;

let i= 0;

// Ciclo per chiedere all'utente di inserire un numero affinché la somma sia minore di 50
while (somma < 50) {
  let numero = parseInt(prompt("Inserisci un numero:"));

  // SE il numero inserito dall'utente è valido
  if (numero > (50 - somma)) {
    alert `(Puoi ancora inserire come numero massimo: ${50-somma})`
    //ALTRIMENTI obbliga l'utente di inserire un numero valido
  } else {
    numeroArray.push (numero)

    somma += numeroArray[i]

    i++
  }
}

// Stampa l'array risultante
console.log("Array finale:", numeroArray);