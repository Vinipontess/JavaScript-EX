let botao = document.getElementById("botao");
botao.onclick = function () {
let textoA = document.getElementById("textoA")
      if (textoA.style.display === "none") {
    textoA.style.display = "block";
  } else {
    textoA.style.display = "none";
  }
};
