export const getBarId = (id) => `bar-${id}`;

export const generateRandomArray = (len) => Array.from({ length: len }, () => Math.floor(Math.random() * len));

export const isArray = (arr) => {
  return Array.isArray(arr) && arr?.length > 0 ? true : false;
};

export const isArrayReady = (arr) => {
  return isArray(arr) ? arr : [];
};

