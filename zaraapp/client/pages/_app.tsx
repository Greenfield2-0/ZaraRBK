import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Header from '@/app/header/page';
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Your custom logic or components

  return (
    <div>
<<<<<<< HEAD
  <Header />
=======
  <Header/>
>>>>>>> ae2bee87e079e25f852841f9cc174a8b9aa79a1b
  <Component {...pageProps} />
  </div>
  );
}

export default MyApp;
