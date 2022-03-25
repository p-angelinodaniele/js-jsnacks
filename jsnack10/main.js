function sommaCifre(numero){
    let n1 = parseInt(numero.substring(0, 1));
    console.log(n1);
    let n2 = parseInt(numero.substring(1, 2));
    console.log(n2);
    let n3 = parseInt(numero.substring(2, 3));
    console.log(n3);
    let n4 = parseInt(numero.substring(3, 4));
    console.log(n4);
    let somma = n1 + n2 + n3 + n4;
    return somma;

    
    
}



let numero = prompt("Inserisci un numero a 4 cifre");
let somma = sommaCifre(numero);
console.log( "La somma delle cifre che hai inserito e uguale a " + somma);




