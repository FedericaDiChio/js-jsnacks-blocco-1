/* TRACCIA
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while. */



var sum = 0;

// chiediamo all'utente il numero con FOR
for (var i = 0; i < 5; i++) {
    var userNumber = parseInt(prompt("Inserisci un numero")) 
        if (isNaN(userNumber)) {
            alert("Non stai inserendo dei numeri!")
        }
        else {
            sum += userNumber;
        }
}
console.log(sum)


// Chiediamo all'utente il numero con WHILE 

var i = 0 
while (i < 5) {
    var userNumber = parseInt(prompt("Inserisci un numero"))
    if (isNaN(userNumber)) {
        alert("Non stai inserendo dei numeri!")
    }
    else {
        sum += userNumber;
    }
    i++
}
console.log(sum)







