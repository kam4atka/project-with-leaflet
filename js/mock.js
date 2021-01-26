import {getRandomCount, getRandomNumber} from "./util.js";

const TYPES = [`palace`, `flat`, `house`, `bungalo`];
const TIMES = [`12:00`, `13:00`, `14:00`];
const FEATURES = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];

const templateLinkUrl = `http://o0.github.io/assets/images/tokyo/hotel`;
const templateLinkType = `.jpg`;

const Price = {
  MIN: 1000,
  MAX: 5000
};

const RoomConut = {
  MIN: 1,
  MAX: 5
};

const GuestCount = {
  MIN: 1,
  MAX: 7
};

const Coords = {
  MIN_LAT: 35.65,
  MIN_LNG: 139.7,
  MAX_LAT: 35.7,
  MAX_LNG: 139.8
};

const generateFeatures = (features) => {
  return new Array(getRandomCount(1, features.length))
    .fill(``)
    .map((_pointFeature, index) => features[index]);
};

const generatePhoto = () => {
  return new Array(getRandomCount(1, 3))
    .fill(``)
    .map((_pointPhoto, index) => `${templateLinkUrl}${index + 1}${templateLinkType}`);
};

export const generatePoint = (index) => {
  const point = {
    author: {
      avatar: `img/avatars/user0${index + 1}.png`
    },
    location: {
      lat: getRandomNumber(Coords.MIN_LAT, Coords.MAX_LAT).toFixed(6),
      lng: getRandomNumber(Coords.MIN_LNG, Coords.MAX_LNG).toFixed(6)
    },
    offer: {
      title: `Заголовок 0${index + 1}`,
      price: getRandomCount(Price.MIN, Price.MAX),
      type: TYPES[getRandomCount(0, TYPES.length - 1)],
      rooms: getRandomCount(RoomConut.MIN, RoomConut.MAX),
      guests: getRandomCount(GuestCount.MIN, GuestCount.MAX),
      checkin: TIMES[getRandomCount(0, TIMES.length - 1)],
      checkout: TIMES[getRandomCount(0, TIMES.length - 1)],
      features: generateFeatures(FEATURES),
      description: `Описание для 0${index + 1}`,
      photos: generatePhoto(),
    }
  };

  point.offer.address = `${point.location.lat}, ${point.location.lng}`;

  return point;
};
