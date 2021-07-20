/*SNACK : Invece di modificare il peso con un prompt, proviamo a farlo con un input. Avremo bisogno di un bottone...*/


// Recuperiamo elementi HTML 
var displayElement = document.getElementById("display");
var userInput = document.getElementById("weight");
var button = document.getElementById("btn");

// Creiamo l'oggetto palla 
var palla = {
    name: "palla",
    weight: 10
}

button.addEventListener ("click", function() {
    var newWeight = userInput.value;
    
    if(!newWeight || isNaN(newWeight) || newWeight.trim() === " " || newWeight < 1)  {
        alert("Stai inserendo valori non corretti!")
        return;
    }
    
    // Cambiamo il valore di weight nell'oggetto 
    palla.weight = parseInt(newWeight);
    
    // Stampiamo in pagina 
    printObject(palla, displayElement);
});


// Funzione per stampare 
function printObject (obj, targetElement) {
    var listData = "";
    for (var key in obj) {
    listData +=  "<div><strong>" + key + ": " + "</strong>" + obj[key] + ";" +"</div>"
    targetElement.innerHTML = listData;
    }
}