import { createContext, useContext } from 'react'

interface PasswordGeneratorState {
  length: number
  password: string
  activeGenerators: number[]
  activeGeneratorToggle: (id: number) => void
  setPassword: (password: string) => void
  setLength: (length: number) => void
}

const PasswordGeneratorContext = createContext<PasswordGeneratorState>({
  length: 0,
  password: '',
  activeGenerators: [],
  setPassword: () => {},
  activeGeneratorToggle: () => {},
  setLength: () => {},
})

const usePasswordGeneratorContext = () => useContext(PasswordGeneratorContext)

export {
  PasswordGeneratorContext,
  usePasswordGeneratorContext
}