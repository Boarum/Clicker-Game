// Initialize the score
let score = 0
// How much score to add
let s = 1
// How much score to add automatically
let c = 0

// Initialize the cost of click upgrade
let upgrade_clicks_amount = 10
// how much cost to add to click upgrade
let h = upgrade_clicks_amount

// Initialize the cost of autoclick upgrade
let upgrade_autoclick_amount = 100
// how much cost to add to autoclick upgrade
let a = upgrade_autoclick_amount

// listen for a click
document.getElementById("hand").addEventListener("click", incrementUpgradeHand)
document.getElementById("auto").addEventListener("click", incrementUpgradeAuto)
document.getElementById("gear").addEventListener("click", onOptionPress)

// Function to increment the score when the button is clicked
function incrementScore() {   
    score += s
    // Update the score display
    document.getElementById("score").textContent = score + ' clicks'

    opacitychangeonscore()
}

function autoincrementscore() {
    score += c
    // Update the score display
    document.getElementById("score").textContent = score + ' clicks'

    opacitychangeonscore()
}

// call function autoincrementscore every interval
setInterval(autoincrementscore, 1000)

// Function to increase click power
function incrementUpgradeHand() {    
    if (score >= upgrade_clicks_amount) {
        
        // minus the upgrade cost from score
        score = score - upgrade_clicks_amount

        // Update the score display
        document.getElementById("score").textContent = score + ' clicks'

        // Recalculate the cost to add (h) based on the new upgrade_clicks_amount
        h = Math.round(upgrade_clicks_amount * 1.66)

        // Update the upgrade_clicks_amount
        upgrade_clicks_amount += h

        // Update the required clicks
        document.getElementById("upgrade-required").textContent = "Cost: " + upgrade_clicks_amount + " clicks";

        // update click power
        s++
        
        // update html page with new click power
        document.getElementById("clicker-power").textContent = "Clicker Power: " + s
    }
    
    opacitychangeonpurchase()
}

function incrementUpgradeAuto() {
    if (score >= upgrade_autoclick_amount) {

        // minus upgrade cost from score
        score = score - upgrade_autoclick_amount

        // update the score display
        document.getElementById("score").textContent = score + ' clicks'

        // Recalculate the cost of upgrade
        a = Math.round(upgrade_autoclick_amount * 1.66)

        // update the upgrade_autoclick_amount
        upgrade_autoclick_amount += a

        // Update the required clicks
        document.getElementById("upgrade-required-auto").textContent = "Cost: " + upgrade_autoclick_amount + " clicks";

        // update autoclick power
        c++

        // update html page with new autoclick power
        document.getElementById("clicker-power-auto").textContent = "Autoclick Power: " + c

        opacitychangeonpurchase()
}}

