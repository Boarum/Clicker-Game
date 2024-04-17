// Initialize the score
let score = 0

// How much score to add
let s = 1

// Initialize the cost of click upgrade
let upgrade_clicks_amount = 10

// how much cost to add
let h = 10 * 1.1

// Function to increment the score when the button is clicked
function incrementScore() {
    score += s
    // Update the score display
    document.getElementById("score").textContent = score + ' clicks'
}

function increaseClickerPower() {
    console.log("Clicker power increased!");
}

function incrementHandUpgrade() {
    upgrade_clicks_amount += h
    // Update the required clicks
    document.getElementById("hand").addEventListener("click", increaseClickerPower);

}