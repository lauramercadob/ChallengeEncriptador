/*
["e","enter"],
["o","ober"],
["i","imes"],
["a","ai"],
["u","ufat"],
*/

function encriptar(){
  var texto = document.getElementById("textoEncriptar").value.toLowerCase();
  //i es para que afecte tanto mayuculas como minusculas
  //g es para toda la linea u oración
  //m es para que afecte a multiples líneas o párrafo
  var txtcifrado = texto.replace(/e/igm,"enter");
  var txtcifrado = txtcifrado.replace(/o/igm,"ober");
  var txtcifrado = txtcifrado.replace(/i/igm,"imes");
  var txtcifrado = txtcifrado.replace(/a/igm,"ai");
  var txtcifrado = txtcifrado.replace(/u/igm,"ufat");

  document.getElementById("sin-mensaje").style.display = "none";
  document.getElementById("mensajeEncriptar").innerHTML = txtcifrado;
  document.getElementById("mensajeEncriptar").style.display = "show";
  document.getElementById("mensajeEncriptar").style.display = "inherit";
  document.getElementById("btncopiar").style.display = "show";
  document.getElementById("btncopiar").style.display = "inherit";

}

function desencriptar(){
  var texto = document.getElementById("textoEncriptar").value.toLowerCase();
  //i es para que afecte tanto mayuculas como minusculas
  //g es para toda la linea u oración
  //m es para que afecte a multiples líneas o párrafo
  var txtcifrado = texto.replace(/enter/igm,"e");
  var txtcifrado = txtcifrado.replace(/ober/igm,"o");
  var txtcifrado = txtcifrado.replace(/imes/igm,"i");
  var txtcifrado = txtcifrado.replace(/ai/igm,"a");
  var txtcifrado = txtcifrado.replace(/ufat/igm,"u");

  document.getElementById("sin-mensaje").style.display = "none";
  document.getElementById("mensajeEncriptar").innerHTML = txtcifrado;
  document.getElementById("mensajeEncriptar").style.display = "show";
  document.getElementById("mensajeEncriptar").style.display = "inherit";
  document.getElementById("btncopiar").style.display = "show";
  document.getElementById("btncopiar").style.display = "inherit";
}

function copy(){
  var contenido = document.querySelector("#mensajeEncriptar");
  contenido.select();
  document.execCommand("copy");
  alert("Texto copiado :)")
}