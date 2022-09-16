import { FC } from 'react'
import { IBurgerMenuItem } from './BurgerMenuItem.interface'
import { Link } from 'react-router-dom'
import styles from './BurgerMenuItem.module.scss'

const BurgerMenuItem: FC<IBurgerMenuItem> = ({ title, url }) => {
  return (
    <Link className={styles.item} to={url}>
      {title}
    </Link>
  )
}

export default BurgerMenuItem
