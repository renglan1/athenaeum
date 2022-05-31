const backgroundSelectButton = document.querySelector("#background-select-button");
const bgMenuRevealAmountPx = "400";

let isBackgroundSelectHidden = true;

backgroundSelectButton.addEventListener("click", function(){
    if(isBackgroundSelectHidden){
        revealBackgroundSelect(bgMenuRevealAmountPx, "px");
    }
    else{
        hideBackgroundSelect(settingsMenuRevealAmountPx + bgMenuRevealAmountPx);
    }
})

function revealBackgroundSelect(amount, units){
    isBackgroundSelectHidden = false;
    
    translatePage(amount, units, bgMenuRevealAmountPx, "up");
}

function hideBackgroundSelect(){
    isBackgroundSelectHidden = true;
}