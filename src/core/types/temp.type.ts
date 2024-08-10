import {Image} from "@open-api";

export type AuthForm = {
  phone: string;
};

export type FileInfoCreate = {
  title: string;
  owner: string;
  ownerPhones: string[];
  assignmentType: AssignmentTypeEnum;
  landType: LandTypeEnum;

  city: number;
  neighborhood: number;
  address: string;

  landMeterage?: number;
  buildingMeterage?: number;
  floor?: number;
  roomPerFloor?: number;
  totalPrice?: number;
  pricePerMeter?: number;
  mortgage?: number;
  rent?: number;

  constructionYear?: number;
  landDirection: DirectionEnum;
  roomDirection?: DirectionEnum;
  hasDocument: boolean;
  isFinished: boolean;
  hasLicense: boolean;

  // hasParking?: boolean;
  hasElevator?: boolean;
  hasWarehouse?: boolean;
  toiletCount?: number;
  roomCount?: number;
  parkingCount?: number;

  tags: number[];
  description: string;

  images: number[];
  mainImage?: number;
};

type FileInfo = Omit<FileInfoCreate, "images"> & {
  images: Image[];
};

export type FileInfoList = {
  count: number;
  result: FileInfo[];
};

export type FileInfoFilters = Partial<FileInfo> & {
  test?: string;
};

export enum AssignmentTypeEnum {
  Sell = "Sell",
  Mortgage = "Mortgage",
}

export enum LandTypeEnum {
  Apartment = "Apartment",
  Land = "Land",
  Vila = "Vila",
  Commercial = "Commercial",
}

export enum DirectionEnum {
  North = "North",
  South = "South",
  West = "West",
  East = "East",
  TwoSide = "TowSide",
  ThreeSide = "ThreeSide",
}
