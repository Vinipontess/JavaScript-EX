const username = document.getElementById ('username');
const btnBuscar = document.getElementById ('buscar');
const resultado = document.getElementById ('resultado');
const lista = document.getElementById('lista');


btnBuscar.addEventListener('click', () => {
  const usernameValue = username.value;

  if (usernameValue) {
    buscarUser(usernameValue);
  } else {
    alert("Por favor, digite um nome de usuário.");
  }
});

async function buscarUser(usuario){
  console.log("Iniciando a busca...");
  
  try{
    const resposta = await fetch (`https://api.github.com/users/${usuario}`);
    const respostaRepos = await fetch(`https://api.github.com/users/${usuario}/repos`);
    if (!resposta.ok || !respostaRepos.ok){
      throw new Error (`Usuário inexistente ou erro na API. Status: ${resposta.status}`);
    }
    const dados = await resposta.json();
    const dadosRepos = await respostaRepos.json();
    if(dados.erro || dadosRepos.erro){
      throw new Error (`Usuário inexistente`);
    }
    
    const {name, bio, avatar_url} = dados;
    resultado.innerHTML = `
    <img src="${avatar_url}" widht="100px"></img>
    <h2>${name}</h2>
    <p>${bio}</p>
    `;
    
    const nomedosRepos = dadosRepos.map((repo) => {
      return repo.name;
    });
    
    const repositorioemHTML = dadosRepos.map((repo) => {
      return `<li><a href="${repo.html_url}"" target="_blank">${repo.name} </li>`;
    });
    
    const htmlFinal = repositorioemHTML.join('');
    console.log('Stringona de HTML pronta para ir pra tela:', htmlFinal);
    
    lista.innerHTML = 
    `<h2>Lista de repositórios</h2>
      <ul>
      ${htmlFinal}
      </ul>
    `
    
  }
  catch (erro) {
    resultadoDiv.innerHTML = `<p style="color: red;">Erro: ${erro.message}</p>`;
  }
}
