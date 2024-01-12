// Costante per definire l'array corto
const cortoArray = [11, 12, 13, 14];
//Costante per definire l'array lungo
const lungoArray = [15, 16, 17, 18, 19, 20];
//Costante per determinare la lunghezza tra i due array
const minimoLength = Math.min(cortoArray.length, lungoArray.length);

// Ciclo per aggiungere elementi all'array più corto fino a quando ha lo stesso numero di elementi dell'altro
for (let i = 0; i < minimoLength; i++) {
    if (cortoArray.length < lungoArray.length) {
        cortoArray.push(0); 
    } else {
        lungoArray.push(0);
    }
}

// Stampo il numero degli array nella console
console.log("Array 1:", cortoArray);
console.log("Array 2:", lungoArray);
