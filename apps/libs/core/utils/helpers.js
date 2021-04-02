export const less = (obj, key) => {
  return {
    ...obj,
    [key]: undefined,
  };
};

export const getPosition = (box) => ({
  top: box?.top + window.pageYOffset,
  right: box?.right + window.pageXOffset,
  bottom: box?.bottom + window.pageYOffset,
  left: box?.left + window.pageXOffset,
});

export function getOffset(el) {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return {
    top: _y,
    left: _x,
  };
}
