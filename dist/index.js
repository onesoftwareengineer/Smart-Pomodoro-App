import * as __SNOWPACK_ENV__ from './env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from './pkg/react.js';
import ReactDOM from './pkg/react-dom.js';
import GlobalStyles from './styles/GlobalStyles.js';
import App from './App.js';
import { PomodoroContextWrapper } from './context/pomodorosContext.js';
import { UserContextWrapper } from './context/userContext.js';
import { jsx as __cssprop } from "./pkg/@emotion/react.js";
ReactDOM.render(__cssprop(React.StrictMode, null, __cssprop(GlobalStyles, null), __cssprop(UserContextWrapper, null, __cssprop(PomodoroContextWrapper, null, __cssprop(App, null)))), document.getElementById('root')); // Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement

if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
}