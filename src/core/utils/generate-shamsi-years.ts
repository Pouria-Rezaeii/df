/** generates shamsi years from current year to the past */
export default function generateShamsiYears(count?: number) {
  if (count && count <= 0) {
    count = Number(import.meta.env.VITE_SHAMSI_YEARS_OPTIONS_COUNT || 40);
  }
  const currentYear = Number(new Date().toLocaleDateString("fa-IR-u-nu-latn").slice(0, 4));
  return Array.from(Array(count || 40)).map((_, index) => currentYear - index);
}
