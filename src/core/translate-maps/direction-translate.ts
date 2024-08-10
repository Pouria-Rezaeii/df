import {EstateDirectionEnum, UnitDirectionEnum} from "@open-api";

export const estateDirectionTranslation: Record<keyof typeof EstateDirectionEnum, string> = {
  Northern: "شمالی",
  Southern: "جنوبی",
  Western: "غربی",
  Eastern: "شرقی",
  DoubleCorners: "دو نبش",
  TripleCorners: "سه نبش",
};

export const unitDirectionTranslation: Record<keyof typeof UnitDirectionEnum, string> = {
  Northern: "شمالی",
  Southern: "جنوبی",
  Western: "غربی",
  Eastern: "شرقی",
  DoubleCorners: "دو نبش",
  Middle: "وسط",
};
