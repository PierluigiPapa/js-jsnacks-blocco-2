// Variabile per tenere il conto dei tentativi fatti
let tentativi = 0;

// Ciclo per indovinare il numero dell'utente 
while (true) {
    // Costante per chiedere il numero all'utente
    const tentativoUtente = parseInt(prompt("Indovina il numero tra 1 e 100"));

    // Istruzione per incrementare il numero dei tentativi
    tentativi++;

    // SE l'utente indovina il numero, fine del gioco
    if (tentativoUtente === numeroCasuale) {
        alert(`Complimenti! Hai indovinato il numero in ${tentativi} tentativi.`);
        break; 
        // ALTRIMENTI l'utente riprova
    } else if (tentativoUtente > numeroCasuale) {
        alert("Il numero è troppo alto. Prova di nuovo!");
    } else {
        alert("Il numero è troppo basso. Prova di nuovo!");
    }
}