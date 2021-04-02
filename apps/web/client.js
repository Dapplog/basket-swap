import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { ConnectedRouter } from 'connected-react-router';
import { Popover } from './src/shared/popover/Popover';
import App from './App';
import configureStore, { history } from 'core/redux/store/configureStore';
import { theme, styles, zindex } from 'design';
import { Provider } from 'react-redux';
import 'core/language/i18n';

const store = configureStore();

const withThemes = (palette, version) => ({
  ...theme[palette],
  styles: styles[version],
  zindex,
});

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={withThemes('light', 'alpha')}>
        <HelmetProvider>
          <Popover />
          <App />
        </HelmetProvider>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
