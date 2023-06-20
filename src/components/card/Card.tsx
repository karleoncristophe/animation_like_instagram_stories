'use client'
import { Scroll } from '../scroll/Scroll'
import styles from './styles.module.scss'

import React, { useState } from 'react'

type Props = {
  data: number[]
}

export const Card: React.FC<Props> = ({ data }) => {
  const [current, setCurrent] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [translate, setTranslate] = useState(300)

  return (
    <Scroll>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          background: 'pink',
          transition: 'ease-in 300ms',
          transform: `translateX(${translate}px)`,
        }}
      >
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={
                current === index
                  ? `${styles.wrapperActive}`
                  : `${styles.wrapper}`
              }
              style={{
                transformOrigin: current > index ? 'left' : 'right',
              }}
            >
              <div
                className={
                  current === index ? `${styles.cardActive}` : `${styles.card}`
                }
              >
                <button
                  className={`${styles.button} ${styles.back}`}
                  disabled={index <= 0}
                  onClick={() => {
                    setTranslate(translate + 200)

                    setCurrent(current - 1)
                    setCurrentIndex(index)
                  }}
                >
                  back
                </button>
                <button
                  className={`${styles.button} ${styles.next}`}
                  onClick={() => {
                    setCurrent(current + 1)
                    setCurrentIndex(index)

                    setTranslate(translate - 200)
                  }}
                  disabled={data.length > data[data.length - 1]}
                >
                  next
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </Scroll>
  )
}
