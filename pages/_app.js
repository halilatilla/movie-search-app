import { Provider } from 'mobx-react';
import { initialRoot } from '../store/InitialRoot';
import '../styles/index.scss';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={initialRoot}>
      <Component {...pageProps} />
    </Provider>
  );
}
