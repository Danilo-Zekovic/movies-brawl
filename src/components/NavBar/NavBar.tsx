import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'

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
          <NavLink exact to="/" activeClassName={styles['selected']}>
            Home
          </NavLink>
          <NavLink to="/favorites" activeClassName={styles['selected']}>
            Favorites
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
