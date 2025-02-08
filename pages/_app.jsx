import { SessionProvider } from "next-auth/react"
import { Header } from '@/components/header'
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return <>
    <Header />
    <h1>🦖Page Router</h1>
    <SessionProvider session={session}>
      <main>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  </>
}