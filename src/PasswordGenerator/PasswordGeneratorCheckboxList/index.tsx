import { memo, FC, PropsWithChildren, useCallback, ChangeEventHandler, useMemo } from 'react'
import { charGenerators } from '@/PasswordGenerator/charGenerator/charGenerators.ts'
import { IGeneratorState } from '@/PasswordGenerator/type.ts'
import { charGeneratorDescriptions } from '@/PasswordGenerator/charGenerator/CharGeneratorDescriptions.ts'
import { usePasswordGeneratorContext } from '@/PasswordGenerator/PasswordGeneratorProvider/contexts.ts'
import GeneratorCheckbox from '@/PasswordGenerator/GeneratorCheckbox'

interface IPasswordGeneratorCheckboxListProps {
  Wrapper?: FC<PropsWithChildren>
}
const PasswordGeneratorCheckboxList = ({ Wrapper }: IPasswordGeneratorCheckboxListProps) => {
  const generators = useMemo(() => charGenerators.map<IGeneratorState>((charGenerator) => {

    charGenerator.accept(charGeneratorDescriptions)

    return {
      description: charGeneratorDescriptions.description,
      templateString: charGenerator.template,
    }
  }), [])

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