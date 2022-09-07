export function toDateOnly(date: Date) {
  return date.toISOString().split("T")[0];
}
