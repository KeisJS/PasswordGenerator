import { describe, expect, it } from 'vitest'
import { genRandom } from './genRandomUtils.ts'
describe('Test getRandom()', () => {
  const testData = [
    [0, 4],
    [36, 50],
    [100, 102]
  ]

  it.each(testData)('%s - %s', (min, max) => {
    const result = genRandom(min, max)

    expect(result).toBeGreaterThanOrEqual(min)
    expect(result).toBeLessThanOrEqual(max)
  })
})