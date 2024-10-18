import { memo } from 'react'
import InputRange from '../../UI/InputRange'
import { usePasswordGeneratorContext } from '../context/contexts.ts'

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