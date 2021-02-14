//I (1), V (5), X (10), L (50), C (100), D (500), M (1000)

//1- Só permitir digitar I, V, X, L, C, D, M
//2- Identificar o número digitado 
//3- Ver se o proximo numero é maior, menor ou igual
//4- Se for maior subtrai o proximo numero do anterior
//5- Se for menor ou igual soma o proximo numero ao atual

var number = document.getElementById("roman-algarism-input")
var result = document.getElementById("answer-input")

number.addEventListener("keyup", identifyNumber)

function identifyNumber() {

    for (i = 0; i < number.value.length; i++) {

    }

}