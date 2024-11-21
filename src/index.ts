function partitionRecord<T extends Record<PropertyKey, any>>(
  record: T,
  predicate: (key: keyof T, value: T[keyof T]) => boolean,
): [T, T] {
  return Object.entries(record).reduce<[T, T]>(
    (acc, [key, value]) => {
      const index = predicate(key, value) ? 1 : 0
      acc[index][key as keyof T] = value
      return acc
    },
    [{} as T, {} as T],
  )
}

export { partitionRecord }
export default partitionRecord
