import { PropsWithChildren, memo } from 'react'
import styles from './styles.module.css'
import { ICheckboxProps } from './types.ts'

const Checkbox = (props: PropsWithChildren<ICheckboxProps>) => {
  const {
    isChecked,
    children,
    name,
    onChange
  } = props

  return (
    <label className={ styles.label }>
      <input
        type="checkbox"
        checked={ isChecked }
        name={ name }
        onChange={ onChange }
      />
      <span>
        { children }
      </span>
    </label>
  )
}

export default memo(Checkbox)