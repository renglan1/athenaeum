const backgroundSelectButton = document.querySelector("#background-select-button");
const backgroundSelectParams = {
    amount: menuParameters.backgroundSelect.height,
    units: menuParameters.backgroundSelect.units
}

backgroundSelectButton.addEventListener("click", function(){
    if(!isBackgroundSelectRevealed){
        revealBackgroundSelect(backgroundSelectParams.amount, backgroundSelectParams.units);
    }
    else{
        hideBackgroundSelect(backgroundSelectParams.amount, backgroundSelectParams.units);
    }
});

backgroundSelectButton.addEventListener("mouseenter", function () {
    if (!isBackgroundSelectRevealed) {
        previewBackgroundSelect((menuParameters.menuPreview.height + settingsMenuParams.amount), menuParameters.menuPreview.units);
        console.log(menuParameters.menuPreview.height + settingsMenuParams.amount);
    }
});

backgroundSelectButton.addEventListener("mouseleave", function () {
    if (!isBackgroundSelectRevealed) {
        hideBackgroundSelect(calcRootOffset(), settingsMenuParams.units);
    }
});