/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/


// 1 chiedere all'utente di inserire una parola

var parola = "osso";
// 2 verificare se parola è Palindroma

var lettere = "";
var inversa = "";

for (var i = 0; i < parola.length; i++){

  lettere += parola[i];
  console.log(parola[i]);

}
console.log(lettere);

for ( var j = parola.length - 1; j >= 0; j--) {
  inversa += parola[j];
  console.log(parola[j]);
}

console.log(inversa);

if ( lettere === inversa ){

  alert("la parola è polindroma");
} else{
  alert("la parola non è polindroma");
}
// 3 esito verificare
