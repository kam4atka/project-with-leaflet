import {mainPinButton, initiate, removeOverlay, addPin, addPins} from "./map.js";
import {generatePoint} from "./mock.js";
import {KeyCode} from "./util.js";
import {CENTER_MAP_COORDS} from "./const.js";

const OBJECTS_COUNT = 5;

const mainPinButtonHandler = (evt) => {
  if (evt.type === `mousedown` || evt.keyCode === KeyCode.ENTER) {
    mainPinButton.remove();
    removeOverlay();

    const points = new Array(OBJECTS_COUNT)
      .fill(``)
      .map((_point, index) => generatePoint(index));

    initiate(CENTER_MAP_COORDS);
    addPin(CENTER_MAP_COORDS);
    addPins(points);
  }
};

const initiationPage = () => {
  mainPinButton.addEventListener(`mousedown`, mainPinButtonHandler);
  mainPinButton.addEventListener(`keydown`, mainPinButtonHandler);
};

window.addEventListener(`load`, initiationPage);
