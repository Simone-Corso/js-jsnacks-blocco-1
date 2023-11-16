//Chiedi un numero di 7 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero.

//Dobbiamo chiedere un numero di 7 cifre all'utente

const chiediCifra = prompt('inserisci una cifra di 7 numeri');


console.log(chiediCifra[0]);
console.log(chiediCifra[1]);
console.log(chiediCifra[2]);
console.log(chiediCifra[3]);
console.log(chiediCifra[4]);
console.log(chiediCifra[5]);
console.log(chiediCifra[6]);

let somma;
for (let i=0; i<chiediCifra.length; i++){

const convertitoInNumeo = parseInt(chiediCifra[i]);
   somma = somma + convertitoInNumeo;
   console.log(i);
}

//Mettere il risultato della somma ottenuta da 7 cifre.