export default function getEnumKeyByValue(enumObject: object, enumValue: string) {
  const key = Object.keys(enumObject)[Object.values(enumObject).indexOf(enumValue)];
  return key as keyof typeof enumObject;
}
