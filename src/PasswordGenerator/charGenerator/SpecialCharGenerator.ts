import type { ICharGenerator } from './types.ts'
import { genRandom } from '../genRandomUtils.ts'

class SpecialCharGenerator implements ICharGenerator {
  private _template = '!#$%&*+./:;=><?@\\^`|~\''
  genChar() {
    return this.template[genRandom(0, this.template.length)]
  }

  get template() {
    return this._template
  }
}

const specialCharGenerator = new SpecialCharGenerator()

export { specialCharGenerator }