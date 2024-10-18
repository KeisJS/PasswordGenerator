import { AbstractCharGenerator } from './types.ts'
import type { AbstractCharGeneratorVisitor } from './types.ts'
import { genRandom } from '../genRandomUtils.ts'

class SpecialCharGenerator extends AbstractCharGenerator {
  private templateString = '!#$%&*+./:;=><?@\\^`|~\''
  genChar() {
    return this.template[genRandom(0, this.templateString.length - 1)]
  }

  get template() {
    return this.templateString
  }

  accept(visitor: AbstractCharGeneratorVisitor) {
    visitor.visitSpecialCharGenerator(this)
  }
}

const specialCharGenerator = new SpecialCharGenerator()

export { specialCharGenerator }
export type { SpecialCharGenerator }