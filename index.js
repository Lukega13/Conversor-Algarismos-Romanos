//I (1), V (5), X (10), L (50), C (100), D (500), M (1000)

//1- Só permitir digitar I, V, X, L, C, D, M
//2- Identificar o número digitado 
//3- Ver se o proximo numero é maior, menor ou igual
//4- Se for maior da ERRO
//5- Se for menor ou igual soma o proximo numero ao atual

var number = document.getElementById("roman-algarism-input")
var result = document.getElementById("answer-input")

number.addEventListener("keyup", identifyNumber)

function identifyNumber() {

    numero = number.value.toUpperCase()
    calculo = 0


    for (i = 0; i < numero.length; i++) {

        if (numero[i] == 'I') {
            resultado = 1
        }

        if (numero[i] == 'V') {
            resultado = 5
        }

        if (numero[i] == 'X') {
            resultado = 10
        }

        if (numero[i - 1] == 'I') {
            resultado1 = 1
        }

        if (numero[i - 1] == 'V') {
            resultado1 = 5
        }

        if (numero[i - 1] == 'X') {
            resultado1 = 10
        }


        if (numero[i - 1] != undefined) {

            if (numero[i] <= numero[i - 1]) {
                calculo += resultado
            }

            if (numero[i] > numero[i - 1]) {
                calculo += Math.abs(resultado - resultado1) - resultado1
            }

        }

        if (numero[i - 1] == undefined) {

            calculo += resultado

        }

    }

    result.value = calculo

}
