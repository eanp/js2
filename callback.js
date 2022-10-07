function SayHello(name, callback){
    let greeting = `Hello ${name}`
    callback(greeting)
}

function showGreeting(quote){
    console.log(quote)
}

SayHello("Pijar", showGreeting)


const Umur = (name, number,callback) => {
    let output = `Umur ${name} adalah ${number}`
    callback(output,number)
}

const ShowUmur = (output) => console.log(output)
const ShowUmurlengkap = (output,number) => console.log(output+` kelahiran ${2022-number}`)

Umur("Ridwan",19,ShowUmur)
Umur("Ridwan",19,ShowUmurlengkap)