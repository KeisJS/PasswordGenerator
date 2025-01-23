import  { AbstractCharGenerator } from './types.ts'
import { generateRandomRange } from '@/features/PasswordGenerator/generateRandomRange/generateRandomRange.ts'

abstract class SequenceCharGenerator extends AbstractCharGenerator {
  protected min = 0
  protected max = 0
  genChar() {
    return String.fromCharCode(generateRandomRange(this.min, this.max))
  }

  get template() {
    let result = ''

    for (let i = 0, max = this.max - this.min + 1; i < max; i++) {
      result += String.fromCharCode(this.min + i)
    }

    return result
  }
}

export default SequenceCharGenerator