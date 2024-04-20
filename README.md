# Clicker-Game
#### Video Demo:  <URL HERE>
#### Video Game: https://boarum.github.io/Clicker-Game/

#### My Journey:
I decided to create a basic clicker style game also known as an idle/incremental game. I wanted to leverage some of the tools I learned in the CS50x course. 
I focused primarily on HTML, CSS, Javascript for the game. I also had to learn how Github desktop works to have version control and be able to upload to my github.
I used GUMP a free open source program to edit the images used for my game. I also generated them using chat gpt-4. I built all my code into VS Code.
It took a few hours to find the extensions to make everything work like it did in the web version given by CS50. I tried to originally build a python game using flask,
but I had issues trying to get flask to stay operational. I ended up using live-server to simulate a local environment to make my webpage.

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
