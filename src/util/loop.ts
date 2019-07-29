/**
 * forEach() at for-loop speeds (https://jsperf.com/array-iteration-yo)
 */
export const each = <T>(
  list: T[],
  iterator: (t: T, i: number, list: T[]) => void,
): void => {
  for (let i = 0, l = list.length; i < l; i++) {
    iterator(list[i], i, list)
  }
}

/**
 * Make a new array & fill with iterator results
 */
export const times = <T>(
  length: number,
  iterator: (i: number, list: T[]) => T,
): T[] => {
  const output: T[] = new Array(length)
  for (let i = 0; i < length; i++) {
    output[i] = iterator(i, output)
  }
  return output
}

/**
 * TODO: benchmark
 */
export const map = <T, U>(
  list: T[],
  iterator: (t: T, i: number, list: T[]) => U,
): U[] => {
  const output: U[] = new Array(list.length)
  for (let i = 0, l = list.length; i < l; i++) {
    output[i] = iterator(list[i], i, list)
  }
  return output
}

/**
 * TODO: benchmark
 */
export const reduce = <T, M>(
  list: T[],
  iterator: (memo: M, t: T, i: number, list: T[]) => M,
  memo: M,
): M => {
  for (let i = 0, l = list.length; i < l; i++) {
    memo = iterator(memo, list[i], i, list)
  }
  return memo
}
