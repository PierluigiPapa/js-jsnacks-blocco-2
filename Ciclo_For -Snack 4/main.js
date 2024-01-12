// Chiedi all'utente di inserire il numero massimo della sequenza
let numeroPersona = parseInt(prompt("Inserisci il numero:"));

//Ciclo per verifcare se il numero  è pari o dispari
for(let i=0 ; i != 1; i++){
    //SE il numero è pari, rimane tale
    if(numeroPersona % 2 === 0){
        console.log("Il numero inserito è pari:" + numeroPersona)
    //ALTRIMENTI, si inserisce il numero successivo
    }else{
        console.log("Il numero inserito è dispari, quindi il numero successivo è :", numeroPersona + 1)
    }
}
