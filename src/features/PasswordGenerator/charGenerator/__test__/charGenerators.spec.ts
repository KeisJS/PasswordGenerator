import { describe, it, expect } from 'vitest'
import { numberGenerator } from '../NumberGenerator.ts'
import { lowCaseGenerator, upperCaseGenerator } from '../AbcGenerator.ts'
import { specialCharGenerator } from '../SpecialCharGenerator.ts'

describe('Test char generators', () => {
  describe.each([
    [ numberGenerator, /\d/],
    [ lowCaseGenerator, /[a-z]/],
    [ upperCaseGenerator, /[A-Z]/],
  ])('%o', (method, result) => {
    const testData = Array(3).fill('').map(() => method.genChar())

    it.each(testData)('Char: %s', char => {
      expect(char).toMatch(result)
    })
  })

  describe.each([specialCharGenerator])('%o', method => {
    const testData = Array(3).fill('').map(() => method.genChar())

    it.each(testData)('Char: %s', value => {
      expect(method.template.includes(value)).toBe(true)
    })
  })
})