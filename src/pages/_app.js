import { MoralisProvider } from "react-moralis";
import { SessionProvider } from "next-auth/react"
import '../../public/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import NextNProgress from "nextjs-progressbar";

export default function App({
  Component,
  pageProps,
}) {

  // if (!process.env.NEXT_PUBLIC_APPID || !process.env.NEXT_PUBLIC_SERVER_URL) {
  //   return <h3>keys not found</h3>
  // }
  return (
    <MoralisProvider appId={process.env.NEXT_PUBLIC_APPID} serverUrl={process.env.NEXT_PUBLIC_SERVER_URL} initializeOnMount={true}>
      <SessionProvider session={pageProps.session}>
        <ChakraProvider>
            <NextNProgress color="#3bc49b" />
            <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
    </MoralisProvider>
  )
}
