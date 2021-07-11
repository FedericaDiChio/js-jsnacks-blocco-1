/* Generatore di “nomi cognomi” casuali: 
prendendo una lista di nomi e una lista di cognomi, 
Gatsby vuole generare una falsa lista di 3 invitati. */


// Creare due array con nomi e cognomi e uno vuoto
var nameInvitations = ["Sonia", "Mario", "Danilo", "Luca", "Emanuela"]
var lastnameInvitations = ["Verdi", "Bianchi", "Rossi", "Gialli", "Neri"]
var fakeInvitations = [];


while (fakeInvitations.length < 3) {
    // Randomizzo gli array 
    var random1 = Math.floor(Math.random() * nameInvitations.length)
    var random2 = Math.floor(Math.random() * lastnameInvitations.length)
    var randomName = nameInvitations[random1]
    var randomLastname = lastnameInvitations[random2]
    
    // Creao una variabile con gli elementi randomizzati
    var randomFullName = randomName + " " + randomLastname;
    console.log(randomFullName);

}