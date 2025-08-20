
console.log("Buscando citação aleatória");

fetch("https://api.quotable.io/random")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(`Citação: "${data.content}"`);
    console.log(`Autor: ${data.author}`);
  })
  .catch(error => {
    console.error("Houve um erro na requisição:", error);
  });

console.log("Busca iniciada, aguarde um pouco");
