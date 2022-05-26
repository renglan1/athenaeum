const html = document.querySelector("html");
const root = document.querySelector(".root");
const fxState = localStorage.getItem("fxState");
console.log("fxState: " + fxState);

// !!TEMP!!
localStorage.setItem("bgName", "neptune");
bgName = localStorage.getItem("bgName");

setFXClass(fxState);
setImageBackground(bgName);
setVideoBackground(fxState, bgName);

function setFXClass(fxState){
    if(fxState === "on"){
        html.classList.add("fx");
        localStorage.setItem("fxState", "on");
    }
    else{
        html.classList.remove("fx");
        localStorage.setItem("fxState", "off");
    }
}

function setVideoBackground(fxState, bgName) {
    if (fxState === "on") {
        const background = document.createElement("video");
        background.className = "background";

        background.setAttribute("preload", "none");
        background.muted = true;
        background.loop = true;
        background.autoplay = true;
        background.src = `../res/videos/backgrounds/${bgName}.mp4`;

        console.log(background);

        root.appendChild(background);
    }
    else{
        if(background = document.querySelector("video.background")){
            background.remove();
        } 
    }
}

function setImageBackground(bgName){
    const background = document.createElement("img");
    background.className = "background";
    background.src = `../res/images/backgrounds/${bgName}.png`;
    root.appendChild(background);

    const menuBackground = document.querySelector("#menu-background");
    menuBackground.src = `../res/images/backgrounds/${bgName}.png`;
}