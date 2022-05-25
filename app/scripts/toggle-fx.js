fxToggleButton = document.querySelector("i#toggle-fx-button");
fxToggleButton.addEventListener("click", function(){
    const fxState = localStorage.getItem("fxState");
    const bgName = localStorage.getItem("bgName");
    toggleFX(fxState, bgName);
});

function toggleFX(fxState, bgName) {
    const html = document.querySelector("html");
    const oppositeState = invertFXState(fxState);

    html.classList.toggle("fx");
    localStorage.setItem("fxState", oppositeState)
    setVideoBackground(oppositeState, bgName);
}

function invertFXState(fxState){
    if(fxState === "on"){
        return "off";
    }

    return "on";
}