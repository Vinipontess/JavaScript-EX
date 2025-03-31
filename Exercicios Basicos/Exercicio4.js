let livros = [
  { titulo: 'Carros 2', autor: 'Pixar', ano: 2010 },
  { titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', ano: 1943 },
  { titulo: 'JavaScript para Iniciantes', autor: 'John Doe', ano: 2021 }
];

let buscar = livros.find(function(a){
    return a.ano > 2010;
})

console.log(buscar)
