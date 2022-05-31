function revealSettingsMenu(amount, units) {
    isSettingsMenuRevealed = true;
    settingsMenuOptions.style.opacity = "1";
    settingsMenuToggle.classList = "fa-solid fa-xmark";

    translatePage(amount, units, amount, "up");
}

function previewSettingsMenu(amount, units) {
    isSettingsMenuPreviewed = true;

    translatePage(amount, units, amount, "up");
}

function hideSettingsMenu(distance, units) {
    isSettingsMenuRevealed = false;
    isSettingsMenuPreviewed = false;
    settingsMenuOptions.style.opacity = "0";
    settingsMenuToggle.classList = "fa-solid fa-ellipsis";

    translatePage(0, units, distance, "down");
}