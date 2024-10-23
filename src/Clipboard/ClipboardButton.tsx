import useClipboard from './useClipboard.ts'
import { FC, PropsWithChildren, useCallback, useEffect, memo } from 'react'

interface IClipboardButtonProps {
  onSuccess?: () => void
  onError?: (msg: string) => void
  text: string
  Wrapper?: FC<PropsWithChildren>
  description?: string
  isDisabled?: boolean
}
const ClipboardButton = (props: IClipboardButtonProps) => {
  const {
    onSuccess,
    onError,
    text,
    Wrapper,
    description,
    isDisabled
  } = props

  const {
    isClipboardEnabled,
    isError,
    error,
    isSuccess,
    writeText
  } = useClipboard()

  const onclickHandler = useCallback(() => {
    writeText(text)
  }, [text, writeText])

  useEffect(() => {
    if (isError && onError) {
      onError(error)
    } else if (isSuccess && onSuccess) {
      onSuccess()
    }
  }, [isError, error, isSuccess, onSuccess, onError])

  if (!isClipboardEnabled) {
    return null
  }

  const Body = (
    <button
      onClick={ onclickHandler }
      disabled={ isDisabled }
    >
      { description ? description : 'Скопировать' }
    </button>
  )

  return Wrapper ? <Wrapper>{ Body }</Wrapper> : Body
}

export default memo(ClipboardButton)