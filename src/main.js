import header from "./components/header";
import nav from "./components/nav";
import aside from "./components/aside";
import main from "./components/main";
import footer from "./components/footer";
import eventHandler from "./utils/eventHandler.js";

import "./styles/styles.scss";


document.body.appendChild(header);
document.body.appendChild(nav);
document.body.appendChild(aside);
document.body.appendChild(main);
document.body.appendChild(footer);

eventHandler();
