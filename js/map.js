import leaflet from "leaflet";

import "leaflet/dist/leaflet.css";

const parentBlock = document.querySelector(`.map`);
export const mainPinButton = parentBlock.querySelector(`.map__pin--main`);

const overlayClass = `map--faded`;

let map;

export const initiate = (coords) => {
  map = leaflet.map(parentBlock, {
    center: coords,
    zoom: 13,
    zoomControl: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    dragging: false
  });

  leaflet.tileLayer(
      `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
      {attribution: `&copy; <a href="<https://www.openstreetmap.org/copyright>">OpenStreetMap</a> contributors`}
  ).addTo(map);
};

export const removeOverlay = () => {
  parentBlock.classList.remove(overlayClass);
};

export const addPin = (coords) => {
  const mainIcon = leaflet.icon({
    iconUrl: `./img/marker/pin-active.svg`,
    iconSize: [40.5, 58.5]
  });

  const marker = leaflet.marker({
    lat: coords.lat,
    lng: coords.lng
  }, {
    icon: mainIcon
  });

  marker.addTo(map);
};
