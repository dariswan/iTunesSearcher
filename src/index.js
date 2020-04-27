import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import "regenerator-runtime";
import "./styles/style.css";
import main from "./script/view/main.js";
import "./script/component/app-header.js";
import "./script/component/app-footer.js";
import addBasket from "./script/data/basket.js";

document.addEventListener("DOMContentLoaded", main);
document.addEventListener("DOMContentLoaded",addBasket);

