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