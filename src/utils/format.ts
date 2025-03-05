export const formatNumber = (num: number): string => {
  if (num >= 1000 && num < 1000000) {
    return Math.round(num / 1000) + ' K';
  } else if (num >= 1000000 && num < 1000000000) {
    return Math.round(num / 1000000) + ' M';
  } else if (num >= 1000000000) {
    return Math.round(num / 1000000000) + ' B';
  }
  return num.toString();
};
