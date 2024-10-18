import SequenceCharGenerator from './SequenceCharGenerator.ts'
import type { AbstractCharGeneratorVisitor } from './types.ts'

class NumberGenerator extends SequenceCharGenerator {
  min = '0'.charCodeAt(0)
  max = '9'.charCodeAt(0)

  accept(visitor: AbstractCharGeneratorVisitor) {
    visitor.visitNumberGenerator(this)
  }
}

const numberGenerator = new NumberGenerator()

export { numberGenerator, NumberGenerator }