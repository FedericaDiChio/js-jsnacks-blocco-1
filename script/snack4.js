/*Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.*/


// Creo due array 
var arr1 = [2, 6, 7, 4, 9, 1];
var arr2 = [3, 5, 8];

while (arr1.length !== arr2.length) {
    // randomizzo un numero da inserire 
    var random = Math.floor(Math.random() * 9) + 1
    // Verifico array più corto 
    if (arr1.length > arr2.length) {
        arr2.push(random);
    } else {
        arr1.push(random);
    }
}   
console.log("Gli array hanno lunghezza uguale")

console.log(arr1)
console.log(arr2)