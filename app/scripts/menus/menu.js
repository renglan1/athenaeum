const header = document.querySelector("header");
const page = document.querySelector("#page");

function translateMenuBackground(amount, units){
    const pageBgContainer = document.querySelector("#page-background-container");
    console.log(pageBgContainer);
    pageBgContainer.style.transform = `translateY(${amount}${units})`;
}