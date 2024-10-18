import type { IPasswordGeneratorState, IGeneratorState, IGeneratorDefaultSettings } from '../type.ts'
import { useCallback, useMemo, useState } from 'react'
import { charGenerators } from '../charGenerator/charGenerators.ts'
import { passwordGenerator } from '../passwordGenerator'
import { charGeneratorDescriptions } from '../charGenerator/CharGeneratorDescriptions.ts'
import { CharGeneratorEnabledSettings } from '../charGenerator/CharGeneratorEnabledSettings.ts'

interface IUsePasswordGeneratorParams {
  length: number
  settings: IGeneratorDefaultSettings
}

const usePasswordGeneratorWithReactState = (params: IUsePasswordGeneratorParams) : IPasswordGeneratorState => {
  const { length, settings } = params
  const [password, setPassword] = useState('')
  const generators = useMemo(() => charGenerators.map<IGeneratorState>((charGenerator) => {

    charGenerator.accept(charGeneratorDescriptions)

    return {
      description: charGeneratorDescriptions.description,
      templateString: charGenerator.template,
    }
  }), [])

  const [activeGenerators, setActiveGenerators] = useState<number[]>(() => {
    const enabledSettings = new CharGeneratorEnabledSettings(settings)

    return charGenerators.map((generator, id) => {
      generator.accept(enabledSettings)

      return enabledSettings.isEnabled ? id : null
    }).filter(id => id !== null)
  })

  const generatorToggleHandler = useCallback((id: number) => {
    setActiveGenerators(state => {
      if (state.includes(id)) {
        return state.filter(v => v !== id)
      }

      const newState = state.slice()

      newState.push(id)

      return newState
    })
  }, [])

  const refreshPasswordHandler = useCallback(() => {
    if (!activeGenerators.length) {
      return
    }

    const activeCharGenerators = charGenerators.filter((_v, id) => activeGenerators.includes(id))

    setPassword(passwordGenerator(length, activeCharGenerators))
  }, [activeGenerators, length])

  return {
    password,
    generators,
    generatorToggleHandler,
    activeGenerators,
    refreshPasswordHandler
  }
}

export default usePasswordGeneratorWithReactState