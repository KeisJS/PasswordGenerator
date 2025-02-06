import { AbstractCharGeneratorVisitor } from './types.ts'
import { GeneratorDefaultSettings } from '../type.ts'

class CharGeneratorEnabledSettings extends AbstractCharGeneratorVisitor {
  public settings: GeneratorDefaultSettings['enabled']
  public isEnabled: boolean = false

  constructor(settings: GeneratorDefaultSettings) {
    super()
    this.settings = settings.enabled
  }

  visitUpperCaseEngGenerator() {
    this.isEnabled = Boolean(this.settings.upperCase)
  }

  visitLowCaseEngGenerator() {
    this.isEnabled = Boolean(this.settings.lowCase)
  }

  visitNumberGenerator() {
    this.isEnabled = Boolean(this.settings.numbers)
  }

  visitSpecialCharGenerator() {
    this.isEnabled = Boolean(this.settings.specialChars)
  }
}

export {
  CharGeneratorEnabledSettings
}
