import { memo, PropsWithChildren } from 'react'
import styles from './index.module.css'
import RefreshPasswordButton from '@/PasswordGenerator/RefreshPasswordButton'
import PasswordField from '@/PasswordGenerator/PasswordField'
import PasswordLength from '@/PasswordGenerator/PasswordLength'
import PasswordGeneratorCheckboxList from '@/PasswordGenerator/PasswordGeneratorCheckboxList'

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
          <RefreshPasswordButton />
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