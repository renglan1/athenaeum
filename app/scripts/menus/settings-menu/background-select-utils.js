let isBackgroundSelectRevealed = false;
let isBackgroundSelectPreviewed = false;

function revealBackgroundSelect(amount, units){
    isBackgroundSelectRevealed = true;
    
    translatePage(amount, units, (amount-settingsMenuParams.amount), "up");
}

function previewBackgroundSelect(amount, units) {
    isBackgroundSelectPreviewed = true;

    translatePage(amount, units, amount, "up");
}

function hideBackgroundSelect(distance, units){
    isBackgroundSelectRevealed = false;
    isBackgroundSelectPreviewed = false;

    translatePage(settingsMenuParams.amount, units, distance, "up");
}