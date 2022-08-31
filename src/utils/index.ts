export const calcTotal = (obj: Record<string, number>): number => {
  const values = Object.values(obj || { 0: 0 });
  const total = values.reduce((acc: number, cur: number) => +cur + acc, 0);
  return isNaN(total) ? 0 : +total.toFixed(2);
};
