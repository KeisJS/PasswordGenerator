import { usePasswordGeneratorContext } from '../context/contexts.ts'
import { charGenerators } from '../charGenerator/charGenerators.ts'
import { passwordGenerator } from '../passwordGenerator'
import { useCallback, memo } from 'react'

const RefreshPassword = () => {
  const {
    length,
    activeGenerators,
    setPassword
  } = usePasswordGeneratorContext()

  const refreshPasswordHandler = useCallback(() => {
    if (!activeGenerators.length) {
      return
    }

    const activeCharGenerators = charGenerators.filter((_v, id) => activeGenerators.includes(id))

    setPassword(passwordGenerator(length, activeCharGenerators))
  }, [activeGenerators, length, setPassword])

  return (
    <button type="button" onClick={ refreshPasswordHandler }>
      Создать пароль
    </button>
  )
}

export default memo(RefreshPassword)