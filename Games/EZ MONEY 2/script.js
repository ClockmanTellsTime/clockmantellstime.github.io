document.addEventListener("keydown",function(event){
    console.log(event.key + " - " + event.keyCode)
    if (event.keyCode == 46) {
        reset();
    }
    if (event.keyCode == 191) {
        mainGame.data.items.money.amount += (mainGame.data.items.multiplier.amount) * ((mainGame.data.items.rebirth.amount + mainGame.data.items.super_rebirth.amount + mainGame.data.items.ultra_rebirth.amount + mainGame.data.items.prestige.amount + mainGame.data.items.super_prestige.amount + mainGame.data.items.ultra_prestige.amount + mainGame.data.items.power.amount + mainGame.data.items.super_power.amount + mainGame.data.items.ultra_power.amount + mainGame.data.items.god.amount)+1) 
    }
    if (event.keyCode == 72) {
        z *= -1
        if (z === -1) {
            document.addEventListener("mousemove", function(e) {
                document.getElementById("box").style.left = e.x - 50 + "px"
                document.getElementById("box").style.top = e.y  - 50 + "px"
            })
        }
    }  
    if (event.keyCode == 49) {
        upgrade("rebirth")
    }  
    if (event.keyCode == 50) {
        upgrade("super_rebirth")
    }  
    if (event.keyCode == 51) {
        upgrade("ultra_rebirth")
    }  
    if (event.keyCode == 52) {
        upgrade("prestige")
    } 
    if (event.keyCode == 53) {
        upgrade("super_prestige")
    }   
    if (event.keyCode == 54) {
        upgrade("ultra_prestige")
    }  
    if (event.keyCode == 55) {
        upgrade("power")
    }  
    if (event.keyCode == 56) {
        upgrade("super_power")
    }  
    if (event.keyCode == 57) {
        upgrade("ultra_power")
    }  
    if (event.keyCode == 48) {
        upgrade("god")
    }  
    if (event.keyCode == 90) {
        document.getElementById("title").innerHTML = "New Tab"
    }  
    if (event.keyCode == 88) {
        document.getElementById("title").innerHTML = "EZ money 2"
    }  
})

class game {
    constructor(reason) {
        this.data = {
            items: {
                money: {
                    amount: 0,
                    cost: 0
                },
                multiplier: {
                    amount: 0,
                    cost: 0
                },
                rebirth: {
                    cost: 5000,
                    amount: 0
                },
                super_rebirth: {
                    cost: 25,
                    amount: 0
                },
                ultra_rebirth: {
                    cost: 50,
                    amount: 0
                },
                prestige: {
                    cost: 800,
                    amount: 0
                },
                super_prestige: {
                    cost: 500,
                    amount: 0
                },
                ultra_prestige: {
                    cost: 1000,
                    amount: 0
                },
                power: {
                    cost: 3000,
                    amount: 0
                },
                super_power: {
                    cost: 5000,
                    amount: 0
                },
                ultra_power: {
                    cost: 8000,
                    amount: 0
                },
                god: {
                    cost: 1000000,
                    amount: 0
                },
                null:{
                    amount: 1
                }
            },
            controls: {
                backgroundColor: "rgb",
                max: 100000000000000000000,
                StartScreenHidden: false,
                
            },
            achivements: {
            },
            things: ["multiplier","money","rebirth","super_rebirth","ultra_rebirth","prestige","super_prestige","ultra_prestige","power","super_power","ultra_power","god","null"],
        }
    }
}

var i = 0;
var r = 0;
var q = 0;
var z = 1;
var menuShowing = false
var mainGame = new game("just because")

function tidy(char) {
    try {
        if (typeof(char) == "number") {
            char = String(num2txt(char));
            return char
        }
        
        else {
            if (char.includes("_")) {
                var x = char.replace("_"," ")
            }
            else {
                var x = char;
            }
            return x
        }
    }
    catch(err) {
        reset();
    }
}


function startGame() {
    navigator.clipboard.writeText('EZ money is cool!');
    typeWriter()
    addLabels()
    addButtons()
}

