localStorage.setItem("bgName", "firelink");
localStorage.setItem("bgQuality", "4k");

//window.addEventListener("load", appendBackgroundOptions(bgNames, localStorage.getItem("fxState")));

function appendBackgroundOptions(bgNames, fxState){
    const bgSelectOptions = document.querySelector("div#background-select-options");
    const curBg = localStorage.getItem("bgName");

    for(const bgName of bgNames){
        if(curBg != bgName){
            const bgSelectOption = createBgSelectOption(fxState, bgName, localStorage.getItem("bgQuality"));
            bgSelectOptions.appendChild(bgSelectOption);
        }
    }
}

function createBgSelectOption(fxState, bgName, bgQuality){
    const bgSelectOption = document.createElement("div");
    bgSelectOption.className = "background-select-option";
    bgSelectOption.id = bgName;

    const bgSelectOptionImage = document.createElement("img");
    bgSelectOptionImage.src = `${bgImagesPath}/${bgName}.png`;
    bgSelectOption.appendChild(bgSelectOptionImage);

    if(fxState === "on"){
        const bgSelectOptionVideo = document.createElement("video");
        bgSelectOptionVideo.src = `${bgVideosPath}/${bgQuality}/${bgName}.mp4`;
        bgSelectOption.appendChild(bgSelectOptionVideo);
    }

    return bgSelectOption;
}