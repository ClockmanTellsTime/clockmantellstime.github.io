//every hour is a minute



var game = {
    planes: {},
    routes: {},
}

var data = {
    money: 0,
    costForRoute: 1000,
    planes: {
        "123": {model: 'b737', wear: 0, results: 0, position: 0,range: 2500,route: 'Los Angeles', status: "grounded", timeForAssignedRoute: 14000, flying: false,},
        "1234": {model: 'b737', wear: 0, results: 0, position: 0,range: 2500,route: 'Los Angeles', status: "grounded",timeForAssignedRoute: 14000, flying: false,}
    },
    routes: {},
}


class plane {
    constructor(name,pax,fuelEfficiency,speed,range,cost) {
        this.name = name
        this.pax = pax
        this.fuelEfficiency = fuelEfficiency
        this.speed = speed
        this.cost = cost
        this.range = range

        var object = {
            pax: this.pax,
            fuelEfficiency: this.fuelEfficiency,
            speed: this.speed,
            cost: this.cost,
            range: this.range,
        };  

        game.planes[this.name] = object
    }
}

class route {
    //distance is round trip
    constructor(name, demand, distance) {
        this.name = name;
        this.demand = demand;
        this.distance = distance;
        
        this.earn = Math.floor(this.distance/3)

        var object = {
            demand: this.demand,
            distance: this.distance,
            earn: this.earn,
        }

        game.routes[this.name] = object
    }
}

var s = new plane("b737",128,2,850,2500,1500)


