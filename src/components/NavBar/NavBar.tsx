import { FC } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../logo.svg'

import styles from './NavBar.module.css'

const NavBar: FC = () => {
  return (
    <header className={styles['navigation-bar']}>
      <div className={styles['navigation-content']}>
        <div className={styles['logo']}>
          <img src={logo} className={styles['logo-img']} alt="logo" />
          {'>> Movies Brawl <<'}
        </div>
        <nav className={styles['links']}>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
