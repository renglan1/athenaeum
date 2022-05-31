const settingsMenu = document.querySelector("#settings-menu");
const settingsMenuOptions = document.querySelector("#settings-menu-options");
const settingsMenuToggle = document.querySelector("#settings-menu-toggle");

let isSettingsMenuRevealed = false;
let isSettingsMenuPreviewed = false;

const settingsMenuParams = {
    amount: menuParameters.settingsMenu.height,
    units: menuParameters.settingsMenu.units
}

settingsMenuToggle.addEventListener("click", function () {
    if (isSettingsMenuRevealed) {
        hideSettingsMenu(calcRootOffset(), settingsMenuParams.units);
    }
    else {
        revealSettingsMenu(settingsMenuParams.amount, settingsMenuParams.units);
    }
});

settingsMenuToggle.addEventListener("mouseenter", function () {
    settingsMenuToggle.style.transform = "scale(1.6)";

    if (!isSettingsMenuRevealed) {
        previewSettingsMenu(menuParameters.menuPreview.height, menuParameters.menuPreview.units);
    }
});

settingsMenuToggle.addEventListener("mouseleave", function () {
    settingsMenuToggle.style.transform = "scale(1.5)";

    if (!isSettingsMenuRevealed) {
        hideSettingsMenu(calcRootOffset(), settingsMenuParams.units);
    }
});