const backgroundMenuButton = document.querySelector("#background-button");
const backgroundMenuRevealed = "400px";
const backgroundMenuHidden = "0px";

let isBackgroundMenuHidden = true;

backgroundMenuButton.addEventListener("click", function(){
    if(isBackgroundMenuHidden){
        revealBackgroundMenu();
    }
    else{
        hideBackgroundMenu();
    }
})

function revealBackgroundMenu(){
    isBackgroundMenuHidden = false;
    
    root.style.bottom = backgroundMenuRevealed;
    page.style.height = backgroundMenuHidden;
    header.style.transform = `translateY(${backgroundMenuRevealed})`;
}

function hideBackgroundMenu(){
    isBackgroundMenuHidden = true;
}