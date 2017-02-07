/* @flow */

export function applyProperties(node: HTMLElement, properties: LayerProperties) {
  node.style.transform = `translate3d(${properties.x}px,${properties.y}px,0)`;
  node.style.width = `${properties.width}px`;
  node.style.height = `${properties.height}px`;
  if (properties.backgroundColor) {
    node.style.backgroundColor = properties.backgroundColor;
  }
}

export function arePropertiesSame(a: LayerProperties, b: LayerProperties) {
  return (
    a.x === b.x &&
    a.y === b.y &&
    a.width === b.width &&
    a.height === b.height &&
    a.backgroundColor === b.backgroundColor
  );
}

function interp(from, to, t) {
  return from + (to - from) * t;
}
export function interpolateProperties(from: LayerProperties, to: LayerProperties, t: number): LayerProperties {
  return ['x', 'y', 'width', 'height'].reduce((hash, prop) => {
    hash[prop] = interp(from[prop], to[prop], t);
    return hash;
  }, {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    backgroundColor: to.backgroundColor,
  });
}