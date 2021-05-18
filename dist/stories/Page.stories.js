import React from '../pkg/react.js';
import { Page } from './Page.js';
import * as HeaderStories from './Header.stories.js';
import { jsx as __cssprop } from "../pkg/@emotion/react.js";
export default {
  title: 'Example/Page',
  component: Page
};

const Template = args => __cssprop(Page, args);

export const LoggedIn = Template.bind({});
LoggedIn.args = { ...HeaderStories.LoggedIn.args
};
export const LoggedOut = Template.bind({});
LoggedOut.args = { ...HeaderStories.LoggedOut.args
};