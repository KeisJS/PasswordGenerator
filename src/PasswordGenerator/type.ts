interface IGeneratorState {
  description: string
  templateString: string
}

interface IPasswordGeneratorState {
  password: string
  refreshPasswordHandler: () => void
  generators: IGeneratorState[]
  generatorToggleHandler: (generatorId: number) => void
  activeGenerators: number[]
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
  IPasswordGeneratorState,
  IGeneratorState,
  IGeneratorDefaultSettings
}