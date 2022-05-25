const menuIDs = ["#settings-menu", "#settings-menu-toggle"];

// Automatic hiding of the menu when page clicked
window.addEventListener("click", function (event) {
    if (isClickOffMenu(gatherMenuItems(), event)) {
        hideSettingsMenu();
    }
});

function gatherMenuItems() {
    const menuItems = [];

    for (const menuID of menuIDs) {
        menuItems.push(document.querySelector(menuID));
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