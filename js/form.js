const adForm = document.querySelector(`.ad-form`);
const adFormAddress = adForm.querySelector(`#address`);

export const setFormAddress = (coords) => {
  adFormAddress.value = `${coords.lat.toFixed(6)}, ${coords.lng.toFixed(6)}`;
};
