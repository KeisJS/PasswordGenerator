import { ChangeEventHandler } from 'react'

interface CheckboxProps {
  isChecked: boolean
  name: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

export type {
  CheckboxProps
}