import {EstateTypeEnum} from "@open-api";

export const estateTypeTranslation: Record<keyof typeof EstateTypeEnum, string> = {
  Apartment: "آپارتمان",
  Land: "زمین",
  House: "ویلا",
  Commercial: "اداری-تجاری",
};
