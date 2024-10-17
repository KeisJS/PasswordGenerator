import { memo } from 'react'
import styles from './index.module.css'
import FilterCheckbox from './FilterCheckbox'

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
          <FilterCheckbox
            name="4"
            isChecked={ true }
            onChange={ (e) => console.log(e) }
            description="Цифры"
            templateString="0123456789"
          />
        </div>
      </div>
    </div>
  )
}

export default memo(PasswordGenerator)