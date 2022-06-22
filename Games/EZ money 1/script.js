

class factory {
    constructor(name, earn, text) {
        //WORK
    }
}

difficulties = ["easy", "medium", "hard", "insane"]
difficulty = ""
document.addEventListener("keydown", event => {
    if (event.key.toLowerCase() == " ") {
        if (document.querySelector(".start") != undefined && document.querySelector(".start").style.visibility == "") {
            start()
        }
    }

    if (event.key.toLowerCase() == "r") {
        if (window.confirm("Are you sure you want to reset, this is not able to be undone? ")) {
            reset()
        }
    }

    if (event.key.toLowerCase() == "q") {
        upgrade()
    }

    if (event.key.toLowerCase() == "a") {
        autoUpgrade()
    }

    if (event.key.toLowerCase() == "s") {
        autoPrintMoney()
    }
    if (event.key.toLowerCase() == "d") {
        autoPlay()
    }

    if (event.key.toLowerCase() == "z") {
        hire("builders")
    }
    if (event.key.toLowerCase() == "x") {
        hire("managers")
    }
    if (event.key.toLowerCase() == "c") {
        hire("superManagers")
    }
    if (event.key.toLowerCase() == "u") {
        document.querySelector(".upgradeButton").click()
    }

    if (event.key== "ArrowUp") {
        if(document.querySelector(".upgrades").style.display == "block" ) {
            document.querySelector(".up_arrow").click()
        }
    }
    if (event.key == "ArrowDown") {
        if (document.querySelector(".upgrades").style.display == "block") {
            document.querySelector(".down").click()
        }
    }

    if (typeof (parseInt(event.key)) == "number") {
        if (document.querySelector(".difficulty") != undefined && document.querySelector(".difficulty").style.visibility == "visible") {
            if (parseInt(event.key) > 0 && parseInt(event.key) < difficulties.length + 1) {
                    setDifficulty(difficulties[parseInt(event.key) - 1],true)
            }
        }
        else if (0 < parseInt(event.key) && parseInt(event.key) < 6) {
            hire(`mk${event.key}`)
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
    managers: {
        amount: 0,
        cost: 250000
    },
    superManagers: {
        amount: 0,
        cost: 150000000
    },

    mk1: {
        amount: 0,
        cost: 500000,
        level: 0,
        earn: 50000,
    },
    mk2: {
        amount: 0,
        cost: 15000000,
        level: 0,
        earn: 750000,
    },
    mk3: {
        amount: 0,
        cost: 1000000000,
        level: 0,
        earn: 5000000,
    },
    mk4: {
        amount: 0,
        cost: 50000000000,
        level: 0,
        earn: 250000000,
    },
    mk5: {
        amount: 0,
        cost: 1000000000000,
        level: 0,
        earn: 50000000000,
    },

    easy: 1,
    medium: 5,
    hard: 25,
    insane: 100,

    autoPrint: {
        has: false,
        cost: 100000,
    },
    autoUpgrade: {
        has: false,
        cost: 10000,
    },
    autoPlay: {
        has: false,
        cost: 500000000,
    },

    lastPlayed: undefined,
}

const stock = JSON.parse(JSON.stringify(q))

var page = 1
var clicks = 0
var moneyEarnedInASecond = 0
var alertsOn = true


function giveMoney() {
    q.money += q.print.earn;
    clicks += q.print.earn
}

function upgrade() {
    if (q.money < q.print.cost) { alertss(`You need $${num2txt(q.print.cost - q.money)} more to do this.`); return false }
    q.money -= q.print.cost
    q.print.earn += 1;
}

function start() {
    if (window.confirm("Are you Sure? ")) {
        $(".start").fadeOut(800,function() {
            document.querySelector(".difficulty").style.visibility = "visible"
        })
        
    }
}

function setDifficulty(difficult,c=false) {
    var d = 1
    if (c) {
        if (confirm("Are you sure about this, you will not be able to change the difficulty later????")) {
            d = true
        }
    }
    else {
        d = true
    }

    if (d) {
        if (document.querySelector(".start") != undefined) {
            $(".difficulty").slideUp(1000,function() {
                document.querySelector("body").removeChild(document.querySelector(".start"))
                document.querySelector("body").removeChild(document.querySelector(".difficulty"))
                document.querySelector(".game").style.visibility = "visible"
                document.querySelector("body").style.backgroundColor = "white"
            })
        }

        difficulty = difficult
        startGame()
    }
}

function autoPrintMoney() {
    if (q.money < q.autoPrint.cost) { alertss(`You need $${num2txt(q.autoPrint.cost - q.money)} more to do this.`); return false }
    q.money -= q.autoPrint.cost
    document.querySelector(".ez2").innerHTML = "on"

    var ez = setInterval(function () {
        q.money += q.print.earn

    }, 10)

    var hard = setTimeout(function () {
        clearInterval(ez)
        document.querySelector(".ez2").innerHTML = "buy"
    }, 60000)
}

function autoUpgrade() {
    if (q.money < q.autoUpgrade.cost) { alertss(`You need $${num2txt(q.autoUpgrade.cost - q.money)} more to do this.`); return false }
    if (q.autoUpgrade.has) { return false }
    q.money -= q.autoUpgrade.cost
    document.querySelector(".ez1").innerHTML = "on"

    var ez = setInterval(function () {
        if (q.money >= q.print.cost) {
            upgrade()
        }
    }, 10)

    var hard = setTimeout(function () {
        clearInterval(ez)
        document.querySelector(".ez1").innerHTML = "buy"
    }, 60000)
}

function autoPlay() {
    if (q.money < q.autoPlay.cost) { alertss(`You need $${num2txt(q.autoPlay.cost - q.money)} more to do this.`); return false }
    if (q.autoPlay.has) { return false }
    q.money -= q.autoPlay.cost
    alertss("Get trolled bozo")
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
    if (q.mk1.level >= 5) {
        document.querySelector(".upgradeMk1").style.display = "none"
    }
    if (q.mk2.level >= 5) {
        document.querySelector(".upgradeMk2").style.display = "none"
    }
    if (q.mk3.level >= 5) {
        document.querySelector(".upgradeMk3").style.display = "none"
    }
    if (q.mk4.level >= 5) {
        document.querySelector(".upgradeMk4").style.display = "none"
    }
    if (q.mk5.level >= 5) {
        document.querySelector(".upgradeMk5").style.display = "none"
    }
}
function updateStats() {
    q.moneyPerSecond = q.mk1.earn * q.mk1.amount
    q.moneyPerSecond += q.mk2.earn * q.mk2.amount
    q.moneyPerSecond += q.mk3.earn * q.mk3.amount
    q.moneyPerSecond += q.mk4.earn * q.mk4.amount
    q.moneyPerSecond += q.mk5.earn * q.mk5.amount
    q.lastPlayed = Date.now()
    moneyEarnedInASecond = q.moneyPerSecond + clicks
}
function displayStats() {
    document.querySelector(".moneyDisplay").innerHTML = `Money: $${num2txt(q.money)}`
    document.querySelector(".upgradeDisplay").innerHTML = `Costs $${num2txt(q.print.cost)} to upgrade. You currently make $${num2txt(q.print.earn)} per click.`
    document.querySelector(".mk1Display").innerHTML = `Mk1 factory: A simple, low tech factory that produces  $${num2txt(q.mk1.earn)} per second and costs $${num2txt(q.mk1.cost)}. You currently have ${num2txt(q.mk1.amount)}.`
    document.querySelector(".mk2Display").innerHTML = `Mk2 factory: A basic factory that makes  $${num2txt(q.mk2.earn)} and costs $${num2txt(q.mk2.cost)}. You currently have ${num2txt(q.mk2.amount)}.`
    document.querySelector(".mk3Display").innerHTML = `Mk3 factory: An average factory that makes $${num2txt(q.mk3.earn)} and costs $${num2txt(q.mk3.cost)}. You currently have ${num2txt(q.mk3.amount)}.`
    document.querySelector(".mk4Display").innerHTML = `Mk4 factory: A high tech factory that costs $${num2txt(q.mk4.cost)}. The price is worth it because it makes you $${num2txt(q.mk4.earn)}. You currently have ${num2txt(q.mk4.amount)}.`
    document.querySelector(".mk5Display").innerHTML = `Mk5 factory: A super high tech factory that is completely automated and makes  $${num2txt(q.mk5.earn)}. However it is not cheap and will cost you a fortune. You currently have ${num2txt(q.mk5.amount)}.`
    document.querySelector(".managerDisplay").innerHTML = `Super Manager: A person who hires managers and builders for you every 5 minutes. They are not cheap and cost $${num2txt(q.superManagers.cost)}. You currently have ${num2txt(q.superManagers.amount)}.`
    document.querySelector(".builderDisplay").innerHTML = `Manager: Somone who automatically hires builders so you can keep dreaming about being rich. They cost you $${num2txt(q.managers.cost)}. You have ${num2txt(q.managers.amount)} hired.`
    document.querySelector(".printerDisplay").innerHTML = `Builder: Somone who automatically builds factories every 15 seconds, so you dont have to. They cost $${num2txt(q.builders.cost)}. You currently have ${num2txt(q.builders.amount)}.`
    document.querySelector(".moneyPerSecondDisplay").innerHTML = `Money per second: $${num2txt(q.moneyPerSecond)}`
    document.querySelector(".pageDisplay").innerHTML = `Page: ${page}`
}

function moneyPopup(amount) {
    if (amount > 0) {
        var label = document.createElement("label")
        label.innerHTML = `+$${num2txt(amount)}`
        label.className = `moneyPopup`
        document.querySelector(".money").appendChild(label)

        $(".moneyPopup").fadeOut(0).fadeIn(400).fadeOut(0, function () {
            document.querySelector(".money").removeChild(document.querySelector(".moneyPopup"))
        })
    }
}


function hire(thing) {
    if (q.money < q[thing].cost) { alertss(`You need $${num2txt(q[thing].cost - q.money)} more to do this.`); return false }
    q.money -= q[thing].cost
    q[thing].amount += 1


}

function levelUp(thing) {
    if (q.money < q[thing].cost * 10) { alertss(`You need $${num2txt((q[thing].cost * 10) - q.money)} more to do this.`); return false }
    if (q[thing].level >= 5) { document.getElementById(thing + "Upgrade").style.display = "none"; return false }

    q.money -= q[thing].cost * 10
    q[thing].earn *= 2
    q[thing].level += 1

}


function save() {
    localStorage.setItem("EZ_money_1_save/" + difficulty, JSON.stringify(q))
}

function load() {
    if (localStorage.getItem("EZ_money_1_save/" + difficulty) != undefined) {
        var data = JSON.parse(localStorage.getItem("EZ_money_1_save/" + difficulty))
        q = JSON.parse(JSON.stringify(data))
    }
}

function reset() {
    q = JSON.parse(JSON.stringify(stock))
    save()
    setDifficulty(difficulty)
}

function alertss(message) {
    if (alertsOn) {
        window.alert(message)
    }
}

function startGame() {
    load()

    if (q.lastPlayed != null) {
        var a = Math.round((Date.now() - q.lastPlayed) / 1000)

        if (a >= 60) {
            if (q.moneyPerSecond > 0) {
                var factories = parseInt(a / 15)
                var managers = parseInt(a / 300)
                var builders = parseInt(a / 60)


                window.alert(`while you were gone: \nYou earned $${num2txt(q.moneyPerSecond * a)},\nYou earned ${num2txt(q.managers.amount * builders)} builders,\nYou earned ${num2txt(q.superManagers.amount * managers)} managers,\nYou earned ${num2txt(q.builders.amount * factories)} factories,`)

                q.money += q.moneyPerSecond * a
                q.mk1.amount += q.builders.amount * factories
                q.mk2.amount += q.builders.amount * factories
                q.mk3.amount += q.builders.amount * factories
                q.mk4.amount += q.builders.amount * factories
                q.mk5.amount += q.builders.amount * factories
                q.builders.amount += q.managers.amount * builders
                q.managers.amount += q.superManagers.amount * managers
            }
        }
    }
    if (q.print.cost / 1000 == 1) {
        for (var i in q) {
            if (q[i].cost != undefined) {
                q[i].cost *= q[difficulty]
            }
        }
    }
    setInterval(function () { save() }, 1)
}

setInterval(function () {
    update()
}, 1)
setInterval(function () {
    try {
        q.money += q.mk1.earn * q.mk1.amount
    }
    catch (err) {
        reset()
    }
}, 1000)
setInterval(function () {
    q.money += q.mk2.earn * q.mk2.amount
}, 1000)
setInterval(function () {
    q.money += q.mk3.earn * q.mk3.amount
}, 1000)
setInterval(function () {
    q.money += q.mk4.earn * q.mk4.amount
}, 1000)
setInterval(function () {
    q.money += q.mk5.earn * q.mk5.amount
}, 1000)

setInterval(function () {
    if (q.superManagers.amount >= 1) {
        if (q.money > q.managers.cost) {
            var managers = Math.floor(q.money / q.managers.cost)

            if (managers > q.superManagers.amount) {
                managers = q.superManagers.amount
            }

            var cost = managers * q.managers.cost

            q.money -= cost
            q.managers.amount += managers


        }

        if (q.money > q.builders.cost) {
            var builders = Math.floor(q.money / q.builders.cost)

            if (builders > q.superManagers.amount) {
                builders = q.superManagers.amount
            }

            var cost = builders * q.builders.cost

            q.money -= cost
            q.builders.amount += builders


        }

    }
}, 300000)

setInterval(function () {
    if (q.managers.amount >= 1) {

        if (q.money > q.builders.cost) {
            var builders = Math.floor(q.money / q.builders.cost)

            if (builders > q.managers.amount) {
                builders = q.managers.amount
            }

            var cost = builders * q.builders.cost

            q.money -= cost
            q.builders.amount += builders


        }

    }
}, 60000)

setInterval(function () {
    if (q.builders.amount >= 1) {

        if (q.money > q.mk5.cost) {
            var mk5 = Math.floor(q.money / q.mk5.cost)

            if (mk5 > q.builders.amount) {
                mk5 = q.builders.amount
            }

            var cost = mk5 * q.mk5.cost
            q.money -= cost
            q.mk5.amount += mk5
        }
        if (q.money > q.mk4.cost) {
            var mk4 = Math.floor(q.money / q.mk4.cost)

            if (mk4 > q.builders.amount) {
                mk4 = q.builders.amount
            }

            var cost = mk4 * q.mk4.cost
            q.money -= cost
            q.mk4.amount += mk4
        }
        if (q.money > q.mk3.cost) {
            var mk3 = Math.floor(q.money / q.mk3.cost)

            if (mk3 > q.builders.amount) {
                mk3 = q.builders.amount
            }

            var cost = mk3 * q.mk3.cost
            q.money -= cost
            q.mk3.amount += mk3
        }
        if (q.money > q.mk2.cost) {
            var mk2 = Math.floor(q.money / q.mk2.cost)

            if (mk2 > q.builders.amount) {
                mk2 = q.builders.amount
            }

            var cost = mk2 * q.mk2.cost
            q.money -= cost
            q.mk2.amount += mk2
        }
        if (q.money > q.mk1.cost) {
            var mk1 = Math.floor(q.money / q.mk1.cost)

            if (mk1 > q.builders.amount) {
                mk1 = q.builders.amount
            }

            var cost = mk1 * q.mk1.cost
            q.money -= cost
            q.mk1.amount += mk1
        }

    }
}, 15000)
setInterval(function () {moneyPopup(moneyEarnedInASecond);clicks = 0},1000)

document.querySelector(".upgradePrinter").onclick = function () { upgrade() }
document.querySelector(".printMoney").onclick = function () { giveMoney() }
document.querySelector(".ez1").onclick = function () { autoUpgrade() }
document.querySelector(".ez2").onclick = function () { autoPrintMoney() }
document.querySelector(".ez3").onclick = function () { autoPlay() }
document.querySelector(".hirePrinter").onclick = function () { hire("builders") }
document.querySelector(".hireBuilder").onclick = function () { hire("managers") }
document.querySelector(".hireManager").onclick = function () { hire("superManagers") }
document.querySelector(".upgradeMk1").onclick = function () { levelUp("mk1") }
document.querySelector(".buildMk1").onclick = function () { hire("mk1") }
document.querySelector(".upgradeMk2").onclick = function () { levelUp("mk2") }
document.querySelector(".buildMk2").onclick = function () { hire("mk2") }
document.querySelector(".upgradeMk3").onclick = function () { levelUp("mk3") }
document.querySelector(".buildMk3").onclick = function () { hire("mk3") }
document.querySelector(".upgradeMk4").onclick = function () { levelUp("mk4") }
document.querySelector(".buildMk4").onclick = function () { hire("mk4") }
document.querySelector(".upgradeMk5").onclick = function () { levelUp("mk5") }
document.querySelector(".buildMk5").onclick = function () { hire("mk5") }
document.querySelector(".prsTstrt").onclick = function () { start() }
document.querySelector(".easy").onclick = function () {setDifficulty(`easy`,true) }
document.querySelector(".medium").onclick = function () { setDifficulty(`medium`, true) }
document.querySelector(".hard").onclick = function () { setDifficulty(`hard`,true) }
document.querySelector(".insane").onclick = function () { setDifficulty(`insane`, true) }
document.querySelector(".alerts").onclick = function () {
    if (alertsOn) {
        alertsOn = false
        document.querySelector(".alerts").innerHTML = "Alerts: off"
    }
    else {
        alertsOn = true
        document.querySelector(".alerts").innerHTML = "Alerts: on"
    }
}


x = 0
displays = ["block", "none"]
document.querySelector(".upgradeButton").onclick = () => {
    document.querySelector(".upgrades").style.display = displays[x]
    if (x == 0) { x = 1 }
    else if (x == 1) { x = 0 }
}

document.querySelector(".up").onclick = () => {
    page += 1
}

document.querySelector(".down").onclick = () => {
    if (page > 0) {
        page -= 1
    }
}
