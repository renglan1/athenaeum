toggleButton = document.querySelector("button#toggle-fx");
toggleButton.addEventListener("click", function(){
    const fxState = localStorage.getItem("fxState");
    toggleFX(fxState);
});

function toggleFX(curFXState) {
    console.log("toggleFX curFXState: " + curFXState);

    if(curFXState === "off"){
        localStorage.setItem("fxState", "on");
        setFXClass("on");
        setVideoBackground("on");
    }
    else{
        localStorage.setItem("fxState", "off");
        setFXClass("off");
        setVideoBackground("off");
    }
}