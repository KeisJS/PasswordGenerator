import { upperCaseGenerator, lowCaseGenerator } from './charGenerator/AbcGenerator.ts'
import { specialCharGenerator } from './charGenerator/SpecialCharGenerator.ts'
import { numberGenerator } from './charGenerator/NumberGenerator.ts'
import { ICharGenerator } from './charGenerator/types.ts'

const charGenerators: ICharGenerator[] = [
  upperCaseGenerator,
  lowCaseGenerator,
  specialCharGenerator,
  numberGenerator
]

export { charGenerators }