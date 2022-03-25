let arrayNomi = ["anna", "francesca", "alessia", "clelia", "noemi", "marco", "orlando", "pasquale", "giovanni", "paolo",];
let nome = prompt("Inserisci il tuo nome");

for(let i = 0; i<=arrayNomi.length; i++){
    if(arrayNomi[i]==nome){
        alert("Puoi partecipare alla festa");
        i=arrayNomi.length;

    }else if (arrayNomi[i]!=nome && i == arrayNomi.length){
        alert("Il tuo nome non è presente nella lista e non puoi partecipare alla festa");
    }
}