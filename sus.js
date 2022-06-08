//mega tool used for cracking password for school because they are only 8 digets so is ezpz 

let password = 614745
let stock = 600000


console.time("e")
var solve = setInterval(function() {
    stock += 1

    if (stock == password) {
        console.log("Password found!")
        console.log(stock, password)
        clearInterval(solve)
        console.timeEnd("e")
    }
},1)





