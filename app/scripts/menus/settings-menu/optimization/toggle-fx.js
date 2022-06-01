fxToggleButton = document.querySelector("i#toggle-fx-button");
fxToggleButton.addEventListener("click", function(){
    const fxState = localStorage.getItem("fxState");
    const bgName = localStorage.getItem("bgName");
    toggleFX(fxState, bgName);
});

const containers = [["div#", "root", ""], ["div#", "page", "-background-container"]];

function toggleFX(fxState, bgName) {
    const html = document.querySelector("html");
    const invertedState = invertFXState(fxState);

    html.classList.toggle("fx");
    localStorage.setItem("fxState", invertedState);

    for(const container of containers){
        setVideoBackground(invertedState, container[0], container[1], container[2], bgName);
    }
}

function invertFXState(fxState){
    if(fxState === "on"){
        return "off";
    }

    return "on";
}