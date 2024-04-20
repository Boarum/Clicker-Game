// Initialize the score
let score = 0
// Reset Strength
let u = 1
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

// Initialize the cost of reset power upgrade
let reset_power_amount = 10000
// how much cost to add to reset power upgrade
let v = reset_power_amount


// listen for a click
document.getElementById("hand").addEventListener("click", incrementUpgradeHand)
document.getElementById("auto").addEventListener("click", incrementUpgradeAuto)
document.getElementById("gear").addEventListener("click", onOptionPress)
document.getElementById("reset").addEventListener("click", resetPower)

// Function to increment the score when the button is clicked
function incrementScore() {   
    score += s * u
    // Update the score display
    document.getElementById("score").textContent = score + ' clicks'

    opacitychangeonscore()
}

function autoincrementscore() {
    score += c * u
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
        h = Math.round(upgrade_clicks_amount * 1.50)

        // Update the upgrade_clicks_amount
        upgrade_clicks_amount += h

        // Update the required clicks
        document.getElementById("upgrade-required").textContent = "Cost: " + upgrade_clicks_amount + " clicks";

        // update click power
        s++
        
        // update html page with new click power
        document.getElementById("clicker-power").textContent = "Clicker Power: " + (s * u)
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
        a = Math.round(upgrade_autoclick_amount * 1.50)

        // update the upgrade_autoclick_amount
        upgrade_autoclick_amount += a

        // Update the required clicks
        document.getElementById("upgrade-required-auto").textContent = "Cost: " + upgrade_autoclick_amount + " clicks";

        // update autoclick power
        c++

        // update html page with new autoclick power
        document.getElementById("clicker-power-auto").textContent = "Autoclick Power: " + (c * u)

        opacitychangeonpurchase()
}}

function resetPower() {
    if (score >= reset_power_amount) {
        
        autosavePaused = true;

        var didTheyPressOk = confirm("You will enter the next world! All upgrades and score are reset, but twice as strong. Do you wish to proceed?")

        if (didTheyPressOk) {
            
            // reset game
            score = 0
            s = 1
            c = 0
            h = 10
            a = 100
            u = 1
            upgrade_clicks_amount = 10
            upgrade_autoclick_amount = 100

            // update the score display
            document.getElementById("score").textContent = score + ' clicks'

            // Recalculate the cost of upgrade
            v = Math.round(reset_power_amount)
        
            // update the reset_power_amount
            reset_power_amount += v

            // Update the required clicks
            document.getElementById("upgrade-required-reset").textContent = "Cost: " + reset_power_amount + " clicks";

            // update reset power
            u++
            
            // update html page
            document.getElementById("clicker-reset").textContent = "World: " + (u)
            document.getElementById("clicker-power-auto").textContent = "Autoclick Power: " + (c * u)
            document.getElementById("clicker-power").textContent = "Clicker Power: " + (s * u)
            document.getElementById("upgrade-required-auto").textContent = "Cost: " + upgrade_autoclick_amount + " clicks";
            document.getElementById("upgrade-required").textContent = "Cost: " + upgrade_clicks_amount + " clicks";

            location.reload
        }
    }
}