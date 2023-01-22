import { AppProps } from 'next/app';

import '../styles/global.css';
import 'font-awesome/css/font-awesome.min.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
