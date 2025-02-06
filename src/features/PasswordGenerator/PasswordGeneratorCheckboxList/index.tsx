import { memo, FC, PropsWithChildren, useCallback, ChangeEventHandler, useMemo } from 'react'
import { charGenerators } from '@/features/PasswordGenerator/charGenerator/charGenerators.ts'
import { GeneratorState } from '@/features/PasswordGenerator/type.ts'
import { charGeneratorDescriptions } from '@/features/PasswordGenerator/charGenerator/CharGeneratorDescriptions.ts'
import { usePasswordGeneratorContext } from '@/features/PasswordGenerator/PasswordGeneratorProvider/contexts.ts'
import GeneratorCheckbox from '@/features/PasswordGenerator/GeneratorCheckbox'

interface PasswordGeneratorCheckboxListProps {
  Wrapper?: FC<PropsWithChildren>
}
const PasswordGeneratorCheckboxList = ({ Wrapper }: PasswordGeneratorCheckboxListProps) => {
  const generators = useMemo(() => charGenerators.map<GeneratorState>((charGenerator) => {

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