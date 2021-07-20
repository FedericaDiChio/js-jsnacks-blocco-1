/* SNACK: /
1. Creare un oggetto palla che abbia le seguenti proprietà.
  Nome = palla
  Peso = 10
2. stampare la palla in pagina*
3. Attraverso un prompt dare la possibilità all’utente di modificare il peso
della palla, poi stampare la palla con il peso modificato
BONUS: stampare la palla tramite una funzione; */



// Recuperiamo elemento HTML 
var displayElement = document.getElementById("display");

// Creiamo l'oggetto  
var palla = {
    name: "palla",
    weight: 10
}

// Chiediamo all'utente un nuovo valore weight
var newWeight = ""; 
while (isNaN(newWeight) || !newWeight || newWeight.trim() === " " || newWeight < 1) {
    newWeight = prompt("Inserisci un numero, sarà il nuovo peso");
}

// Cambiamo il valore di weight nell'oggetto 
palla.weight = parseInt(newWeight);

// Stampiamo in pagina 
printObject(palla, displayElement);

// Funzione per stampare 
function printObject (obj, targetElement) {
    var listData = "";
    for (var key in obj) {
    listData +=  "<div><strong>" + key + ": " + "</strong>" + obj[key] + ";" +"</div>"
    targetElement.innerHTML = listData;
    }
}