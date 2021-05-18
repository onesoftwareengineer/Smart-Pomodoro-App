function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../pkg/react.js';
import './button.css.proxy.js';
import { jsx as __cssprop } from "../pkg/@emotion/react.js";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return __cssprop("button", _extends({
    type: "button",
    className: ['storybook-button', `storybook-button--${size}`, mode].join(' '),
    style: {
      backgroundColor
    }
  }, props), label);
};