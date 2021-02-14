//I (1), V (5), X (10), L (50), C (100), D (500), M (1000)

//1- Só permitir digitar I, V, X, L, C, D, M
//2- Identificar o número digitado 
//3- Ver se o proximo numero é maior, menor ou igual
//4- Se for maior da ERRO
//5- Se for menor ou igual soma o proximo numero ao atual

var number = document.getElementById("roman-algarism-input")
var result = document.getElementById("answer-input")

number.addEventListener("keyup", identifyNumber)


function numberConverter(n) {
    if (n == 'I') {
        n = 1
        return n
    }

    if (n == 'V') {
        n = 5
        return n
    }

    if (n == 'X') {
        n = 10
        return n
    }

    if (n == 'L') {
        n = 50
        return n
    }

    if (n == 'C') {
        n = 100
        return n
    }

    if (n == 'D') {
        n = 500
        return n
    }

    if (n == 'M') {
        n = 1000
        return n
    }
}



function identifyNumber() {

    numero = number.value.toUpperCase()
    resultado = 0

    for (i = 0; i < numero.length; i++) {

        atual = numero[i]
        ant = numero[i - 1]

        numero_atual = numberConverter(atual)
        numero_ant = numberConverter(ant)

        if (ant != undefined) {

            if (numero_atual <= numero_ant) {
                resultado += numero_atual
            }

            if (numero_atual > numero_ant) {
                resultado -= numero_atual
            }

        }

        if (ant == undefined) {

            resultado += numero_atual

        }

    }

    if (resultado < 0) {
        resultado = Math.abs(resultado)
        result.value = resultado
    } else {
        result.value = resultado
    }

}
