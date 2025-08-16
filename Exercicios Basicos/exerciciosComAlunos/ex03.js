let catalogo = [
  {id: 1, nome: "Celular", preco: 1200},
  {id: 2, nome: "Computador", preco: 3500},
  {id: 3, nome: "Clips", preco: 1}
];


console.log("Catalogo completo")

function listarProdutos(array){
  let i;
  for(i = 0; i < array.length; i++)
  {
    console.log(`${array[i].nome}`);
    console.log(`R$${array[i].preco}`);
}}

listarProdutos(catalogo);
