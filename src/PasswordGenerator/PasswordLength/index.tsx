import { memo } from 'react'
import { usePasswordGeneratorContext } from '@/PasswordGenerator/PasswordGeneratorProvider/contexts.ts'
import InputRange from '@/UI/InputRange'

const PasswordLength = () => {
  const {
    activeGenerators,
    length,
    setLength
  } = usePasswordGeneratorContext()

  return (
    <InputRange
      min={ activeGenerators.length || 1 }
      max={ 30 }
      value={ length }
      onChange={ setLength }
      label="Длина пароля"
      isShowValue={true}
    />
  )
}

export default memo(PasswordLength);