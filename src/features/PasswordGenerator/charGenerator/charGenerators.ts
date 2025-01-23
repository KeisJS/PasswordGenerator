import { upperCaseGenerator, lowCaseGenerator } from './AbcGenerator.ts'
import { specialCharGenerator } from './SpecialCharGenerator.ts'
import { numberGenerator } from './NumberGenerator.ts'
import type { AbstractCharGenerator } from './types.ts'

const charGenerators: AbstractCharGenerator[] = [
  upperCaseGenerator,
  lowCaseGenerator,
  specialCharGenerator,
  numberGenerator
]

export { charGenerators }