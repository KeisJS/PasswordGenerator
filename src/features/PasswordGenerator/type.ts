interface GeneratorState {
  description: string
  templateString: string
}

interface GeneratorDefaultSettings {
  enabled: {
    numbers?: boolean
    specialChars?: boolean
    lowCase?: boolean
    upperCase?: boolean
  }
  length: number
}

export type {
  GeneratorState,
  GeneratorDefaultSettings
}