'use strict';

(() => {
  const ObjectType = {
    PALACE: `Дворец`,
    FLAT: `Квартира`,
    HOUSE: `Дом`,
    BUNGALO: `Бунгало`
  };

  const createPhotosTemplate = function (photos) {
    const photosListTemplate = photos.map((photo) => {
      return `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`;
    }).join(``);

    return `<div class="popup__photos">${photosListTemplate}</div>`;
  };

  const createFeaturesTemplate = function (features) {
    const featuresListTemplate = features.map((feature) => {
      return `<li class="popup__feature popup__feature--${feature}"></li>`;
    }).join(``);

    return `<ul class="popup__features">${featuresListTemplate}</ul>`;
  };

  const getTemplate = (point) => {
    return `<article class="map__card popup">
      <h3 class="popup__title">${point.offer.title}</h3>
      <p class="popup__text popup__text--address">${point.offer.address}</p>
      <p class="popup__text popup__text--price">${point.offer.price}<span>/ночь</span></p>
      <h4 class="popup__type">${ObjectType[point.offer.type.toUpperCase()]}</h4>
      <p class="popup__text popup__text--capacity">${point.offer.rooms} комнаты для ${point.offer.guests} гостей</p>
      <p class="popup__text popup__text--time">Заезд после ${point.offer.checkin}, выезд до ${point.offer.checkout}</p>
      ${createFeaturesTemplate(point.offer.features)}
      <p class="popup__description">${point.offer.description}</p>
      ${createPhotosTemplate(point.offer.photos)}
    </article>`;
  };

  window.popup = {
    getTemplate
  };
})();
