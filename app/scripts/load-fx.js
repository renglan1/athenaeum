const html = document.querySelector("html");
const root = document.querySelector(".root");
const fxState = localStorage.getItem("fxState");
console.log("fxState: " + fxState);

setFXClass(fxState);
setVideoBackground(fxState);

function setFXClass(fxState){
    if(fxState === "on"){
        html.classList.add("fx");
    }
    else{
        html.classList.remove("fx");
    }
}

function setVideoBackground(fxState) {
    if (fxState === "on") {
        const background = document.createElement("video");
        background.className = "background";

        background.setAttribute("preload", "none");
        background.muted = true;
        background.loop = true;
        background.autoplay = true;
        background.src = "../res/videos/backgrounds/nyx.mp4";

        console.log(background);

        root.appendChild(background);
    }
    else{
        if(background = document.querySelector("video.background")){
            background.remove();
        } 
    }
}