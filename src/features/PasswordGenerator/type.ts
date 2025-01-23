interface IGeneratorState {
  description: string
  templateString: string
}

interface IGeneratorDefaultSettings {
  enabled: {
    numbers?: boolean
    specialChars?: boolean
    lowCase?: boolean
    upperCase?: boolean
  }
  length: number
}

export type {
  IGeneratorState,
  IGeneratorDefaultSettings
}