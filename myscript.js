// chiedere eta passeggero
var anni_utente = prompt('Quanti anni hai?');
console.log(anni_utente);
//chiedere i km che vuole percorrere
var chilometri = prompt('Quanti km deve percorrere?');
console.log(chilometri);
//calcolo prezzo totale viaggio
var calcolo = chilometri * 0.21;
console.log(calcolo);
//applico sconto minorenni
var sconto_minorenni = calcolo * 20 / 100;
console.log(sconto_minorenni);
//applico sconto over 65
var sconto_over65 = calcolo * 40 / 100;
console.log(sconto_over65);
if (anni_utente < 18) {
    console.log(sconto_minorenni);
    document.getElementById('prezzo').innerHTML = 'Il prezzo del biglietto è di ' + sconto_minorenni;
}else if (anni_utente > 65) {
    console.log(sconto_over65);
    document.getElementById('prezzo').innerHTML = 'Il prezzo del biglietto è di ' + sconto_over65;
}
else {
    console.log(calcolo);
    document.getElementById('prezzo').innerHTML = 'Il prezzo del biglietto è di ' + calcolo;
}
document.getElementById('title').innerHTML = 'Benvenuto/a';
