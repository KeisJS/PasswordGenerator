import { memo, PropsWithChildren } from 'react'
import styles from './index.module.css'
import RefreshPassword from './RefreshPassword'
import PasswordLength from './PasswordLength'
import PasswordGeneratorCheckboxList from './PasswordGeneratorCheckboxList'
import PasswordField from './PasswordField'

const GeneratorCheckboxWrapper = (props: PropsWithChildren) => (
  <div className={ styles.filters__filter}>
    { props.children }
  </div>
)

const PasswordGenerator = () => {
  return (
    <div className={ styles.mainContainer }>
      <PasswordField />
      <div className={ styles.buttons }>
        <div className={ styles.buttons__button }>
          <RefreshPassword />
        </div>
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