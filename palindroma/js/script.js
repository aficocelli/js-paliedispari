/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/


// 1 chiedere all'utente di inserire una parola

var parolaUtente = prompt("inserisci una parola");

// 2 verificare se parola è Palindroma


function palindroma (parola){

  var lettere = "";
  var inversa = "";

  // credo ciclo per separare lettere
  for (var i = 0; i < parola.length; i++){

    lettere += parola[i];

  }
  // creo ciclo per invertire parola
  for (var j = parola.length - 1; j >= 0; j--) {

    inversa += parola[j];

  }
  // verifico se la parola e la sua inversa sono uguali
    var esito = lettere === inversa;

    return esito;
}


var verifica = palindroma(parolaUtente);

if(verifica){
  alert("è una parola palindroma");
} else{
  alert("non è palindroma");
}
