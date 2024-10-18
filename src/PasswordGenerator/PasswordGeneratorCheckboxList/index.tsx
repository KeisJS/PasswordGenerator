import { memo, FC, PropsWithChildren, useCallback, ChangeEventHandler } from 'react'
import GeneratorCheckbox from '../GeneratorCheckbox'
import usePasswordGenerators from '../hooks/usePasswordGenerators.ts'
import { usePasswordGeneratorContext } from '../context/contexts.ts'

interface IPasswordGeneratorCheckboxListProps {
  Wrapper?: FC<PropsWithChildren>
}
const PasswordGeneratorCheckboxList = ({ Wrapper }: IPasswordGeneratorCheckboxListProps) => {
  const generators = usePasswordGenerators()
  const {
    activeGeneratorToggle,
    activeGenerators,
  } = usePasswordGeneratorContext()

  const checkBoxHandler = useCallback<ChangeEventHandler<HTMLInputElement>>(e => {
    activeGeneratorToggle(Number(e.currentTarget.name))
  }, [activeGeneratorToggle])


  return (
    <>
      {
        generators.map((generator, index) => {
          const Element = (
            <GeneratorCheckbox
              name={ index.toString() }
              isChecked={ activeGenerators.includes(index) }
              { ...generator }
              onChange={ checkBoxHandler }
              key={index}
            />
          )

          return Wrapper ? (
            <Wrapper key={ index }>
              { Element }
            </Wrapper>
          ) : Element
        })
      }
    </>
  )
}

export default memo(PasswordGeneratorCheckboxList)