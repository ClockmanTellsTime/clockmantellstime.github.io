function num2txt(num) {
    const suffixes = ["thousand"," million"," billion"," trillion"," quadrillion"," quintillion"," sextillion"," septillion", " octillion"," nonillion"," decillion","undecillion","duodecillion","tridecillion","quaddecillion","quindecillion","sexadecillion","septadecillion","octadecillion","nondecillion","vigintillion"];

    let n = String(num);
    let txt = 0

    let a,b,c,d = 0

    if (num <= 999) {return String(num)}

    if (num >= 1000000000000000000000) {
        a = parseInt(n.split("+")[1])-2
        b = n.split("e")[0]

        if (b.length >= 4) {
            c = b.slice(0,4)
            c = c.split(".")[0] + c.split(".")[1]
        }
        if (b.length == 1) {
            c = b.slice(0)
            a += 2
        }
        if (b.length == 3) {
            c = b.slice(0,3)
            c = c.split(".")[0] + c.split(".")[1]
            a += 1
        }

        
        d = c
        

        

        var i = 0
        while (i < a) {
            d = d + "0"
            i ++;
        }

        n = d
    }

    if ((n.length-1) % 3 === 0){
        let first = n.charAt(0);
        let second = n.charAt(1)
        let third = n.charAt(2)
        let suffix = suffixes[((n.length-1)/3)-1]
        txt = first +"."+second+ third+ suffix
        if (third.toString() == "0"){
            txt = first +"."+second+ suffix
        }
        if (third.toString() == "0" && second.toString() == "0"){
            txt = first + suffix
        }
        
    }

    if ((n.length-2) % 3 === 0) {
        let first = n.charAt(0);
        let second = n.charAt(1)
        let third = n.charAt(2)
        let suffix = suffixes[((n.length-2)/3)-1]
        txt = first +second+"."+third+ suffix
        if (third.toString() == "0"){
            txt = first +second+ suffix
        }
    }

    if ((n.length-3) % 3 === 0) {
        let first = n.charAt(0);
        let second = n.charAt(1)
        let third = n.charAt(2)
        let suffix = suffixes[((n.length-3)/3)-1]
        txt = first +second+ third+ suffix
    }

    return txt
}  
