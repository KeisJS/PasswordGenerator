import SequenceCharGenerator from './SequenceCharGenerator.ts'
import { AbstractCharGeneratorVisitor } from './types.ts'

class UpperCaseGenerator extends SequenceCharGenerator {
  min = 'A'.charCodeAt(0)
  max = 'Z'.charCodeAt(0)

  accept(visitor: AbstractCharGeneratorVisitor) {
    visitor.visitUpperCaseEngGenerator(this)
  }
}

class LowCaseGenerator extends SequenceCharGenerator {
  protected min = 'a'.charCodeAt(0)
  protected max = 'z'.charCodeAt(0)

  accept(visitor: AbstractCharGeneratorVisitor) {
    visitor.visitLowCaseEngGenerator(this)
  }
}

const lowCaseGenerator = new LowCaseGenerator()
const upperCaseGenerator = new UpperCaseGenerator()

export {
  lowCaseGenerator,
  upperCaseGenerator
}

export type {
  UpperCaseGenerator,
  LowCaseGenerator
}