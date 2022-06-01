
window.addEventListener("load", function(){
    setFXClass(localStorage.getItem("fxState"));
    setBackgrounds(localStorage.getItem("fxState"));
});

function setFXClass(fxState){
    const html = document.querySelector("html");
    
    if(fxState === "on"){
        html.classList.add("fx");
        localStorage.setItem("fxState", "on");
    }
    else{
        html.classList.remove("fx");
        localStorage.setItem("fxState", "off");
    }
}

function setBackgrounds(fxState){
    const rootBackgroundImage = document.querySelector("img#root-background-image");
    const pageBackgroundImage = document.querySelector("img#page-background-image");

    setImageBackground(rootBackgroundImage);
    setImageBackground(pageBackgroundImage);
    setVideoBackground(fxState, "div#", "root", "");
    setVideoBackground(fxState, "div#", "page", "-background-container");
}

function setVideoBackground(fxState, parentPrefix, parentName, parentSuffix) {
    const parent = document.querySelector(`${parentPrefix}${parentName}${parentSuffix}`);
    const bgName = localStorage.getItem("bgName");
    const bgQuality = localStorage.getItem("bgQuality");

    if (fxState === "on") {
        const background = document.createElement("video");
        background.className = "background";
        background.id = `${parentName}-background-video`;

        background.setAttribute("preload", "none");
        background.muted = true;
        background.loop = true;
        background.autoplay = true;
        background.src = `${bgVideosPath}/${bgQuality}/${bgName}.mp4`;

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

function setImageBackground(element){
    const bgName = localStorage.getItem("bgName");
    
    if(element != null){
        element.src = `${bgImagesPath}/${bgName}.png`;
    }
}