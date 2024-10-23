import { useCallback, useState } from 'react'

interface IClipboardState {
  isSuccess: boolean
  isError: boolean,
  error: string
}

interface IUseClipboard extends IClipboardState {
  isClipboardEnabled: boolean
  writeText: (text: string) => void
}

const getDefaultState = (() => ({
  isSuccess: false,
  isError: false,
  error: '',
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
          isSuccess: true
        }))
      })
      .catch((error) => {
        setClipboardState(state => ({
          ...state,
          isError: true,
          error: 'message' in error ? error.message : 'unknown error'
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