function addButtons() {
    for (var i in mainGame.data.things) {
        var btn = document.createElement("button");
        var x = document.createElement("br");
        const y = i;
        var Text = "get " + tidy(mainGame.data.things[parseInt(y) + 2])
        btn.innerHTML = Text
        btn.addEventListener("click",function() {
            upgrade(mainGame.data.things[2 + parseInt(y)])
        })

        if (btn.innerHTML !== "get null" && String(btn.innerHTML) !== "get undefined") {
            document.getElementById("buttons").appendChild(btn);
            document.getElementById("buttons").appendChild(x);
        }
    }
}

function addLabels() {
    for (var i in mainGame.data.things) {
        const c = i;
        if (mainGame.data.things[i] !== "null") {
            setInterval(function() {
                document.getElementById(mainGame.data.things[c]).innerHTML = tidy(mainGame.data.things[c]) + ": " + tidy(mainGame.data.items[mainGame.data.things[c]].amount)
            },100)
            if (mainGame.data.things[i] === "multiplier") {
                var label = document.createElement("label");
                var x = document.createElement("br");
                document.getElementById("stats").appendChild(label);
                document.getElementById("stats").appendChild(x);
                label.id = "money"
                setInterval(() => {
                    mainGame.data.items.money.amount += mainGame.data.items.multiplier.amount
                }, 100);
            }
            if (mainGame.data.things[i] === "money") {
                var label = document.createElement("label");
                var x = document.createElement("br");
                document.getElementById("stats").appendChild(label);
                label.id = "multiplier"
                setInterval(() => {
                    mainGame.data.items.multiplier.amount += (mainGame.data.items.rebirth.amount + 1) * (mainGame.data.items.god.amount + 1);
                }, 100);
            }
            else {
                var label = document.createElement("label");
                var x = document.createElement("br");
                document.getElementById("stats").appendChild(label);
                if (mainGame.data.things[i] !== "god") {
                    document.getElementById("stats").appendChild(x);
                }
                label.id = mainGame.data.things[i]
            }
        }
    }
}

function start() {
    document.getElementById("startScreen").parentNode.removeChild(document.getElementById("startScreen"))
    document.getElementById("stats").style.visibility = "visible"
    document.getElementById("buttons").style.visibility = "visible"
    load();
    setInterval(() => {
        mainGame.data.items.rebirth.amount += mainGame.data.items.super_rebirth.amount/10;
    }, 100);
    setInterval(() => {
        mainGame.data.items.super_rebirth.amount += mainGame.data.items.ultra_rebirth.amount/10;
    }, 100);
    setInterval(() => {
        mainGame.data.items.ultra_rebirth.amount += mainGame.data.items.prestige.amount/25;
    }, 100);    
    setInterval(() => {
        mainGame.data.items.prestige.amount += mainGame.data.items.super_prestige.amount/50;
    }, 100);       
    setInterval(() => {
        mainGame.data.items.super_prestige.amount += mainGame.data.items.ultra_prestige.amount/100;
    }, 100);   
    setInterval(() => {
        mainGame.data.items.ultra_prestige.amount += mainGame.data.items.power.amount/250;
    }, 100);   
    setInterval(() => {
        mainGame.data.items.power.amount += mainGame.data.items.super_power.amount/500;
    }, 100);  
    setInterval(() => {
        mainGame.data.items.super_power.amount += mainGame.data.items.ultra_power.amount/1000;
    }, 100);    
    setInterval(() => {
        mainGame.data.items.ultra_power.amount += mainGame.data.items.god.amount/1000000;
    }, 100);
    setInterval(() => {
        save();
    }, 100);  
    if (mainGame.data.controls.backgroundColor === "rgb") {
        document.getElementById("body").style.animation = "sports 5s 0s infinite alternate none";
    }
    else {
        document.getElementById("body").style.backgroundColor = mainGame.data.controls.backgroundColor;
    }
    
}

function save() {
    localStorage.setItem("EZ_money_2_save",JSON.stringify(mainGame.data));
}
function load() {
    var data  = JSON.parse(localStorage.getItem("EZ_money_2_save"))
    if (typeof data !== "undefined") {
        for (var x in data) {
            mainGame.data[x] = data[x]
        }
    }
}
function reset() {
    mainGame = new game("reset")
}

