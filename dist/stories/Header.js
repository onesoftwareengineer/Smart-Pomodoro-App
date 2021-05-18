import React from '../pkg/react.js';
import { Button } from './Button.js';
import './header.css.proxy.js';
import { jsx as __cssprop } from "../pkg/@emotion/react.js";
export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount
}) => __cssprop("header", null, __cssprop("div", {
  className: "wrapper"
}, __cssprop("div", null, __cssprop("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  xmlns: "http://www.w3.org/2000/svg"
}, __cssprop("g", {
  fill: "none",
  fillRule: "evenodd"
}, __cssprop("path", {
  d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",
  fill: "#FFF"
}), __cssprop("path", {
  d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",
  fill: "#555AB9"
}), __cssprop("path", {
  d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",
  fill: "#91BAF8"
}))), __cssprop("h1", null, "Acme")), __cssprop("div", null, user ? __cssprop(Button, {
  size: "small",
  onClick: onLogout,
  label: "Log out"
}) : __cssprop(React.Fragment, null, __cssprop(Button, {
  size: "small",
  onClick: onLogin,
  label: "Log in"
}), __cssprop(Button, {
  primary: true,
  size: "small",
  onClick: onCreateAccount,
  label: "Sign up"
})))));