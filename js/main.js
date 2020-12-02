import {initiate} from "./map.js";
import {CENTER_MAP_COORDS} from "./const.js";

const initiationPage = () => {
  initiate(CENTER_MAP_COORDS);
};

window.addEventListener(`load`, initiationPage);
