import { useCallback, useState } from 'react'

interface IClipboardState {
  isClipboardCopySuccess: boolean
  isClipboardCopyError: boolean,
  clipboardCopyError: string
}

interface IUseClipboard extends IClipboardState {
  isClipboardEnabled: boolean
  writeText: (text: string) => void
}

const getDefaultState = ((): IClipboardState => ({
  isClipboardCopySuccess: false,
  isClipboardCopyError: false,
  clipboardCopyError: '',
}))
const useClipboard = (): IUseClipboard => {
  const [clipboardState, setClipboardState] = useState<IClipboardState>(getDefaultState)

  const writeText = useCallback((text: string) => {
    setClipboardState(getDefaultState)

    navigator.clipboard
      .writeText(text)
      .then(() => {
        setClipboardState(state => ({
          ...state,
          isClipboardCopySuccess: true
        }))
      })
      .catch((error) => {
        setClipboardState(state => ({
          ...state,
          isClipboardCopyError: true,
          clipboardCopyError: 'message' in error ? error.message : 'unknown error'
        }))
      })
  }, [])

  return {
    ...clipboardState,
    writeText,
    isClipboardEnabled: window.isSecureContext
  }
}

export default useClipboard