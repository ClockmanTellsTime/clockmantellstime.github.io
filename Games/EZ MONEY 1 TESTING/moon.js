    function giveMoonMoney() {
        q.moon.money += q.moon.click.amount
    }




    document.querySelector(".printMoonMoney").onclick = () => {giveMoonMoney()}

    x = 0
    displays = ["block", "none"]
    document.querySelector(".moonUpgradeButton").onclick = () => {
        document.querySelector(".moonUpgrades").style.display = displays[x]
        if (x == 0) { x = 1 }
        else if (x == 1) { x = 0 }
    }

    function updateMoon() {
        if (q.moon.purchased) {
            document.querySelector(".moonLockScreen").style.display = "none"
            document.querySelector(".moonContent").style.display = "block"
        }
        else {
            document.querySelector(".moonLockScreen").style.display = "block"
            document.querySelector(".moonContent").style.display = "none"
        }
    }

    function buyMoon() {
        if (q.earth.money < q.moon.cost ) {customAlert(`You need $${q.moon.cost - q.earth.money} more to do this!`);return false;}
        if (q.earth.prestige.prestigeTokens < q.moon.costP) {customAlert(`You need PT$${q.moon.costP - q.earth.prestige.prestigeTokens} more to do this!`);return false}
        if (confirm("Are you sure, the Moon is expensive, and you don't get refunds!") && confirm("Are you actually sure, you can lose everything buying the Moon?")) {
            q.moon.purchased = true
            q.earth.money -= q.moon.cost
            q.earth.prestige.prestigeTokens -= q.moon.costP
            customAlert("You have bought the Moon...")
        }
    }

    function moonUpdatePage() {
        if (document.querySelector(`.moonPage${moonPage}`) != undefined) {
            var pages = document.getElementsByClassName("moonpage")
            for (var i of pages) {
                document.querySelector(`.${String(i.className).split(" ")[0]}`).style.display = "none"
            }
            document.querySelector(`.moonPage${moonPage}`).style.display = "block"
        }
        else {
            moonPage -= 1
        }

        document.querySelector(".moonPageDisplay").innerHTML = `Page: ${moonPage}`
    }

    document.querySelector(".moonUp").onclick = () => {
        moonPage += 1
    }

    document.querySelector(".moonDown").onclick = () => {
        if (moonPage > 1) {
            moonPage -= 1
        }
    }


    function moonAutoPrintMoney() {
        function what() {
            clearInterval(ez1)
            clearTimeout(hard)
            document.querySelector(".buyAutoPrintMoonTokens").innerHTML = "buy"
            q.moon.autoPrint.on = false;
        }

        if (q.moon.autoPrint.on  && confirm("Are you sure you want to stop this?")) {
            what()
        }
        else {
            if (q.moon.money < q.moon.autoPrint.cost) {
                customAlert(`You need $${num2txt(q.moon.autoPrint.cost - q.moon.money)} more to do this.`)
                return false 
            }

            q.moon.money -= q.moon.autoPrint.cost
            document.querySelector(".buyAutoPrintMoonTokens").innerHTML = "on"
            q.moon.autoPrint.on = true
            clearInterval(ez1)
            clearTimeout(hard)
            ez1 = setInterval(function () {
                q.moon.money += q.moon.click.amount
            }, 1)


            var hard = setTimeout(function () {
                what()
            }, 60000)
        }
    }

    function moonAutoUpgrade() {
        function what() {
            clearInterval(ez)
            clearTimeout(hard)
            document.querySelector(".buyAutoUpgradeMoonPrinter").innerHTML = "buy"
            q.moon.autoUpgrade.on = false;
        }

        if (q.moon.autoUpgrade.on && confirm("Are you sure you want to stop this?")) {
            what()
        }

        else{
            if (q.moon.money < q.moon.autoUpgrade.cost) { 
                customAlert(`You need $${num2txt(q.moon.autoUpgrade.cost - q.moon.money)} more to do this.`); 
                return false 
            }
            q.moon.money -= q.moon.autoUpgrade.cost
            document.querySelector(".buyAutoUpgradeMoonPrinter").innerHTML = "on"
            q.moon.autoUpgrade.on = true
            clearInterval(ez)
            clearTimeout(hard)
            ez = setInterval(function () {
                if (q.moon.money >= q.moon.click.cost) {
                    upgrade("moon")
                }
            }, 1)
        
            var hard = setTimeout(function () {
                what()
            }, 60000)
        }
    }

    document.querySelector(".buyAutoUpgradeMoonPrinter").onclick = () => {
        moonAutoUpgrade()
    }

    document.querySelector(".buyAutoPrintMoonTokens").onclick = () => {
        moonAutoPrintMoney()
    }

    document.querySelector(".hireMoonBuilder").onclick = () => {
        hire("builder","moon")
    }
    document.querySelector(".hireMoonEngineer").onclick = () => {
        hire("engineer","moon")
    }
    document.querySelector(".hireMoonManager").onclick = () => {
        hire("manager","moon")
    }
    document.querySelector(".hireMoonSuperManager").onclick = () => {
        hire("superManager","moon")
    }

