let botao = document.getElementById('botao');
let link = document.getElementById('link');
link.setAttribute('href', 'https://scriptdev.com.br/como-mudar-a-cor-do-texto-em-css/');

botao.onclick = function(){
  botao.style.color = 'white';
  botao.style.backgroundColor = 'blue';
  botao.textContent = 'Clicado';
}
