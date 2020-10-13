import { Provider } from 'mobx-react';
import RootStore from '../store/RootStore';
import '../styles/index.scss';

//const store = RootStore.create();
export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

function getIsServerRendered() {
  return typeof window === 'undefined';
}

if (process.env.NODE_ENV !== 'production' && !getIsServerRendered()) {
  const ReactDOM = require('react-dom');
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}
