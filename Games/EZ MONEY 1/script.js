document.addEventListener("keydown", event => {

    if (event.shiftKey) {
        part1 = true
        setTimeout(function() {part1=false},1000)
    }
    if (event.key.toLowerCase() == "g") {
        if (part1) {
            part2 = true
            setTimeout(function() {part2=false},1000)
        }
    }
    if (event.key.toLowerCase() == "h") {
        if (part2) {
            part3 = true
            setTimeout(function() {part3=false},1000)
        }
    }
    if (event.ctrlKey) {
        if (part3) {
            part4 = true
            setTimeout(function() {part4=false},1000)
        }
    }
    if (event.key.toLowerCase() == "n") {
        if (part4) {
            part5 = true
        }
    }

    if (gameLoaded && part5) {

        if (event.key.toLowerCase() == "1" && event.altKey) {
            hire("mk1")
        }
        else if (event.key.toLowerCase() == "!" && event.altKey && event.shiftKey) {
            levelUp("mk1")
        }
        else if (event.key.toLowerCase() == "2" && event.altKey) {
            hire("mk2")
        }
        else if (event.key.toLowerCase() == "@" && event.shiftKey && event.altKey) {
            levelUp("mk2")
        }
        else if (event.key.toLowerCase() == "3" && event.altKey) {
            hire("mk3")
        }
        else if (event.key.toLowerCase() == "#" && event.altKey && event.shiftKey) {
            levelUp("mk3")
        }
        else if (event.key.toLowerCase() == "4" && event.altKey) {
            hire("mk4")
        }
        else if (event.key.toLowerCase() == "$" && event.altKey && event.shiftKey) {
            levelUp("mk4")
        }
        else if (event.key.toLowerCase() == "5" && event.altKey) {
            hire("mk5")
        }
        else if (event.key.toLowerCase() == "%" && event.altKey && event.shiftKey) {
            levelUp("mk5")
        }
        else if (event.key.toLowerCase() == "6" && event.altKey) {
            hire("mk6")
        }
        else if (event.key.toLowerCase() == "^" && event.altKey && event.shiftKey) {
            levelUp("mk6")
        }
        else if (event.key.toLowerCase() == "7" && event.altKey) {
            hire("mk7")
        }
        else if (event.key.toLowerCase() == "&" && event.altKey && event.shiftKey) {
            levelUp("mk7")
        }
        else if (event.key.toLowerCase() == "8" && event.altKey) {
            hire("mk8")
        }
        else if (event.key.toLowerCase() == "*" && event.altKey && event.shiftKey) {
            levelUp("mk8")
        }
        else if (event.key.toLowerCase() == "9" && event.altKey) {
            hire("mk9")
        }
        else if (event.key.toLowerCase() == "(" && event.altKey && event.shiftKey) {
            levelUp("mk9")
        }
        else if (event.key.toLowerCase() == "0" && event.altKey) {
            hire("mk10")
        }
        else if (event.key.toLowerCase() == ")" && event.altKey && event.shiftKey) {
            levelUp("mk10")
        }

        else if (event.key.toLowerCase() == "q" && event.altKey) {
            event.preventDefault()
            prestigeUpgrade("nuclearPower")
        }
        else if (event.key.toLowerCase() == "w" && event.altKey) {
            event.preventDefault()
            prestigeUpgrade("taxCuts")
        }
        else if (event.key.toLowerCase() == "e" && event.altKey) {
            event.preventDefault()
            prestigeUpgrade("BOGOF")
        }
        else if (event.key.toLowerCase() == "r" && event.altKey) {
            event.preventDefault()
            prestigeUpgrade("multiplier")
        }
        else if (event.key.toLowerCase() == "t" && event.altKey) {
            event.preventDefault()
            prestigeUpgrade("tokensAdd")
        }

        else if (event.key.toLowerCase() == "p" ) {
            prestige()
        }

        else if (event.key.toLowerCase() == "q" && event.shiftKey) {
            document.querySelector(".alerts").click()
        }
        else if (event.key.toLowerCase() == "w" && event.shiftKey) {
            document.querySelector(".automations").click()
        }

        else if (event.key.toLowerCase() == "z" && event.altKey) {
            Phire("wizzard")
        }
        else if (event.key.toLowerCase() == "x" && event.altKey) {
            Phire("hackerman")
        }
        else if (event.key.toLowerCase() == "c" && event.altKey) {
            Phire("artist")
        }
        else if (event.key.toLowerCase() == "v" && event.altKey) {
            Phire("nasaEngineer")
        }

        else if (event.key.toLowerCase() == "q") {
            upgrade()
        }

        else if (event.key.toLowerCase() == "a") {
            autoUpgrade()
        }

        else if (event.key.toLowerCase() == "s") {
            autoPrintMoney()
        }
        else if (event.key.toLowerCase() == "d") {
            autoPlay()
        }

        else if (event.key.toLowerCase() == "z") {
            hire("builders")
        }
        else if (event.key.toLowerCase() == "x") {
            hire("managers")
        }
        else  if (event.key.toLowerCase() == "c") {
            hire("superManagers")
        }
        else  if (event.key.toLowerCase() == "2") {
            document.querySelector(".prestigeUpgradesButton").click()
        }
        else if (event.key.toLowerCase() == "1") {
            document.querySelector(".upgradeButton").click()
        }

        else if (event.key== "ArrowUp") {
            if(document.querySelector(".upgrades").style.display == "block" ) {
                document.querySelector(".up_arrow").click()
            }
        }
        else if (event.key == "ArrowDown") {
            if (document.querySelector(".upgrades").style.display == "block") {
                document.querySelector(".down").click()
            }
        }

        if (event.key.toLowerCase() == "l" && event.shiftKey) {
            part5 = false
        }
        else if (event.key.toLowerCase() == "r") {
            if (window.confirm("Are you sure you want to reset, this is not able to be undone? ")) {
                reset()
            }
        }
    }

    else if (gameLoaded) {
        if (event.key.toLowerCase() == "r") {
            if (window.confirm("Are you sure you want to reset, this is not able to be undone? ")) {
                reset()
            }
        }
    }

    

    if (String(parseInt(event.key)) != "NaN") {
        if (document.querySelector(".difficulty") != undefined && setDifficultyPageLoaded) {
            if (parseInt(event.key) > 0 && parseInt(event.key) < difficulties.length + 1) {
                    setDifficulty(difficulties[parseInt(event.key) - 1],true)
            }
        }
    }
    if (event.key.toLowerCase() == " ") {
        if (document.querySelector(".start") != undefined && startScreenLoaded) {
            start()
        }
    }
})


