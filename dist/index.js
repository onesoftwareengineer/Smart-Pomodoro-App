import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from '../_snowpack/pkg/react.js';
import ReactDOM from '../_snowpack/pkg/react-dom.js';
import GlobalStyles from './styles/GlobalStyles.js';
import App from './App.js';
import { PomodoroContextWrapper } from './context/pomodorosContext.js';
import { UserContextWrapper } from './context/userContext.js';
ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(GlobalStyles, null), /*#__PURE__*/React.createElement(UserContextWrapper, null, /*#__PURE__*/React.createElement(PomodoroContextWrapper, null, /*#__PURE__*/React.createElement(App, null)))), document.getElementById('root')); // Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement

if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
}