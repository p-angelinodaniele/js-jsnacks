

let numeroGiocatore;
let numeroRandom;
let contatore = 0;





while(contatore == 0) {
    numeroRandom = Math.floor(Math.random()*10);
    numeroGiocatore = prompt("Inserisci un numero");
    console.log(numeroGiocatore);
    console.log(numeroRandom);
   
    if(numeroGiocatore == numeroRandom){
        contatore = 1;
    }


}







