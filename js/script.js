/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

/* 

1-chiedi all'utente il numero di km da percorrere
2-chiedi all'utente l'età
3- calcolo prezzo totale del biglietto 0.21€ al km
4-va applicato uno sconto del 20% per i minorenni
5-va applicato uno sconto del 40% per gli over 65.
6- stampare il risultato con due decimali

*/

console.log("JS OK");

/* OTTENGO I DATI RELATIVI ALL'UTENTE */
const numberKm = parseInt(prompt("Inserisci il numero dei KM da percorrere").trim());
const ageUser = parseInt(prompt("Inserisci la tua età").trim());

console.log("Kilometri: " + numberKm);
console.log("Età: " + ageUser);

/* ELABORO IL PREZZO DEL BIGLIETTO SENZA SCONTI */

let ticketPrice = 0;
let message='Nessun sconto applicato';

if(!isNaN(numberKm) && !isNaN(ageUser))
{
    /* SE IN INPUT HO VALORI NUMERICI CALCOLO IL PREZZO DEL BIGLIETTO */

        ticketPrice = 0.21 * numberKm;
}
else
{
    alert("Non hai inserito valori numerici!");
}
 
/* SE E' STATO INIZZIALIZZATO IL PREZZO DEL BIGLIETTO APPLICO LO SCONTO IN BASE ALL'ETA' */
if(ticketPrice)
{
    if(ageUser < 18)
    {
        ticketPrice -= (ticketPrice * 20) / 100 ;
        message = "Il prezzo totale del biglietto è scontato del 20% perchè hai meno di 18 anni";
        

    }
    if(ageUser > 65)
    {
        ticketPrice -= (ticketPrice * 40) / 100 ;
        message = "Il prezzo totale del biglietto è scontato del 40% perchè hai più di 65 anni";
    }

    /* RECUPERO L'ELEMENTO DOVE INSERIRE IL RISULTATO */ 

    console.log("Prezzo biglietto:" + ticketPrice.toFixed(2));
    const spanElement = document.getElementById("ticket-price");
    spanElement.innerHTML = `${ticketPrice.toFixed(2)} € <i class="fas fa-ticket-alt"></i> <br> ${message}`;
}





