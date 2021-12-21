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

const numberKm = parseInt(prompt("Inserisci il numero dei KM da percorrere").trim());
const ageUser = parseInt(prompt("Inserisci la tua età").trim());