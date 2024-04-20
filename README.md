# Clicker-Game
#### Video Demo:  <URL HERE>
#### Video Game: https://boarum.github.io/Clicker-Game/

#### My Journey:
I decided to create a basic clicker style game also known as an idle/incremental game. I wanted to leverage some of the tools I learned in the CS50x course. 
I focused primarily on HTML, CSS, Javascript for the game. I also had to learn how Github desktop works to have version control and be able to upload to my github.
I used GIMP a free open source program to edit the images used for my game. I also generated them using chat gpt-4. I built all my code into VS Code.
It took a few hours to find the extensions to make everything work like it did in the web version given by CS50. I tried to originally build a python game using flask,
but I had issues trying to get flask to stay operational. I ended up using live-server to simulate a local environment to make my webpage. I finally leveraged my
skills from when I streamed on twitch to create my youtube video using OBS and Blender to record and edit my video.

#### File Structure:
In my project there is 3 main folders. In the main folder there is the index.html that hosts the main webpages form. Style.css handles all the styling to make the
webpage look the way it does. In the Images folder I have the images used for the clicker-game. Primarily the gear icon to my options as well as the icons used for
the upgrade functionality. The third folder is my javascript folder aptly named js. this hosts 3 files called main.js, save.js, style.js. The main.js has the primary
logic for the game. This is where the score is calculated, the costs of the upgrades (and how the score is spent), and the event listeners for those functions. The save.js
file contains all the code that is for autosaving the game is localstorage, starting a new game which clears all the game data values, backuping up the save data to your
local pc, and the ability to load that data back into the game from the text file generated.

#### Description:
Clicker-game is a basic cookie clicker clone. The concept of the game is to click a button on the webpage and everytime you do, you increase your click score by 1.
As your score goes up, upgrades become available to make your clicks more valuable. The first upgrade, which costs 10 clicks at first, increases your clicks by +1.
The 2nd upgrade implemented, allows the game to automatically click for you by 1 per second. As you increase the upgrade the autoclicks increase by +1. Lastly, there
is a "reset" function. This is a common practice in clicker games that you reset all your upgrades and progress for a major upgrade. In this case, when you pay for the
reset, all your upgrades in your next run increase the values of clicks and autoclicks by double. The game constantly saves your progress using local storage every 1 second.
I designed an options menu into the webpage. When you click the gear icon a new section of the webpage opens up with 3 buttons to choose from. A new game button which clears
all local storage, but prompts the user first if they are sure they want to continue. A button to backup your save file to your computer in the form of a text file. And thirdly,
a button to load the text file back into the webpage to continue progress on your game. This allows you to not only have a backup save of your progress, but an ability to
continue your progress on another device.
