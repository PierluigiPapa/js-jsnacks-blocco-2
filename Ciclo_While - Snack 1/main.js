// Variabile per creare un numero vuoto
let numeroArray = [];

// Ciclo per chiedere all'utente di inserire un numero affinché la somma sia minore di 50
while (calcolaSomma(numeroArray) < 50) {
  let numeroUtente = parseInt(prompt("Inserisci un numero:"));

  // SE il numero inserito dall'utente è valido
  if (!isNaN(numeroUtente)) {
    numeroArray.push(numeroUtente);
    //ALTRIMENTI obbliga l'utente di inserire un numero valido
  } else {
    alert("Inserisci un numero valido.");
  }
}

// Stampa l'array risultante
console.log("Array finale:", numeroArray);