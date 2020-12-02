import {mainPinButton, initiate, removeOverlay, addPin} from "./map.js";
import {KeyCode} from "./util.js";
import {CENTER_MAP_COORDS} from "./const.js";

const mainPinButtonHandler = (evt) => {
  if (evt.type === `mousedown` || evt.keyCode === KeyCode.ENTER) {
    mainPinButton.remove();
    removeOverlay();

    initiate(CENTER_MAP_COORDS);
    addPin(CENTER_MAP_COORDS);
  }
};

const initiationPage = () => {
  mainPinButton.addEventListener(`mousedown`, mainPinButtonHandler);
  mainPinButton.addEventListener(`keydown`, mainPinButtonHandler);
};

window.addEventListener(`load`, initiationPage);
