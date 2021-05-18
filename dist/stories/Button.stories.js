import React from '../pkg/react.js';
import { Button } from './Button.js';
import { jsx as __cssprop } from "../pkg/@emotion/react.js";
export default {
  title: 'Atomic Design/Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};

const Template = args => __cssprop(Button, args);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button'
};
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button'
};
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button'
};
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button'
};