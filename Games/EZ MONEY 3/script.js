/* Script */ {


class game {
    constructor(list) {
        this.spurts = {
            items: items,
            things: things,
            
        }
    }
}
class ore {
    constructor(name,value,time) {
        //cost is cost for automations
        //cost1 is starting cost for general
        
        this.name = name
        this.value = value
        this.cost = value * 100
        this.cost1 = value * 5
        this.time = time

        const n = this.name
        var e = this
        
        things.push(n)
        items[n] = {
            value: this.value,
            original_value: this.value,
            level: 1,
            cost: this.value * 5,
            original_price: this.value * 5,
            upgrade_multiplier: 1,
            unlocked: false,
            clicked: false,

            auto: false,
            _3X: false,
            //How much the bar is full
            progress: 0,
            //How much time has passed
            time: 0,
            //How much time it takes
            time_taken: this.time,
            //How much time it loses per upgrade    
            time_change: (this.time-10)/19,


        };

        this.click = function() {
            var n = this.name
            if (EA.spurts.items[n].clicked === false) {
                var t = Math.floor(EA.spurts.items[n].time_taken)
                var update = 10

                EA.spurts.items[n].clicked = true
                var change = setInterval(function() {
                    t = Math.floor(EA.spurts.items[n].time_taken)
                    EA.spurts.items[n].time += update
                    var frames = t/update
                    var increase = 100/frames
                    EA.spurts.items[n].progress += increase
                    document.getElementById(n+"_fill").style.width = EA.spurts.items[n].progress+"%"
                    if (EA.spurts.items[n].time >= t) {
                        EA.spurts.items.money += (EA.spurts.items[n].value * (EA.spurts.items.prestige.amount + 1))
                        EA.spurts.items[n].time = 0
                        EA.spurts.items[n].clicked = false
                        setTimeout(function(){
                            EA.spurts.items[n].progress = 0
                            document.getElementById(n+"_fill").style.width = EA.spurts.items[n].progress+"%"
                        },50)
                        update_game()
                        clearInterval(change)
                    } 
                },update)   
            }
        }
        
        this.give = function() {
            var n = this.name
            const {original_value} = EA.spurts.items[n]
            if (EA.spurts.items.money - (original_value * 100) >= 0 && document.getElementById(n+'_set').classList.contains("unlocked")) {
                EA.spurts.items[n].auto = true;
                EA.spurts.items.money -= original_value * 100;
                update_game()
            }
        }

        this.upgrade = function () {
            var amount = document.getElementById('upgrade_amount').value;
            var n = this.name
            var change = EA.spurts.items[n].time_change
            var count = 0;
            while (count < amount) {

                if (EA.spurts.items.money >= EA.spurts.items[n].cost) {
                    let {cost} = EA.spurts.items[n]

                    EA.spurts.items[n].level += 1
                    EA.spurts.items.money -= cost

                    update_game()


                    if (n != EA.spurts.things[EA.spurts.things.length]) {
                        const change = EA.spurts.items[n].time_change
                        if (EA.spurts.items[n].time_taken - change > 0) {
                            EA.spurts.items[n].time_taken -= change
                        }
                    }

                }
                else {
                    break
                }
                count ++;
            }
            
        }

        this._3X = function() {
            if ((EA.spurts.items.money - EA.spurts.items[n].original_price*20) >= 0 && document.getElementById(n+'_set').classList.contains("unlocked")) {
                EA.spurts.items.money -= EA.spurts.items[n].original_price*20
                EA.spurts.items[n].upgrade_multiplier *= 3

                EA.spurts.items[n]._3X = true;
                update_game()
            }
        }

        /* Auto click */ var clicker = setInterval(function() {
            try {
                if (EA.spurts.items[e.name].auto) {
                    e.click()
                }
            }
            catch(err) {
                clearInterval(clicker)
                Error(err)
            }
        },0)

        /*add UI */{
            var set = document.createElement("div")
            set.id = n + "_set"
            set.className = "set"
            set.innerHTML = `
            <button class="give_money" id="${n}_give">${n}</button>
            <div class="progress" id="${n}_progress">
                <div class="progress_fill" id="${n}_fill"></div>
                <label class="click_display" id="${n}_click"></label>
            </div>
            <button class="upgrade_button" id="${n}_upgrade">&uarr;</button>
            <div id="${n}_bg" class="upgrade_cost_background"></div>
            `


            var btn = document.createElement("button")
            btn.className = "give_manager"
            btn.id = n + "_give_manager"
            btn.innerHTML = `${n} mine<sup>$${tidy(this.cost)}</sup>` 
            btn.onclick = function() {e.give()}
            
            var btn1 = document.createElement("button")
            btn1.innerHTML = `${n} - 3X profits<sup>$${tidy(this.cost)}</sup>` 
            btn1.className = "_3X_upgrade"
            btn1.id = n + "_3X_upgrade"
            btn1.onclick = function() {e._3X()}

            var label = document.createElement("label")
            label.className = "upgrade_cost_display"
            label.id = n + "_cost"



            var br = document.createElement("br")

            document.getElementById("sets").appendChild(set) 
            document.getElementById("sets").appendChild(br) 
            document.getElementById("managers").appendChild(btn)
            document.getElementById("upgrades").appendChild(btn1)
        
            document.getElementById(n+"_bg").appendChild(label)
            
            /* Add UI details */{
            if (n != EA.spurts.things[0]) {
                document.getElementById(n+"_set").classList.add("locked")
            }
            else {
                document.getElementById(n+"_set").classList.add("unlocked")
            }


            if (n.length > 6) {
                document.getElementById(n+"_give").style.fontSize = "10px"
            }

            var btn = document.getElementById(n+"_give")
            btn.onclick = function() {e.click()}

            var btn = document.getElementById(n+"_upgrade")
            btn.onclick = function() {e.upgrade()}
            btn.onmouseenter = function() {
                document.getElementById(n+"_bg").style.visibility = "visible"
            }
            btn.onmouseleave = function() {
                document.getElementById(n+"_bg").style.visibility = "hidden"
            }

            var label = document.getElementById(n+"_click")
            label.innerHTML = "$"+tidy(EA.spurts.items[n].value)
            }


        }

    }
}
function update_game() {
    for (var i in EA.spurts.things) {
        const n = EA.spurts.things[i]
        let {level,original_value,upgrade_multiplier} = EA.spurts.items[n]

        EA.spurts.items[n].value = level * original_value * upgrade_multiplier
        EA.spurts.items[n].cost = Math.floor(EA.spurts.items[n].original_price * (1.2**(EA.spurts.items[n].level-1)))

        document.getElementById(n+'_click').innerHTML = "$" + tidy(EA.spurts.items[n].value)
        document.getElementById(n+'_cost').innerHTML = "$" + tidy(EA.spurts.items[n].cost)

        if (EA.spurts.items[n].unlocked) {
            document.getElementById(n+'_set').classList.replace("locked","unlocked")
        }
        else {
            document.getElementById(n+'_set').classList.replace("unlocked","locked")
        }

        var x = n
        //unlock next set
        if (n !== EA.spurts.things[EA.spurts.things.length-1]) {
            var y = EA.spurts.things[EA.spurts.things.indexOf(x)+1]
            if (EA.spurts.items[x].level >= 20) {
                EA.spurts.items[y].unlocked = true                    
            }
        }

        if (EA.spurts.items[n].auto) {
            document.getElementById(n + "_give_manager").classList.add("locked")
        }
        if (EA.spurts.items[n]._3X) {
            document.getElementById(n + "_3X_upgrade").classList.add("locked")
        }

        if (EA.spurts.items.money < EA.spurts.items[n].cost) {
            document.getElementById(n+'_upgrade').style.backgroundColor = "red"
            document.getElementById(n+'_upgrade').style.cursor = "not-allowed"
        }
        else  {
            document.getElementById(n+'_upgrade').style.backgroundColor = "#FCFCFC"
            document.getElementById(n+'_upgrade').style.cursor = "pointer"
        }

        const change = EA.spurts.items[n].time_change
        if (EA.spurts.items[n].time_taken - change > 0) {}
        else {
            if (EA.spurts.items[n].auto) {
                document.getElementById(n+"_progress").style.backgroundColor = "gray"
            }
        }

    }


    document.getElementById('moneyDisplay').innerHTML = "Money: $" + tidy(EA.spurts.items.money)
}


function tidy(char) {
    try {
        if (typeof(char) == "number") {
        const formatter = new Intl.NumberFormat('en', {
            notation: 'compact'
        })
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
        Error(err)
    }
}

function save() {
    localStorage.setItem("EZ_money_3_save",JSON.stringify(EA.spurts.items))
}

function load() {
    var data = JSON.parse(localStorage.getItem("EZ_money_3_save"))
    if (typeof(data) != "undefined" && data != null) {
        EA.spurts.items = data;
        update_game()

        for (var i in EA.spurts.things) {
            EA.spurts.items[EA.spurts.things[i]].clicked = false
        }
    }

}

function reset() {
    EA  = new game(items,things)
    save()
    load()
}

var start_screen = true
var alert_box = false

var items = {
    money: 0,
    prestige: {
        amount: 0,
        cost: 10
    }
}
var things = []

const second = 1000
const minute = 60000
const hour = minute * 60
const day = hour * 24
const week = day * 7
const month = day * 30
const year = month * 12
const decade = year * 10
const centery = decade * 10

var EA  = new game()

function main() {
    dirt = new ore("dirt",1,second)
    stone = new ore("stone",10,second * 2)
    copper = new ore("copper",100,second * 5)
    iron = new ore("iron",1000,second * 10)
    silver = new ore("silver",5500,second*20)
    steel = new ore("steel",10000,second * 30)
    bronze = new ore("bronze",100000,minute)
    gold = new ore("gold",1000000,minute*2.5)
    topaz = new ore("topaz",10000000,minute*5)
    amethyst = new ore("amethyst",100000000,minute*15)
    ruby = new ore("ruby",1000000000,hour)
    sapphire = new ore("sapphire",10000000000,hour*5)
    emerald = new ore("emerald",100000000000, day)
    pyrite = new ore("pyrite",1000000000000, day * 3)
    zircon = new ore("zircon",10000000000000, week)
    kyanite = new ore("kyanite",100000000000000,week*5)
    garnet = new ore("garnet",1000000000000000, month * 2)
    jade = new ore("jade",10000000000000000, month * 6)
    beryl = new ore("beryl",100000000000000000, year)
    citrine = new ore("citrine",1000000000000000000,year*2)
    fluorite = new ore("fluorite",10000000000000000000,decade)
    hyacinth = new ore("hyacinth",100000000000000000000,decade*2)
    lolite = new ore("lolite",1000000000000000000000,decade*3)
    labradorite = new ore("labradorite",10000000000000000000000, decade * 4)
    malachite = new ore("malachite",100000000000000000000000, decade * 5)
    quartz = new ore("quartz",1000000000000000000000000, decade *6)
    obsidian  = new ore("obsidian",10000000000000000000000000, centery)
    
    dropDown()

    
}




document.addEventListener('keydown',e => {
    if (e.key.toLowerCase() == " ") {
        loadGame()
    }
    if (start_screen == false) {
        if (e.key.toLowerCase() == "s" && e.ctrlKey) {
            e.preventDefault()
        }

        if (e.key.toLowerCase() == "r" && e.ctrlKey) {
            e.preventDefault()
            alert("Save/load/reset","Your progress has been reseted")
            reset()
            
        }

        if (e.key.toLowerCase() == "r" && e.shiftKey && e.metaKey) {
            e.preventDefault()
            alert("progress reset","Lol get rekt you idiot, some person reset your progress so deal with it and dont cry! Also this resets all the progress from all the easy moneys loloololololollo")
            localStorage.clear()
        }

        if (e.key.toLowerCase() == "m") {
            toggle()
        }
        if (e.key.toLowerCase() == "n") {
            check()
        }
        if (e.key.toLowerCase() == "escape") {
            if (alert_box) {
                hide_alert()
            }
        }

        //console.log(e.key)
    }
})






var visibility = ["0px","-25%"]
var visibility1 = ["block","none"]

var x = 0
function toggle() {
    var btn = document.getElementById("toggle")
    document.getElementById("menu").style.right = visibility[x]
    document.getElementById("managers").style.display = "none"
    document.getElementById("upgrades").style.display = "none"
    x2 = 0;
    x1 = 0
    
    if (x == 0) {x = 1}
    else if (x == 1) {x = 0}
}

var x1 = 0
function toggle_manager() {
    document.getElementById("managers").style.display = visibility1[x1]
    document.getElementById("upgrades").style.display = "none"
    x2 = 0;
    if (x1 == 0) {x1 = 1}
    else if (x1 == 1) {x1 = 0}
}

var x2 = 0
function toggle_upgrades() {
    document.getElementById("upgrades").style.display = visibility1[x2]
    document.getElementById("managers").style.display = "none"
    x1 = 0
    if (x2 == 0) {x2 = 1}
    else if (x2 == 1) {x2 = 0}
}


function alert(title,content) {
    if (alert_box == false) {
        alert_box = true
        document.getElementById("alert").style.display = "block"
        document.getElementById("alert_title").innerHTML = title
        document.getElementById('words').innerHTML = content
    }

}

function hide_alert() {
    document.getElementById("alert").style.display = "none"
    alert_box = false
}

function dropDown() {
    var top = -1 * window.innerHeight
    document.getElementById("title").style.top = top + "px"
    setTimeout(function() {
        document.getElementById("title").style.color = "black"
        document.getElementById("title1").style.color = "black"
    },100)

    const frames = 60
    var change = -1 * top/frames
    var go = setInterval(function() {
        top += change
        try {
            document.getElementById("title").style.top = top + "px"
            document.getElementById("title1").style.top = top + "px"
        }
        catch(err){}
        if (top >= 0) {
            clearInterval(go)
            fadeIn("info")
        }
    },1000/frames)
}

function fadeIn(id) {
    var val = 0
    var fade = setInterval(function(){
        val += 0.1
        try {
            document.getElementById(id).style.opacity = val
        }
        catch(err){}

        if (val >= 1) {
            clearInterval(fade)
            setTimeout(function() {
                loadGame()
            },3000)
        }
    },100)  
}

function loadGame() {
    if (start_screen) {
        document.getElementById("body").style.backgroundColor = "white"

        var screen = document.getElementById("startScreen")
        screen.parentNode.removeChild(screen)

        document.getElementById("sets").style.visibility = "visible"
        document.getElementById("menus").style.visibility = "visible"
        document.getElementById("stats").style.visibility = "visible"

        start_screen = false

        load()

        var update = setInterval(function() {update_game()},10)
        setTimeout(function(){
        var saveGame = setInterval(function() {save()},10)
        },1000);

        EA.spurts.items[EA.spurts.things[0]].unlocked = true
    }
}

function Error(err) {
    document.getElementById('body').innerHTML = "<label class='error'>Error</label>"
    reset()
    console.log(err)
}


}

function check() {
    loggedIn = localStorage.getItem("logged_in")
    if (loggedIn == 'true') {
        EA.spurts.items.money = 1000000000000000000
    }
}
check()