{ /* airports*/

const a1 = new route("Tokyo", 2500, 300);
const a2 = new route("New York City", 2000, 150);
const a3 = new route("London", 1800, 200);
const a4 = new route("Paris", 1700, 250);
const a5 = new route("Moscow", 2900, 400);
const a6 = new route("Beijing", 2200, 350);
const a7 = new route("Rio de Janeiro", 1500, 100);
const a8 = new route("Sydney", 2700, 450);
const a9 = new route("Mumbai", 1900, 300);
const a10 = new route("Mexico City", 2100, 200);
const a11 = new route("Istanbul", 2300, 250);
const a12 = new route("Cairo", 1600, 150);
const a13 = new route("Bangkok", 2400, 400);
const a14 = new route("Toronto", 2000, 100);
const a15 = new route("Buenos Aires", 1400, 150);
const a16 = new route("Johannesburg", 1700, 300);
const a17 = new route("Berlin", 1900, 150);
const a18 = new route("Rome", 1800, 200);
const a19 = new route("Madrid", 1700, 250);
const a20 = new route("Seoul", 2200, 350);
const a21 = new route("Jakarta", 2500, 400);
const a22 = new route("Los Angeles", 2000, 300);
const a23 = new route("Lima", 1500, 100);
const a24 = new route("Lagos", 2100, 250);
const a25 = new route("Chicago", 1900, 100);
const a26 = new route("Osaka", 2400, 350);
const a27 = new route("Houston", 2000, 200);
const a28 = new route("Ho Chi Minh City", 2200, 400);
const a29 = new route("Dhaka", 2500, 300);
const a30 = new route("Manila", 2400, 450);
const a31 = new route("Miami", 1800, 150);
const a32 = new route("Kinshasa", 1700, 100);
const a33 = new route("Philadelphia", 1900, 150);
const a34 = new route("Baghdad", 1600, 200);
const a35 = new route("Shenzhen", 2200, 400);
const a36 = new route("Wuhan", 2100, 350);
const a37 = new route("Istanbul", 2300, 250);
const a38 = new route("Moscow", 2900, 400);
const a39 = new route("Lagos", 2100, 250);
const a40 = new route("Mumbai", 1900, 300);
const a41 = new route("Tianjin", 2200, 350);
const a42 = new route("Karachi", 2000, 200);
const a43 = new route("Guangzhou", 2400, 400);
const a44 = new route("Bangalore", 2500, 300);
const a45 = new route("Kolkata", 2200, 350);
const a46 = new route("Chennai", 2100, 400);
const a47 = new route("Taipei", 1800, 150);
const a48 = new route("Bangkok", 2400, 400);
const a49 = new route("Chongqing", 2200, 350);
const a50 = new route("Singapore", 2700, 450);
const a51 = new route("Ankara", 2300, 250);
const a52 = new route("Khartoum", 1700, 100);
const a53 = new route("Baghdad", 1600, 200);
const a54 = new route("Melbourne", 2600, 450);
const a55 = new route("Riyadh", 1900, 250);
const a56 = new route("Saint Petersburg", 1800, 200);
const a57 = new route("Sydney", 2700, 450);
const a58 = new route("Berlin", 1900, 150);
const a59 = new route("Madrid", 1300, 175);
const a60 = new route("Bogota", 1700, 100);
const a61 = new route("Barcelona", 1800, 200);
const a62 = new route("Alexandria", 1600, 150);
const a63 = new route("Abidjan", 1500, 100);
const a64 = new route("Kano", 1400, 150);
const a65 = new route("Addis Ababa", 1700, 200);
const a66 = new route("Nairobi", 1900, 250);
const a67 = new route("Casablanca", 1600, 150);
const a68 = new route("Accra", 1500, 100);
const a69 = new route("Dakar", 1400, 150);
const a70 = new route("Maputo", 1700, 200);
const a71 = new route("Harare", 1900, 250);
const a72 = new route("Luanda", 1600, 150);
const a73 = new route("Tunis", 1500, 100);
const a74 = new route("Algiers", 1400, 150);
const a75 = new route("Kampala", 1700, 200);
const a76 = new route("Lusaka", 1900, 250);
const a77 = new route("Yaounde", 1600, 150);
const a78 = new route("Brazzaville", 1500, 100);
const a79 = new route("Kinshasa", 1400, 150);
const a80 = new route("Bamako", 1700, 200);
const a81 = new route("Nouakchott", 1900, 250);
const a82 = new route("Freetown", 1600, 150);
const a83 = new route("Monrovia", 1500, 100);
const a84 = new route("Conakry", 1400, 150);
const a85 = new route("Bissau", 1700, 200);
const a86 = new route("Banjul", 1900, 250);
const a87 = new route("Djibouti", 1600, 150);
const a88 = new route("Asmara", 1500, 100);
const a89 = new route("Mogadishu", 1400, 150);
const a90 = new route("Kigali", 1700, 200);
const a91 = new route("Bujumbura", 1900, 250);
const a92 = new route("Gaborone", 1600, 150);
const a93 = new route("Maseru", 1500, 100);
const a94 = new route("Antananarivo", 1400, 150);
const a95 = new route("Port Louis", 1700, 200);
const a96 = new route("Victoria", 1900, 250);
const a97 = new route("Moroni", 1600, 150);
const a98 = new route("N'Djamena", 1500, 100);
const a99 = new route("Bangui", 1400, 150);
const a100 = new route("Libreville", 1700, 200);

}

var page = "myPlanes"

function buyPlane(name) {
    // Check if player has enough money to buy the plane
    if (data.money >= game.planes[name].cost) {
        let planeName = "";
        // Keep asking for a name until a valid name is entered
        while (planeName === "" || data.planes[planeName] !== undefined) {
            planeName = prompt("Enter a name for your new plane:");
        }
        // Save the new plane to the data object
        data.planes[planeName] = {
            model: name,
            wear: 0,
            results: 0,

            range: game.planes[name].range,

            //assigned route for the plane
            route: 0,

            //time fro trip
            timeForAssignedRoute: 10,
            position: 9,

            interval: 0,

            flying: false,

            status: "grounded",
        };
        // Subtract the cost of the plane from the player's money
        data.money -= game.planes[name].cost;
    } else {
        alert("You don't have enough money to buy this plane!");
    }
}

function sellPlane(name) {
    data.money += game.planes[data.planes[name].model].cost

    data.routes[data.planes[name].route].remainingDemand += game.planes[data.planes[name].model].pax

    data.routes[data.planes[name].route].planesOnThisRoute.splice(data.routes[data.planes[name].route].planesOnThisRoute.indexOf(name),1)
    clearInterval(data.planes[name].interval)
    delete data.planes[name]
    window.alert(`Successfully sold plane ${name}`)
}


