backgroundVideo = document.querySelector("video.background");

if(localStorage.getItem("fxOff")){
    backgroundVideo.pause();
}
else{
    backgroundVideo.play();
}