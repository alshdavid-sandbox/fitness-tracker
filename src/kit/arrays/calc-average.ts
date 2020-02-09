export const calcAverage = <T,>(
  items: T[], 
  fn: (v: T) => number = (v: any) => v,
) => {
  let sum = 0
  for (const item of items) {
    sum += fn(item)
  }
  return sum / items.length
}