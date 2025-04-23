/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function inizialiArr(arrayNames){
    let primaLettera = [];
    let prima = "";
    for(let i =0; i< arrayNames.length; i++){
        
        prima = arrayNames[i][0];
        primaLettera.push(prima);
    }
    return primaLettera;
}


// Invoca la funzione qui e stampa il risultato in console
const finalResult = inizialiArr(names);
console.log(finalResult)


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

// const inizialiArr = arrayNames.map(nome=>nome[0]) soluzione arrow function chiesta e da chiedere spiegazione
