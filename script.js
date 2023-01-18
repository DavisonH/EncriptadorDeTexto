const textoIngresado = document.querySelector("#texto");
const textoResultado = document.querySelector("#textoResultado");
const btnEncriptar = document.querySelector("#encri");
const btnDesencriptar = document.querySelector("#desencri");
const btnCopiar = document.querySelector("#copiar");

function encriptar() {
  let texto = textoIngresado.value.toLowerCase();
  let textoEncriptado = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

  document.getElementById("main-msg").style.display = "none";
  document.getElementById("second-msg").style.display = "none";
  document.getElementById("muneco").style.display = "none";
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";

  document.getElementById("textoResultado").style.display = "show";
  document.getElementById("textoResultado").style.display = "inherit";
  textoResultado.value = textoEncriptado;

  document.getElementById("texto").value = '';

}

function desencriptar() {
  let textoEncriptado = textoIngresado.value.toLowerCase();
  let texto = textoEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

  document.getElementById("main-msg").style.display = "none";
  document.getElementById("second-msg").style.display = "none";
  document.getElementById("muneco").style.display = "none";
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
 
  document.getElementById("textoResultado").style.display = "show";
  document.getElementById("textoResultado").style.display = "inherit";
  textoResultado.value = texto;

  document.getElementById("texto").value = '';

}

function copiar(){
  var contenido = document.querySelector("#textoResultado");
  contenido.select();
  document.execCommand("cut");
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

