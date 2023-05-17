import Header from '@/componenets/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Home from './index'
import Search from './search'
export default function App({ Component, pageProps }: AppProps) {



  return (
  <>
  <Search/>
  <Header/>
  <Component {...pageProps} /> 
  
  </>
  )
}
