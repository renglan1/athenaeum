const settingsMenu = document.querySelector("#settings-menu");
const settingsMenuOptions = document.querySelector("#settings-menu-options");
const settingsMenuToggle = document.querySelector("#settings-menu-toggle");

const revealAmountPx = "100";
const previewAmountVH = "0.5";

let isSettingsMenuRevealed = false;
let isSettingsMenuPreviewed = false;

settingsMenuToggle.addEventListener("click", function(){
    if(isSettingsMenuRevealed){
        hideSettingsMenu();
    }
    else{
        revealSettingsMenu(revealAmountPx, "px");
    }
});

settingsMenuToggle.addEventListener("mouseenter", function(){
    settingsMenuToggle.style.transform = "scale(1.6)";
    
    if(!isSettingsMenuRevealed){
        previewSettingsMenu(previewAmountVH, "vh");
    }
});

settingsMenuToggle.addEventListener("mouseleave", function() {
    settingsMenuToggle.style.transform = "scale(1.5)";

    if(!isSettingsMenuRevealed){
        hideSettingsMenu("px");
    }
});

function revealSettingsMenu(amount, units){    
    isSettingsMenuRevealed = true;
    settingsMenuOptions.style.opacity = "1";

    root.style.bottom = `${amount}${units}`;
    header.style.transform = `translateY(${amount}${units})`;
    settingsMenuToggle.classList = "fa-solid fa-xmark";
}

function previewSettingsMenu(amount, units){
    isSettingsMenuPreviewed = true;

    root.style.bottom = `${amount}${units}`;
}

function hideSettingsMenu(){
    isSettingsMenuRevealed = false;
    isSettingsMenuPreviewed = false;
    settingsMenuOptions.style.opacity = "0";

    root.style.bottom = "0px";
    header.style.transform = "none";
    settingsMenuToggle.classList = "fa-solid fa-ellipsis";
}