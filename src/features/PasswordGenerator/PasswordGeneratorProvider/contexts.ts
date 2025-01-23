import { createContext, useContext } from 'react'

interface IPasswordGeneratorState {
  length: number
  password: string
  activeGenerators: number[]
  activeGeneratorToggle: (id: number) => void
  setPassword: (password: string) => void
  setLength: (length: number) => void
}

const PasswordGeneratorContext = createContext<IPasswordGeneratorState>({
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