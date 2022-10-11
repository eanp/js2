const nameData = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
]

const searchName = (value,limit,callback) => {
    // temporary variable
    let output = []
    // variable for checking with regex
    let checker = new RegExp(`${value}`,'gi')

    // looping data with foreach
    nameData.forEach(item => {
        // break loop with limit
        if(output.length == limit) return;

        // data checker with regex
        let result = item.match(checker)

        // input data if item match
        if(result){
            output = [...output,item]
        }
    })
    // print output
     callback(output)
}

let output = (data) => {
    console.log(data)
}

searchName("an",3,output)
searchName("an",4,output)
searchName("ol",4,output)
    