export default function convertObjectToURLSearchParams(object: Record<string, any>) {
  const searchParams = new URLSearchParams();
  for (const key in object) {
    searchParams.set(key, String(object[key as keyof typeof object]));
  }
  return searchParams;
}
