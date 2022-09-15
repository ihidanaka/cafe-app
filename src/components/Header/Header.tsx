import { FC } from 'react'
import styles from './Header.module.scss'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import Logo from '../Logo/Logo'
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <BurgerMenu />
      <Link to={'/'}>
        <Logo />
      </Link>
      <Link to={'/cart'}>
        <Cart />
      </Link>
    </div>
  )
}

export default Header
