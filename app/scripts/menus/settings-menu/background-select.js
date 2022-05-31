const backgroundSelectButton = document.querySelector("#background-select-button");

let isBackgroundSelectHidden = true;

const backgroundSelectParams = {
    amount: menuParameters.backgroundSelect.height,
    units: menuParameters.backgroundSelect.units
}

backgroundSelectButton.addEventListener("click", function(){
    if(isBackgroundSelectHidden){
        revealBackgroundSelect(backgroundSelectParams.amount, backgroundSelectParams.units);
    }
    else{
        hideBackgroundSelect(backgroundSelectParams.amount, backgroundSelectParams.units);
    }
});