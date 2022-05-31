const header = document.querySelector("header");
const pageContainer = document.querySelector("#page-container");
const pageBgContainer = document.querySelector("#page-background-container");

let rootOffset = 0;

function translatePage(amount, units, distance, direction){
    translateElementY(pageBgContainer, amount, units, distance, direction, 0, 0.5);
    translateElementY(root, amount, units, distance, direction, 0, 0.5);
    translateElementY(header, amount, units, distance, invertDirection(direction), 0.25, 0.5);
}

function translateElementY(element, amount, units, distance, direction, extraDelay, minDelay){
    element.style.transition = `transform ${calcTransitionDelay(distance, minDelay) + extraDelay}s`;
    if(direction === "up"){
        element.style.transform = `translateY(${-(amount)}${units})`;
    }
    else if(direction === "down"){
        element.style.transform = `translateY(${amount}${units})`;
    }
}

function calcTransitionDelay(distanceInPixels, minDelay){
    const result = Math.abs(distanceInPixels)/200;

    if(result < minDelay){
        return minDelay;
    }

    return result;
}

// Finds the distance from the bottom of "root" to the bottom of the page in VH
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