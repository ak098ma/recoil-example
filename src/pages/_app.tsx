import { AppProps } from 'next/app'
import Head from 'next/head'
import { Suspense } from 'react'
import { RecoilRoot } from 'recoil'
import { AbsoluteUI } from 'src/components/projects/AbsoluteUI'

const App = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <Component {...pageProps} />
    <Suspense fallback={<div>Loading...</div>}>
      <AbsoluteUI />
    </Suspense>
  </RecoilRoot>
)

export default App
