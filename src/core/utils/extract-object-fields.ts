export default function extractObjectKeys<T = Record<string, any>>(
  object: Record<string, any>,
  reference: Record<string, any> | string[],
) {
  const referenceKeys = Array.isArray(reference) ? reference : Object.keys(reference);
  const finalObject: Record<string, any> = {};

  referenceKeys.forEach((key) => {
    if (object[key] !== undefined) {
      finalObject[key] = object[key];
    }
  });

  return finalObject as T;
}
