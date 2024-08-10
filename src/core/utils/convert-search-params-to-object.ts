export default function convertSearchParamsToObject<T = Record<string, string>>(
  searchParams: URLSearchParams,
): T {
  const searchParamsEntries = Array.from(searchParams.entries());
  // example:
  // searchParamsEntries: [['key', 'value'],  ['another', '1'],  ['another', '2']]
  // output: { key:'value', another:'1,2' }

  const searchParamsObject = searchParamsEntries.reduce<Record<string, string>>((acc, keyValue) => {
    const [key, value] = keyValue;

    if (Object.hasOwn(acc, key)) {
      acc[key] = acc[key].concat(`,${value}`);
    } else {
      acc[key] = value;
    }

    return acc;
  }, {});

  return searchParamsObject as T;
}
