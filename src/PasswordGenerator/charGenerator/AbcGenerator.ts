import SequenceCharGenerator from './SequenceCharGenerator.ts'

class UpperCaseGenerator extends SequenceCharGenerator {
  min = 'A'.charCodeAt(0)
  max = 'Z'.charCodeAt(0)
}

class LowCaseGenerator extends SequenceCharGenerator {
  protected min = 'a'.charCodeAt(0)
  protected max = 'z'.charCodeAt(0)
}

const lowCaseGenerator = new LowCaseGenerator()
const upperCaseGenerator = new UpperCaseGenerator()

export {
  lowCaseGenerator,
  upperCaseGenerator
}