export const persianNumbersToEnglish = (s: string) => {
  return s.replace(/[۰-۹]/g, (a) => (a.charCodeAt(0) & 15) as unknown as string);
};
