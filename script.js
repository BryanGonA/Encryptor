const codigosEncriptacion = {
  "a": "ai",
  "e": "enter",
  "i": "imes",
  "o": "ober",
  "u": "ufat"
};

const letrasDesencriptacion = {
  "ai": "a",
  "enter": "e",
  "imes": "i",
  "ober": "o",
  "ufat": "u"
};

const validarMensaje = (mensaje) => {
  const caracteresProhibidos = /[A-Zá-ú]/g;
  if (mensaje === "" || caracteresProhibidos.test(mensaje) || mensaje.trim().length === 0) {
    alert("Por favor, ingrese un mensaje en minúsculas y sin acentos");
    return false;
  }
  return true;
};

const refresh = () => {
  const elementos = ["#vacio", "#imagenSinMensaje", "#sinMensaje", "#descpripcionSinMensaje"];
  elementos.forEach((elemento) => {
    document.querySelector(elemento).style.display = "none";
  });
  document.querySelector("#resultado").style.display = "inline-block";
  document.querySelector("#copiar").style.display = "inline-block";
};

const encriptar = () => {
  const mensaje = document.querySelector("#texto").value;
  if (validarMensaje(mensaje)) {
    const message = mensaje.replace(/[aeiou]/g, (match) => codigosEncriptacion[match]);
    refresh();
    show(message);
    document.querySelector("#texto").value = "";
  }
};

const desencriptar = () => {
  const mensaje = document.querySelector("#texto").value;
  if (validarMensaje(mensaje)) {
    const message = mensaje.replaceAll(/ai|enter|imes|ober|ufat/g, (match) => letrasDesencriptacion[match]);
    refresh();
    show(message);
    document.querySelector("#texto").value = "";
  }
};

const copiar = () => {
  const texto = document.querySelector("#resultado");
  texto.select();
  texto.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(texto.value);
};

const show = (mensaje) => {
  document.querySelector("#resultado").innerHTML = mensaje;
};

const encrypter = document.querySelector("#encrypter");
const decrypter = document.querySelector("#decrypter");
const copia = document.querySelector("#copia");

copia.onclick = copiar;
encrypter.onclick = encriptar;
decrypter.onclick = desencriptar;