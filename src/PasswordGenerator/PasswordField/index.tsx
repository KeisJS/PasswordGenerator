import { memo, useCallback, useEffect, useState } from 'react'
import styles from './styles.module.css'
import { usePasswordGeneratorContext } from '../context/contexts.ts'
import useClipboard from '../../Clipboard/useClipboard.ts'

const PasswordField = () => {
  const {
    password
  } = usePasswordGeneratorContext()
  const [isShowCopyMsg, setIsShowCopyMsg] = useState(false)

  const { writeText, isClipboardEnabled, isClipboardCopySuccess } = useClipboard()

  const copyHandler = useCallback(() => {
    if (!isClipboardEnabled) {
      return
    }

    writeText(password)
  }, [isClipboardEnabled, writeText, password])

  useEffect(() => {
    if (isClipboardCopySuccess) {
      setIsShowCopyMsg(true)
    }
  }, [isClipboardCopySuccess])

  const transitionEndHandler = useCallback(() => {
    setIsShowCopyMsg(false)
  }, [])

  return (
    <div className={ styles.main } onClick={ copyHandler }>
      <span className={ `${styles.value} ${ isClipboardEnabled ? styles.value_enabledCopy : ''}` }>
        { password }
      </span>
      { isClipboardEnabled && (
        <span
          className={ `${ styles.copySuccess } ${ isShowCopyMsg ? styles.copySuccess_on : ''}` }
          onTransitionEnd={ transitionEndHandler }
        >
          Скопировано
        </span>
      ) }
    </div>
  )
}

export default memo(PasswordField)