import {OwnerStatusEnum} from "@open-api";

export const ownerStatusTranslation: Record<keyof typeof OwnerStatusEnum, string> = {
  FileCompleted: "فایل تکمیل شده است",
  OwnerNotCooperate: "همکاری نمی‌کند",
  OwnerNotResponsible: "جواب نمی‌دهد",
};
