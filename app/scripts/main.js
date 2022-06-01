const menuItemIDs = ["#settings-menu", "#settings-menu-toggle"];

// Automatic hiding of the menu when page clicked
window.addEventListener("click", function (event) {
    if (isClickOffMenu(gatherMenuItems(), event)) {
        hideSettingsMenu(calcRootOffset(), settingsMenuParams.units);
    }
});

function gatherMenuItems() {
    const menuItems = [];

    for (const menuItemID of menuItemIDs) {
        menuItems.push(document.querySelector(menuItemID));
    }

    return menuItems;
}

function isClickOffMenu(menuItems, event) {
    for (const menuItem of menuItems) {
        if (menuItem.contains(event.target)) {
            return false;
        }
    }

    return true;
}

function refresh(){
    refreshBackgrounds();
    refreshBgOptions();
    refreshBackgroundSelectPreviewEventListeners();
}