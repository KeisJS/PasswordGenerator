import { ChangeEventHandler, memo, useCallback } from 'react'
import styles from './styles.module.css'

interface IInputRangeProps {
  onChange: (value: number) => void
  label: string
  value: number
  min?: number
  max?: number
  isShowValue?: boolean
}
const InputRange = (props: IInputRangeProps) => {
  const {
    min = 6,
    max = 30,
    value,
    onChange,
    label,
    isShowValue = false
  } = props;

  const onChangeHandler = useCallback<ChangeEventHandler<HTMLInputElement>>(e => {
    onChange(Number(e.currentTarget.value))
  }, [ onChange ])

  return (
    <label className={ styles.main }>
      <span className={ styles.label }>{ label }</span>
      <span className={ styles.controls }>
        { isShowValue && <span className={ styles.controls__value }>{ value }</span> }
        <input
          type="range"
          min={ min }
          max={ max }
          value={ value }
          onChange={ onChangeHandler }

        />
      </span>
    </label>
  )
}

export default memo(InputRange)