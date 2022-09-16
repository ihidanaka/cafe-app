import { FC, useState } from 'react'
import styles from './BurgerMenu.module.scss'
import { IBurgerMenuItem } from './BurgerMenuItem/BurgerMenuItem.interface'
import BurgerMenuItem from './BurgerMenuItem/BurgerMenuItem'

const BurgerMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [menuItems, setMenuItems] = useState<IBurgerMenuItem[]>([
    { id: 1, title: 'Горячие закуски', url: '/cart' },
    { id: 2, title: 'Холодные закуски', url: '/afaf' },
    { id: 3, title: 'Супы', url: '' }
  ])
  return !isOpen ? (
    <div className={styles.menu} onClick={() => setIsOpen(true)}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.title}>меню</div>
    </div>
  ) : (
    <div>
      <div className={styles.menu} onClick={() => setIsOpen(true)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.title}>меню</div>
      </div>
      {/*<div*/}
      {/*  className={styles.show + ' ' + styles.open}*/}
      {/*  onClick={() => setIsOpen(false)}*/}
      {/*>*/}
      {/*  */}
      {/*</div>*/}
      <ul className={styles.open} onClick={() => setIsOpen(false)}>
        <div className={styles.container}>
          <button className={styles.close}>
            <svg
              width='24'
              height='24'
              viewBox='0 0 17 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_69_468)'>
                <path
                  d='M12.6035 10.1437L10.5311 8.07133L12.6035 5.99898C13.1126 5.48984 13.1018 4.64546 12.5924 4.13613C12.0831 3.6268 11.2387 3.61593 10.7296 4.12508L8.65723 6.19743L6.58487 4.12508C6.07573 3.61593 5.23135 3.6268 4.72202 4.13613C4.2127 4.64546 4.20183 5.48984 4.71097 5.99898L6.78332 8.07133L4.71097 10.1437C4.20183 10.6528 4.2127 11.4972 4.72202 12.0065C5.23135 12.5159 6.07573 12.5267 6.58487 12.0176L8.65723 9.94524L10.7296 12.0176C11.2387 12.5267 12.0831 12.5159 12.5924 12.0065C13.1018 11.4972 13.1126 10.6528 12.6035 10.1437Z'
                  fill='white'
                />
              </g>
              <defs>
                <clipPath id='clip0_69_468'>
                  <rect
                    width='11.1304'
                    height='11.1304'
                    fill='white'
                    transform='translate(8.65723 0.200928) rotate(45)'
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          <div className={styles.content} onClick={e => e.stopPropagation()}>
            {menuItems.map(item => {
              return (
                <li
                  className={styles.menuItem}
                  key={item.id}
                  onClick={() => setIsOpen(false)}
                >
                  <BurgerMenuItem
                    id={item.id}
                    title={item.title}
                    url={item.url}
                  />
                </li>
              )
            })}
          </div>
        </div>
      </ul>
    </div>
  )
}

export default BurgerMenu
