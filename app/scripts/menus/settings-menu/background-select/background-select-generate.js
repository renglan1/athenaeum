localStorage.setItem("bgQuality", "4k");

function refreshBgOptions(){
    const bgSelectOptions = document.getElementById("background-select-options");
    bgSelectOptions.textContent = "";
    appendBgOptions(bgNames, localStorage.getItem("fxState"));
}

function appendBgOptions(bgNames, fxState){
    const bgSelectOptions = document.getElementById("background-select-options");

    for(const bgName of bgNames){
        const bgSelectOption = createBgSelectOption(fxState, bgName, localStorage.getItem("bgQuality"));
        bgSelectOptions.appendChild(bgSelectOption);
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
    const bgSelectOptionPreviewTitle = createBgSelectOptionTitle(bgName);
    bgSelectOptionPreview.appendChild(bgSelectOptionPreviewTitle);

    const bgSelectOptionPreviewImage = document.createElement("img");
    bgSelectOptionPreviewImage.src = `${bgImagesPath}/${bgName}.png`;
    bgSelectOptionPreview.appendChild(bgSelectOptionPreviewImage);

    if(fxState === "on"){
        const bgSelectOptionPreviewVideo = document.createElement("video");

        bgSelectOptionPreviewVideo.muted = true;
        bgSelectOptionPreviewVideo.loop = true;
        bgSelectOptionPreviewVideo.src = `${bgVideosPath}/${bgQuality}/${bgName}.mp4`;
        
        bgSelectOptionPreview.appendChild(bgSelectOptionPreviewVideo);
    }

    bgSelectOptionPreview.addEventListener("click", function(){
        localStorage.setItem("bgName", bgName);
        refresh();        
    });

    return bgSelectOptionPreview;
}

function createBgSelectOptionTitle(bgName){
    const bgSelectOptionPreviewTitle = document.createElement("div");
    bgSelectOptionPreviewTitle.className = "background-select-option-title";

    for(const letter of bgName){
        if(letter != null){
            const span = document.createElement("span");
            span.textContent = letter;
            bgSelectOptionPreviewTitle.appendChild(span);
        }
    }

    return bgSelectOptionPreviewTitle;
}

function setGrayscale(element, state, blur){
    if(state === "on"){
        element.style.filter = `grayscale(100%) blur(${blur}px)`;
        element.style.webkitFilter = `grayscale(100%) blur(${blur}px)`;
    }
    else{
        element.style.filter = `grayscale(0%) blur(${blur}px)`;
        element.style.webkitFilter = `grayscale(0%) blur(${blur}px)`;
    }
}

function refreshBackgroundSelectPreviewEventListeners(){
    const bgSelectOptions = document.getElementById("background-select-options").children;
    
    for(const bgSelectOption of bgSelectOptions){
        const bgSelectOptionPreview = bgSelectOption.querySelector(".background-select-option-preview");
    
        const bgSelectOptionPreviewImage = bgSelectOptionPreview.querySelector("img");
        const bgSelectOptionPreviewVideo = bgSelectOptionPreview.querySelector("video");
        const bgSelectOptionPreviewTitle = bgSelectOptionPreview.querySelector(".background-select-option-title");

        bgSelectOptionPreview.addEventListener("mouseenter", async function(){
            if(bgSelectOptionPreviewVideo != null){
                try{
                    await bgSelectOptionPreviewVideo.play();
                    setGrayscale(bgSelectOptionPreviewVideo, "off", 0);
                }
                catch(e){
                    console.log(e);
                }
            }

            setGrayscale(bgSelectOptionPreviewImage, "off", 0);
            bgSelectOptionPreviewTitle.style.width = "65%";
        });
    
        bgSelectOptionPreview.addEventListener("mouseleave", function(){
            if(bgSelectOptionPreviewVideo != null){
                bgSelectOptionPreviewVideo.pause();
                setGrayscale(bgSelectOptionPreviewVideo, "on", 0);
            }

            setGrayscale(bgSelectOptionPreviewImage, "on", 0);
            bgSelectOptionPreviewTitle.style.width = "60%";
        });
    }
}