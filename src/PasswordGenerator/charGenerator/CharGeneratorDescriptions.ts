import { AbstractCharGeneratorVisitor } from './types.ts'

class CharGeneratorDescriptions extends AbstractCharGeneratorVisitor {
  public description: string = ''

  visitSpecialCharGenerator() {
    this.description = 'Специальные символы'
  }

  visitNumberGenerator() {
    this.description = 'Цифры'
  }

  visitLowCaseEngGenerator() {
    this.description = 'Строчные буквы'
  }

  visitUpperCaseEngGenerator() {
    this.description = 'Заглавные буквы'
  }
}

const charGeneratorDescriptions = new CharGeneratorDescriptions()

export {
  charGeneratorDescriptions
}