export function randomResult<T>(array: T[]): T {
  const { length } = array;

  const randomIndex = Math.floor(Math.random() * length);

  return array[randomIndex];
}
