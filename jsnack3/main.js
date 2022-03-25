let somma = 0;
let arrayNumeri=[]


for(let i=0; i<10; i++){
    let numeri=parseInt(prompt("Inserisci un numero"));
    arrayNumeri.push(numeri);

    somma = somma + numeri;


}
console.log(somma);

for(let i =0; i<arrayNumeri.length; i++){

    console.log("I numeri che hai scelto sono questi " + arrayNumeri[i]);
}



