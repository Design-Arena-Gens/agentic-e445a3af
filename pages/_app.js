import '@/styles/globals.css';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap'
});

export default function App({ Component, pageProps }) {
  return (
    <div className={spaceGrotesk.className}>
      <Component {...pageProps} />
    </div>
  );
}
