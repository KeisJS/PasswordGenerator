import type { SpecialCharGenerator } from './SpecialCharGenerator.ts'
import type { LowCaseGenerator, UpperCaseGenerator } from './AbcGenerator.ts'
import type { NumberGenerator } from './NumberGenerator.ts'

abstract class AbstractCharGenerator {
  abstract genChar(): string
  abstract get template(): string
  abstract accept(visitor: AbstractCharGeneratorVisitor): void
}

abstract class AbstractCharGeneratorVisitor {
  abstract visitSpecialCharGenerator(generator: SpecialCharGenerator): void
  abstract visitUpperCaseEngGenerator(generator: UpperCaseGenerator): void
  abstract visitLowCaseEngGenerator(generator: LowCaseGenerator): void
  abstract visitNumberGenerator(generator: NumberGenerator): void
}

export {
  AbstractCharGenerator,
  AbstractCharGeneratorVisitor,
}