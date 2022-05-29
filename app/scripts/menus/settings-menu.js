const settingsMenuToggle = document.querySelector("#settings-menu-toggle");

const settingsMenuRevealed = "100px";
const settingsMenuPreviewed = "0.5vh";
const settingsMenuHidden = "0px";

let isSettingsMenuRevealed = false;
let isSettingsMenuPreviewed = false;

settingsMenuToggle.addEventListener("click", function(){
    if(isSettingsMenuRevealed){
        hideSettingsMenu();
    }
    else{
        revealSettingsMenu();
    }
});

settingsMenuToggle.addEventListener("mouseenter", function(){
    settingsMenuToggle.style.transform = "translateX(-50%) translateY(-0.5vh) scale(1.1)";
    
    if(!isSettingsMenuRevealed){
        previewSettingsMenu();
    }
});

settingsMenuToggle.addEventListener("mouseleave", function() {
    settingsMenuToggle.style.transform = "translateX(-50%) translateY(-0.5vh) scale(1)";

    if(!isSettingsMenuRevealed){
        hideSettingsMenu();
    }
});

function revealSettingsMenu(){    
    isSettingsMenuRevealed = true;
    
    root.style.bottom = settingsMenuRevealed;
    page.style.height = settingsMenuRevealed;
    header.style.transform = `translateY(${settingsMenuRevealed})`;
    settingsMenuToggle.classList = "fa-solid fa-xmark";
}

function previewSettingsMenu(){
    isSettingsMenuPreviewed = true;
    
    root.style.bottom = settingsMenuPreviewed;
    page.style.height = settingsMenuPreviewed;
}

function hideSettingsMenu(){
    isSettingsMenuRevealed = false;
    isSettingsMenuPreviewed = false;

    root.style.bottom = settingsMenuHidden;
    header.style.transform = "none";
    settingsMenuToggle.classList = "fa-solid fa-ellipsis";
}