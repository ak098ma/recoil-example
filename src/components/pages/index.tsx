import { memo } from 'react'
import { Header } from '../projects/Header'

export const Home = memo(() => {
  return (
    <div>
      <Header />
      <main>hoge</main>
    </div>
  )
})
