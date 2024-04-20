// autosave paused to newgame can function
var autosavePaused = false;

function newgame() {
    autosavePaused = true;
    setTimeout(function() {
        localStorage.clear();
        location.reload();
    }, 250) // adjust delay as needed
    
}

function ask() {
    var didTheyPressOk = confirm("Are you sure? There is no turning back!")

    if (didTheyPressOk) {
        newgame();
    }
}

function save() {
    localStorage.clear()
    // save to localstorage
    localStorage.setItem('score', JSON.stringify(score))
    localStorage.setItem('s', JSON.stringify(s))
    localStorage.setItem('c', JSON.stringify(c))
    localStorage.setItem('h', JSON.stringify(h))
    localStorage.setItem('a', JSON.stringify(a))
    localStorage.setItem('u', JSON.stringify(u))
    localStorage.setItem('v', JSON.stringify(v))
    localStorage.setItem('upgrade_clicks_amount', JSON.stringify(upgrade_clicks_amount))
    localStorage.setItem('upgrade_autoclick_amount', JSON.stringify(upgrade_autoclick_amount))
    localStorage.setItem('reset_power_amount', JSON.stringify(reset_power_amount))
}

function load() {
    if (localStorage.getItem('score') != null) {

    score = JSON.parse(localStorage.getItem('score'))
    s = JSON.parse(localStorage.getItem('s',))
    c = JSON.parse(localStorage.getItem('c',))
    a = JSON.parse(localStorage.getItem('h',))
    h = JSON.parse(localStorage.getItem('a',))
    u = JSON.parse(localStorage.getItem('u',))
    v = JSON.parse(localStorage.getItem('v',))
    upgrade_clicks_amount = JSON.parse(localStorage.getItem('upgrade_clicks_amount',))
    upgrade_autoclick_amount = JSON.parse(localStorage.getItem('upgrade_autoclick_amount',))
    reset_power_amount = JSON.parse(localStorage.getItem('reset_power_amount',))

    // load all text values on html
    document.getElementById("upgrade-required-auto").textContent = "Cost: " + upgrade_autoclick_amount
    document.getElementById("upgrade-required").textContent = "Cost: " + upgrade_clicks_amount
    document.getElementById("upgrade-required-reset").textContent = "Cost: " + reset_power_amount
    document.getElementById("clicker-power").textContent = "Clicker Power: " + s
    document.getElementById("clicker-power-auto").textContent = "Autoclick Power: " + c
    document.getElementById("score").textContent = score + ' clicks'
}}

// autoload game on refresh
load()

// autosave game every 
if (!autosavePaused) {
    setInterval(save, 1000)
}

function backupsave () {
    var didTheyPressOk = confirm("This will download a copy of the game files to your harddrive. Do you want to continue?")
    
    if (didTheyPressOk) {
        let myblob = new Blob([JSON.stringify({
            score,
            s,
            c,
            h,
            a,
            u,
            v,
            upgrade_clicks_amount,
            upgrade_autoclick_amount,
            reset_power_amount
        }, null, 2)], { type: 'text/plain' });
        
        let bloburl = URL.createObjectURL(myblob)
    
        let link = document.createElement("a");
        link.href = bloburl;
        link.download = "Clicker-Game.txt"; // Specify the default file name
        link.click()
    
        URL.revokeObjectURL(bloburl)
    }
}

// This function had a lot of help from AI and stackoverflow
// I fully understand the localstorage feature as used in other parts of the game,
// but the file reader section I struggled with even in the earlier parts of CS50x course.
function loadbackupsave() {
    autosavePaused = true;
    
    document.getElementById('fileInput').addEventListener('change', (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContents = e.target.result;
        try {
          const parsedData = JSON.parse(fileContents);
  
          // Update localStorage values
          localStorage.setItem('score', parsedData.score);
          localStorage.setItem('s', parsedData.s);
          localStorage.setItem('c', parsedData.c);
          localStorage.setItem('h', parsedData.h);
          localStorage.setItem('a', parsedData.a);
          localStorage.setItem('u', parsedData.u);
          localStorage.setItem('v', parsedData.v);
          localStorage.setItem('upgrade_clicks_amount', parsedData.upgrade_clicks_amount);
          localStorage.setItem('upgrade_autoclick_amount', parsedData.upgrade_autoclick_amount);
          localStorage.setItem('reset_power_amount', parsedData.reset_power_amount);
            
          console.log('Data from file loaded into localStorage.');
          location.reload();
        } catch (error) {
          console.error('Error parsing JSON data:', error);
        }
      };
      reader.readAsText(file);
    });
}

const beforeunloadListener = window.addEventListener('beforeunload', () => {
    // Clear all of the browser's session data.
    sessionStorage.clear();
  });