function buyRoute(name) {
    // Check if player has enough money to buy the route
    if (data.routes[name] != undefined){
        window.alert("You already have this route!")
        return false
    }
    if (data.money >= data.costForRoute) {
        // Save the route name to the data object
        data.routes[name] = {
            route: name,
            planesOnThisRoute: [],
            remainingDemand: game.routes[name].demand,
            boughtFor: data.costForRoute,
        };

        data.money -= data.costForRoute
        data.costForRoute += 100
    } else {
        alert("You don't have enough money to buy this route!");
    }
}   

function sellRoute(name) {
    for (i of data.routes[name].planesOnThisRoute) {
        if (data.planes[i].flying) {
            clearInterval(data.planes[i].interval)
            data.planes[i].status = "Grounded"
        }
    }


    data.money += data.routes[name].boughtFor

    for (var i of data.routes[name].planesOnThisRoute) {
        data.planes[i].route = 0
    }

    delete data.routes[name]
    window.alert(`Successfully sold route ${name}`)
}


function setRouteForPlane(planeName, routeName) {

    if (data.routes[routeName].planesOnThisRoute.includes(planeName) ) {return false}
    // Set the plane's assigned route to the given route name
    data.planes[planeName].route = routeName;
    // Calculate the time it will take for the plane to complete the assigned route
    let timeForRoute = Math.round(Math.floor((game.routes[routeName].distance / game.planes[data.planes[planeName].model].speed) * 60000)/1000) * 1000;
    // Set the plane's time for assigned route to the calculated time
    data.planes[planeName].timeForAssignedRoute = timeForRoute;
    data.planes[planeName].position = 0

    data.routes[routeName].planesOnThisRoute.push(planeName)

    data.routes[routeName].remainingDemand -= game.planes[data.planes[planeName].model].pax
    console.log(data.routes[routeName].planesOnThisRoute)
    document.querySelector(".routeSetPopup").style.display = "none"
}


function removeRouteFromPlane(planeName, routeName) {
    try {
    data.planes[planeName].timeForAssignedRoute = 0;
    data.planes[planeName].position = 0;
    data.planes[planeName].route = 0;
    const index = data.routes[routeName].planesOnThisRoute.indexOf(planeName);
    data.routes[routeName].planesOnThisRoute.splice(index, 1);
    data.routes[routeName].remainingDemand += game.planes[data.planes[planeName].model].pax
    }
    catch(err) {}
}


function flyPlane(name, alert = true) {
    if (data.planes[name].route == 0) {window.alert("You need to assign a route for this plane first!"); return false}
    if (data.planes[name].position == 0 && data.planes[name].flying == false)  {
        if (alert) {
            window.alert(`Plane ${name} is flying.`);
        }
        data.planes[name].flying = true
        data.money -= Math.floor(game.routes[data.planes[name].route].earn/2)
        data.planes[name].interval = setInterval(() => {
            if (data.planes[name].position >= data.planes[name].timeForAssignedRoute) {

                data.planes[name].position = 0;
                clearInterval(data.planes[name].interval)
                data.planes[name].interval = 0
                data.planes[name].wear += game.planes[data.planes[name].model].fuelEfficiency;
                data.money += game.routes[data.planes[name].route].earn + game.planes[data.planes[name].model].pax * 2
                data.planes[name].flying = false
                data.planes[name].status = "Grounded"
                data.planes[name].results += game.routes[data.planes[name].route].earn + game.planes[data.planes[name].model].pax * 2
            } else {
                data.planes[name].position += 1000;

                var time = (data.planes[name].timeForAssignedRoute - data.planes[name].position)/1000
                data.planes[name].status = `Flying (${time})`
                console.log(data.planes[name].position, data.planes[name].timeForAssignedRoute)
            }
        }, 1000);
    } else {
        if (alert) {
            window.alert(`Plane ${name} is already flying.`);
        }
    }
}


