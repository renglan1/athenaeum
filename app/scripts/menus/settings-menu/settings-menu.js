const settingsMenu = document.querySelector("#settings-menu");
const settingsMenuOptions = document.querySelector("#settings-menu-options");
const settingsMenuToggle = document.querySelector("#settings-menu-toggle");

const settingsMenuRevealAmountPx = "100";

let isSettingsMenuRevealed = false;
let isSettingsMenuPreviewed = false;

settingsMenuToggle.addEventListener("click", function () {
    if (isSettingsMenuRevealed) {
        hideSettingsMenu(calcRootOffset());
    }
    else {
        revealSettingsMenu(settingsMenuRevealAmountPx, "px");
    }
});

settingsMenuToggle.addEventListener("mouseenter", function () {
    settingsMenuToggle.style.transform = "scale(1.6)";

    if (!isSettingsMenuRevealed) {
        previewSettingsMenu(menuPreviewAmountPx, "px");
    }
});

settingsMenuToggle.addEventListener("mouseleave", function () {
    settingsMenuToggle.style.transform = "scale(1.5)";

    if (!isSettingsMenuRevealed) {
        hideSettingsMenu(calcRootOffset());
    }
});