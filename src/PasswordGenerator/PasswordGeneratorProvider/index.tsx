import { PropsWithChildren, useState, memo, useCallback } from 'react'
import { usePasswordLength } from '../hooks/usePasswordLength.ts'
import { CharGeneratorEnabledSettings } from '../charGenerator/CharGeneratorEnabledSettings.ts'
import { charGenerators } from '../charGenerator/charGenerators.ts'
import { IGeneratorDefaultSettings } from '../type.ts'
import { PasswordGeneratorContext } from '../context/contexts.ts'

interface IPasswordGeneratorProviderSettingsProps {
  settings: IGeneratorDefaultSettings
}

const PasswordGeneratorProvider = ({ children, settings }: PropsWithChildren<IPasswordGeneratorProviderSettingsProps>) => {
  const [password, setPassword] = useState('')
  const [activeGenerators, setActiveGenerators] = useState<number[]>(() => {
    const enabledSettings = new CharGeneratorEnabledSettings(settings)

    return charGenerators.map((generator, id) => {
      generator.accept(enabledSettings)

      return enabledSettings.isEnabled ? id : null
    }).filter(id => id !== null)
  })
  const { length, setLength } = usePasswordLength(activeGenerators.length)

  const activeGeneratorToggle = useCallback((id: number) => {
    setActiveGenerators(state => {
      if (state.includes(id)) {
        return state.filter(v => v !== id)
      }

      const newState = state.slice()

      newState.push(id)

      return newState
    })
  }, [])

  return (
    <PasswordGeneratorContext.Provider value={{
      password,
      setPassword,
      length,
      setLength,
      activeGenerators,
      activeGeneratorToggle
    }}>
      { children }
    </PasswordGeneratorContext.Provider>
  )
}

export default memo(PasswordGeneratorProvider)