function flyAllPlanes() {
    for (var i in data.planes) {
        flyPlane(i, false)
    }
    
}

function updatePlanes() {
    document.querySelector(".myPlanes").innerHTML = '<button class="flyAll" onclick="flyAllPlanes()">Depart All</button><br><br>'
    
    for (var i in data.planes) {
        document.querySelector(".myPlanes").innerHTML += `
            <div class="plane"> <img src="airplane images/${data.planes[i].model}.png" alt="Description of the image" width="200px" height="75px"> ${data.planes[i].model} / ${i}  wear: ${data.planes[i].wear} range: ${data.planes[i].range} results: $${data.planes[i].results} seats: ${game.planes[data.planes[i].model].pax} route: ${data.planes[i].route} <button onclick="setRouteForPlanePopup('${i}')">set route</buttom>  <button class="sellPlane" onclick="sellPlane('${i}')">sell plane</button>  <button onclick="flyPlane('${i}')">depart</button> ${data.planes[i].status}</div><br>
        `
    }   
}



function updateRoutes() {
    document.querySelector(".myRoutes").innerHTML = ""
    for (var i in data.routes) {
        document.querySelector(".myRoutes").innerHTML += `
            <div class="route">${i} - Remaining demand: ${data.routes[i].remainingDemand}, distance: ${game.routes[i].distance} <button class="sellRoute" onclick="sellRoute('${i}')">sell route</button></div>
        `
    }   
}

function setRouteForPlanePopup(plane) {
    document.querySelector(".routeSetPopup").style.display = "block"
    document.querySelector(".myRoutes2").innerHTML = ""
    document.querySelector(".myRoutes2").innerHTML += `
    <div class="route"><button class="setRoute" onclick="removeRouteFromPlane('${plane}', '${data.planes[plane].route}')">remove route</button></div>`
    for (var i in data.routes) {
        document.querySelector(".myRoutes2").innerHTML += `
            <div class="route">${i} - Remaining demand: ${data.routes[i].remainingDemand}, distance: ${game.routes[i].distance} <button class="setRoute" onclick="setRouteForPlane('${plane}', '${i}')">set route</button></div>
        `
    } 

    document.querySelector(".cancel").onclick = () => {
        document.querySelector(".routeSetPopup").style.display = "none"
    }
}





function updateRoutesShop() {
    document.querySelector(".buyRoutes").innerHTML = ""
    for (var i in game.routes) {
        if (data.routes[i] == undefined) {
            document.querySelector(".buyRoutes").innerHTML += `
                <div class="plane">${i} distance: ${game.routes[i].distance} cost: ${data.costForRoute} <button class="buyRoute" onclick="buyRoute('${i}')">buy</buttom></div>
            `
        }
    }   
}

function updatePlaneShop() {
    document.querySelector(".buyPlanes").innerHTML = ""
    for (var i in game.planes) {
        document.querySelector(".buyPlanes").innerHTML += `
        <div class="plane"> <img src="airplane images/${i}.png" alt="Description of the image" width="200px" height="75px"> ${i} cost: ${game.planes[i].cost} range: ${game.planes[i].range}  seats: ${game.planes[i].pax} <button class="buyPlane" onclick="buyPlane('${i}')">buy</buttom></div>
    `
    }
}

function updatePage() {
    var pages = document.getElementsByClassName("page");
    for (var i = 0; i < pages.length; i++) {
    // Do something with each div with classname "page"
    pages[i].style.display = "none"
    }
    document.querySelector(`.${page}`).style.display = "block"
}

function update() {
    updatePage();
    updatePlanes()
    updateRoutes()
    updateRoutesShop();
    updatePlaneShop();

    document.querySelector(".moneyDisplay").innerHTML = `Money: $${data.money}`
}


data.money = 2183892139832
buyRoute("Los Angeles");
setRouteForPlane("123","Los Angeles");
setRouteForPlane("1234","Los Angeles");

data.money = 2000



setInterval(() => {
    update()
}, (1000));

console.log(`Money ${data.money}`)