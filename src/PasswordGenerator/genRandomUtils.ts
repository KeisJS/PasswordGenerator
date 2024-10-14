export const genRandom = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min) + min)
}
