// Initialize the score
let score = 0

// How much score to add
let s = 1

// Initialize the cost of click upgrade
let upgrade_clicks_amount = 10

// how much cost to add
let h = upgrade_clicks_amount

// Function to increment the score when the button is clicked
function incrementScore() {
    score += s
    // Update the score display
    document.getElementById("score").textContent = score + ' clicks'
}

function increaseClickerPower() {
    console.log("Clicker power increased!")
}

function incrementHandUpgrade() {
    
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
        document.getElementById("clicker-power").textContent = "Click Power: " + s

    }    
}

document.getElementById("hand").addEventListener("click", incrementHandUpgrade)