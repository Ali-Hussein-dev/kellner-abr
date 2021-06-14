export const calcTotal = (obj = { 0: 0 }): number => {
  const values = Object.values(obj);
  return values.reduce((acc: number, cur: number) => +cur + acc, 0);
};
