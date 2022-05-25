const settingsMenuToggle = document.querySelector("#settings-menu-toggle");
const header = document.querySelector("header");

const settingsMenuRevealed = "100px";
const settingsMenuPreviewed = "0.5vh";
const settingsMenuHidden = "0px";

settingsMenuToggle.addEventListener("click", function(){
    if(isSettingsMenuRevealed()){
        hideSettingsMenu();
    }
    else{
        revealSettingsMenu();
    }
});

settingsMenuToggle.addEventListener("mouseenter", function(){
    settingsMenuToggle.style.transform = "translateX(-50%) translateY(-0.5vh) scale(1.1)";
    
    if(!isSettingsMenuRevealed()){
        previewSettingsMenu();
    }
});

settingsMenuToggle.addEventListener("mouseleave", function() {
    settingsMenuToggle.style.transform = "translateX(-50%) translateY(-0.5vh) scale(1)";

    if(!isSettingsMenuRevealed()){
        hideSettingsMenu();
    }
});

function revealSettingsMenu(){
    root.style.bottom = settingsMenuRevealed;
    header.style.transform = "translateY(100px)";
    settingsMenuToggle.classList = "fa-solid fa-xmark";
}

function previewSettingsMenu(){
    root.style.bottom = settingsMenuPreviewed;
}

function hideSettingsMenu(){
    root.style.bottom = settingsMenuHidden;
    header.style.transform = "none";
    settingsMenuToggle.classList = "fa-solid fa-ellipsis";
}

function isSettingsMenuRevealed(){
    const rootBottom = root.style.bottom;
    return rootBottom === settingsMenuRevealed;
}

function isSettingsMenuPreviewed(){
    const rootBottom = root.style.bottom;
    return rootBottom === settingsMenuPreviewed;
}