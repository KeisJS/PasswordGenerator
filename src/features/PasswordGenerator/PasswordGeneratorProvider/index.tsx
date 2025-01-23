import { PropsWithChildren, useState, memo, useCallback, useEffect } from 'react'
import { IGeneratorDefaultSettings } from '@/features/PasswordGenerator/type.ts'
import {
  CharGeneratorEnabledSettings
} from '@/features/PasswordGenerator/charGenerator/CharGeneratorEnabledSettings.ts'
import { charGenerators } from '@/features/PasswordGenerator/charGenerator/charGenerators.ts'
import { defaultGeneratorsSettings } from '@/features/PasswordGenerator/settings.ts'
import { PasswordGeneratorContext } from '@/features/PasswordGenerator/PasswordGeneratorProvider/contexts.ts'

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

  const [length, setLength] = useState(defaultGeneratorsSettings.length)

  useEffect(() => {
    if (activeGenerators.length > length) {
      setLength(activeGenerators.length)
    }
  }, [activeGenerators, setLength, length])

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