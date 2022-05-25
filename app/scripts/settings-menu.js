const settingsMenuToggle = document.querySelector(".settings-menu-toggle");

settingsMenuToggle.addEventListener("click", function(){
    const root = document.querySelector(".root");
    const rootBottom = root.style.bottom;

    if(rootBottom != "100px"){
        root.style.bottom = "100px";
        settingsMenuToggle.classList = "settings-menu-toggle fa-solid fa-xmark";
    }
    else{
        root.style.bottom = "0px";
        settingsMenuToggle.classList = "settings-menu-toggle fa-solid fa-ellipsis";
    }
});

settingsMenuToggle.addEventListener("mouseenter", function(){
    const root = document.querySelector(".root");
    const rootBottom = root.style.bottom;

    settingsMenuToggle.style.transform = "translateX(-50%) translateY(-0.5vh) scale(1.1)";
    
    if(rootBottom != "100px"){
        root.style.bottom = "0.5vh";
    }
});

settingsMenuToggle.addEventListener("mouseleave", function() {
    const root = document.querySelector(".root");
    const rootBottom = root.style.bottom;
    console.log("rootBottom: " + rootBottom);
    
    settingsMenuToggle.style.transform = "translateX(-50%) translateY(-0.5vh) scale(1)";

    if(rootBottom === "0.5vh"){
        root.style.bottom = "0px";
    }
});

