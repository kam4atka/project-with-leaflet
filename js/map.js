'use strict';

(() => {
  const parentBlock = document.querySelector(`.map`);
  const mainPinButton = parentBlock.querySelector(`.map__pin--main`);

  const overlayClass = `map--faded`;

  let map;

  const initiate = (coords) => {
    map = L.map(parentBlock, {
      center: coords,
      zoom: 13,
      zoomControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      dragging: false
    });

    L.tileLayer(
        `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
        {attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`}
    ).addTo(map);
  };

  const removeOverlay = () => {
    parentBlock.classList.remove(overlayClass);
  };

  window.map = {
    mainPinButton,
    initiate,
    removeOverlay
  };
})();
