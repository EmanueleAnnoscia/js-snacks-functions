/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = prompt("Inserisci qui il tuo nome");//'Mario'


// Dichiara la funzione qui.
function saluti(nome){
    let saluto="Ciao " + nome ; 
    return saluto;
}

// Invoca la funzione qui e stampa il risultato in console
const finalResult = saluti(name);
console.log(finalResult)


//Risultato atteso se si passa 'Mario': // ciao Mario