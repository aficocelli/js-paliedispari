/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

// 1 utente sceglie tra padi o dispari



var sceltaUtente = prompt("scegli tra 'pari' e 'dispari'");

// trasformo in minuscolo
var pariDispari = sceltaUtente.toLowerCase();
// trasformo in minuscolo

// 2 utente sceglie numero tra 1 e 5

var numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));

// 3 funzione che genera un numero random per il pc
function numeroRandom (){

  return Math.floor(Math.random() * 5) + 1;

}
//  /funzione che genera un numero random per il pc


// 4 genero numero casuale per cpu
var numeroPc = numeroRandom();

console.log(numeroPc);

//  5 sommiamo i due numeri

var somma = numeroUtente + numeroPc;

console.log(somma);
// 5 stabiliamo se la somma è pari o dispari


// funzione che stabilisce se numero è pari o dispari
function verificaNumero (num){

  if( num % 2 == 0){

    return true;
  }
  else{
    return false;
  }
}
//  /funzione che stabilisce se numero è pari o dispari

// 6 creo variabile con esito della verifica
var verificaSomma = verificaNumero(somma);

// 7 risultato del gioco

if ( verificaSomma == true && pariDispari == "pari") {
  alert("hai vinto");
} else if  ( verificaSomma == false && pariDispari == "dispari"){
  alert("hai perso");
}
