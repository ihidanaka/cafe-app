import { FC, useState } from 'react'
import styles from './Search.module.scss'

const Search: FC = () => {
  const [value, setValue] = useState<string>('')
  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={'Введите название товара...'}
      />
      {!value ? (
        <svg
          className={styles.icon}
          width='22'
          height='22'
          viewBox='0 0 22 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='10.786'
            cy='10.7861'
            r='8.23951'
            stroke='white'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M16.5168 16.9447L19.7471 20.1667'
            stroke='white'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ) : null}
    </div>
  )
}

export default Search
