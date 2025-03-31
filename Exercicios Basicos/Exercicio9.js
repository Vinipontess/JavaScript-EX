let numeros = [10,20,30,40,50,60,70,80,90,100]

let m50 = numeros.some(function(numeros){
    return numeros > 50;
})

if (m50 == true) {
    console.log("Foi encontrado número maior que 50 neste array")
} else{
    console.log("Não foi encontrado nenhum número maior que 50 :(")
}
