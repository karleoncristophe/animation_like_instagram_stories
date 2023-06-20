import React from 'react'
import { Card } from '../components/card/Card'
import { Scroll } from '../components/scroll/Scroll'
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
export default function Home() {
  return (
    <main style={{ display: 'flex' }}>
      <Card data={data} />
    </main>
  )
}
