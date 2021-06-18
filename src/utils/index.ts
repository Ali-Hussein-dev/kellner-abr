export const calcTotal = (obj = { 0: 0 }): number => {
  const values = Object.values(obj);
  const total = values.reduce((acc: number, cur: number) => +cur + acc, 0);
  return isNaN(total) ? 0 : +total.toFixed(2);
};
