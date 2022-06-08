var solve = setInterval(function() {
    let stock = parseInt(localStorage.getItem("password"))
    stock += 1
    localStorage.setItem("password",stock)
    document.querySelector("#passwordInput").value = `00${stock}`
    document.querySelector("#submitButton").click()
},1)
