const header = document.querySelector("header");
const pageContainer = document.querySelector("#page-container");
const pageBgContainer = document.querySelector("#page-background-container");

let rootOffset = 0;

function translatePage(amount, units, direction){
    translateMenuBackground(amount, units, direction);
    translateRoot(amount, units, direction);
    translateHeader(amount, units, invertDirection(direction));
}

function translateMenuBackground(amount, units, direction){
    translateElementY(pageBgContainer, amount, units, direction, 0);
}

function translateRoot(amount, units, direction){
    translateElementY(root, amount, units, direction, 0);
}

function translateHeader(amount, units, direction){
    translateElementY(header, amount, units, direction, 0.25);
}

function translateElementY(element, amount, units, direction, delay){
    element.style.transition = `${calcTransitionDelay(amount) + delay}s`;
    if(direction === "up"){
        element.style.transform = `translateY(${-(amount)}${units})`;
    }
    else if(direction === "down"){
        element.style.transform = `translateY(${amount}${units})`;
    }
}

function calcTransitionDelay(distanceInPixels){
    const result = Math.abs(distanceInPixels)/200;

    if(result < 0.5){
        return 0.5;
    }

    return result;
}

function calcRootOffset(){
    const rootBottom = root.getBoundingClientRect().bottom;
    const rootOffset = document.documentElement.clientHeight - rootBottom;
    
    if(rootOffset < settingsMenuPreviewAmountPx){
        return 0;
    }

    return rootOffset;
}

function invertDirection(direction){
    if(direction === "up"){
        return "down";
    }

    return "up";
}