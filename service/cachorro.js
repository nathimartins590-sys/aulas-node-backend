export function somar(num1, num2) {
    if(isNaN(num1)| isNaN(num2)) {
        throw new Error("favor coloque numeros")
    }
    return num1 + num2
}

export function dividir(num1, num2) {
    if(isNaN(num1)| isNaN(num2)) {
        throw new Error("favor coloque numeros")
    } 
    if (num2 == 0) {
        throw new Error("não é possivel dividir por zero")
    }

    return num1 / num2
}
