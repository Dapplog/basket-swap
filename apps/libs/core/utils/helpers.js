export const less = (obj, key) => {
  return {
    ...obj,
    [key]: undefined,
  };
};
