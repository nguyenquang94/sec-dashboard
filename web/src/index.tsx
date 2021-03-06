import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import { client } from './apollo/client';
import { unregister } from './serviceWorker';
import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/table.css';
import 'antd/dist/antd.less';
import './styles/main.scss';
import './styles/main.less';
import i18n from './i18n';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import { BaseProvider } from 'baseui';
// @ts-ignore
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { theme } from './theme';
const engine = new Styletron();
ReactDOM.render(
  <ErrorBoundary>
    <ApolloProvider client={client}>
      <I18nextProvider i18n={i18n}>
        <StyletronProvider value={engine}>
          <BaseProvider theme={theme}>
            <Router>
              <App />
            </Router>
          </BaseProvider>
        </StyletronProvider>
      </I18nextProvider>
    </ApolloProvider>
  </ErrorBoundary>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
