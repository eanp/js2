const Aljabar = {
    perkalian: function(number1,number2){
        let total = number1 * number2
        return total
    },
    pembagian: function(number1,number2){
        let total = number1 / number2
        return total
    }
}

let perkalian2 = Aljabar.perkalian(40,20)
// console.log(perkalian2)

let {perkalian, pembagian} = Aljabar;

// console.log(pembagian(50,5))


let data = [8,6,11,35,75,90,32]

// console.log(data.sort(function(a,b){return a - b}))

let mapping = data.map(function(num){return num})

// console.log(mapping)

let dataString = "Hallo ini adalah javascript"

// console.log(dataString.split(""))

let joinString = ["Pram","Rizky1","Rizky2","Helmi","Easy"]

console.log(joinString.join(","))