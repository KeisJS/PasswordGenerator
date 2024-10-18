import type { IGeneratorState } from '../type.ts'
import { useMemo } from 'react'
import { charGenerators } from '../charGenerator/charGenerators.ts'
import { charGeneratorDescriptions } from '../charGenerator/CharGeneratorDescriptions.ts'

const usePasswordGenerators = () => {
  return useMemo(() => charGenerators.map<IGeneratorState>((charGenerator) => {

    charGenerator.accept(charGeneratorDescriptions)

    return {
      description: charGeneratorDescriptions.description,
      templateString: charGenerator.template,
    }
  }), [])
}

export default usePasswordGenerators