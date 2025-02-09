import "@/globals.css";
import { SessionProvider } from "next-auth/react"
import { Header } from '@/components/header'
import { ClientComponentAccountButton } from '@/components/account-button-сс'
import type { AppProps } from 'next/app'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}:AppProps) {
  return <>
   <SessionProvider session={session}>
    <Header>
      <ClientComponentAccountButton/>
    </Header>
    <h1>🦖Page Router</h1>
   
      <main>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  </>
}