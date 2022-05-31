function revealBackgroundSelect(amount, units){
    isBackgroundSelectHidden = false;
    
    translatePage(amount, units, (amount-settingsMenuParams.amount), "up");
}

function hideBackgroundSelect(distance, units){
    isBackgroundSelectHidden = true;

    translatePage(settingsMenuParams.amount, units, distance, "up");
}