fxToggleButton = document.querySelector("i#toggle-fx-button");
fxToggleButton.addEventListener("click", function(){
    const fxState = localStorage.getItem("fxState");
    toggleFX(fxState);
});

function toggleFX(fxState) {
    const html = document.querySelector("html");
    const invertedState = invertFXState(fxState);

    html.classList.toggle("fx");
    localStorage.setItem("fxState", invertedState);

    refresh();
}

function invertFXState(fxState){
    if(fxState === "on"){
        return "off";
    }

    return "on";
}