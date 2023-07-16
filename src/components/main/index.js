import logo from "../../logo.svg";
import appData from "../../data/app-data.json";

const main = document.createElement("main");
const img = document.createElement("img");
const h3 = document.createElement("h3");

img.src = logo;
img.alt = "Dhamma Wheel";

h3.innerText = appData.name;

main.appendChild(img);
main.appendChild(h3);


export default main;
