/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function conteggio(parola){
    let vocals = 0;  

    for(let i=0 ; i<parola.length; i++){
    const lettera = parola[i].toLowerCase();

        if(lettera === "a" || lettera === "e"|| lettera === "i"|| lettera === "o"|| lettera === "u") {
        vocals ++;
        }
    
    }
    return vocals;
}

// Invoca la funzione qui e stampa il risultato in console

const finalResult = conteggio(word);
console.log(finalResult)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)