var q = {
    money: 0,
    moneyPerSecond: 0,
    print: {
        earn: 1,
        cost: 1000
    },

    builders: {
        amount: 0,
        cost: 50000
    },
    engineers: {
        amount: 0,
        cost: 1000000
    },
    managers: {
        amount: 0,
        cost: 25000000
    },
    superManagers: {
        amount: 0,
        cost: 150000000
    },

    easy: 1,
    medium: 5,
    hard: 25,
    insane: 100,

    autoPrint: {
        on: false,
        cost: 100000,
    },
    autoUpgrade: {
        on: false,
        cost: 10000,
    },
    autoPlay: {
        on: false,
        cost: 500000000,
    },

    prestige: {
        amount: 0,
        cost: 10000000000000000,
        prestigeTokens: 0,
        multiplier: {
            amount: 1,
            cost: 1,
            max: 99999999999999999999999,
            add: 5,
            level: 0,
        },
        tokensAdd: {
            amount: 1,
            cost: 1,
            max: 99999999999999999999999,
            add: 1,
            level: 0,
        },
        nuclearPower: {
            amount: 1000,
            cost: 1,
            max: 19,
            add: -50,
            level: 0,
        },
        taxCuts: {
            amount: 0,
            cost: 1,
            max: 19,
            add: 5,
            level: 0,
        },
        BOGOF: {
            amount: 0,
            cost: 1,
            max: 5,
            add: 1,
            level: 0,
        },

        wizzard: {
            amount: 0,
            cost: 10000,
        },
        artist: {
            amount: 0,
            cost: 10,
        },
        hackerman: {
            amount: 0,
            cost: 1000,
        },
        nasaEngineer: {
            amount: 0,
            cost: 100,
        },
        buisnessManager: {
            amount: 0,
            cost: 5000,
        },
    },


    lastPlayed: undefined,
    factories: [],

    
    

}

class factory {
    constructor(name, earn,page="page1") {
        this.name = name
        this.earn = earn
        this.cost = earn * 25

        this.page = page
        q.factories.push(this.name)
        q[this.name] = {
            amount: 0,
            cost: this.cost,
            level: 0,
            earn: this.earn,
        }


        var capital = String(String(this.name).split("")[0].toUpperCase())
        var arr = String(this.name).split("")
        arr.shift()
        var other = String(arr).replaceAll(",", "")
        var finalString = capital + other
        var factoryHTML = document.createElement("div")
        factoryHTML.className = this.name
        factoryHTML.innerHTML = `
            <button class="upgrade${finalString}">&uarr;</button>
            <button class="build${finalString}">Build</button>
            <label class="${this.name}Display">${this.text}a</label>
        `
        document.querySelector(`.${this.page}factories`).appendChild(factoryHTML)
        document.querySelector(`.upgrade${finalString}`).onclick =  () => {levelUp(this.name)}
        document.querySelector(`.build${finalString}`).onclick =  ()  => { hire(this.name) }

    }
}

var difficulties = ["easy", "medium", "hard", "insane"]
var difficulty = ""

var mk1 = new factory("mk1", 50000) 
var mk2 = new factory("mk2", 7500000)
var mk3 = new factory("mk3", 50000000) 
var mk4 = new factory("mk4", 7500000000) 
var mk5 = new factory("mk5", 50000000000) 

var mk6 = new factory("mk6",1500000000000,"page2")
var mk7 = new factory("mk7", 270000000000000, "page2")
var mk8 = new factory("mk8", 1500000000000000, "page2")
var mk9 = new factory("mk9", 27000000000000000, "page2")
var mk10 = new factory("mk10", 1500000000000000000, "page2")

