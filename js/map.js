import leaflet from "leaflet";

import "leaflet/dist/leaflet.css";

const parentBlock = document.querySelector(`.map`);

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
