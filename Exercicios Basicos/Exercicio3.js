let numeros = [1,2,3,4,5]

let soma = numeros.reduce(function(a, b){
    return a + b;
}, 0)

console.log(soma);
