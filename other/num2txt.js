function num2txt(num) {

    //suffixes
    const suffixes = [" thousand"," million"," billion"," trillion"," quadrillion"," quintillion"," sextillion"," septillion"," octillion"," nonillion"," dectillion"," unD"," dD"," trD"," qdD"," qnD"," sxD"," spD", " octD"," nvD"," Vg"," unVg"," dVg"," trVg"," qdVg"," qnVg"," sxVg"," spVg"," ocVg"," nonVg"," Tg"," unTg"," dTg"," tsTg"," qdTg"," qnTg"," sxTG"," spTg"," ocTg"," noTg"," Qdr"," unQdr"," dQdr"," trQdr"," qdQdr"," qnQdr"," sxQdr"," spQdr"," octQdr"," nonQdr"," qQGnt"," uQGnt"," dQGnt"," tQGnt"," qdQGnt"," QnQGnt"," sxQGnt"," SpQGnt"," OQqGnt"," NvQqGnt"," SXGntl"," USXGntl"," DSXGntl"," TSXGntl"," qtSXGntl"," QnSXGntl"," sxSXGntl"," spSXGntl"," oSXGntl"," NVSXGntl"," SPTGNL"," USPTGNL"," dSPTGNL"," tSPTGNL"," qtSPTGNL"," qnSPTGNL"," svSPTGNL"," spSPTGNL"," oSPTGNL","NVSPTGNL"," OTGNTL"," UOTGNTL"," dOTGNTL"," tOTGNTL"," qtOTGNTL"," qnOTGNTL"," svOTGNTL"," spOTGNTL"," otOTGNTL"," nvOTGNTL"," NONGNTL"," uNONGNTL"," dNONGNTL"," tNONGNTL"," qtNONGNTL"," qnNONGNTL"," svNONGNTL"," spNONGNTL"," octNONGNTL"," nvNONGNTL"," CENT"," UNCENT"," DuCENT"]

    //variables
    let n = String(num);
    let betterNumber = 0

    //leave function early if number to small
    if (num <= 999) {return String(num)}
    if (num >= Infinity){return "INF"}

    //dumb number that makes this way too hard
    dumbNumber = 1000000000000000000000

    //i dont know how this works
    if (num >= dumbNumber) {
        Something = parseInt(n.split("+")[1])-2
        digetsorSMTH = n.split("e")[0]

        if (digetsorSMTH.length >= 4) {
            iDontEvenKnow = digetsorSMTH.slice(0,4)
            iDontEvenKnow = iDontEvenKnow.split(".")[0] + iDontEvenKnow.split(".")[1]
        }
        if (digetsorSMTH.length == 1) {
            iDontEvenKnow = digetsorSMTH.slice(0)
            Something += 2
        }
        if (digetsorSMTH.length == 3) {
            iDontEvenKnow = digetsorSMTH.slice(0,3)
            iDontEvenKnow = iDontEvenKnow.split(".")[0] + iDontEvenKnow.split(".")[1]
            Something += 1
        }

        for (var i = 0; i < Something; i++) {
            iDontEvenKnow = iDontEvenKnow + "0"
        }
        
        
        n = iDontEvenKnow
    }   

    //ezpz
    if ((n.length-1) % 3 === 0){
        let first = n.charAt(0);
        let second = n.charAt(1)
        let third = n.charAt(2)
        let suffix = suffixes[((n.length-1)/3)-1]
        betterNumber = first +"."+second+ third+ suffix
        if (third.toString() == "0"){
            betterNumber = first +"."+second+ suffix
        }
        if (third.toString() == "0" && second.toString() == "0"){
            betterNumber = first + suffix
        }
        
    }

    //also ezpz
    if ((n.length-2) % 3 === 0) {
        let first = n.charAt(0);
        let second = n.charAt(1)
        let third = n.charAt(2)
        let suffix = suffixes[((n.length-2)/3)-1]
        betterNumber = first +second+"."+third+ suffix
        if (third.toString() == "0"){
            betterNumber = first +second+ suffix
        }
    }

    //ezezezpz
    if ((n.length-3) % 3 === 0) {
        let first = n.charAt(0);
        let second = n.charAt(1)
        let third = n.charAt(2)
        let suffix = suffixes[((n.length-3)/3)-1]
        betterNumber = first +second+ third+ suffix
    }

    //return pogger number
    return betterNumber
}  


function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
