export default function getObjectKeys<T = string>(obj: object) {
  return Object.keys(obj) as T[];
}
