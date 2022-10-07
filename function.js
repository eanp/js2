function pertambahan(number1, number2){
    let total = number1 + number2
    return total
}

const pengurangan = function(number1, number2){
    let total = number1 - number2
    return total
}

perkalian = (number1,number2) => {
    let total = number1 * number2
    return total
}

pembagian = (number1,number2) => number1/number2

console.log(`pertambahan = ${pertambahan(3,5)}, pengurangan = ${pengurangan(10,3)}, pembagian = ${pembagian(15,5)}, perkalian ${perkalian(3,4)}`)

penambahanString = (string) => {
    let total = string.string1 + string.string2
    return total
}

let data = {
    string1 : 'Hello ',
    string2 : 'World'
}

console.log(penambahanString(data))