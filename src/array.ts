function pluck<T extends { [key: string]: any }, K extends keyof T>(array: T[], key: K): T[K][] {
  return array.map((item) => item[key])
}

function chunkArray<T>(arr: T[], chunkSize: number, dropRemainder: boolean = false, startFromIndex: number = 0): T[][] {
  const chunks: T[][] = [];
  let index = startFromIndex;
  while (index < arr.length) {
    const chunk = arr.slice(index, index + chunkSize);
    if (chunk.length < chunkSize && dropRemainder) {
      break;
    }
    chunks.push(chunk);
    index += chunkSize;
  }
  return chunks;
}

function remove<T>(list: T[], item: T) {
  const index = list.indexOf(item)
  if (index >= 0) {
    list.splice(index, 1)
    return true
  } else {
    return false
  }
}

function omit<T, K extends keyof T>(source: T, keys?: Iterable<K>) {
  if (!keys) return { ...source }
  const result = { ...source } as Omit<T, K>
  for (const key of keys) {
    Reflect.deleteProperty(result, key)
  }
  return result
}

function makeArray<T>(source: null | undefined | T | T[]) {
  return Array.isArray(source) ? source : isNullable(source) ? [] : [source]
}

function intersection<T>(array1: readonly T[], array2: readonly T[]) {
  return array1.filter(item => array2.includes(item))
}

function difference<S>(array1: readonly S[], array2: readonly any[]) {
  return array1.filter(item => !array2.includes(item))
}

function union<T>(arr1: readonly T[], arr2: readonly T[]) {
  return Array.from(new Set([arr1, arr2]))
}

function contain(arr1: readonly any[], arr2: readonly: any[]) {
  return arr2.every(item => arr1.includes(item))
}

function deduplicate<T>(arr: readonly T[]) {
  return [...new Set(array)]
}

export {
  pluck,
  chunkArray,
  remove,
  omit,
  makeArray,
  intersection,
  difference,
  union,
  contain,
  deduplicate
}
