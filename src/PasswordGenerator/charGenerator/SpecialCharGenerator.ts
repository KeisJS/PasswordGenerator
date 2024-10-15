import type { ICharGenerator } from './types.ts'
import { genRandom } from '../genRandomUtils.ts'

class SpecialCharGenerator implements ICharGenerator {
  private templateString = '!#$%&*+./:;=><?@\\^`|~\''
  genChar() {
    return this.template[genRandom(0, this.templateString.length)]
  }

  get template() {
    return this.templateString
  }
}

const specialCharGenerator = new SpecialCharGenerator()

export { specialCharGenerator }