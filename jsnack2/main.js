let parola1 = prompt("Inserisci la parola 1");
let parola2 = prompt("Inserisci la parola 2");



if(parola1.length < parola2.length){
    let parolaCorta = parola1;
    let parolaLunga = parola2;
    alert("La parola più corta è " + parolaCorta)
    alert("La parola più lunga è " + parolaLunga)
    
}else if(parola1.length > parola2.length){
    let parolaCorta = parola2;
    let parolaLunga = parola1;
    alert("La parola più corta è " + parolaCorta)
    alert("La parola più lunga è " + parolaLunga)
}else {
    alert("Le due parole sono uguali");
}


