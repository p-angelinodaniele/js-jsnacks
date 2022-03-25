let arrayDispari = [];



for(let i=0; i<6; i++){
    let numero = prompt("Inserisci un numero");
    let modulo = numero % 2;
    if(modulo == 1){
        arrayDispari.push(numero);
    }

}



for(let i=0; i<arrayDispari.length; i++){
    console.log(arrayDispari[i]);
}