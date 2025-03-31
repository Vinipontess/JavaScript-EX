let numeros = [2,4,6,8,10,12,14,16,18,20]

let numimpar = numeros.every(function(numero){
    return numero % 2 == 1;
})

if (numimpar == true) {
    console.log("Neste array só há números impares")
} else{
    console.log("Neste array só há números pares")
}
