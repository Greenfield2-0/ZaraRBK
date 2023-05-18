import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Home from './index'
import Header from '@/componenets/header'
export default function App({ Component, pageProps }: AppProps) {



  return (
  <>
  
  
 <Header/>
  <Component {...pageProps} /> 
  
  </>
  )
}
