const backgroundMenuButton = document.querySelector("#background-button");
const bgMenuRevealAmountPx = "400";

let isBackgroundMenuHidden = true;

backgroundMenuButton.addEventListener("click", function(){
    if(isBackgroundMenuHidden){
        revealBackgroundMenu(bgMenuRevealAmountPx, "px");
    }
    else{
        hideBackgroundMenu(settingsMenuRevealAmountPx + bgMenuRevealAmountPx);
    }
})

function revealBackgroundMenu(amount, units){
    isBackgroundMenuHidden = false;
    
    translatePage(amount, units, bgMenuRevealAmountPx, "up");
}

function hideBackgroundMenu(){
    isBackgroundMenuHidden = true;
}