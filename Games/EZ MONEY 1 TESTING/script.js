document.addEventListener("keydown", event => {
    if (gameLoaded) {
        if (event.key.toLowerCase() == "r") {
            if (window.confirm("Are you sure you want to reset, this is not able to be undone? ")) {
                reset()
            }
        }   
    }
})


var q = {

    earth: {
        factories: [],
        money: 0,
        moneyPerSecond: 0,
        click: {
            amount: 1,
            cost: 1000
        },

        builder: {
            amount: 0,
            cost: 50000
        },
        engineer: {
            amount: 0,
            cost: 1000000
        },
        manager: {
            amount: 0,
            cost: 25000000
        },
        superManager: {
            amount: 0,
            cost: 150000000
        },

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
    },

    moon: {
        factories: [],
        purchased: false,
        costP: 1000,
        cost: 1000000000000,
        money: 0,
        click: {
            amount: 1,
            cost: 1500,
        },
        money: 0,

        colonists: {
            amount: 0,
            cost: 10,
        },
        builder: {
            amount: 0,
            cost: 100000,
        },
        engineer: {
            amount: 0,
            cost: 150000,
        },
        manager: {
            amount: 0,
            cost: 2500000,
        },
        superManager: {
            amount: 0,
            cost: 100000000,
        },


        food: 0,
        water: 0,
        energy: 0,
        populationCapacity: 0,
        population: 0,
        Econsumption: 0,

        moneyPerSecond: 0,

        factories: [],
        farms: [],
        waterMakers: [],
        reactors: [],
        habs: [],
        things: [],

        autoPrint: {
            on: false,
            cost: 120000,
        },
        autoUpgrade: {
            on: false,
            cost: 25000,
        },



    },

    easy: 1,
    medium: 5,
    hard: 25,
    insane: 100,
    impossible: 500,

    lastPlayed: NaN,
    planets: ["earth","moon"]

}



