import { FC } from 'react'

import styles from './CardsContainer.module.css'

const CardContainer: FC = ({ children }) => (
  <div className={styles['card-container']}>{children}</div>
)

export default CardContainer
