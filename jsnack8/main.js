
function sommaNumeri(numeri)
{
    let somma=0;
    for (let i = 0; i < numeri.length; i++)
        {
        somma = somma + numeri[i];
        }
    return somma;
}


var arreyNumeri = [];


for(let i=0; i<10; i++){
    let numeriDaInserire= parseInt(prompt("Inserisci i numeri di cui vuoi la somma"));
    arreyNumeri.push(numeriDaInserire);
}

alert(sommaNumeri(arreyNumeri));


