
window.addEventListener("load", function(){
    setFXClass(localStorage.getItem("fxState"));
    refresh();
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

function refreshBackgrounds(){
    const fxState = localStorage.getItem("fxState");
    
    const rootBackgroundImage = document.querySelector("img#root-background-image");
    const pageBackgroundImage = document.querySelector("img#page-background-image");

    const rootBackgroundVideo = document.querySelector("video#root-background-video");
    const pageBackgroundVideo = document.querySelector("video#page-background-video");

    setImageSrc(rootBackgroundImage);
    setImageSrc(pageBackgroundImage);
    setVideoSrc(fxState, pageBackgroundVideo);
    setVideoSrc(fxState, rootBackgroundVideo);
}

function setVideoSrc(fxState, video) {
    const bgName = localStorage.getItem("bgName");
    const bgQuality = localStorage.getItem("bgQuality");

    if (fxState === "on") {
        video.src = `${bgVideosPath}/${bgQuality}/${bgName}.mp4`;
        video.play();
    }
    else{
        video.pause();
        video.removeAttribute('src');
        video.load();
    }
}

function setImageSrc(image){
    const bgName = localStorage.getItem("bgName");

    if(image != null){
        image.src = `${bgImagesPath}/${bgName}.png`;
    }
}