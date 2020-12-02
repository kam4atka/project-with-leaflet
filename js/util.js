export const KeyCode = {
  ESC: 27,
  ENTER: 13
};

export const getRandomCount = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

export const getRandomNumber = (min, max) => {
  const lower = Math.min(min, max);
  const upper = Math.max(min, max);
  return lower + Math.random() * (upper - lower);
};
