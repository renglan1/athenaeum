const html = document.querySelector("html");
const fxState = localStorage.getItem("fxState");
console.log("fxState: " + fxState);

const rootBackgroundImage = document.querySelector("img#root-background-image");
const pageBackgroundImage = document.querySelector("img#page-background-image");

// !!TEMP!!
localStorage.setItem("bgName", "abyss");
bgName = localStorage.getItem("bgName");

setFXClass(fxState);
setImageBackground(rootBackgroundImage, bgName);
setImageBackground(pageBackgroundImage, bgName);
setVideoBackground(fxState, "#", "root", "", bgName);
setVideoBackground(fxState, "div#", "page", "-background-container", bgName);

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

function setVideoBackground(fxState, parentPrefix, parentName, parentSuffix, bgName) {
    const parent = document.querySelector(`${parentPrefix}${parentName}${parentSuffix}`);
    
    if (fxState === "on") {
        const background = document.createElement("video");
        background.className = "background";
        background.id = `${parentName}-background-video`;

        background.setAttribute("preload", "none");
        background.muted = true;
        background.loop = true;
        background.autoplay = true;
        background.src = `../res/videos/backgrounds/${bgName}.mp4`;

        if(parent != null){
            parent.insertBefore(background, parent.childNodes[0]);
        }
    }
    else{
        if(background = document.querySelector("video.background")){
            background.remove();
        } 
    }
}

function setImageBackground(element, bgName){
    if(element != null){
        element.src = `../res/images/backgrounds/${bgName}.png`;
    }
}