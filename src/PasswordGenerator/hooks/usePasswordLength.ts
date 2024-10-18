import { defaultGeneratorsSettings } from '../settings.ts'
import { useEffect, useState } from 'react'

const usePasswordLength = (countActiveGenerators: number) => {
  const [length, setLength] = useState(defaultGeneratorsSettings.length)

  useEffect(() => {
    if (countActiveGenerators > length) {
      setLength(countActiveGenerators)
    }
  }, [countActiveGenerators, setLength, length])

  return {
    length,
    setLength
  }
}

export {
  usePasswordLength
}