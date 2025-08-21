const inputCep = document.getElementById("cep-input");
const botaoBuscar = document.getElementById("buscar-btn");
const resultado = document.getElementById("resultado");

botaoBuscar.addEventListener('click', async function(){
resultado.innerText = "Buscando...";
  try{
  let inputCepValue = inputCep.value;
  let CepAPI = await fetch(`https://viacep.com.br/ws/${inputCepValue}/json/`);
  let cepResultado = await CepAPI.json();
  if(cepResultado.erro){
    resultado.innerText = "CEP não encontrado";
  }else{
    resultado.innerText = `Logradouro: ${cepResultado.logradouro}
    Bairro: ${cepResultado.bairro}
    Cidade: ${cepResultado.localidade}
    Estado: ${cepResultado.uf}`;
  }}
  catch(error){
    console.error("Erro na busca do CEP:", error);
    resultado.innerText = `Erro ao tentar buscar: coloque um CEP válido (ex: 01001000) ou verifique sua conexão com a internet.`;

  }
})
