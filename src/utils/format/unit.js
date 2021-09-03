import { isDef } from '..';
export function addUnit(value) {
  if (!isDef(value)) {
    return undefined;
  }
  value = String(value);
  return isNumeric(value) ? `${value}px` : value;
}
export function isNumeric(val) {
  return /^\d+(\.\d+)?$/.test(val);
}
