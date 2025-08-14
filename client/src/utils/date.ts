export function getWeekOfMonth(date: Date): number {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const firstDay = new Date(year, month, 1);
  const firstDayOfWeek = firstDay.getDay();

  const week = Math.ceil((day + firstDayOfWeek) / 7);

  return week;
}
