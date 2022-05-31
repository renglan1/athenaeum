const html = document.querySelector("html");
const fxState = localStorage.getItem("fxState");
console.log("fxState: " + fxState);

const rootBackgroundImage = document.querySelector("img#root-background-image");
const pageBackgroundImage = document.querySelector("img#page-background-image");

// !!TEMP!!
localStorage.setItem("bgName", "neptune");
localStorage.setItem("bgQuality", "hd");
bgName = localStorage.getItem("bgName");

setFXClass(fxState);
setImageBackground(rootBackgroundImage);
setImageBackground(pageBackgroundImage);
setVideoBackground(fxState, "#", "root", "");
setVideoBackground(fxState, "div#", "page", "-background-container");