export const updateMapKeyArrayPair = <T, U>(key: T, content: U[], map: Map<T, U[]>): Map<T, U[]> => {
  if (!map.has(key)) map.set(key, [])
  map.get(key)?.push(...content)
  return map
}
