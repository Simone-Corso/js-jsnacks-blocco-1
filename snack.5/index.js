//L'utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

const parolaElement = prompt ('inserisci la prima parola');
const parolaSecond = prompt('inserisci la seconda parola');

const parolaLunga = parolaElement.length > parolaSecond.length;

if ( parolaElement.length > parolaSecond.length);
console.log(parolaSecond,parolaElement);

    else{
        console.log(parolaElement, parolaSecond);
    }