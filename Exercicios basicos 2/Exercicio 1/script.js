let botao = document.getElementById('botao');
let containerA = document.getElementById('containerA');

botao.onclick = function () {
  let mensagem = document.createElement("p");
  mensagem.textContent = "Apareceu o texto aqui no quadrado";
  containerA.appendChild(mensagem);
};
