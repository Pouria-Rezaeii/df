import isPlainObject from "./is-plain-object";

export default function flatOneLevelNestedObject(obj: Record<string, any>) {
  if (!isPlainObject(obj)) {
    throw new Error("Value should be an instance of Object constructor.");
  }

  return Object.keys(obj).reduce<Record<string, any>>((newObject, key) => {
    if (isPlainObject(obj[key])) {
      newObject = {...newObject, ...obj[key]};
    } else {
      newObject[key] = obj[key];
    }
    return newObject;
  }, {});
}
