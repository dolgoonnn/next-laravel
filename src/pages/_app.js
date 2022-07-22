import { MoralisProvider } from "react-moralis";
import { SessionProvider } from "next-auth/react"
import '../../public/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({
  Component,
  pageProps,
}) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <SessionProvider session={pageProps.session}>
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
    </MoralisProvider>
  )
}
