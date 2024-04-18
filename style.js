function opacitychangeonscore() {
    if (score >= upgrade_clicks_amount) {
        var element = document.getElementById("hand")
        element.style.transition = 'opacity 1s';
        element.style.opacity = 1;
    }
    else {
        var element = document.getElementById("hand")
        element.style.transition = 'opacity .1s';
        element.style.opacity = .1;
    }    

    // change opacity of auto
    if (score >= upgrade_autoclick_amount) {
        var element = document.getElementById("auto")
        element.style.transition = 'opacity 1s';
        element.style.opacity = 1;
    }
    else {
        var element = document.getElementById("auto")
        element.style.transition = 'opacity .1s';
        element.style.opacity = .1;
    }    
}

function opacitychangeonpurchase() {
    // change opacity when upgrade is purchased
    if (score <= upgrade_clicks_amount) {
        var element = document.getElementById("hand")
        element.style.transition = 'opacity .1s';
        element.style.opacity = .1;
    }

    // change opacity when upgrade is purchased
    if (score <= upgrade_autoclick_amount) {
        var elements = document.getElementById("auto")
        elements.style.transition = 'opacity .1s';
        elements.style.opacity = .1;    
    }
}