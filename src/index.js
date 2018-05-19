import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Routes from './routes';
import store from './stores';
import { injectGlobal } from 'styled-components';

injectGlobal`
body {
  margin: 0;
  padding: 0;
}
*{
  box-sizing:border-box;
}
html, body, #root {
height: 100%
}
`

ReactDOM.render(
  <Provider store={store}>
    <Routes /> 
  </Provider>,
  document.getElementById('root')
);