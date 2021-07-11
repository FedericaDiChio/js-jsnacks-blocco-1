/* Chiedi un numero all'utente, se è pari stampa il numero,
se è dispari stampa il numero successivo. */


var userNumber = 0;

// Chiediamo all'utente di inserire un numero 
do {
    userNumber = parseInt(prompt("Inserisci un numero"))
} while (isNaN(userNumber) && userNumber <= 0)


// se il numero è paro stampiamo altrimenti aggingiamo 1
if (userNumber % 2 == 0) {
    console.log(userNumber)
} else {
    console.log(userNumber + 1)
}

