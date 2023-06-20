import styles from './styles.module.scss'

import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Scroll: React.FC<Props> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}
