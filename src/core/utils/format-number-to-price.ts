const units = {
  0: " تومان",
  3: " هزار تومان",
  6: " میلیون تومان",
  9: " میلیارد تومان",
  12: " هزار میلیارد تومان",
};
export function formatPrice(price: number): string {
  let formattedPrice = "";

  if (Math.abs(price) >= 1e12) {
    formattedPrice = parseFloat((price / 1e12).toFixed(3)) + units[12]; // Divide by 1000 billion
  } else if (Math.abs(price) >= 1e9) {
    formattedPrice = parseFloat((price / 1e9).toFixed(3)) + units[9]; // Divide by 1 billion
  } else if (Math.abs(price) >= 1e6) {
    formattedPrice = parseFloat((price / 1e6).toFixed(3)) + units[6]; // Divide by 1 million
  } else if (Math.abs(price) >= 1e3) {
    formattedPrice = parseFloat((price / 1e3).toFixed(3)) + units[3]; // Divide by 1 thousand
  } else {
    formattedPrice = price.toString() + units[0];
  }

  return formattedPrice;
}

export const formatNumberWithFraction = (data: number, fraction?: number) =>
  Number(Number(data).toFixed(fraction || 0)).toLocaleString();
