import { useCallback, memo } from 'react'
import { usePasswordGeneratorContext } from '@/features/PasswordGenerator/PasswordGeneratorProvider/contexts.ts'
import { charGenerators } from '@/features/PasswordGenerator/charGenerator/charGenerators.ts'
import { passwordGenerator } from '@/features/PasswordGenerator/passwordGenerator'
import Button from '@/UI/Button'

const RefreshPasswordButton = () => {
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
    <Button
      description="Создать пароль"
      onClick={ refreshPasswordHandler }
    />
  )
}

export default memo(RefreshPasswordButton)