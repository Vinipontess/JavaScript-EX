async function buscarInformacoesDoPost(){
  try{
    const respostaCodificada = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const respostaFinal = await respostaCodificada.json();
    console.log(`O titulo do post é ""${respostaFinal.title}"" e o corpo dele --${respostaFinal.body}--`);
  }catch(error){
    console.error("Ocorreu um erro ao busca a API:", error);
  }
}

buscarInformacoesDoPost();
