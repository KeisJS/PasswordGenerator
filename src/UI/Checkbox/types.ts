import { ChangeEventHandler } from 'react'

interface ICheckboxProps {
  isChecked: boolean
  name: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

export type {
  ICheckboxProps
}