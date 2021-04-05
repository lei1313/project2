var computerChoice
var wintimes = 0
var losttimes = 0
var tiedtimes = 0
const h2 = document.querySelectorAll("h2")
h2[0].textContent = "win: " + wintimes
h2[1].textContent = "lost: " + losttimes
h2[2].textContent = "tied: " + tiedtimes

const buttons = document.querySelectorAll("button");

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        if(i == 0){
            userchoice = 0
        }else if(i == 1){
            userchoice = 1
        }else{
            userchoice = 2
        }
        computerChoice = Math.floor(Math.random() * 3);
        if(userchoice == computerChoice){
            tiedtimes = tiedtimes + 1
        }else if(userchoice == 0 && computerChoice == 1){
            losttimes = losttimes + 1
        }else if(userchoice == 1 && computerChoice == 2){
            losttimes = losttimes + 1
        }else if(userchoice == 2 && computerChoice == 0){
            losttimes = losttimes + 1
        }else{
            wintimes = wintimes + 1
        }
        h2[0].textContent = "win: " + wintimes
        h2[1].textContent = "lost: " + losttimes
        h2[2].textContent = "tied: " + tiedtimes
}
    )

}