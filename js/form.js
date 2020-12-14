'use strict';

(() => {
  const adForm = document.querySelector(`.ad-form`);
  const adFormAddress = adForm.querySelector(`#address`);

  const setAddress = (coords) => {
    adFormAddress.value = `${coords.lat.toFixed(6)}, ${coords.lng.toFixed(6)}`;
  };

  window.form = {
    setAddress
  };
})();
