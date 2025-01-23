import { IGeneratorDefaultSettings } from './type.ts'

const defaultGeneratorsSettings: IGeneratorDefaultSettings = {
  enabled: {
    numbers: true,
    lowCase: true,
    upperCase: true
  },
  length: 8
}

export {
  defaultGeneratorsSettings
}