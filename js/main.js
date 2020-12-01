'use strict';

(() => {
  const mainPinButtonHandler = (evt) => {
    if (evt.type === `mousedown` || evt.keyCode === window.util.KeyCode.ENTER) {
      window.map.mainPinButton.remove();
      window.map.removeOverlay();

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
