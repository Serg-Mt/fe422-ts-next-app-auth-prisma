import { SessionProvider } from "next-auth/react"
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return <>
    <h1>Page Router</h1>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  </>
}