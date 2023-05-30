export default function generateRandomNumberBetween(
  min: number,
  max: number,
  exclude: number | number[]
): number {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (typeof exclude === "number" && randomNumber === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  }

  if (Array.isArray(exclude) && exclude.includes(randomNumber)) {
    return generateRandomNumberBetween(min, max, exclude);
  }

  return randomNumber;
}
