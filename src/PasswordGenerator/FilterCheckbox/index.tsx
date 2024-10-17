import { memo } from 'react'
import Checkbox from '../../UI/Checkbox'
import { ICheckboxProps } from '../../UI/Checkbox/types.ts'
import styles from './styles.module.css'

type IFilterCheckboxProps = ICheckboxProps & {
  description: string
  templateString: string
}

const FilterCheckbox = (props: IFilterCheckboxProps) => {
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

export default memo(FilterCheckbox)

