import {locationApi} from "@api/locations";
import {queryKeyEnum} from "@configs/react-query-config";
import {District} from "@open-api";
import {useQuery} from "@tanstack/react-query";

type DistrictOption = {label: string; value: number};

export default function useDistricts(cityId?: number): {
  isLoadingDistricts: boolean;
  districts: District[] | undefined;
  districtOptions: DistrictOption[] | undefined;
} {
  const {data, isLoading: isLoading} = useQuery({
    queryKey: [queryKeyEnum.Districts, {city: cityId}],
    queryFn: locationApi.queries.getDistricts,
    staleTime: Infinity,
    enabled: !!cityId,
  });

  if (isLoading) {
    return {
      isLoadingDistricts: isLoading,
      districts: undefined,
      districtOptions: undefined,
    };
  } else {
    return {
      isLoadingDistricts: isLoading,
      districts: data,
      districtOptions: (data || []).map((t) => ({label: t.name, value: t.id})),
    };
  }
}
