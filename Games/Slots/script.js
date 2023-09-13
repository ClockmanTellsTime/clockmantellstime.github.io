var money = 100

var spinning = false
var slot1 = document.querySelector(".slot1")
var slot2 = document.querySelector(".slot2")
var slot3 = document.querySelector(".slot3")

var moneyDisplay = document.querySelector(".moneyDisplay")
var textDisplay = document.querySelector(".textDisplay")

a1 = 1
a2 = 2
a3 = 3


function roll(bet) {
    if (spinning) {return}
    if (!bet) {return}
    if (bet > 1000000000000000000){bet = 1000000000000000000}
    if (money - bet < 0){return}

    money -= bet
    moneyDisplay.innerHTML = `Money: $${num2txt(money)}`

    spinning = true

    var d = Math.floor(Math.random() * 3) + 1

    multiplier = 0

    function evaluate(){
        if (a1 == a2 && a1 == a3) {
            multiplier = 10

            if (a1 == 7) {
                multiplier = 25
            }
        }


        else if (a1 == a2 || a2 == a3 || a1 == a3) {
            multiplier = 3

            if ((a1 == a2 && a1 == 7)||(a1 == a3 && a1 == 7) || (a3 == a2 && a3 == 7)) {
                multiplier = 7
            }
        }
    }

    function roll1() {
        var amount = 7*d + Math.floor(Math.random() * 7)

        var b1 = setInterval(() => {
            a1 += 1

            amount -= 1

            if (a1 >= 10) {
                a1 = 1
            }

            if (amount == 0) {
                clearInterval(b1)
            }

            slot1.innerHTML = a1
        }, 50);
    }
    function roll2() {
        var amount = 14*d + Math.floor(Math.random() * 7)

        var b2 = setInterval(() => {
            a2 += 1

            amount -= 1

            if (a2 >= 10) {
                a2 = 1
            }

            if (amount == 0) {
                clearInterval(b2)
            }

            slot2.innerHTML = a2
        }, 50);
    }
    function roll3() {
        var amount = 21*d + Math.floor(Math.random() * 7)

        var b3 = setInterval(() => {
            a3 += 1

            amount -= 1

            if (a3 >= 10) {
                a3 = 1
            }

            if (amount == 0) {
                clearInterval(b3)
                spinning = false
                evaluate()

                money += (bet * multiplier)

                moneyDisplay.innerHTML = `Money: $${num2txt(money)}`

                if (multiplier == 0) {
                    textDisplay.innerHTML = "You lost!"
                }

                else {
                    textDisplay.innerHTML = `CONGRATS! You won ${multiplier} times your bet!`
                }
            }

            slot3.innerHTML = a3
        }, 50);
    }

    roll1()
    roll2()
    roll3()


}


document.querySelector(".roll").onclick = () => {
    roll(document.querySelector(".amount").value)
}
