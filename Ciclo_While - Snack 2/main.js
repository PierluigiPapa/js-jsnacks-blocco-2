//Funzione per creare il numero random
function RandomNumber (min, max) {
    return Math.floor (Math.random()*(max-min + 1) + min)
}

//Variabile per il numero random
let randomNum = RandomNumber (1,100)

//Variabile per inserire il numero dell'utente
let userNum = 0

// Ciclo per indovinare il numero dell'utente 
while (userNum !== randomNum) {
    userNum = parseInt(prompt("Indovina il numero tra 1 e 100"));

    // SE l'utente indovina il numero, fine del gioco
    if (userNum > randomNum) {
        console.log ('Il numero è troppo alto')
        alert ('Il numero è alto. Prova di nuovo') 
        // ALTRIMENTI l'utente riprova
    } else if (userNum < randomNum) {
        console.log ('Il numero è troppo basso')
        alert("Il numero è basso. Prova di nuovo!");
    } else {
        console.log ('Hai indovinato il numero');
    }
}