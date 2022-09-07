export const formatCurrency = (n: number) => {
  return '$' + Number(n).toFixed(2).toLocaleString() + '';
};
