localStorage.setItem("bgName", "firelink");
localStorage.setItem("bgQuality", "4k");

window.addEventListener("load", appendBgOptions(bgNames, localStorage.getItem("fxState")));

function appendBgOptions(bgNames, fxState){
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

    const bgSelectOptionPreview = createBgSelectOptionPreview(fxState, bgName, bgQuality);

    bgSelectOption.appendChild(bgSelectOptionPreview);

    return bgSelectOption;
}

function createBgSelectOptionPreview(fxState, bgName, bgQuality){
    const bgSelectOptionPreview = document.createElement("div");
    bgSelectOptionPreview.className = "background-select-option-preview";
    const bgSelectOptionTitle = createBgSelectOptionTitle(bgName);
    bgSelectOptionPreview.appendChild(bgSelectOptionTitle);

    const bgSelectOptionImage = document.createElement("img");
    bgSelectOptionImage.src = `${bgImagesPath}/${bgName}.png`;
    bgSelectOptionPreview.appendChild(bgSelectOptionImage);

    if(fxState === "on"){
        const bgSelectOptionVideo = document.createElement("video");

        bgSelectOptionVideo.muted = true;
        bgSelectOptionVideo.loop = true;
        bgSelectOptionVideo.src = `${bgVideosPath}/${bgQuality}/${bgName}.mp4`;
        
        bgSelectOptionPreview.appendChild(bgSelectOptionVideo);

        bgSelectOptionPreview.addEventListener("mouseenter", function(){
            bgSelectOptionVideo.play().then(function(){
                setGrayscale(bgSelectOptionVideo, "off");
                bgSelectOptionTitle.style.width = "65%";
            });
        });

        bgSelectOptionPreview.addEventListener("mouseleave", function(){
            bgSelectOptionVideo.pause();
            setGrayscale(bgSelectOptionVideo, "on");
            bgSelectOptionTitle.style.width = "60%";
        });
    }

    return bgSelectOptionPreview;
}

function createBgSelectOptionTitle(bgName){
    const bgSelectOptionTitle = document.createElement("div");
    bgSelectOptionTitle.className = "background-select-option-title";

    for(const letter of bgName){
        if(letter != null){
            const span = document.createElement("span");
            span.textContent = letter;
            bgSelectOptionTitle.appendChild(span);
        }
    }

    return bgSelectOptionTitle;
}

function setGrayscale(element, state){
    if(state === "on"){
        element.style.filter = "grayscale(100%)";
        element.style.webkitFilter = "grayscale(100%)";
    }
    else{
        element.style.filter = "grayscale(0%)";
        element.style.webkitFilter = "grayscale(0%)";
    }
}