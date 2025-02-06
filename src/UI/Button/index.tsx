import { memo } from 'react'
import styles from './styles.module.css'

interface ButtonProps {
  onClick: () => void
  description: string
}

const Button = (props: ButtonProps) => {
  const { onClick, description } = props

  return (
    <button type="button" onClick={ onClick } className={ styles.button }>
      { description }
    </button>
  )
}

export default memo(Button)