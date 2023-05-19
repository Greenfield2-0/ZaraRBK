import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Header from '@/componenets/header';
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Your custom logic or components

  return (
    <div>
    <Header/>
  <Component {...pageProps} />
  </div>
  );
}

export default MyApp;
