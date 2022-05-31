const settingsMenu = document.querySelector("#settings-menu");
const settingsMenuOptions = document.querySelector("#settings-menu-options");
const settingsMenuToggle = document.querySelector("#settings-menu-toggle");

const settingsMenuRevealAmountPx = "100";
const settingsMenuPreviewAmountPx = "8";

let isSettingsMenuRevealed = false;
let isSettingsMenuPreviewed = false;

settingsMenuToggle.addEventListener("click", function(){
    if(isSettingsMenuRevealed){
        hideSettingsMenu(calcRootOffset());
    }
    else{
        revealSettingsMenu(settingsMenuRevealAmountPx, "px");
    }
});

settingsMenuToggle.addEventListener("mouseenter", function(){
    settingsMenuToggle.style.transform = "scale(1.6)";
    
    if(!isSettingsMenuRevealed){
        previewSettingsMenu(settingsMenuPreviewAmountPx, "px");
    }
});

settingsMenuToggle.addEventListener("mouseleave", function() {
    settingsMenuToggle.style.transform = "scale(1.5)";

    if(!isSettingsMenuRevealed){
        hideSettingsMenu(calcRootOffset());
    }
});

function revealSettingsMenu(amount, units){    
    isSettingsMenuRevealed = true;
    settingsMenuOptions.style.opacity = "1";
    settingsMenuToggle.classList = "fa-solid fa-xmark";

    translatePage(amount, units, settingsMenuRevealAmountPx, "up");
}

function previewSettingsMenu(amount, units){
    isSettingsMenuPreviewed = true;
    
    translatePage(amount, units, settingsMenuPreviewAmountPx, "up");
}

function hideSettingsMenu(distance){
    isSettingsMenuRevealed = false;
    isSettingsMenuPreviewed = false;
    settingsMenuOptions.style.opacity = "0";
    settingsMenuToggle.classList = "fa-solid fa-ellipsis";
    
    translatePage(0, "px", distance, "down");
}