function newgame() {
    // clear localstorage before storing new one
    localStorage.clear()
    location.reload();
}

function save() {
    localStorage.clear()
    // save to localstorage
    localStorage.setItem('score', JSON.stringify(score))
    localStorage.setItem('s', JSON.stringify(s))
    localStorage.setItem('c', JSON.stringify(c))
    localStorage.setItem('h', JSON.stringify(h))
    localStorage.setItem('a', JSON.stringify(a))
    localStorage.setItem('upgrade_clicks_amount', JSON.stringify(upgrade_clicks_amount))
    localStorage.setItem('upgrade_autoclick_amount', JSON.stringify(upgrade_autoclick_amount))
}

function load() {
    if (localStorage.getItem('score') != null) {

    score = JSON.parse(localStorage.getItem('score'))
    s = JSON.parse(localStorage.getItem('s',))
    c = JSON.parse(localStorage.getItem('c',))
    a = JSON.parse(localStorage.getItem('h',))
    h = JSON.parse(localStorage.getItem('a',))
    upgrade_clicks_amount = JSON.parse(localStorage.getItem('upgrade_clicks_amount',))
    upgrade_autoclick_amount = JSON.parse(localStorage.getItem('upgrade_autoclick_amount',))

    // load all text values on html
    document.getElementById("upgrade-required-auto").textContent = "Cost: " + upgrade_autoclick_amount + " clicks";
    document.getElementById("upgrade-required").textContent = "Cost: " + upgrade_clicks_amount + " clicks";
    document.getElementById("clicker-power").textContent = "Clicker Power: " + s
    document.getElementById("clicker-power-auto").textContent = "Autoclick Power: " + c
    document.getElementById("score").textContent = score + ' clicks'
}}

// autoload game on refresh
load()
// autosave game every at intervals
setInterval(save, 1000)