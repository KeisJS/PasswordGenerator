import { memo, PropsWithChildren } from 'react'
import styles from './index.module.css'
import RefreshPassword from './RefreshPassword'
import { usePasswordGeneratorContext } from './context/contexts.ts'
import PasswordLength from './PasswordLength'
import PasswordGeneratorCheckboxList from './PasswordGeneratorCheckboxList'
import ClipboardButton from '../Clipboard/ClipboardButton.tsx'

const GeneratorCheckboxWrapper = (props: PropsWithChildren) => (
  <div className={ styles.filters__filter}>
    { props.children }
  </div>
)

const ButtonWrapper = (props: PropsWithChildren) => (
  <div className={ styles.buttons__button }>
    { props.children }
  </div>
)

const PasswordGenerator = () => {
  const {
    password
  } = usePasswordGeneratorContext()

  return (
    <div className={ styles.mainContainer }>
      <div className={ styles.resultPassword }>
        { password }
      </div>
      <div className={ styles.buttons }>
        <div className={ styles.buttons__button }>
          <RefreshPassword />
        </div>
        <ClipboardButton
          text={ password }
          isDisabled={ !password }
          Wrapper={ ButtonWrapper }
          description="Скопировать пароль"
        />
      </div>
      <div className={ styles.filters }>
        <div className={ styles.filters__filter }>
          <PasswordLength />
        </div>
      </div>
      <div className={ styles.filters }>
        <PasswordGeneratorCheckboxList Wrapper={ GeneratorCheckboxWrapper } />
      </div>
    </div>
  )
}

export default memo(PasswordGenerator)