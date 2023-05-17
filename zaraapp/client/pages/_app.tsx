import Header from '@/componenets/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Home from '@/pages/index'
export default function App({ Component, pageProps }: AppProps) {



  return (
  <>
  <Header/>
  <Home/>
  <Component {...pageProps} /> 
  
  </>
  )
}
