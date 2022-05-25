toggleButton = document.querySelector("button#toggle-fx");
toggleButton.addEventListener("click", function(){
    const fxState = localStorage.getItem("fxState");
    const bgName = localStorage.getItem("bgName");
    toggleFX(fxState, bgName);
});

function toggleFX(curFXState) {
    console.log("toggleFX curFXState: " + curFXState);

    if(curFXState === "off"){
        setFXClass("on");
        setVideoBackground("on", bgName);
    }
    else{
        setFXClass("off");
        setVideoBackground("off", bgName);
    }
}