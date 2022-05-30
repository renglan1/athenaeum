const backgroundMenuButton = document.querySelector("#background-button");
const bgMenuRevealAmountPx = "400";

let isBackgroundMenuHidden = true;

backgroundMenuButton.addEventListener("click", function(){
    if(isBackgroundMenuHidden){
        revealBackgroundMenu(bgMenuRevealAmountPx, "px");
    }
    else{
        hideBackgroundMenu();
    }
})

function revealBackgroundMenu(amount, units){
    isBackgroundMenuHidden = false;
    
    translateMenuBackground(amount, units, "up");
    translateRoot(amount, units, "up");
    translateHeader(amount, units, "down");
}

function hideBackgroundMenu(){
    isBackgroundMenuHidden = true;
}