var br = document.createElement("br")
document.querySelector(".page2factories").appendChild(br)

var part1;
var part2;
var part3;
var part4;
var part5;



const stock = JSON.parse(JSON.stringify(q))

var page = 1
var clicks = 0
var moneyEarnedInASecond = 0
var gameLoaded = false
var setDifficultyPageLoaded = false
var startScreenLoaded = true

var settings = {
    alertsOn: true,
    automationsOn: true
}

var giveMonee = 0

/*Function*/ {

function giveMoney() {
    q.money += q.print.earn * q.prestige.multiplier.amount;
    clicks += q.print.earn
}

function upgrade() {
    if (q.money < q.print.cost) { customAlert(`You need $${num2txt(q.print.cost - q.money)} more to do this.`); return false }
    q.money -= q.print.cost
    q.print.earn += 1;
}

function start() {
    if (window.confirm("Are you Sure? ")) {
        $(".start").fadeOut(800,function() {
            document.querySelector(".difficulty").style.visibility = "visible"
            setDifficultyPageLoaded = true
            startScreenLoaded = false
        })
    }
}

function setDifficulty(difficult,ask=false) {
    var d = false
    if (ask) {
        if (confirm("Are you sure about this, you will not be able to change the difficulty later????")) {
            d = true
        }
    }
    else {
        d = true
    }

    if (d) {
        if (document.querySelector(".start") != undefined) {
            $(".difficulty").fadeOut(1000,function() {
                document.querySelector("body").removeChild(document.querySelector(".start"))
                document.querySelector("body").removeChild(document.querySelector(".difficulty"))
                document.querySelector(".game").style.visibility = "visible"
                document.querySelector("body").style.backgroundColor = "white"
                gameLoaded = true
                setDifficultyPageLoaded = false
            })
        }

        difficulty = difficult
        startGame()
    }
}

var ez = null
var ez1 = null

function autoPrintMoney() {
    function what() {
        clearInterval(ez1)
        document.querySelector(".ez2").innerHTML = "buy"
        q.autoPrint.on = false;
    }

    if (q.autoPrint.on  && confirm("Are you sure you want to stop this?")) {
        what()
    }
    else {
        if (q.money < q.autoPrint.cost) {
            customAlert(`You need $${num2txt(q.autoPrint.cost - q.money)} more to do this.`)
            return false 
        }

        q.money -= q.autoPrint.cost 
        document.querySelector(".ez2").innerHTML = "on"
        q.autoPrint.on = true
        clearInterval(ez1)
        ez1 = setInterval(function () {
            q.money += q.print.earn * q.prestige.multiplier.amount
            clicks += q.print.earn
        }, 10)


        var hard = setTimeout(function () {
            what()
        }, 60000)
    }
}

function autoUpgrade() {
    function what() {
        clearInterval(ez)
        document.querySelector(".ez1").innerHTML = "buy"
        q.autoUpgrade.on = false;
    }

    if (q.autoUpgrade.on && confirm("Are you sure you want to stop this?")) {
        what()
    }

    else{
        if (q.money < q.autoUpgrade.cost) { 
            customAlert(`You need $${num2txt(q.autoUpgrade.cost - q.money)} more to do this.`); 
            return false 
        }
        q.money -= q.autoUpgrade.cost
        document.querySelector(".ez1").innerHTML = "on"
        q.autoUpgrade.on = true
        clearInterval(ez)
        ez = setInterval(function () {
            if (q.money >= q.print.cost) {
                upgrade()
            }
        }, 10)
    
        var hard = setTimeout(function () {
            what()
        }, 60000)
    }
}

function autoPlay() {
    if (q.money < q.autoPlay.cost) { customAlert(`You need $${num2txt(q.autoPlay.cost - q.money)} more to do this.`); return false }
    if (q.autoPlay.has) { return false }
    q.money -= q.autoPlay.cost
    window.alert("Get trolled bozo")
}

function update() {
    updateStats()
    displayStats()
    hideUpgradeButtons()
    updatePage()
}

function updatePage() {
    if (document.querySelector(`.page${page}`) != undefined) {
        var pages = document.getElementsByClassName("page")
        for (var i of pages) {
            document.querySelector(`.${String(i.className).split(" ")[0]}`).style.display = "none"
        }
        document.querySelector(`.page${page}`).style.display = "block"
    }
    else {
        page -= 1
    }
}

function hideUpgradeButtons() {
    try {
        for (var i of q.factories) {
            var capital = String(String(i).split("")[0].toUpperCase())
            var arr = String(i).split("")
            arr.shift()
            var other = String(arr).replaceAll(",", "")
            var finalString = capital + other
            if (q[i].level >= 5) {
                document.querySelector(`.upgrade${finalString}`).style.display = "none"
            }
            else {
                document.querySelector(`.upgrade${finalString}`).style.display = ""
            }

            
        }

        if (q.prestige.taxCuts.level == q.prestige.taxCuts.max){
            document.querySelector(".buyTaxCuts").style.display = "none"
        }
        else {
            document.querySelector(".buyTaxCuts").style.display = ""
        }
        if (q.prestige.nuclearPower.level == q.prestige.nuclearPower.max){
            document.querySelector(".buyNuclearFactories").style.display = "none"
        }
        else {
            document.querySelector(".buyNuclearFactories").style.display = ""
        }
        if (q.prestige.BOGOF.level == q.prestige.BOGOF.max){
            document.querySelector(".buyBuyOneGetOneFree").style.display = "none"
        }
        else {
            document.querySelector(".buyBuyOneGetOneFree").style.display = ""
        }
    }
    catch(err) {
        console.log(err)
        reset()
    }
}
function updateStats() {
    try {
        for (const iterator of q.factories) {
            if (q.factories.indexOf(iterator) == 0) {
                q.moneyPerSecond = q[iterator].earn * q[iterator].amount
            }
            else {
                q.moneyPerSecond += q[iterator].earn * q[iterator].amount
            }
        }

        q.lastPlayed = Date.now()
        moneyEarnedInASecond = q.moneyPerSecond + clicks
        
        


        if (q.prestige.amount >= 1) {
            if (document.querySelector(".game").style.visibility == "visible") {
                document.querySelector(".prestigeUpgradesButton").style.visibility = "visible"
            }
        }
        else {
            document.querySelector(".prestigeUpgradesButton").style.visibility = "hidden"
        }
        if (settings.alertsOn) {
            document.querySelector(".alerts").innerHTML = "Alerts: on"
        }
        else {
            document.querySelector(".alerts").innerHTML = "Alerts: off"
        }

        if (settings.automationsOn) {
            document.querySelector(".automations").innerHTML = "Automations: on"
        }
        else {
            document.querySelector(".automations").innerHTML = "Automations: off"
        }
    }   
    catch(err) {
        console.log(err)
        reset()
    }
}
function displayStats() {
    try {
        var ef= q.prestige.multiplier.amount
        var ek = (1000/q.prestige.nuclearPower.amount)
        document.querySelector(".moneyDisplay").innerHTML = `Money: $${num2txt(q.money)}`
        document.querySelector(".upgradeDisplay").innerHTML = `Costs $${num2txt(q.print.cost)} to upgrade. You currently make $${num2txt(q.print.earn * ef)} per click.`
        document.querySelector(".prestigeDisplay").innerHTML = `Prestiges: ${q.prestige.amount}`
        document.querySelector(".tokenDisplay").innerHTML = `PT$:${num2txt(q.prestige.prestigeTokens)}`
        document.querySelector(".moreMoneyDisplay").innerHTML = `The more you buy, the more you multiplier you get. Cost: PT$${num2txt(q.prestige.multiplier.cost)} Multiplier: ${q.prestige.multiplier.amount}`
        document.querySelector(".moreTokensDisplay").innerHTML = `The more you buy, the more you tokens you get per prestige. Cost: PT$${num2txt(q.prestige.tokensAdd.cost)} Extra Tokens: ${q.prestige.tokensAdd.amount - 1}`
        document.querySelector(".nuclearFactoriesDisplay").innerHTML = `Increase production and speed by nuclear power. Cost: PT$${num2txt(q.prestige.nuclearPower.cost)} production is now every ${q.prestige.nuclearPower.amount} ms`
        document.querySelector(".taxCutsDisplay").innerHTML = `Reduce the prices of everything. Cost: PT$${num2txt(q.prestige.taxCuts.cost)} Tax cuts: ${q.prestige.taxCuts.amount}%`
        document.querySelector(".BOGOFDisplay").innerHTML = `Increase the amount of free factories you get when BUYING. Cost: PT$${num2txt(q.prestige.BOGOF.cost)} free stuff: ${q.prestige.BOGOF.amount}`

        document.querySelector(".mk1Display").innerHTML = `Mk1 factory: A simple, low tech factory that produces  $${num2txt(q.mk1.earn * ef)} per second and costs $${num2txt(q.mk1.cost)}. You currently have ${num2txt(q.mk1.amount)}.`
        document.querySelector(".mk2Display").innerHTML = `Mk2 factory: A basic factory that makes  $${num2txt(q.mk2.earn* ef)} and costs $${num2txt(q.mk2.cost)}. You currently have ${num2txt(q.mk2.amount)}.`
        document.querySelector(".mk3Display").innerHTML = `Mk3 factory: An average factory that makes $${num2txt(q.mk3.earn* ef)} and costs $${num2txt(q.mk3.cost)}. You currently have ${num2txt(q.mk3.amount)}.`
        document.querySelector(".mk4Display").innerHTML = `Mk4 factory: A high tech factory that costs $${num2txt(q.mk4.cost)}. The price is worth it because it makes you $${num2txt(q.mk4.earn* ef)}. You currently have ${num2txt(q.mk4.amount)}.`
        document.querySelector(".mk5Display").innerHTML = `Mk5 factory: A super high tech factory that is completely automated and makes  $${num2txt(q.mk5.earn* ef)}. However it is not cheap and will cost you a fortune. You currently have ${num2txt(q.mk5.amount)}.`
        document.querySelector(".mk6Display").innerHTML = `mk6 factory: A crazy factory that creates money out of thin air. It makes you $${num2txt(q.mk6.earn* ef)}, but cost you $${num2txt(q.mk6.cost)}. You have ${num2txt(q.mk6.amount)}.`
        document.querySelector(".mk7Display").innerHTML =  `mk7 factory: This factory is so good, the presedent wanted it for himself. It makes you $${num2txt(q.mk7.earn* ef)}, and costs you $${num2txt(q.mk7.cost)}. You own ${num2txt(q.mk7.amount)}.`
        document.querySelector(".mk8Display").innerHTML =  `mk8 factory: This factory is better then its predesesor, and makes $${num2txt(q.mk8.earn* ef)}. It costs $${num2txt(q.mk8.cost)}, and you have ${num2txt(q.mk8.amount)}.`
        document.querySelector(".mk9Display").innerHTML =  `mk9 factory: This amazing brilliant insane epic factory costs $${num2txt(q.mk9.cost)}. It is worth it because it makes you $${num2txt(q.mk9.earn* ef)}. You have ${num2txt(q.mk9.amount)} of them.`
        document.querySelector(".mk10Display").innerHTML = `mk10 factory: This top of the market factory makes all of your other ones useless. It comes with a high price tag of $${num2txt(q.mk10.cost)}. You can flex ${num2txt(q.mk10.amount)} of them.`

        document.querySelector(".superManagerDisplay").innerHTML = `Super Manager: A person who hires managers and builders for you every 5 minutes. They are not cheap and cost $${num2txt(q.superManagers.cost)}. You currently have ${num2txt(q.superManagers.amount)}.`
        document.querySelector(".managerDisplay").innerHTML = `Manager: Somone who automatically hires builders so you can keep dreaming about being rich. They cost you $${num2txt(q.managers.cost)}. You have ${num2txt(q.managers.amount)} hired.`
        document.querySelector(".builderDisplay").innerHTML = `Builder: Somone who automatically builds factories every 15 seconds, so you dont have to. They cost $${num2txt(q.builders.cost)}. You currently have ${num2txt(q.builders.amount)}.`
        document.querySelector(".engineerDisplay").innerHTML = `Engineer: A big brain person who slowly makes your factories more advanced. They cost you $${num2txt(q.engineers.cost)}. You have ${num2txt(q.engineers.amount)} engineers at the moment.`
        
        document.querySelector(".nasaEngineerDisplay").innerHTML = `NASA Engineer: This person worked at NASA, and has so much to offer. He will cost you PT$${num2txt(q.prestige.nasaEngineer.cost)}. You have a crew of ${num2txt(q.prestige.nasaEngineer.amount)}. `
        document.querySelector(".wizzardDisplay").innerHTML = `Wizzard: A magical person who makes money appear out of thin air. His services will cost you PT$${num2txt(q.prestige.wizzard.cost)}. You have ${num2txt(q.prestige.wizzard.amount)} of them.`
        document.querySelector(".hackerManDisplay").innerHTML = `Hacker Man: He will hack into bank accounts and steal money. He charges PT$${num2txt(q.prestige.hackerman.cost)}. You have ${num2txt(q.prestige.hackerman.amount)} of them.`
        document.querySelector(".artistDisplay").innerHTML = `Artist: They will paint pictiures of your money and factories. You can hire them for PT$${num2txt(q.prestige.artist.cost)}, and you have ${num2txt(q.prestige.artist.amount)} of them.`
        document.querySelector(".buisnessManagerDisplay").innerHTML = `Buisness Manager: He will take care of everything you have. He is going to cost you PT$${num2txt(q.prestige.buisnessManager.cost)}. You have ${num2txt(q.prestige.buisnessManager.amount)} of them.`
        
        document.querySelector(".moneyPerSecondDisplay").innerHTML = `Money per second: $${num2txt(Math.floor((q.moneyPerSecond* ef * ek) + clicks))}`
        document.querySelector(".pageDisplay").innerHTML = `Page: ${page}`

        document.querySelector(".prestigeProgressFill").style.width = Math.floor((q.money/q.prestige.cost) * 100) + "%"
    }
    catch(err) {
        console.log(err)
        clearInterval(crazyUpdate)
        location.reload()
    }
}

function moneyPopup(amount) {
    if (amount > 0) {
        var label = document.querySelector(".moneyPopup")
        label.innerHTML = `+$${num2txt(amount)}`
        label.className = `moneyPopup`
        document.querySelector(".money").appendChild(label)

        $(".moneyPopup").fadeOut(0).fadeIn(400).fadeOut(0)
    }
}

function hire(thing) {
    if (q.money < q[thing].cost) { customAlert(`You need $${num2txt(q[thing].cost - q.money)} more to do this.`); return false }
    q.money -= q[thing].cost
    q[thing].amount += 1 * (q.prestige.BOGOF.amount + 1)
}
function Phire(thing) {
    if (q.prestige.prestigeTokens < q.prestige[thing].cost) { customAlert(`You need PT$${num2txt(q.prestige[thing].cost - q.prestige.prestigeTokens)} more to do this.`); return false }
    if (thing == "buisnessManager") {q.prestige.prestigeTokens -= q.prestige[thing].cost; window.alert("lol bozo you fell for that again!!!"); return false}
    q.prestige.prestigeTokens -= q.prestige[thing].cost
    q.prestige[thing].amount += 1 * (q.prestige.BOGOF.amount + 1)
}

function levelUp(thing) {
    if (q.money < q[thing].cost * 10) { customAlert(`You need $${num2txt((q[thing].cost * 10) - q.money)} more to do this.`); return false }
    if (q[thing].level >= 5) {return false }
    q.money -= q[thing].cost * 10
    q[thing].earn *= 2
    q[thing].level += 1

}

function prestige() {
    if (q.money >= q.prestige.cost && confirm("Are you sure you want to prestige, this cannot be undone?")) {
        document.querySelector(".prestigeUpgrades").style.display = displays[1]
        document.querySelector(".upgrades").style.display = displays[1]
        x=0
        y=0
        page = 1
        $(".game").fadeOut(1000,function() {
            document.querySelector("body").style.backgroundColor = "black"
            prestigeStats = q.prestige
            clearInterval(ez1)
            clearInterval(ez)
            document.querySelector(".ez1").innerHTML = "buy"
            document.querySelector(".ez2").innerHTML = "buy"
            reset() 
            q.prestige = prestigeStats
            q.prestige.prestigeTokens += q.prestige.tokensAdd.amount * q.prestige.multiplier.amount
            q.prestige.amount += 1
            q.prestige.cost *= 10
            
            for (var i in q) {
                if (q[i] != null && q[i].cost != undefined) {
                    // probably to not do prestige upgrades
                    if (q[i].prestigeTokens != undefined) {}
                    else {
                        q[i].cost = stock[i].cost * ((100-q.prestige.taxCuts.amount)/100)
                    }
                }
            }
            
            setTimeout(function() {
                document.querySelector("body").style.backgroundColor = "white"
                $(".game").fadeIn(500)
            },1000)
        })
    }
    else {
        window.alert(`You need $${num2txt(q.prestige.cost - q.money)} more to do this.`)
    }
}

function setIntervall(callback, timeout,key) {
    setInterval(() => {
        if (settings.automationsOn) {
            callback()
        }
    }, timeout);
}


function save() {
    localStorage.setItem("EZ_money_1_save/" + difficulty, JSON.stringify(q))

    localStorage.setItem("EZ_money_1_settings", JSON.stringify(settings))
}

function load() {
    if (localStorage.getItem("EZ_money_1_save/" + difficulty) != undefined) {
        var data = JSON.parse(localStorage.getItem("EZ_money_1_save/" + difficulty))
        for (var i in data) {
            q[i] = data[i]
        }
    }
    if (localStorage.getItem("EZ_money_1_settings") != undefined) {
        var data = JSON.parse(localStorage.getItem("EZ_money_1_settings"))
        settings = JSON.parse(JSON.stringify(data))
    }
}

function reset() {
    q = JSON.parse(JSON.stringify(stock))
    save()
    setDifficulty(difficulty)
}

function customAlert(message) {
    if (settings.alertsOn) {
        window.alert(message)
    }
}

function startGame() {
    load()
    if (q.lastPlayed != null) {
        var a = Math.round((Date.now() - q.lastPlayed) / 1000)

        if (a >= 60 && q.moneyPerSecond >= 1) {
            var factories = parseInt(a / 15)
            var managers = parseInt(a / 300)
            var builders = parseInt(a / 60)
            var engineers = parseInt(a / 60)

            var minutes = parseInt(a/60)
            
            var factories2 = 0
            var builders2 = 0
            var engineers2 = 0
            var managers2 = 0

            q.money += q.moneyPerSecond * a * q.prestige.multiplier.amount

            for (var i = 0; i < factories; i++) {
                q.factories.reduceRight((_, elem) => {
                    if(elem != undefined) {
                        if (q.money > q[elem].cost) {
                            var ek = Math.floor(q.money / q[elem].cost)
        
                            if (ek > q.builders.amount) {
                                ek = q.builders.amount
                            }
        
                            var cost = ek * q[elem].cost
                            q.money -= cost
                            q[elem].amount += ek
                            factories2 += ek
                        }
                    }
                }, null)
            }
            if (q.money >= q.builders.cost * q.managers.amount * builders) {
                q.builders.amount += q.managers.amount * builders * (q.prestige.BOGOF.amount + 1)
                q.money -= q.managers.amount * builders * q.builders.cost
                builders2 += q.managers.amount * builders   * (q.prestige.BOGOF.amount + 1)
            }
            if (q.money >= q.engineers.cost * q.managers.amount * engineers) {
                q.engineers.amount += q.managers.amount * engineers * (q.prestige.BOGOF.amount + 1)
                q.money -= q.managers.amount * engineers * q.engineers.cost
                engineers2 += q.managers.amount * engineers * (q.prestige.BOGOF.amount + 1)
            }

            if (q.money >= q.managers.cost * q.superManagers.amount * managers) {
                q.managers.amount += q.superManagers.amount * managers * (q.prestige.BOGOF.amount + 1)
                q.money -= q.superManagers.amount * managers * q.managers.cost
                managers2 += q.managers.amount * managers * (q.prestige.BOGOF.amount + 1)
            } 
            

            if (q.money >= q.managers.cost * managers * q.superManagers.amount) {
                q.managers.amount += q.superManagers.amount * managers * (q.prestige.BOGOF.amount + 1)
                q.money -= q.managers.cost * managers * q.superManagers.amount
                managers2 += q.superManagers.amount * managers * (q.prestige.BOGOF.amount + 1)
            }

            window.alert(`while you were gone for ${minutes} minutes: \nYou earned $${num2txt(q.moneyPerSecond * a)},\nYou earned ${num2txt(builders2)} builders,\nYou earned ${num2txt(engineers2)} engineers, \nYou earned ${num2txt(managers2)} managers,\nYou earned ${num2txt(factories2)} factories,`)
        }
    }
    if (q.print.cost / 1000 == 1) {
        for (var i in q) {
            if (q[i] != null && q[i].cost != undefined) {
                q[i].cost *= q[difficulty]
            }
        }
    }
    setInterval(function () { save() }, 1)
    clearInterval(giveMonee)
    giveMonee = setInterval(function () {
        if (settings.automationsOn) {
            q.money += q.moneyPerSecond * q.prestige.multiplier.amount
        }
    }, q.prestige.nuclearPower.amount)
}

function prestigeUpgrade(upgrade) {
    if (q.prestige.prestigeTokens >= q.prestige[upgrade].cost) {
        if (q.prestige[upgrade].level < q.prestige[upgrade].max) {
            q.prestige[upgrade].amount += q.prestige[upgrade].add
            q.prestige[upgrade].level += 1
            q.prestige.prestigeTokens -= q.prestige[upgrade].cost
            q.prestige[upgrade].cost = Math.floor(1.5**(q.prestige[upgrade].level +1))

        }
    
        if (q.prestige.tokensAdd.amount ==  1) {
            q.prestige.tokensAdd.add = 2
        }
        if (q.prestige.tokensAdd.amount ==  2) {
            q.prestige.tokensAdd.add = 4
        }
        if (q.prestige.tokensAdd.amount >=  3) {
            q.prestige.tokensAdd.add = 10
        }
        if (q.prestige.tokensAdd.amouxnt >=  10) {
            q.prestige.tokensAdd.add = 100
        }


        for (var i in q) {
            if (q[i] != null && q[i].cost != undefined) {
                if (q[i].prestigeTokens != undefined) {}
                else {
                    q[i].cost = stock[i].cost * ((100-q.prestige.taxCuts.amount)/100)
                }
            }
        }

        clearInterval(giveMonee)

        giveMonee = setInterval(function () {
            if (settings.automationsOn) {
                q.money += q.moneyPerSecond * q.prestige.multiplier.amount
            }
        }, q.prestige.nuclearPower.amount)
    }

    

}

}

