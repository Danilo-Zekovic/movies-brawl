import { FC } from 'react'

import styles from './Button.module.css'

interface Props {
  onClick: () => void
  type?: 'primary' | 'success' | 'warning'
}

const Button: FC<Props> = ({ children, onClick, type = 'primary' }) => {
  return (
    <button onClick={onClick} className={`${styles['button']} ${styles[type]}`}>
      {children}
    </button>
  )
}

export default Button
