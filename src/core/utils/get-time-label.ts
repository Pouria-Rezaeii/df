export default function getTimeLabel(date: string) {
  const todayTime = new Date().getTime();
  const givenTime = new Date(date).getTime();

  const diffInDays = Math.round((todayTime - givenTime) / (24 * 3600 * 1000));
  return diffInDays === 0
    ? "امروز"
    : diffInDays <= 7
      ? `${diffInDays} روز پیش`
      : new Date(date).toLocaleDateString("fa-IR");
}
