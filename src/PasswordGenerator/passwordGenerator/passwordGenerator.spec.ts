import { describe, expect, it } from 'vitest'
import { lowCaseGenerator, upperCaseGenerator } from '../charGenerator/AbcGenerator.ts'
import { numberGenerator } from '../charGenerator/NumberGenerator.ts'
import { passwordGenerator } from './index.ts'

describe('Test password generator', () => {
  const testData: [number, string][] = Array(3)
    .fill('')
    .map((_v, i) => ([
      6 + i, passwordGenerator(6 + i, [lowCaseGenerator, upperCaseGenerator, numberGenerator])
    ]))
  it.each(testData)('Test password. Length: %s, Pass: %s', (length, password) => {
    expect(password).toMatch(new RegExp(`^[A-Za-z\\d]{${length}}$`))
  })
})