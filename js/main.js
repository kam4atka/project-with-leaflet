'use strict';

(() => {
  const OBJECTS_COUNT = 5;

  const mainPinButtonHandler = (evt) => {
    if (evt.type === `mousedown` || evt.keyCode === window.util.KeyCode.ENTER) {
      window.map.mainPinButton.remove();
      window.map.removeOverlay();

      const points = new Array(OBJECTS_COUNT)
        .fill(``)
        .map((_point, index) => window.mock.generatePoint(index));

      window.map.initiate(window.const.CENTER_MAP_COORDS);
      window.map.addPin(window.const.CENTER_MAP_COORDS);
    }
  };

  const initiationPage = () => {
    window.map.mainPinButton.addEventListener(`mousedown`, mainPinButtonHandler);
    window.map.mainPinButton.addEventListener(`keydown`, mainPinButtonHandler);
  };

  window.addEventListener(`load`, initiationPage);
})();
