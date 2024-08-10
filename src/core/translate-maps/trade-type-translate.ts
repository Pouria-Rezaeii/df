import {TradeTypeEnum} from "@open-api";

export const tradeTypeTranslation: Record<keyof typeof TradeTypeEnum, string> = {
  BuySell: "خرید/فروش",
  RentCredit: "رهن/اجاره",
};
