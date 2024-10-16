import { memo } from 'react'
import styles from './index.module.css'

const PasswordGenerator = () => {
  return (
    <div className={ styles.mainContainer }>
      <div className={ styles.resultPassword }>JdfdsJ&2</div>
      <div className={ styles.buttons }>
        <div className={ styles.buttons__button }>
          <button type="button">
            Создать пароль
          </button>
        </div>
        <div className={ styles.buttons__button }>
          <button type="button" disabled={true}>
            Скопировать пароль
          </button>
        </div>
      </div>
      <div className={ styles.filters }>
        <div className={ styles.filters__filter }>
          <label>
            <input type="checkbox" checked={ true } name="1"/>
            <span>Строчные буквы</span>
            <span>abvffdssskldkfjsdlfjdslfjsdlkfjsdslgjlsdrgjk</span>
          </label>
        </div>
        <div className={ styles.filters__filter }>
          <label>
            <input type="checkbox" checked={ false } name="2"/>
            <span>Заглавные буквы</span>
            <span>abvffdssskldkfjsdlfjdslfjsdlkfjsdslgjlsdrgjk</span>
          </label>
        </div>
        <div className={ styles.filters__filter }>
          <label>
            <input type="checkbox" checked={ false } name="3"/>
            <span>Цифры</span>
            <span>0123456789</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default memo(PasswordGenerator)