/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const lettera = prompt("inserisci una lettera").toUpperCase(); // c'è da eseguire il controllo che sia una ed una soltanto e che non sia un numero 

// Dichiara la funzione qui.
function inizialiArr(arrayNames, iniziale){
    let nomiLettera = [];
    let prima = "";
    for(let i = 0; i< arrayNames.length; i++){
        prima = arrayNames[i][0].toUpperCase();
        if(prima === iniziale){
            nomiLettera.push(arrayNames[i]);
        }
        // prima = arrayNames[i][0];
        // nomiLettera.push(prima);
    }
    return nomiLettera;
}


// Invoca la funzione qui e stampa il risultato in console
const finalResult = inizialiArr(names, lettera);
console.log(finalResult)

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]