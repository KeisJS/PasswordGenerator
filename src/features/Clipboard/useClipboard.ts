import { useCallback, useState } from 'react'

interface ClipboardState {
  isClipboardCopySuccess: boolean
  isClipboardCopyError: boolean,
  clipboardCopyError: string
}

interface ClipboardWrapper extends ClipboardState {
  isClipboardEnabled: boolean
  writeText: (text: string) => void
}

const getDefaultState = ((): ClipboardState => ({
  isClipboardCopySuccess: false,
  isClipboardCopyError: false,
  clipboardCopyError: '',
}))
const useClipboard = (): ClipboardWrapper => {
  const [clipboardState, setClipboardState] = useState<ClipboardState>(getDefaultState)

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