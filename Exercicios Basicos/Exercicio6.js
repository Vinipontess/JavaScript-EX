let livros = [
    { titulo: 'Carros 2', autor: 'Pixar', ano: 2010 },
    { titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', ano: 1943 },
    { titulo: 'JavaScript para Iniciantes', autor: 'John Doe', ano: 2021 }
  ];
  
  livros.sort(function(a, b) {
      return a.titulo.localeCompare(b.titulo);
  });
  
  console.log(livros);
  