class factory {
    constructor(name, earn,planet,page="page1") {
        this.name = name
        this.earn = earn
        this.cost = earn * 25
        this.planet = planet

        this.page = page
        console.log(this.name)
        q[this.planet].factories.push(this.name)
        q[this.planet][this.name] = {
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
            <label class="${this.name}Display"></label>
        `
        //console.log( this.page + "factories")
        console.log(`.${this.planet}${this.page}factories`)
        document.querySelector(`.${this.planet}${this.page}factories`).appendChild(factoryHTML)
        
        document.querySelector(`.upgrade${finalString}`).onclick =  () => {levelUp(this.name,this.planet)}
        document.querySelector(`.build${finalString}`).onclick =  ()  => { hire(this.name,this.planet) }
    }
}

class hab {
    constructor(name, cost, pop, planet,page,energy){
        this.name = name
        this.cost = cost
        this.planet = planet
        this.page = page
        this.energy = energy

        q[planet][name] = {
            amount: 0,
            cost: cost,
            population: pop,
            Econsumption: energy
        }

        var capital = String(String(this.name).split("")[0].toUpperCase())
        var arr = String(this.name).split("")
        arr.shift()
        var other = String(arr).replaceAll(",", "")
        var finalString = capital + other

        console.log(finalString)

        q[planet].habs.push(this.name)
        q[planet].things.push(this.name)

        var factoryHTML = document.createElement("div")
        factoryHTML.className = this.name
        factoryHTML.innerHTML = `
            <button class="build${finalString}">Build</button>
            <label class="${this.name}Display">Lorem ipsum</label>
        `
        document.querySelector(`.${this.planet}${this.page}habitats`).appendChild(factoryHTML)
        document.querySelector(`.build${finalString}`).onclick =  ()  => { hire(this.name,this.planet) }
    }
}

class farm {
    constructor(name, cost, produce, energy,planet,page){
        this.name = name
        this.cost = cost
        this.planet = planet
        this.page = page
        this.produce = produce
        this.energy = energy

        q[planet][name] = {
            amount: 0,
            cost: cost,
            produce: produce,
            Econsumption: energy,
        }

        var capital = String(String(this.name).split("")[0].toUpperCase())
        var arr = String(this.name).split("")
        arr.shift()
        var other = String(arr).replaceAll(",", "")
        var finalString = capital + other

        console.log(finalString)

        q[planet].farms.push(this.name)
        q[planet].things.push(this.name)

        var factoryHTML = document.createElement("div")
        factoryHTML.className = this.name
        factoryHTML.innerHTML = `
            <button class="build${finalString}">Build</button>
            <label class="${this.name}Display">Lorem ipsum</label>
        `
        document.querySelector(`.${this.planet}${this.page}farms`).appendChild(factoryHTML)
        document.querySelector(`.build${finalString}`).onclick =  ()  => { hire(this.name,this.planet) }
    }
}

class waterMaker {
    constructor(name, cost, produce, energy,planet,page){
        this.name = name
        this.cost = cost
        this.planet = planet
        this.page = page
        this.produce = produce
        this.energy = energy

        q[planet][name] = {
            amount: 0,
            cost: cost,
            produce: produce,
            Econsumption: energy,
        }

        var capital = String(String(this.name).split("")[0].toUpperCase())
        var arr = String(this.name).split("")
        arr.shift()
        var other = String(arr).replaceAll(",", "")
        var finalString = capital + other

        console.log(finalString)

        q[planet].waterMakers.push(this.name)
        q[planet].things.push(this.name)

        var factoryHTML = document.createElement("div")
        factoryHTML.className = this.name
        factoryHTML.innerHTML = `
            <button class="build${finalString}">Build</button>
            <label class="${this.name}Display">Lorem ipsum</label>
        `
        document.querySelector(`.${this.planet}${this.page}watermakers`).appendChild(factoryHTML)
        document.querySelector(`.build${finalString}`).onclick =  ()  => {hire(this.name,this.planet) }
    }
}

class reactor {
    constructor(name, cost, produce, planet,page){
        this.name = name
        this.cost = cost
        this.planet = planet
        this.page = page
        this.produce = produce

        q[planet][name] = {
            amount: 0,
            cost: cost,
            produce: produce,
        }

        var capital = String(String(this.name).split("")[0].toUpperCase())
        var arr = String(this.name).split("")
        arr.shift()
        var other = String(arr).replaceAll(",", "")
        var finalString = capital + other

        console.log(finalString)

        q[planet].reactors.push(this.name)

        var factoryHTML = document.createElement("div")
        factoryHTML.className = this.name
        factoryHTML.innerHTML = `
            <button class="build${finalString}">Build</button>
            <label class="${this.name}Display">Lorem ipsum</label>
        `
        document.querySelector(`.${this.planet}${this.page}reactors`).appendChild(factoryHTML)
        document.querySelector(`.build${finalString}`).onclick =  ()  => { hire(this.name,this.planet)  }
    }
}


var difficulties = ["easy", "medium", "hard", "insane","impossible"]
var difficulty = ""

var mk1 = new factory("mk1", 50000,"earth") 
var mk2 = new factory("mk2", 7500000,"earth")
var mk3 = new factory("mk3", 50000000,"earth") 
var mk4 = new factory("mk4", 7500000000,"earth") 
var mk5 = new factory("mk5", 50000000000,"earth") 
var mk6 = new factory("mk6",1500000000000,"earth","page2")
var mk7 = new factory("mk7", 270000000000000,"earth", "page2")
var mk8 = new factory("mk8", 1500000000000000,"earth", "page2")
var mk9 = new factory("mk9", 27000000000000000,"earth", "page2")
var mk10 = new factory("mk10", 1500000000000000000,"earth", "page2")

var habmk1 = new hab("hab_mk1", 10000,100,"moon","page2",1)
var habmk2 = new hab("hab_mk2", 100000,500,"moon","page2",50)
var habmk3 = new hab("hab_mk3", 2500000,1000,"moon","page2",250)
var habmk4 = new hab("hab_mk4", 50000000,2500,"moon","page2",5000)
var habmk5 = new hab("hab_mk5", 1000000000,10000,"moon","page2",100000)

var farmmk1 = new farm("farm_mk1",10000,5,1,"moon","page3")
var farmmk2 = new farm("farm_mk2",100000,100,50,"moon","page3")
var farmmk3 = new farm("farm_mk3",2500000,2500,250,"moon","page3")
var farmmk4 = new farm("farm_mk4",50000000,10000,5000,"moon","page3")
var farmmk5 = new farm("farm_mk5",1000000000,50000,25000,"moon","page3")

var watermakermk1 = new waterMaker("watermaker_mk1",10000,5,1,"moon","page3")
var watermakermk2 = new waterMaker("watermaker_mk2",100000,100,50,"moon","page3")
var watermakermk3 = new waterMaker("watermaker_mk3",2500000,2500,250,"moon","page3")
var watermakermk4 = new waterMaker("watermaker_mk4",50000000,10000,5000,"moon","page3")
var watermakermk5 = new waterMaker("watermaker_mk5",1000000000,50000,25000,"moon","page3")

var reactormk1 = new reactor("reactor_mk1",1000,5,"moon","page2")
var reactormk2 = new reactor("reactor_mk2",10000,250,"moon","page2")
var reactormk3 = new reactor("reactor_mk3",250000,1500,"moon","page2")
var reactormk4 = new reactor("reactor_mk4",5100000,50000,"moon","page2")
var reactormk5 = new reactor("reactor_mk5",150000000,175000,"moon","page2")

var moonmk1 = new factory("moon_mk1",100000,"moon","page4")
var moonmk2 = new factory("moon_mk2",7500000,"moon","page4")
var moonmk3 = new factory("moon_mk3",50000000,"moon","page4")
var moonmk4 = new factory("moon_mk4",7500000000,"moon","page4")
var moonmk5 = new factory("moon_mk5",50000000000,"moon","page4")
var moonmk6 = new factory("moon_mk6",1500000000000,"moon","page4")
var moonmk7 = new factory("moon_mk7",270000000000000,"moon","page4")
var moonmk8 = new factory("moon_mk8",1500000000000000,"moon","page4")
var moonmk9 = new factory("moon_mk9",27000000000000000,"moon","page4")
var moonmk10 = new factory("moon_mk10",1500000000000000000,"moon","page4")


var br = document.createElement("br")
document.querySelector(".earthpage2factories").appendChild(br)

const stock = JSON.parse(JSON.stringify(q))

var page = 1
var moonPage = 1
var planet = 0
var planets = ["earth","moon"]

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
    q.earth.money += q.earth.click.amount * q.earth.prestige.multiplier.amount;
}

function upgrade(p="earth") {

    if (p=="earth") {
        if (q.earth.money > q.earth.click.cost) {
            q.earth.money -= q.earth.click.cost
            q.earth.click.amount += 1;
        }
        else {
            customAlert(`You need $${num2txt(q.earth.click.cost - q.earth.money)} more to do this! `)
        }
    }
    else {
        if (q[p].money > q[p].click.cost) {
            q[p].money -= q[p].click.cost
            q[p].click.amount += 1;
        }
        else {
            customAlert(`You need ${num2txt(q[p].click.cost - q[p].money)} more ${p+" money"} to do this! `)
        }
    }
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
        if (confirm(`Are you sure you want to continue with ${difficult} mode????`)) {
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
        clearTimeout(hard)
        document.querySelector(".earthAutoPrintMoneyBuy").innerHTML = "buy"
        q.earth.autoPrint.on = false;
    }

    if (q.earth.autoPrint.on  && confirm("Are you sure you want to stop this?")) {
        what()
    }
    else {
        if (q.earth.money < q.earth.autoPrint.cost) {
            customAlert(`You need $${num2txt(q.earth.autoPrint.cost - q.earth.money)} more to do this.`)
            return false 
        }

        q.earth.money -= q.earth.autoPrint.cost 
        document.querySelector(".earthAutoPrintMoneyBuy").innerHTML = "on"
        q.earth.autoPrint.on = true
        clearInterval(ez1)
        clearTimeout(hard)
        ez1 = setInterval(function () {
            q.earth.money += q.earth.click.amount * q.earth.prestige.multiplier.amount
        }, 0)


        var hard = setTimeout(function () {
            what()
        }, 60000)
    }
}

function autoUpgrade() {
    function what() {
        clearInterval(ez)
        clearTimeout(hard)
        document.querySelector(".earthAutoUpgradeBuy").innerHTML = "buy"
        q.earth.autoUpgrade.on = false;
    }

    if (q.earth.autoUpgrade.on && confirm("Are you sure you want to stop this?")) {
        what()
    }

    else{
        if (q.earth.money < q.earth.autoUpgrade.cost) { 
            customAlert(`You need $${num2txt(q.earth.autoUpgrade.cost - q.earth.money)} more to do this.`); 
            return false 
        }
        q.earth.money -= q.earth.autoUpgrade.cost
        document.querySelector(".earthAutoUpgradeBuy").innerHTML = "on"
        q.earth.autoUpgrade.on = true
        clearInterval(ez)
        clearTimeout(hard)
        ez = setInterval(function () {
            if (q.earth.money >= q.earth.click.cost) {
                upgrade()
            }
        }, 10)
    
        var hard = setTimeout(function () {
            what()
        }, 60000)
    }
}

function autoPlay() {
    if (q.earth.money < q.earth.autoPlay.cost) { customAlert(`You need $${num2txt(q.earth.autoPlay.cost - q.earth.money)} more to do this.`); return false }
    if (q.earth.autoPlay.has) { return false }
    q.earth.money -= q.earth.autoPlay.cost
    customAlert2("Get trolled bozo")
}

function update() {
    if (gameLoaded) {
        updateStats()
        displayStats()
        updatePage()
        updateMoon()
        moonUpdatePage()
    }
    hideUpgradeButtons()
    updatePlanet()
}

function updatePage() {
    if (document.querySelector(`.earthPage${page}`) != undefined) {
        var pages = document.getElementsByClassName("page")
        for (var i of pages) {
            document.querySelector(`.${String(i.className).split(" ")[0]}`).style.display = "none"
        }
        document.querySelector(`.earthPage${page}`).style.display = "block"
    }
    else {
        page -= 1
    }
}



function updatePlanet() {
    try {
        var pl = planets[planet]
        if (document.querySelector(`.${pl}`) != undefined) {
            for (var p of planets) {
                document.querySelector(`.${p}`).style.display = "none"
            }
            document.querySelector(`.${pl}`).style.display = "block"
        }
        else {
            if (planet < 0) {
                planet = 0
            }
            else {
                planet -= 1
            }
        }
        if (planet == 0) {
            document.querySelector(".changeWorldDown").style.display = "none"
        }
        else {
            document.querySelector(".changeWorldDown").style.display = "block"
        }
        if (planet == (planets.length-1)) {
            document.querySelector(".changeWorldUp").style.display = "none"
        }
        else {
            document.querySelector(".changeWorldUp").style.display = "block"
        }

        if (q.earth.prestige.amount >= 1) {
            document.querySelector(".changeWorldUp").style.display = "block"
        }
        else {
            document.querySelector(".changeWorldUp").style.display = "none"
        }
    }
    catch(err) {
        reset()
    }
}

function hideUpgradeButtons() {
    try {
        for (var i of q.earth.factories) {
            var capital = String(String(i).split("")[0].toUpperCase())
            var arr = String(i).split("")
            arr.shift()
            var other = String(arr).replaceAll(",", "")
            var finalString = capital + other
            if (q.earth[i].level >= 5) {
                document.querySelector(`.upgrade${finalString}`).style.display = "none"
            }
            else {
                document.querySelector(`.upgrade${finalString}`).style.display = ""
            }

            
        }

        for (var i of q.moon.factories) {
            var capital = String(String(i).split("")[0].toUpperCase())
            var arr = String(i).split("")
            arr.shift()
            var other = String(arr).replaceAll(",", "")
            var finalString = capital + other
            if (q.moon[i].level >= 5) {
                document.querySelector(`.upgrade${finalString}`).style.display = "none"
            }
            else {
                document.querySelector(`.upgrade${finalString}`).style.display = ""
            }

            
        }

        if (q.earth.prestige.taxCuts.level == q.earth.prestige.taxCuts.max){
            document.querySelector(".earthBuyTaxCuts").style.display = "none"
        }
        else {
            document.querySelector(".earthBuyTaxCuts").style.display = ""
        }
        if (q.earth.prestige.nuclearPower.level == q.earth.prestige.nuclearPower.max){
            document.querySelector(".earthBuyNuclearFactories").style.display = "none"
        }
        else {
            document.querySelector(".earthBuyNuclearFactories").style.display = ""
        }
        if (q.earth.prestige.BOGOF.level == q.earth.prestige.BOGOF.max){
            document.querySelector(".earthBuyBuyOneGetOneFree").style.display = "none"
        }
        else {
            document.querySelector(".earthBuyBuyOneGetOneFree").style.display = ""
        }
    }
    catch(err) {
        console.log(err)
        reset()
    }
}
function updateStats() {
    try {
        q.earth.moneyPerSecond = 0
        for (const iterator of q.earth.factories) {
            q.earth.moneyPerSecond += q.earth[iterator].earn * q.earth[iterator].amount
        }

        q.moon.moneyPerSecond = 0
        for (const iterator of q.moon.factories) {
            q.moon.moneyPerSecond += q.moon[iterator].earn * q.moon[iterator].amount
        }

        q.lastPlayed = Date.now()
        
        


        if (q.earth.prestige.amount >= 1) {
            if (document.querySelector(".game").style.visibility == "visible") {
                document.querySelector(".earthPrestigeUpgradesButton").style.visibility = "visible"
            }
        }
        else {
            document.querySelector(".earthPrestigeUpgradesButton").style.visibility = "hidden"
        }
    }   
    catch(err) {
        console.log(err)
        reset()
    }
}
function displayStats() {
    try {
        var ef= q.earth.prestige.multiplier.amount
        var ek = (1000/q.earth.prestige.nuclearPower.amount)
        document.querySelector(".earthMoneyDisplay").innerHTML = `Money: $${num2txt(q.earth.money)}`
        document.querySelector(".earthUpgradeDisplay").innerHTML = `Costs $${num2txt(q.earth.click.cost)} to upgrade. You currently make $${num2txt(q.earth.click.amount * ef)} per click.`
        document.querySelector(".earthPrestigeDisplay").innerHTML = `Prestiges: ${num2txt(q.earth.prestige.amount)}`
        document.querySelector(".earthTokenDisplay").innerHTML = `PT$:${num2txt(q.earth.prestige.prestigeTokens)}`
        document.querySelector(".earthMoreMoneyDisplay").innerHTML = `The more you buy, the more you multiplier you get. Cost: PT$${num2txt(q.earth.prestige.multiplier.cost)} Multiplier: ${q.earth.prestige.multiplier.amount}`
        document.querySelector(".earthMoreTokensDisplay").innerHTML = `The more you buy, the more you tokens you get per prestige. Cost: PT$${num2txt(q.earth.prestige.tokensAdd.cost)} Extra Money: ${q.earth.prestige.tokensAdd.amount - 1}`
        document.querySelector(".earthNuclearFactoriesDisplay").innerHTML = `Increase production and speed by nuclear power. Cost: PT$${num2txt(q.earth.prestige.nuclearPower.cost)} production is now every ${q.earth.prestige.nuclearPower.amount} ms`
        document.querySelector(".earthTaxCutsDisplay").innerHTML = `Reduce the prices of everything. Cost: PT$${num2txt(q.earth.prestige.taxCuts.cost)} Tax cuts: ${q.earth.prestige.taxCuts.amount}%`
        document.querySelector(".earthBOGOFDisplay").innerHTML = `Increase the amount of free factories you get when BUYING. Cost: PT$${num2txt(q.earth.prestige.BOGOF.cost)} free stuff: ${q.earth.prestige.BOGOF.amount}`

        document.querySelector(".mk1Display").innerHTML = `Mk1 factory: A simple, low tech factory that produces  $${num2txt(q.earth.mk1.earn * ef)} per second and costs $${num2txt(q.earth.mk1.cost)}. You currently have ${num2txt(q.earth.mk1.amount)}.`
        document.querySelector(".mk2Display").innerHTML = `Mk2 factory: A basic factory that makes  $${num2txt(q.earth.mk2.earn* ef)} and costs $${num2txt(q.earth.mk2.cost)}. You currently have ${num2txt(q.earth.mk2.amount)}.`
        document.querySelector(".mk3Display").innerHTML = `Mk3 factory: An average factory that makes $${num2txt(q.earth.mk3.earn* ef)} and costs $${num2txt(q.earth.mk3.cost)}. You currently have ${num2txt(q.earth.mk3.amount)}.`
        document.querySelector(".mk4Display").innerHTML = `Mk4 factory: A high tech factory that costs $${num2txt(q.earth.mk4.cost)}. The price is worth it because it makes you $${num2txt(q.earth.mk4.earn* ef)}. You currently have ${num2txt(q.earth.mk4.amount)}.`
        document.querySelector(".mk5Display").innerHTML = `Mk5 factory: A super high tech factory that is completely automated and makes  $${num2txt(q.earth.mk5.earn* ef)}. However it is not cheap and will cost you a fortune. You currently have ${num2txt(q.earth.mk5.amount)}.`
        document.querySelector(".mk6Display").innerHTML = `mk6 factory: A crazy factory that creates money out of thin air. It makes you $${num2txt(q.earth.mk6.earn* ef)}, but cost you $${num2txt(q.earth.mk6.cost)}. You have ${num2txt(q.earth.mk6.amount)}.`
        document.querySelector(".mk7Display").innerHTML =  `mk7 factory: This factory is so good, the presedent wanted it for himself. It makes you $${num2txt(q.earth.mk7.earn* ef)}, and costs you $${num2txt(q.earth.mk7.cost)}. You own ${num2txt(q.earth.mk7.amount)}.`
        document.querySelector(".mk8Display").innerHTML =  `mk8 factory: This factory is better then its predesesor, and makes $${num2txt(q.earth.mk8.earn* ef)}. It costs $${num2txt(q.earth.mk8.cost)}, and you have ${num2txt(q.earth.mk8.amount)}.`
        document.querySelector(".mk9Display").innerHTML =  `mk9 factory: This amazing brilliant insane epic factory costs $${num2txt(q.earth.mk9.cost)}. It is worth it because it makes you $${num2txt(q.earth.mk9.earn* ef)}. You have ${num2txt(q.earth.mk9.amount)} of them.`
        document.querySelector(".mk10Display").innerHTML = `mk10 factory: This top of the market factory makes all of your other ones useless. It comes with a high price tag of $${num2txt(q.earth.mk10.cost)}. You can flex ${num2txt(q.earth.mk10.amount)} of them.`

        // Moon factories
        document.querySelector(".moon_mk1Display").innerHTML = `Moon Mk1: The first factory on the moon. Cost: $${num2txt(q.moon.moon_mk1.cost)}. You own ${num2txt(q.moon.moon_mk1.amount)} of them. It's a small step for a factory, but a giant leap for your empire.`;
        document.querySelector(".moon_mk2Display").innerHTML = `Moon Mk2: This upgraded factory generates ${num2txt(q.moon.moon_mk2.earn)} per second. Cost: $${num2txt(q.moon.moon_mk2.cost)}. You have ${num2txt(q.moon.moon_mk2.amount)} of them.`;
        document.querySelector(".moon_mk3Display").innerHTML = `Moon Mk3: The moon's weak radiation amplifies this factory to generate ${num2txt(q.moon.moon_mk3.earn)} per second. Cost: $${num2txt(q.moon.moon_mk3.cost)}. You have ${num2txt(q.moon.moon_mk3.amount)} of them.`;
        document.querySelector(".moon_mk4Display").innerHTML = `Moon Mk4: Generates ${num2txt(q.moon.moon_mk4.earn)} per second. Cost: $${num2txt(q.moon.moon_mk4.cost)}. You own ${num2txt(q.moon.moon_mk4.amount)} of them.`;
        document.querySelector(".moon_mk5Display").innerHTML = `Moon Mk5: Produces ${num2txt(q.moon.moon_mk5.earn)} per second. Cost: $${num2txt(q.moon.moon_mk5.cost)}. You own ${num2txt(q.moon.moon_mk5.amount)} of them.`;
        document.querySelector(".moon_mk6Display").innerHTML = `Moon Mk6: This top of the line factory generates ${num2txt(q.moon.moon_mk6.earn)} per second. Cost: $${num2txt(q.moon.moon_mk6.cost)}. You own ${num2txt(q.moon.moon_mk6.amount)} of them.`;
        document.querySelector(".moon_mk7Display").innerHTML = `Moon Mk7: A game-changing moon factory that's revolutionizing the industry. Generates ${num2txt(q.moon.moon_mk7.earn)} per second. Cost: $${num2txt(q.moon.moon_mk7.cost)}. You own ${num2txt(q.moon.moon_mk7.amount)} of them.`;
        document.querySelector(".moon_mk8Display").innerHTML = `Moon Mk8: An industry-leading moon factory that's setting the bar for all others. ${num2txt(q.moon.moon_mk8.earn)} per second. Cost: $${num2txt(q.moon.moon_mk8.cost)}. You own ${num2txt(q.moon.moon_mk8.amount)} of them. You're unstoppable.`;
        document.querySelector(".moon_mk9Display").innerHTML = `Moon Mk9: This factory generates ${num2txt(q.moon.moon_mk9.earn)} per second. Cost: $${num2txt(q.moon.moon_mk9.cost)}. You own ${num2txt(q.moon.moon_mk9.amount)} of them. You're on top of the world.`;
        document.querySelector(".moon_mk10Display").innerHTML = `Moon Mk10: An impressive moon factory that's making waves across the galaxy! Cost: $${num2txt(q.moon.moon_mk10.cost)}. You own ${num2txt(q.moon.moon_mk10.amount)} of them. It's the crown jewel of your empire.`;
        document.querySelector(".hab_mk1Display").innerHTML = `Habitat Mk1 Factory: This simple and cozy habitat is perfect for starting your lunar colony. It costs $${num2txt(q.moon.hab_mk1.cost)} and can house ${num2txt(q.moon.hab_mk1.population)} colonists. You own ${q.moon.hab_mk1.amount} of them.`;
        document.querySelector(".hab_mk2Display").innerHTML = `Habitat Mk2 Factory: With a bit more space and amenities, this habitat can house ${num2txt(q.moon.hab_mk2.population)} colonists. It costs $${num2txt(q.moon.hab_mk2.cost)} to build. You own ${q.moon.hab_mk2.amount} of them.`;
        document.querySelector(".hab_mk3Display").innerHTML = `Habitat Mk3 Factory: This spacious and luxurious habitat can house ${num2txt(q.moon.hab_mk3.population)} colonists. It costs $${num2txt(q.moon.hab_mk3.cost)} to build and comes with a built-in moon garden. You own ${q.moon.hab_mk3.amount} of them.`;
        document.querySelector(".hab_mk4Display").innerHTML = `Habitat Mk4 Factory: This top-of-the-line habitat can house ${num2txt(q.moon.hab_mk4.population)} colonists and comes with a personal cinema and gym. It costs $${num2txt(q.moon.hab_mk4.cost)} to build. You own ${q.moon.hab_mk4.amount} of them.`;
        document.querySelector(".hab_mk5Display").innerHTML = `Habitat Mk5 Factory: The ultimate in lunar living, and comes with a private moon beach and lunar jacuzzi. It costs $${num2txt(q.moon.hab_mk5.cost)} to build. You can flex ${q.moon.hab_mk5.amount} of them.`;
        document.querySelector(".reactor_mk1Display").innerHTML = `Fusion Reactor Mk1: produces ${num2txt(q.moon.reactor_mk1.produce)} electricity for a cost of $${num2txt(q.moon.reactor_mk1.cost)}. You have ${num2txt(q.moon.reactor_mk1.amount)} of them.`;
        document.querySelector(".reactor_mk2Display").innerHTML = `Fusion Reactor Mk2: produces ${num2txt(q.moon.reactor_mk2.produce)} electricity for a cost of $${num2txt(q.moon.reactor_mk2.cost)}. You can operate ${num2txt(q.moon.reactor_mk2.amount)} reactors.`;
        document.querySelector(".reactor_mk3Display").innerHTML = `Fusion Reactor Mk3: produces ${num2txt(q.moon.reactor_mk3.produce)} electricity for a cost of $${num2txt(q.moon.reactor_mk3.cost)}. Your energy supply will never be the same with ${num2txt(q.moon.reactor_mk3.amount)} reactors in use!`;
        document.querySelector(".reactor_mk4Display").innerHTML = `Fusion Reactor Mk4: produces ${num2txt(q.moon.reactor_mk4.produce)} electricity for a cost of $${num2txt(q.moon.reactor_mk4.cost)}. You own ${num2txt(q.moon.reactor_mk4.amount)} of these advanced reactors.`;
        document.querySelector(".reactor_mk5Display").innerHTML = `Fusion Reactor Mk5: produces ${num2txt(q.moon.reactor_mk5.produce)} electricity for a cost of $${num2txt(q.moon.reactor_mk5.cost)}. With ${num2txt(q.moon.reactor_mk5.amount)} of these powerful reactors, you will never run out of energy!`;
        document.querySelector(".farm_mk1Display").innerHTML = `Lunar Farm Mk1: produces ${num2txt(q.moon.farm_mk1.produce)} food for a cost of $${num2txt(q.moon.farm_mk1.cost)}. With ${num2txt(q.moon.farm_mk1.amount)} of these farms, your population will never go hungry!`;
        document.querySelector(".farm_mk2Display").innerHTML = `Lunar Farm Mk2: produces ${num2txt(q.moon.farm_mk2.produce)} food for a cost of $${num2txt(q.moon.farm_mk2.cost)}. With ${num2txt(q.moon.farm_mk2.amount)} of these advanced farms, your people will be well-fed!`;
        document.querySelector(".farm_mk3Display").innerHTML = `Lunar Farm Mk3: produces ${num2txt(q.moon.farm_mk3.produce)} food for a cost of $${num2txt(q.moon.farm_mk3.cost)}. With ${num2txt(q.moon.farm_mk3.amount)} of these high-tech farms, you'll be able to feed a growing population!`;
        document.querySelector(".farm_mk4Display").innerHTML = `Lunar Farm Mk4: produces ${num2txt(q.moon.farm_mk4.produce)} food for a cost of $${num2txt(q.moon.farm_mk4.cost)}. With ${num2txt(q.moon.farm_mk4.amount)} of these state-of-the-art farms, your people will thrive!`;
        document.querySelector(".farm_mk5Display").innerHTML = `Lunar Farm Mk5: produces ${num2txt(q.moon.farm_mk5.produce)} food for a cost of $${num2txt(q.moon.farm_mk5.cost)}. With ${num2txt(q.moon.farm_mk5.amount)} of these cutting-edge farms, your lunar colony will become a breadbasket!`;
        document.querySelector('.watermaker_mk1Display').innerHTML = `Water Maker Mk1: produces ${num2txt(q.moon.watermaker_mk1.produce)} water for a cost of $${num2txt(q.moon.watermaker_mk1.cost)}. With ${num2txt(q.moon.watermaker_mk1.amount)} of these, your colony will never go thirsty!`;
        document.querySelector('.watermaker_mk2Display').innerHTML = `Water Maker Mk2: produces ${num2txt(q.moon.watermaker_mk2.produce)} water for a cost of $${num2txt(q.moon.watermaker_mk2.cost)}. With ${num2txt(q.moon.watermaker_mk2.amount)} of these, your colony will have all the water it needs!`;
        document.querySelector('.watermaker_mk3Display').innerHTML = `Water Maker Mk3: produces ${num2txt(q.moon.watermaker_mk3.produce)} water for a cost of $${num2txt(q.moon.watermaker_mk3.cost)}. With ${num2txt(q.moon.watermaker_mk3.amount)} of these, you'll have plenty of water to spare!`;
        document.querySelector('.watermaker_mk4Display').innerHTML = `Water Maker Mk4: produces ${num2txt(q.moon.watermaker_mk4.produce)} water for a cost of $${num2txt(q.moon.watermaker_mk4.cost)}. With ${num2txt(q.moon.watermaker_mk4.amount)} of these, you'll have water in abundance!`;
        document.querySelector('.watermaker_mk5Display').innerHTML = `Water Maker Mk5: produces ${num2txt(q.moon.watermaker_mk5.produce)} water for a cost of $${num2txt(q.moon.watermaker_mk5.cost)}. With ${num2txt(q.moon.watermaker_mk5.amount)} of these, your colony will have an unlimited supply of water!`;
        document.querySelector(".earthSuperManagerDisplay").innerHTML = `Super Manager: A person who hires manager and builder for you every 5 minutes. They are not cheap and cost $${num2txt(q.earth.superManager.cost)}. You currently have ${num2txt(q.earth.superManager.amount)}.`
        document.querySelector(".earthManagerDisplay").innerHTML = `Manager: Somone who automatically hires builder so you can keep dreaming about being rich. They cost you $${num2txt(q.earth.manager.cost)}. You have ${num2txt(q.earth.manager.amount)} hired.`
        document.querySelector(".earthBuilderDisplay").innerHTML = `Builder: Somone who automatically builds factories every 15 seconds, so you dont have to. They cost $${num2txt(q.earth.builder.cost)}. You currently have ${num2txt(q.earth.builder.amount)}.`
        document.querySelector(".earthEngineerDisplay").innerHTML = `Engineer: A big brain person who slowly makes your factories more advanced. They cost you $${num2txt(q.earth.engineer.cost)}. You have ${num2txt(q.earth.engineer.amount)} engineer at the moment.`
        
        document.querySelector(".earthNasaEngineerDisplay").innerHTML = `NASA Engineer: This person worked at NASA, and has so much to offer. He will cost you PT$${num2txt(q.earth.prestige.nasaEngineer.cost)}. You have a crew of ${num2txt(q.earth.prestige.nasaEngineer.amount)}. `
        document.querySelector(".earthWizzardDisplay").innerHTML = `Wizzard: A magical person who makes money appear out of thin air. His services will cost you PT$${num2txt(q.earth.prestige.wizzard.cost)}. You have ${num2txt(q.earth.prestige.wizzard.amount)} of them.`
        document.querySelector(".earthHackerManDisplay").innerHTML = `Hacker Man: He will hack into bank accounts and steal money. He charges PT$${num2txt(q.earth.prestige.hackerman.cost)}. You have ${num2txt(q.earth.prestige.hackerman.amount)} of them.`
        document.querySelector(".earthArtistDisplay").innerHTML = `Artist: They will paint pictiures of your money and factories. You can hire them for PT$${num2txt(q.earth.prestige.artist.cost)}, and you have ${num2txt(q.earth.prestige.artist.amount)} of them.`
        document.querySelector(".earthBuisnessManagerDisplay").innerHTML = `Buisness Manager: He will take care of everything you have. He is going to cost you PT$${num2txt(q.earth.prestige.buisnessManager.cost)}. You have ${num2txt(q.earth.prestige.buisnessManager.amount)} of them.`

        document.querySelector(".earthPageDisplay").innerHTML = `Page: ${page}`

        document.querySelector(".earthAutoPlayDisplay").innerHTML = `Auto play: Automatically plays the entire game for you, so you can sit back and relax. It will cost you $${num2txt(q.earth.autoPlay.cost)}!`
        document.querySelector(".earthAutoPrintMoneyDisplay").innerHTML = `Auto print money: This will automatically print money from your printer. It will cost you $${num2txt(q.earth.autoPrint.cost)}!`
        document.querySelector(".earthAutoUpgradeDisplay").innerHTML = `Auto upgrade: Automatically upgrades your printer and factories for you. It will cost you $${num2txt(q.earth.autoUpgrade.cost)}!`

        document.querySelector(".earthPrestigeProgressFill").style.width = Math.floor((q.earth.money/q.earth.prestige.cost) * 100) + "%"
        
        document.querySelector(".moonMoneyDisplay").innerHTML = `Moon Money: M$${num2txt(q.moon.money)}`
        document.querySelector(".moonColonistsDisplay").innerHTML = `Moon Colonists: Necessary for making money on the moon. You need to keep them alive however. They cost M$${num2txt(q.moon.colonists.cost)} to train, and you have ${num2txt(q.moon.population)}`

        document.querySelector(".moonBuilderDisplay").innerHTML = `Builder: A person who automatically builds factories, reactors, habs, farms, and water makers, so you can sit down and relax. They cost M$${num2txt(q.moon.builder.cost)}! You have ${num2txt(q.moon.builder.amount)}!`
        document.querySelector(".moonManagerDisplay").innerHTML = `Manager: A person who hires builders,engineers,and colonists so you can work hard, or hardly work. They cost M$${num2txt(q.moon.manager.cost)} and you have ${num2txt(q.moon.manager.amount)}!`
        document.querySelector(".moonEngineerDisplay").innerHTML = `Engineer: A person who upgrades factories for you. They are important, if you want to increase profits steadily. They cost M$${num2txt(q.moon.engineer.cost)} and you have ${num2txt(q.moon.engineer.amount)} hires.`
        document.querySelector(".moonSuperManagerDisplay").innerHTML = `Super Manager: An upgraded version of a manager who also hires managers. This makes profits sky rocket. They cost you a ridiculous M$${num2txt(q.moon.superManager.cost)}!!!!!`

        document.querySelector(".moonUpgradeDisplay").innerHTML = `Costs ${num2txt(q.moon.click.cost)} to upgrade. You currently make ${num2txt(q.moon.click.amount)} per click.`

        document.querySelector(".moonFoodDisplay").innerHTML = `Food: ${num2txt(q.moon.food)}`
        document.querySelector(".moonWaterDisplay").innerHTML = `Water: ${num2txt(q.moon.water)}`
        document.querySelector(".moonEnergyDisplay").innerHTML = `Energy: ${num2txt(q.moon.energy)}`
        document.querySelector(".moonPopulationDisplay").innerHTML = `Population: ${num2txt(q.moon.population)}`


        document.querySelector(".autoPrintMoonTokensDisplay").innerHTML = `Auto Print: Automatically print money $$$ Costs M$${num2txt(q.moon.autoPrint.cost)} to activate!`
        document.querySelector(".autoUpgradeMoonPrinterDisplay").innerHTML = `Auto Upgrade: Automatically upgrades your printer, so you can keep on printing. It costs M$${num2txt(q.moon.autoUpgrade.cost)} to start!`

        document.querySelector(".purchaseMoonLabelBest").innerHTML = `
        Money: $${num2txt(q.moon.cost)} <br>
        Prestige Tokens: PT$${num2txt(q.moon.costP)}
        `
    }
    catch(err) {
        console.log(err)
        clearInterval(crazyUpdate)
        //location.reload()
    }
}


function hire(thing,planet="moon") {
    console.log(thing,planet)
    var things = ["builder","manager","engineer","superManager"]

    if (q[planet].money < q[planet][thing].cost) { customAlert(`You need $${num2txt(q[planet][thing].cost - q[planet].money)} more to do this.`); return false }
    q[planet].money -= q[planet][thing].cost
    q[planet][thing].amount += 1
    
    //if it is on other planets
    if ((things.includes(thing) && q[planet].population >= 1)) {
        q[planet].population -= 1
    }
    else if ((things.includes(thing) && q[planet].population < 1)){
        customAlert("You need more colonists!")
    }

    if (q[planet][thing].Econsumption != undefined){
        q[planet].Econsumption += q[planet][thing].Econsumption
    }

    if (String(thing).startsWith("hab")) {
        q[planet].populationCapacity += q[planet][thing].population
    }

}


function hireColonists(p) {
    if (q[p].population >= q[p].populationCapacity) {
        customAlert(`You need to build more habs to do this!`)
        return false
    }
    if (q[p].money >= q[p].colonists.cost) {
        q[p].money -= q[p].colonists.cost
        q[p].population += 1
    }
    else {
        customAlert(`You need ${q[p].colonists.cost - q[p].money} more ${p+" token(s)"} to do this!`)
    }
}

function prestigeHire(thing) {
    if (q.earth.prestige.prestigeTokens < q.earth.prestige[thing].cost) { customAlert(`You need PT$${num2txt(q.earth.prestige[thing].cost - q.earth.prestige.prestigeTokens)} more to do this.`); return false }
    if (thing == "buisnessManager") {q.earth.prestige.prestigeTokens -= q.earth.prestige[thing].cost; customAlert2("lmao bozo you fell for that again!!!"); return false}
    q.earth.prestige.prestigeTokens -= q.earth.prestige[thing].cost
    q.earth.prestige[thing].amount += 1 * (q.earth.prestige.BOGOF.amount + 1)
}

function levelUp(thing,planet) {
    if (q[planet].money < q[planet][thing].cost * 10) { customAlert(`You need $${num2txt((q[planet][thing].cost * 10) - q[planet].money)} more to do this.`); return false }
    if (q[planet][thing].level >= 5) {return false }
    q[planet].money -= q[planet][thing].cost * 10
    q[planet][thing].earn *= 2  
    q[planet][thing].level += 1
}

function prestige() {
    if (q.earth.money >= q.earth.prestige.cost && confirm("Are you sure you want to prestige, this cannot be undone?")) {
        document.querySelector(".earthPrestigeUpgrades").style.display = displays[1]
        document.querySelector(".earthUpgrades").style.display = displays[1]
        x=0
        y=0
        page = 1
        planet = 0
        $(".game").fadeOut(1000,function() {
            document.querySelector("body").style.backgroundColor = "black"
            var prestigeStats = q.earth.prestige
            var moonstats = q.moon

            clearInterval(ez1)
            clearInterval(ez)
            document.querySelector(".earthAutoUpgradeBuy").innerHTML = "buy"
            document.querySelector(".earthAutoPrintMoneyBuy").innerHTML = "buy"
            reset() 
            q.earth.prestige = prestigeStats
            q.moon = moonstats
            q.earth.prestige.prestigeTokens += q.earth.prestige.tokensAdd.amount * q.earth.prestige.multiplier.amount
            q.earth.prestige.amount += 1
            q.earth.prestige.cost *= 10

            //set costs from prestige discount
            for (var i in q) {
                if (q.earth[i] != null && q.earth[i].cost != undefined) {
                    // probably to not do prestige upgrades
                    if (q.earth[i].prestigeTokens != undefined) {}
                    else {
                        q.earth[i].cost = stock[i].cost * ((100-q.earth.prestige.taxCuts.amount)/100)
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
        customAlert(`You need $${num2txt(q.earth.prestige.cost - q.earth.money)} more to do this.`)
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
    if (gameLoaded){    
        localStorage.setItem("EZ_money_1_save/" + difficulty, JSON.stringify(q))

        localStorage.setItem("EZ_money_1_settings", JSON.stringify(settings))
    }
}

function load() {
    if (localStorage.getItem("EZ_money_1_save/" + difficulty) != undefined) {
        var data = JSON.parse(localStorage.getItem("EZ_money_1_save/" + difficulty))
        for (var i in data) {
            q [i] = data[i]
        }
        console.log("efsdafads")
    }
}

function reset() {
    q = JSON.parse(JSON.stringify(stock))
    save()
    setDifficulty(difficulty)
    page = 1
    planet = 0
    location.reload()
}

function customAlert(message) {
    if (settings.alertsOn) {
        document.querySelector(".message").innerHTML = message
        document.querySelector(".alert").showModal()
    }
}

function customAlert2(message) {
    document.querySelector(".message").innerHTML = message
    document.querySelector(".alert").showModal()
}


function startGame() {
    load()
    if (q.earth.lastPlayed != null) {
        //redo this
    }

    q.earth.autoPrint.on = false
    q.earth.autoUpgrade.on = false

    q.moon.autoPrint.on = false
    q.moon.autoUpgrade.on = false

    if (q.earth.click.cost / 1000 == 1) {
        for (var i in q.earth) {
            if (q.earth[i] != null && q.earth[i].cost != undefined) {
                q.earth[i].cost *= q[difficulty]
            }
        }
    }
    if (q.moon.click.cost / 1000 == 1) {
        for (var i in q.moon) {
            if (q.moon[i] != null && q.moon[i].cost != undefined) {
                q.moon[i].cost *= q[difficulty]
            }
        }
    }
    
    setInterval(function () { save() }, 1000)
    clearInterval(giveMonee)
    giveMonee = setInterval(function () {
        q.earth.money += q.earth.moneyPerSecond * q.earth.prestige.multiplier.amount
        q.moon.money += q.moon.moneyPerSecond //* q.moon.prestige.multiplier.amount
    }, q.earth.prestige.nuclearPower.amount)

}

function prestigeUpgrade(upgrade) {
    if (q.earth.prestige.prestigeTokens >= q.earth.prestige[upgrade].cost) {
        if (q.earth.prestige[upgrade].level < q.earth.prestige[upgrade].max) {
            q.earth.prestige[upgrade].amount += q.earth.prestige[upgrade].add
            q.earth.prestige[upgrade].level += 1
            q.earth.prestige.prestigeTokens -= q.earth.prestige[upgrade].cost
            q.earth.prestige[upgrade].cost = Math.floor(1.5**(q.earth.prestige[upgrade].level +1))

        }
    
        if (q.earth.prestige.tokensAdd.amount ==  1) {
            q.earth.prestige.tokensAdd.add = 2
        }
        if (q.earth.prestige.tokensAdd.amount ==  2) {
            q.earth.prestige.tokensAdd.add = 4
        }
        if (q.earth.prestige.tokensAdd.amount >=  3) {
            q.earth.prestige.tokensAdd.add = 10
        }
        if (q.earth.prestige.tokensAdd.amouxnt >=  10) {
            q.earth.prestige.tokensAdd.add = 100
        }


        for (var i in q) {
            if (q.earth[i] != null && q.earth[i].cost != undefined) {
                if (q.earth[i].prestigeTokens != undefined) {}
                else {
                    q.earth[i].cost = stock[i].cost * ((100-q.earth.prestige.taxCuts.amount)/100)
                }
            }
        }

        clearInterval(giveMonee)

        giveMonee = setInterval(function () {
            if (settings.automationsOn) {
                q.earth.money += q.earth.moneyPerSecond * q.earth.prestige.multiplier.amount
            }
        }, q.earth.prestige.nuclearPower.amount)
    }

    

}

}

/*Intervals*/{



var crazyUpdate = setInterval(function () {
    update()
}, 1)


setIntervall(function () {
    if (q.moon.superManager.amount >= 1) {
        if (q.moon.money > q.moon.manager.cost) {
            var manager = Math.floor(q.moon.money / q.moon.manager.cost)

            if (manager > q.moon.superManager.amount) {
                manager = q.moon.superManager.amount
            }

            if (manager > q.moon.population) {
                manager = q.moon.population
            }


            var cost = manager * q.moon.manager.cost

            q.moon.money -= cost
            q.moon.population -= manager
            q.moon.manager.amount += manager //* (q.moon.prestige.BOGOF.amount + 1)
        }

        if (q.moon.money > q.moon.builder.cost) {
            var builder = Math.floor(q.moon.money / q.moon.builder.cost)

            if (builder > q.moon.superManager.amount) {
                builder = q.moon.superManager.amount
            }

            if (builder > q.moon.population) {
                builder = q.moon.population
            }


            var cost = builder * q.moon.builder.cost
            q.moon.money -= cost
            q.moon.population -= builder
            q.moon.builder.amount += builder //* (q.moon.prestige.BOGOF.amount + 1)
        }

        if (q.moon.money > q.moon.engineer.cost) {
            var engineer = Math.floor(q.moon.money / q.moon.engineer.cost)

            if (engineer > q.moon.superManager.amount) {
                engineer = q.moon.superManager.amount
            }

            if (engineer > q.moon.population) {
                engineer = q.moon.population
            }


            var cost = engineer * q.moon.engineer.cost
            q.moon.money -= cost
            q.moon.population -= engineer
            q.moon.engineer.amount += engineer //* (q.moon.prestige.BOGOF.amount + 1)
        }

        if (q.moon.money > q.moon.colonists.cost) {
            var colonists = Math.floor(q.moon.money / q.moon.colonists.cost)

            if (colonists > q.moon.superManager.amount) {
                colonists = q.moon.superManager.amount
            }

            if (colonists >= q.moon.populationCapacity) {
                colonists = 0
            }


            var cost = colonists * q.moon.colonists.cost
            q.moon.money -= cost
            q.moon.population += colonists //* (q.moon.prestige.BOGOF.amount + 1)
        }
    }
}, 300000)

setIntervall(function () {
    if (q.moon.manager.amount >= 1) {
        if (q.moon.money > q.moon.builder.cost) {
            var builder = Math.floor(q.moon.money / q.moon.builder.cost)

            if (builder > q.moon.manager.amount) {
                builder = q.moon.manager.amount
            }

            if (builder > q.moon.population) {
                builder = q.moon.population
            }


            var cost = builder * q.moon.builder.cost

            q.moon.money -= cost
            q.moon.population -= builder
            q.moon.builder.amount += builder //* (q.moon.prestige.BOGOF.amount + 1)
        }

        if (q.moon.money > q.moon.engineer.cost) {
            var engineer = Math.floor(q.moon.money / q.moon.engineer.cost)

            if (engineer > q.moon.manager.amount) {
                engineer = q.moon.manager.amount
            }

            if (engineer > q.moon.population) {
                engineer = q.moon.population
            }

            var cost = engineer * q.moon.engineer.cost

            q.moon.money -= cost
            q.moon.population -= engineer
            q.moon.engineer.amount += engineer //* (q.moon.prestige.BOGOF.amount + 1)
        }

        if (q.moon.money > q.moon.colonists.cost) {
            var colonists = Math.floor(q.moon.money / q.moon.colonists.cost)
            if (colonists > q.moon.manager.amount) {
                colonists = q.moon.manager.amount
            }

            if (colonists >= q.moon.populationCapacity) {
                colonists = 0
            }


            var cost = colonists * q.moon.colonists.cost
            q.moon.money -= cost
            q.moon.population += colonists //* (q.moon.prestige.BOGOF.amount + 1)
        }
    }
}, 60000)

setIntervall(function () {
    if (q.moon.engineer.amount >= 1) {
        for (const iterator of q.moon.factories) {
            if (q.moon[iterator].amount >= 1) {
                q.moon[iterator].earn = Math.floor(q.moon[iterator].earn + ((q.moon.engineer.amount)/1000))
                q.moon[iterator].cost = Math.floor(q.moon[iterator].cost + ((q.moon.engineer.amount)/500))
            }
        }
    }
},60000)

setIntervall(function () {
    if (q.moon.builder.amount >= 1) {
        q.moon.factories.reduceRight((_, elem) => {
            if(elem != undefined) {
                if (q.moon.money > q.moon[elem].cost) {
                    var ek = Math.floor(q.moon.money / q.moon[elem].cost)

                    if (ek > q.moon.builder.amount) {
                        ek = q.moon.builder.amount
                    }

                    var cost = ek * q.moon[elem].cost
                    q.moon.money -= cost
                    q.moon[elem].amount += ek //* (q.moon.prestige.BOGOF.amount + 1)
                }
            }
        }, null)

        q.moon.reactors.reduceRight((_, elem) => {
            if(elem != undefined) {
                if (q.moon.money > q.moon[elem].cost) {
                    var ek = Math.floor(q.moon.money / q.moon[elem].cost)

                    if (ek > q.moon.builder.amount) {
                        ek = q.moon.builder.amount
                    }

                    var cost = ek * q.moon[elem].cost
                    q.moon.money -= cost
                    q.moon[elem].amount += ek //* (q.moon.prestige.BOGOF.amount + 1)
                }
            }
        }, null)

        q.moon.habs.reduceRight((_, elem) => {
            if(elem != undefined) {
                if (q.moon.money > q.moon[elem].cost) {
                    var ek = Math.floor(q.moon.money / q.moon[elem].cost)

                    if (ek > q.moon.builder.amount) {
                        ek = q.moon.builder.amount
                    }

                    var cost = ek * q.moon[elem].cost
                    q.moon.money -= cost
                    q.moon[elem].amount += ek //* (q.moon.prestige.BOGOF.amount + 1)
                    q.moon.populationCapacity += q.moon[elem].population * ek
                }
            }
        }, null)

        q.moon.waterMakers.reduceRight((_, elem) => {
            if(elem != undefined) {
                if (q.moon.money > q.moon[elem].cost) {
                    var ek = Math.floor(q.moon.money / q.moon[elem].cost)

                    if (ek > q.moon.builder.amount) {
                        ek = q.moon.builder.amount
                    }

                    var cost = ek * q.moon[elem].cost
                    q.moon.money -= cost
                    q.moon[elem].amount += ek //* (q.moon.prestige.BOGOF.amount + 1)
                }
            }
        }, null)

        q.moon.farms.reduceRight((_, elem) => {
            if(elem != undefined) {
                if (q.moon.money > q.moon[elem].cost) {
                    var ek = Math.floor(q.moon.money / q.moon[elem].cost)

                    if (ek > q.moon.builder.amount) {
                        ek = q.moon.builder.amount
                    }

                    var cost = ek * q.moon[elem].cost
                    q.moon.money -= cost
                    q.moon[elem].amount += ek //* (q.moon.prestige.BOGOF.amount + 1)
                }
            }
        }, null)
    }
}, 15000)



setIntervall(function () {
    if (q.earth.superManager.amount >= 1) {
        if (q.earth.money > q.earth.manager.cost) {
            var manager = Math.floor(q.earth.money / q.earth.manager.cost)

            if (manager > q.earth.superManager.amount) {
                manager = q.earth.superManager.amount
            }

            var cost = manager * q.earth.manager.cost

            q.earth.money -= cost
            q.earth.manager.amount += manager * (q.earth.prestige.BOGOF.amount + 1)
        }

        if (q.earth.money > q.earth.builder.cost) {
            var builder = Math.floor(q.earth.money / q.earth.builder.cost)

            if (builder > q.earth.superManager.amount) {
                builder = q.earth.superManager.amount
            }

            var cost = builder * q.earth.builder.cost
            q.earth.money -= cost
            q.earth.builder.amount += builder * (q.earth.prestige.BOGOF.amount + 1)
        }

        if (q.earth.money > q.earth.engineer.cost) {
            var engineer = Math.floor(q.earth.money / q.earth.engineer.cost)

            if (engineer > q.earth.superManager.amount) {
                engineer = q.earth.superManager.amount
            }

            var cost = engineer * q.earth.engineer.cost
            q.earth.money -= cost
            q.earth.engineer.amount += engineer * (q.earth.prestige.BOGOF.amount + 1)
        }
    }
}, 300000)

setIntervall(function () {
    if (q.earth.manager.amount >= 1) {

        if (q.earth.money > q.earth.builder.cost) {
            var builder = Math.floor(q.earth.money / q.earth.builder.cost)

            if (builder > q.earth.manager.amount) {
                builder = q.earth.manager.amount
            }

            var cost = builder * q.earth.builder.cost

            q.earth.money -= cost
            q.earth.builder.amount += builder * (q.earth.prestige.BOGOF.amount + 1)
        }
    }
    if (q.earth.manager.amount >= 1) {

        if (q.earth.money > q.earth.engineer.cost) {
            var engineer = Math.floor(q.earth.money / q.earth.engineer.cost)

            if (engineer > q.earth.manager.amount) {
                engineer = q.earth.manager.amount
            }

            var cost = engineer * q.earth.engineer.cost

            q.earth.money -= cost
            q.earth.engineer.amount += engineer * (q.earth.prestige.BOGOF.amount + 1)
        }
    }
}, 60000)

setIntervall(function () {
    if (q.earth.engineer.amount >= 1) {
        for (const iterator of q.earth.factories) {
            if (q.earth[iterator].amount >= 1) {
                q.earth[iterator].earn = Math.floor(q.earth[iterator].earn + ((q.earth.engineer.amount)/1000))
                q.earth[iterator].cost = Math.floor(q.earth[iterator].cost + ((q.earth.engineer.amount)/500))
            }
        }
    }
},60000)

setIntervall(function () {
    if (q.earth.builder.amount >= 1) {
        q.earth.factories.reduceRight((_, elem) => {
            if(elem != undefined) {
                if (q.earth.money > q.earth[elem].cost) {
                    var ek = Math.floor(q.earth.money / q.earth[elem].cost)

                    if (ek > q.earth.builder.amount) {
                        ek = q.earth.builder.amount
                    }

                    var cost = ek * q.earth[elem].cost
                    q.earth.money -= cost
                    q.earth[elem].amount += ek * (q.earth.prestige.BOGOF.amount + 1)
                }
            }
        }, null)
    }
}, 15000)

//prestigers

setIntervall(function(){
    if (q.earth.prestige.wizzard.amount >=1) {
        q.earth.money += (Math.floor(q.earth.prestige.cost/10)) * q.earth.prestige.wizzard.amount * q.earth.prestige.multiplier.amount
    }
},120000)

setIntervall(function() {
    if (q.earth.prestige.hackerman.amount >=1) {
        q.earth.money += (Math.floor(q.earth.prestige.cost/500)) * q.earth.prestige.hackerman.amount * q.earth.prestige.multiplier.amount
    }
},120000) 

setIntervall(function () {
    if (q.earth.prestige.nasaEngineer.amount >= 1) {
        for (const iterator of q.earth.factories) {
            if (q.earth[iterator].amount >= 1) {
                q.earth[iterator].earn = Math.floor(q.earth[iterator].earn + ((q.earth.prestige.nasaEngineer.amount)/500))
            }
        }
    }
},60000)

setIntervall(function() {
    if (q.earth.prestige.artist.amount >=1) {
        q.earth.money += (Math.floor(q.earth.prestige.cost/500000000)) * q.earth.prestige.artist.amount * q.earth.prestige.multiplier.amount
    }
},60000) 

setInterval(function() {
    if (q.moon.purchased) {

        let reactors = q.moon.reactors;
        console.log(reactors)
        var totalEnergy = 0;
        for (let i = 0; i < reactors.length; i++) {
            totalEnergy += q.moon[reactors[i]].produce * q.moon[reactors[i]].amount
        }
        q.moon.energy += totalEnergy;
        console.log(`Total energy generated: ${totalEnergy}`);

        let things = q.moon.things;
        var totalEnergy = 0;

        for (let i = 0; i < things.length; i++) {
            if (q.moon[things[i]].amount > 0) {
                totalEnergy += q.moon[things[i]].Econsumption * q.moon[things[i]].amount;
            }
        }

        if (q.moon.energy - totalEnergy >= 0) {
            q.moon.energy -= totalEnergy
        }
        else {
            console.log("not enough energy ")
            return false
        }

        console.log(`Total energy consumed: ${totalEnergy}`);


        

        let waterMakers = q.moon.waterMakers;
        let totalWater = 0;
        

        for (let i = 0; i < waterMakers.length; i++) {
            totalWater += q.moon[waterMakers[i]].produce * q.moon[waterMakers[i]].amount;
        }

        q.moon.water += totalWater

        console.log(`Water made: ${totalWater}`)
        


        farms = q.moon.farms
        totalFood = 0
        waterConsumed = 0
        for (let i = 0; i < farms.length; i++) {
            totalFood += q.moon[farms[i]].produce * q.moon[farms[i]].amount;
            waterConsumed += q.moon[farms[i]].produce * q.moon[farms[i]].amount;
        }

        if (waterConsumed > q.moon.water) {
            console.log("not enough wateer")
        }

        else {
            q.moon.water -= waterConsumed
            q.moon.food += totalFood
            console.log(`Food farmed: ${totalFood}`)
        }

        console.log(q.moon.water)
        console.log(q.moon.food)
        console.log(q.moon.energy)

        var killed = 0
        if (q.moon.population * 5 > q.moon.food) {
            killed += q.moon.population * 5 - q.moon.food
        }
        else if (q.moon.population * 5 > q.moon.water) {
            killed += q.moon.population * 5 - q.moon.water
        }
        else {
            q.moon.food -= q.moon.population * 5
            q.moon.water -= q.moon.population * 5
        }

        if (killed >= 1) {
            if (killed > q.moon.population) {
                killed = q.moon.population
            }
            q.moon.population -= killed
            customAlert(`${num2txt(killed)} colonists died !!!`)
        }

    }
},5000)




}

/*Button onclicks*/{
document.querySelector(".earthPrintMoney").onclick = function() {giveMoney()}
document.querySelector(".earthUpgradePrinter").onclick = function () { upgrade() }
document.querySelector(".earthAutoUpgradeBuy").onclick = function () { autoUpgrade() }
document.querySelector(".earthAutoPrintMoneyBuy").onclick = function () { autoPrintMoney() }
document.querySelector(".earthAutoPlayBuy").onclick = function () { autoPlay() }
document.querySelector(".earthBuyMoreMoney").onclick = function() {prestigeUpgrade("multiplier")}
document.querySelector(".earthBuyMoreTokens").onclick = function() {prestigeUpgrade("tokensAdd")}
document.querySelector(".earthBuyNuclearFactories").onclick = function() {prestigeUpgrade("nuclearPower")}
document.querySelector(".earthBuyTaxCuts").onclick = function() {prestigeUpgrade("taxCuts")}
document.querySelector(".earthBuyBuyOneGetOneFree").onclick = function() {prestigeUpgrade("BOGOF")}
document.querySelector(".earthHireBuilder").onclick = function () { hire("builder","earth") }
document.querySelector(".earthHireManager").onclick = function () { hire("manager","earth") }
document.querySelector(".earthHireSuperManager").onclick = function () { hire("superManager","earth") }
document.querySelector(".earthHireEngineer").onclick = function () { hire("engineer","earth") }

document.querySelector(".earthHireWizzard").onclick = function () { prestigeHire("wizzard") }
document.querySelector(".earthHireHackerMan").onclick = function () { prestigeHire("hackerman") }
document.querySelector(".earthHireArtist").onclick = function () { prestigeHire("artist") }
document.querySelector(".earthHireNasaEngineer").onclick = function () { prestigeHire("nasaEngineer") }
document.querySelector(".earthHireBuisnessManager").onclick = function () { prestigeHire("buisnessManager") }

document.querySelector(".earthPrestigeButton").onclick = function () { prestige() }
document.querySelector(".startGame").onclick = function () { start() }
document.querySelector(".easy").onclick = function () {setDifficulty(`easy`,true) }
document.querySelector(".medium").onclick = function () { setDifficulty(`medium`, true) }
document.querySelector(".hard").onclick = function () { setDifficulty(`hard`,true) }
document.querySelector(".insane").onclick = function () { setDifficulty(`insane`, true) }
document.querySelector(".impossible").onclick = function () {setDifficulty(`impossible`,true) }

document.querySelector(".purchaseMoon").onclick = () => {buyMoon()}




x = 0
displays = ["block", "none"]
document.querySelector(".earthUpgradeButton").onclick = () => {
    document.querySelector(".earthUpgrades").style.display = displays[x]
    document.querySelector(".earthPrestigeUpgrades").style.display = displays[1]
    y=0 
    if (x == 0) { x = 1 }
    else if (x == 1) { x = 0 }
}

y = 0
document.querySelector(".earthPrestigeUpgradesButton").onclick = () => {
    if (q.earth.prestige.amount >=1) {
        document.querySelector(".earthPrestigeUpgrades").style.display = displays[y]
        document.querySelector(".earthUpgrades").style.display = displays[1]
        x=0
        if (y == 0) { y = 1 }
        else if (y == 1) { y = 0 }
    }
}

document.querySelector(".earthUp").onclick = () => {
    page += 1
}

document.querySelector(".earthDown").onclick = () => {
    if (page > 1) {
        page -= 1
    }
}


document.querySelector(".close").onclick = () => {
    document.querySelector(".alert").close()
}


}


document.querySelector(".changeWorldUp").onclick =() => {
    planet += 1
}
document.querySelector(".changeWorldDown").onclick =() => {
    planet -= 1
}



