import SequenceCharGenerator from './SequenceCharGenerator.ts'

class NumberGenerator extends SequenceCharGenerator {
  min = '0'.charCodeAt(0)
  max = '9'.charCodeAt(0)
}

const numberGenerator = new NumberGenerator()

export { numberGenerator }