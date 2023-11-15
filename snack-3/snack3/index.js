

//Scrivo in pagina i primi 6 numeri, scrivendo i numeri pari verdi. BN: numeri dispari gialli

//* selezioniamo l'elemento che ci serve.

const wrapperElement = document.querySelector('div.my_wrapper');


//All'interno inseriamo le due variabili per ottenere i nuemri.

for( let i = 0; i <=20; i + 2){
    console.log(i)

    const cardElement = document.createDocumentFragment('div');
    cardElement.className = 'card';

    // qua creo un elemento sovranominato dell'h2 in i

    const headingCardElement = document.createElement('h2');
    headingCardElement.innerHTML = i;

    //vado a selezionare gli elementi con append

    cardElement.appendChild(headingCardElement);
    wrapperElement.appendChild(cardElement);
}


