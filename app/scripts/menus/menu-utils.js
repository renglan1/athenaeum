const menuParameters = {
    menuPreview: {
        height: 8,
        units: "px"
    },
    settingsMenu: {
        height: 12,
        units: "vh"
    },
    backgroundSelect: {
        height: 35,
        units: "vh"
    }
};


const header = document.querySelector("header");
const pageContainer = document.querySelector("#page-container");
const pageBgContainer = document.querySelector("#page-background-container");

function translatePage(amount, units, distance, direction){
    translateElementY(pageBgContainer, amount, units, distance, direction, 0, 0.5);
    translateElementY(root, amount, units, distance, direction, 0, 0.5);
    translateElementY(header, amount, units, distance, invertDirection(direction), 0.25, 0.5);
}

/*This method moves the element relative to its original position, so it can behave unintuitively sometimes*/
function translateElementY(element, amount, units, distance, direction, extraDelay, minDelay){
    element.style.transition = `transform ${calcTransitionDelay(distance, minDelay) + extraDelay}s`;
    if(direction === "up"){
        element.style.transform = `translateY(${-(amount)}${units})`;
    }
    else if(direction === "down"){
        element.style.transform = `translateY(${amount}${units})`;
    }
}

function calcTransitionDelay(distance, minDelay){
    const result = distance*0.05;

    if(result < minDelay){
        return minDelay;
    }

    return result;
}

// Finds the distance from the bottom of "root" to the bottom of the page in VH
function calcRootOffset(){
    const rootBottomPx = root.getBoundingClientRect().bottom;
    const clientHeightPx = document.documentElement.clientHeight
    const rootOffset =  ((clientHeightPx - rootBottomPx)/clientHeightPx)*100;

    if(rootOffset < menuParameters.menuPreview.height){
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