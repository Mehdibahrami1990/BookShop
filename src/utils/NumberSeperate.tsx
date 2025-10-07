export function formatNumber(num: number, separator: string = ","): string {
  const regex = /\B(?=(\d{3})+(?!\d))/g;
  return num?.toString().replace(regex, separator);
}