function typeWriter() {
    const txt = 'Another simple game where you earn some simple money...';   
    try { 
        if (i < txt.length) {
            document.getElementById("glow1").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
        if (i === txt.length) { 
            setTimeout(function () {document.getElementById("glow1").innerHTML = " "}, 2500);
            setTimeout(typeWriter2, 3000);
        }
    }
    catch(err) {
        
    }
}
function typeWriter2() {
    const txt = 'I hope you enjoy the game!';   
    try { 
        if (r < txt.length) {
            document.getElementById("glow1").innerHTML += txt.charAt(r);
            r++;
            setTimeout(typeWriter2, 100);
        }
        if (r === txt.length) { 
            setTimeout(function () {document.getElementById("glow1").innerHTML = " "}, 59500);
            setTimeout(typeWriter3, 60000);
        }
    }
    catch(err) {
    }
}
function typeWriter3() {
    const txt = '$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$';   
    try { 
        if (q < txt.length) {
            document.getElementById("glow1").innerHTML += txt.charAt(q);
            q++;
            setTimeout(typeWriter3, 25);
        }
    }
    catch(err) {
    }
}


function upgrade(thing) {
    var oneUp = mainGame.data.items[mainGame.data.things[mainGame.data.things.indexOf(thing)+1]];
    var oneDown = mainGame.data.items[mainGame.data.things[mainGame.data.things.indexOf(thing)-1]];
    var item = mainGame.data.items[thing]
    if (oneDown.amount >= item.cost) {
        var amount = Math.floor(oneDown.amount/item.cost)
        if (amount >= mainGame.data.controls.max || (oneUp.amount+1) >= mainGame.data.controls.max || ( oneUp.amount+1) * amount > mainGame.data.controls.max || mainGame.data.items[thing].amount + (( oneUp.amount+1) * amount) > mainGame.data.controls.max) {
            mainGame.data.items[thing].amount += mainGame.data.controls.max - item.amount
        }   
        else { 
            mainGame.data.items[thing].amount += amount * (oneUp.amount + 1)
        }
        for (var x in mainGame.data.things) {
            if (mainGame.data.things[x] === thing) {
                break
            }
            else {
                mainGame.data.items[mainGame.data.things[x]].amount = 0;
            }
        }
    }
    else {
        if (item.cost - oneDown.amount === 1 || String(mainGame.data.things[mainGame.data.things.indexOf(thing) - 1]).includes("power")) {
            window.alert("You need " + tidy(item.cost - oneDown.amount) + " more " + tidy(String(mainGame.data.things[mainGame.data.things.indexOf(thing) - 1])) + " to do this!")
        }
        else if(String(mainGame.data.things[mainGame.data.things.indexOf(thing) - 1]).includes("money")) {
            window.alert("You are $" + tidy(item.cost - oneDown.amount) + " short to be able do this!")
        }
        else {
            window.alert("You need " + tidy(item.cost - oneDown.amount) + " more " + tidy(String(mainGame.data.things[mainGame.data.things.indexOf(thing) - 1])) + "s to do this!")
        }
    }
}



function redeem_cheat_code(code) {
    if (code == "1") {
        for (var x in mainGame.data.things) {
            mainGame.data.items[mainGame.data.things[x]].cost = 0.1;
            console.log("All prices set to 0")
        }
    }
    else if (code == "2") {
        mainGame.data.controls.max = Infinity
    } 
}

function num2txt(num) {
    //the e in the name of this function stands for easy to make for me
    //the 2 in the name is how many hours it took me to make this function 


    //suffixes
    const suffixes = [" thousand"," million"," billion"," trillion"," quadrillion"," quintillion"," sextillion"," septillion", " octillion"," nonillion"," decillion"," undecillion"," duodecillion"," tridecillion"," quaddecillion"," quindecillion"," sexadecillion"," septadecillion"," octadecillion"," nondecillion"," vigintillion"];

    //variables
    let n = String(num);
    let betterNumber = 0

    //leave function early if number to small
    if (num <= 999) {return String(num)}

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




