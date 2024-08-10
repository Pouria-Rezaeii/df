import convertSearchParamsToObject from "@utils/convert-search-params-to-object";
import {useSearchParams} from "react-router-dom";

export default function useSearchParamsObject<T = Record<string, string>>(): T {
  const [searchParams] = useSearchParams();
  return convertSearchParamsToObject<T>(searchParams);
}
