'use strict';

(() => {
  const KeyCode = {
    ESC: 27,
    ENTER: 13
  };

  const getRandomCount = (min, max) => {
    return Math.ceil(Math.random() * (max - min) + min);
  };

  const getRandomNumber = (min, max) => {
    const lower = Math.min(min, max);
    const upper = Math.max(min, max);
    return lower + Math.random() * (upper - lower);
  };

  window.util = {
    KeyCode,
    getRandomCount,
    getRandomNumber
  };
})();
