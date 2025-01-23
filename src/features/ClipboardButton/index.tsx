import { FC, PropsWithChildren, useCallback, useEffect, memo } from 'react'
import useClipboard from '@/features/Clipboard/useClipboard.ts'

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
    isClipboardCopyError,
    clipboardCopyError,
    isClipboardCopySuccess,
    writeText
  } = useClipboard()

  const onclickHandler = useCallback(() => {
    writeText(text)
  }, [text, writeText])

  useEffect(() => {
    if (isClipboardCopyError && onError) {
      onError(clipboardCopyError)
    } else if (isClipboardCopySuccess && onSuccess) {
      onSuccess()
    }
  }, [onSuccess, onError, isClipboardCopyError, isClipboardCopySuccess, clipboardCopyError])

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