/*Intervals*/{



var crazyUpdate = setInterval(function () {
    update()
}, 1)



setIntervall(function () {
    if (q.superManagers.amount >= 1) {
        if (q.money > q.managers.cost) {
            var managers = Math.floor(q.money / q.managers.cost)

            if (managers > q.superManagers.amount) {
                managers = q.superManagers.amount
            }

            var cost = managers * q.managers.cost

            q.money -= cost
            q.managers.amount += managers * (q.prestige.BOGOF.amount + 1)
        }

        if (q.money > q.builders.cost) {
            var builders = Math.floor(q.money / q.builders.cost)

            if (builders > q.superManagers.amount) {
                builders = q.superManagers.amount
            }

            var cost = builders * q.builders.cost
            q.money -= cost
            q.builders.amount += builders * (q.prestige.BOGOF.amount + 1)
        }

        if (q.money > q.engineers.cost) {
            var engineers = Math.floor(q.money / q.engineers.cost)

            if (engineers > q.superManagers.amount) {
                engineers = q.superManagers.amount
            }

            var cost = engineers * q.engineers.cost
            q.money -= cost
            q.engineers.amount += engineers * (q.prestige.BOGOF.amount + 1)
        }
    }
}, 300000)

setIntervall(function () {
    if (q.managers.amount >= 1) {

        if (q.money > q.builders.cost) {
            var builders = Math.floor(q.money / q.builders.cost)

            if (builders > q.managers.amount) {
                builders = q.managers.amount
            }

            var cost = builders * q.builders.cost

            q.money -= cost
            q.builders.amount += builders * (q.prestige.BOGOF.amount + 1)
        }
    }
    if (q.managers.amount >= 1) {

        if (q.money > q.engineers.cost) {
            var engineers = Math.floor(q.money / q.engineers.cost)

            if (engineers > q.managers.amount) {
                engineers = q.managers.amount
            }

            var cost = engineers * q.engineers.cost

            q.money -= cost
            q.engineers.amount += engineers * (q.prestige.BOGOF.amount + 1)
        }
    }
}, 60000)

setIntervall(function () {
    if (q.engineers.amount >= 1) {
        for (const iterator of q.factories) {
            if (q[iterator].amount >= 1) {
                q[iterator].earn = Math.floor(q[iterator].earn + ((q.engineers.amount)/1000))
                q[iterator].cost = Math.floor(q[iterator].cost + ((q.engineers.amount)/500))
            }
        }
    }
},60000)

setIntervall(function () {
    if (q.builders.amount >= 1) {
        q.factories.reduceRight((_, elem) => {
            if(elem != undefined) {
                if (q.money > q[elem].cost) {
                    var ek = Math.floor(q.money / q[elem].cost)

                    if (ek > q.builders.amount) {
                        ek = q.builders.amount
                    }

                    var cost = ek * q[elem].cost
                    q.money -= cost
                    q[elem].amount += ek * (q.prestige.BOGOF.amount + 1)
                }
            }
        }, null)
    }
}, 15000)
setIntervall(function () {moneyPopup(moneyEarnedInASecond);clicks = 0},1000)

//prestigers

setIntervall(function(){
    if (q.prestige.wizzard.amount >=1) {
        q.money += (Math.floor(q.prestige.cost/10)) * q.prestige.wizzard.amount * q.prestige.multiplier.amount
    }
},600000)

setIntervall(function() {
    if (q.prestige.hackerman.amount >=1) {
        q.money += (Math.floor(q.prestige.cost/500)) * q.prestige.hackerman.amount * q.prestige.multiplier.amount
    }
},600000) 

setIntervall(function () {
    if (q.prestige.nasaEngineer.amount >= 1) {
        for (const iterator of q.factories) {
            if (q[iterator].amount >= 1) {
                q[iterator].earn = Math.floor(q[iterator].earn + ((q.prestige.nasaEngineer.amount)/500))
            }
        }
    }
},300000)

setIntervall(function() {
    if (q.prestige.artist.amount >=1) {
        q.money += (Math.floor(q.prestige.cost/500000000)) * q.prestige.artist.amount * q.prestige.multiplier.amount
    }
},300000) 

}

