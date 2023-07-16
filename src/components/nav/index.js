import explorer from "../../icons/menu-bar.svg";

const nav = document.createElement("nav");
const topNav = document.createElement("div");
const img = document.createElement("img");

topNav.setAttribute("class", "top-nav");

img.src = explorer;
img.alt = "Explorer";
img.setAttribute("class", "explore-btn");

topNav.appendChild(img);
nav.appendChild(topNav);

export default nav;
