import {QueryInput} from "./type";
import {axios} from "@configs/axios";
import {LocationApi, LocationApiLocationDistrictListRequest} from "@open-api";

const locationApiInstance = new LocationApi(undefined, undefined, axios);

export const locationApi = {
  queries: {
    getProvinces: async () => {
      const {data} = await locationApiInstance.locationProvinceList();
      return data;
    },
    getCities: async () => {
      const {data} = await locationApiInstance.locationCityList();
      return data;
    },
    getDistricts: async ({queryKey}: QueryInput<LocationApiLocationDistrictListRequest>) => {
      const {data} = await locationApiInstance.locationDistrictList(queryKey[1]);
      return data;
    },
  },
};