/*Button onclicks*/{

document.querySelector(".upgradePrinter").onclick = function () { upgrade() }
document.querySelector(".printMoney").onclick = function () { giveMoney() }
document.querySelector(".ez1").onclick = function () { autoUpgrade() }
document.querySelector(".ez2").onclick = function () { autoPrintMoney() }
document.querySelector(".ez3").onclick = function () { autoPlay() }
document.querySelector(".buyMoreMoney").onclick = function() {prestigeUpgrade("multiplier")}
document.querySelector(".buyMoreTokens").onclick = function() {prestigeUpgrade("tokensAdd")}
document.querySelector(".buyNuclearFactories").onclick = function() {prestigeUpgrade("nuclearPower")}
document.querySelector(".buyTaxCuts").onclick = function() {prestigeUpgrade("taxCuts")}
document.querySelector(".buyBuyOneGetOneFree").onclick = function() {prestigeUpgrade("BOGOF")}
document.querySelector(".hireBuilder").onclick = function () { hire("builders") }
document.querySelector(".hireManager").onclick = function () { hire("managers") }
document.querySelector(".hireSuperManager").onclick = function () { hire("superManagers") }
document.querySelector(".hireEngineer").onclick = function () { hire("engineers") }

document.querySelector(".hireWizzard").onclick = function () { Phire("wizzard") }
document.querySelector(".hireHackerMan").onclick = function () { Phire("hackerman") }
document.querySelector(".hireArtist").onclick = function () { Phire("artist") }
document.querySelector(".hireNasaEngineer").onclick = function () { Phire("nasaEngineer") }
document.querySelector(".hireBuisnessManager").onclick = function () { Phire("buisnessManager") }

document.querySelector(".prestigeButton").onclick = function () { prestige() }
document.querySelector(".prsTstrt").onclick = function () { start() }
document.querySelector(".easy").onclick = function () {setDifficulty(`easy`,true) }
document.querySelector(".medium").onclick = function () { setDifficulty(`medium`, true) }
document.querySelector(".hard").onclick = function () { setDifficulty(`hard`,true) }
document.querySelector(".insane").onclick = function () { setDifficulty(`insane`, true) }


document.querySelector(".alerts").onclick = function () {
    if (settings.alertsOn) {settings.alertsOn = false}
    else {settings.alertsOn = true}
}
document.querySelector(".automations").onclick = function () {
    if (settings.automationsOn) {settings.automationsOn = false}
    else {settings.automationsOn = true}
}


x = 0
displays = ["block", "none"]
document.querySelector(".upgradeButton").onclick = () => {
    document.querySelector(".upgrades").style.display = displays[x]
    document.querySelector(".prestigeUpgrades").style.display = displays[1]
    y=0 
    if (x == 0) { x = 1 }
    else if (x == 1) { x = 0 }
}

y = 0
document.querySelector(".prestigeUpgradesButton").onclick = () => {
    if (q.prestige.amount >=1) {
        document.querySelector(".prestigeUpgrades").style.display = displays[y]
        document.querySelector(".upgrades").style.display = displays[1]
        x=0
        if (y == 0) { y = 1 }
        else if (y == 1) { y = 0 }
    }
}

document.querySelector(".up").onclick = () => {
    page += 1
}

document.querySelector(".down").onclick = () => {
    if (page > 0) {
        page -= 1
    }
}
}



