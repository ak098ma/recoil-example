import { memo, Suspense } from 'react'
import { Content } from './Content'
import { Loading } from './Loading'

export const Header = memo(() => {
  return (
    <Suspense fallback={<Loading />}>
      <Content />
    </Suspense>
  )
})
