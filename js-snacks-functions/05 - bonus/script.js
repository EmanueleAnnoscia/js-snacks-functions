/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = prompt("Inserisci qui il tuo nome");//'Mario'


// Dichiara la funzione qui.
function saluti(nome){
    let oraCorrente = new Date();       // Ottiene la data e ora attuale
    let ore = oraCorrente.getHours();  // Ottiene l’ora (in formato 0–23)
    let saluto;

    if(ore < 12){ 
        saluto= "buongiorno ";
    }else if (ore>=12 && ore < 18){
        saluto= "buon pomeriggio ";
    }else{
        saluto= "buona sera ";
    }
    
    return saluto + nome;
}

// Invoca la funzione qui e stampa il risultato in console
const finalResult = saluti(name);
console.log(finalResult)




//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.