let cookie = document.querySelector('.cookie-cost')
let parsedCookie = parseFloat(cookie.innerHTML)

let clickerCost = document.querySelector('.clicker-cost')
let parsedClickerCost = parseFloat(clickerCost.innerHTML)

function incrementCookie() {
    parsedCookie += 1
    cookie.innerHTML = parsedCookie
}

function buyClicker() {
    if (parsedCookie >= parsedClickerCost) {
        parsedCookie -= parsedClickerCost
    cookie.innerHTML = parsedCookie
    }
}