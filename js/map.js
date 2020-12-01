'use strict';

(() => {
  const parentBlock = document.querySelector(`.map`);

  let map;

  const initiate = () => {
    map = L.map(parentBlock, {
      center: window.const.CENTER_MAP_COORDS,
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

  window.map = {
    initiate
  };
})();
