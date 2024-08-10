export function generateSelectOptionsFromEnum<T extends Record<string, string>>(
  enumType: T,
  translateObject: {[key in keyof T]: string},
) {
  return Object.keys(enumType).map((key) => ({value: enumType[key], label: translateObject[key]}));
}
