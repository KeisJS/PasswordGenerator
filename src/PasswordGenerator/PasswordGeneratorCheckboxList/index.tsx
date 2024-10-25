import { memo, FC, PropsWithChildren, useCallback, ChangeEventHandler, useMemo } from 'react'
import GeneratorCheckbox from '../GeneratorCheckbox'
import { usePasswordGeneratorContext } from '../PasswordGeneratorProvider/contexts.ts'
import { charGenerators } from '../charGenerator/charGenerators.ts'
import type { IGeneratorState } from '../type.ts'
import { charGeneratorDescriptions } from '../charGenerator/CharGeneratorDescriptions.ts'

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