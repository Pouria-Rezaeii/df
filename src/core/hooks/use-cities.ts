import {locationApi} from "@api/locations";
import {queryKeyEnum} from "@configs/react-query-config";
import {City} from "@open-api";
import {useQuery} from "@tanstack/react-query";

type CityOption = {label: string; value: number};

export default function useCities(): {
  isLoadingCities: boolean;
  cities: City[] | undefined;
  cityOptions: CityOption[] | undefined;
} {
  const {data, isLoading: isLoading} = useQuery({
    queryKey: [queryKeyEnum.Cities],
    queryFn: locationApi.queries.getCities,
    staleTime: Infinity,
  });

  if (isLoading) {
    return {
      isLoadingCities: isLoading,
      cities: undefined,
      cityOptions: undefined,
    };
  } else {
    return {
      isLoadingCities: isLoading,
      cities: data,
      cityOptions: (data || []).map((t) => ({label: t.name, value: t.id})),
    };
  }
}
