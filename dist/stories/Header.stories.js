import React from '../pkg/react.js';
import { Header } from './Header.js';
import { jsx as __cssprop } from "../pkg/@emotion/react.js";
export default {
  title: 'Example/Header',
  component: Header
};

const Template = args => __cssprop(Header, args);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {}
};
export const LoggedOut = Template.bind({});
LoggedOut.args = {};