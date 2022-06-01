const html = document.querySelector("html");
const fxState = localStorage.getItem("fxState");
console.log("fxState: " + fxState);

const rootBackgroundImage = document.querySelector("img#root-background-image");
const pageBackgroundImage = document.querySelector("img#page-background-image");

// !!TEMP!!
localStorage.setItem("bgName", "firelink");
localStorage.setItem("bgQuality", "4k");
bgName = localStorage.getItem("bgName");

setFXClass(fxState);
setImageBackground(rootBackgroundImage);
setImageBackground(pageBackgroundImage);
setVideoBackground(fxState, "div#", "root", "");
setVideoBackground(fxState, "div#", "page", "-background-container");