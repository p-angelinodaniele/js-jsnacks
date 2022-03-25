function media(numeri)
{
    var i, somma=0;
    for (i = 0; i < numeri.length; i++)
        {
        somma = somma + numeri[i];
        }
    return somma/i;
}


var arreyNumeri = [];


for(let i=0; i<10; i++){
    let numeriDaInserire= parseInt(prompt("Inserisci i numeri di cui vuoi la media"));
    arreyNumeri.push(numeriDaInserire);
}

alert(media(arreyNumeri));