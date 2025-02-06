import { memo } from 'react'
import styles from './styles.module.css'
import { CheckboxProps } from '@/UI/Checkbox/types.ts'
import Checkbox from '@/UI/Checkbox'

type GeneratorCheckboxProps = CheckboxProps & {
  description: string
  templateString: string
}

const GeneratorCheckbox = (props: GeneratorCheckboxProps) => {
  const {
    description,
    templateString,
    ...checkboxProps
  } = props

  return (
    <Checkbox {...checkboxProps}>
      <div title={ templateString }>
        <div className={ styles.description }>
          { description }
        </div>
        <div className={ styles.templateString }>
          { templateString }
        </div>
      </div>
    </Checkbox>
  )
}

export default memo(GeneratorCheckbox)

