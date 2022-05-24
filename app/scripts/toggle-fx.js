toggleButton = document.querySelector("button#toggle-fx");
backgroundVideo = document.querySelector("video.background");
toggleButton.addEventListener("click", function() {
    const html = document.querySelector("html");
    
    if(localStorage.getItem("fxOff")){
        html.classList.add("fx");
        localStorage.removeItem("fxOff");

        backgroundVideo.play();
    }
    else{
        html.classList.remove("fx");
        localStorage.setItem("fxOff", 1);

        backgroundVideo.pause();
    }
});

console.log(toggleButton);