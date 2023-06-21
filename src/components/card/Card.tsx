'use client'
import styles from './styles.module.scss'
import React, { useState } from 'react'

type Props = {
  data: number[]
}

export const Card: React.FC<Props> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(1)

  return (
    <div className={styles.body}>
      <ul className={styles.list}>
        {data.map((item, index) => {
          const idx = index + 1
          const left =
            currentIndex === 1
              ? `calc(calc(100vw / 2 - 25rem) + calc(${idx} * 25rem))`
              : `calc(calc(100vw / 2 - calc(${currentIndex} * 25rem)) + calc(${idx} * 25rem))`

          return (
            <li
              key={index}
              id={`${idx}`}
              className={`${styles.card} ${
                currentIndex === idx && styles.active
              }`}
              style={{
                left,
              }}
            >
              <button
                disabled={currentIndex === 1}
                onClick={() => {
                  setCurrentIndex(currentIndex - 1)
                  console.log('back')
                }}
                className={`${styles.button} ${styles.back}`}
              >
                back
              </button>
              {idx}
              <button
                disabled={currentIndex === data.length + 1 - 1}
                onClick={() => setCurrentIndex(idx + 1)}
                className={`${styles.button} ${styles.next}`}
              >
                next
              </button>
              {/* mobile --> */}
              <button
                disabled={currentIndex === 1}
                onClick={() => {
                  setCurrentIndex(currentIndex - 1)
                  console.log('back')
                }}
                className={`${styles.buttonMobile} ${styles.back}`}
              />

              <button
                disabled={currentIndex === data.length + 1 - 1}
                onClick={() => setCurrentIndex(idx + 1)}
                className={`${styles.buttonMobile} ${styles.next}`}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
