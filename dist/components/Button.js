import _styled2 from "../pkg/styled-components.js";
import { css as _css } from "../pkg/styled-components.js";

const Button = _styled2.button.withConfig({
  displayName: "Button",
  componentId: "sc-7rrgjn-0"
})(({
  variant,
  isSmall
}) => [// The common button styles
{
  "paddingLeft": "2rem",
  "paddingRight": "2rem",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "borderRadius": "0.25rem",
  ":focus": {
    "outline": "2px solid transparent",
    "outlineOffset": "2px"
  },
  "--tw-translate-x": "0",
  "--tw-translate-y": "0",
  "--tw-rotate": "0",
  "--tw-skew-x": "0",
  "--tw-skew-y": "0",
  "--tw-scale-x": "1",
  "--tw-scale-y": "1",
  "transform": "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
  "transitionDuration": "75ms"
}, // Use the variant grouping feature to add variants to multiple classes
{
  ":hover, :focus": {
    "--tw-scale-x": "1.05",
    "--tw-scale-y": "1.05",
    "--tw-text-opacity": "1",
    "color": "rgba(251, 191, 36, var(--tw-text-opacity))"
  }
}, // Use props to conditionally style your components
variant === 'primary' && {
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(0, 0, 0, var(--tw-bg-opacity))",
  "--tw-text-opacity": "1",
  "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(0, 0, 0, var(--tw-border-opacity))"
}, // Combine regular css with tailwind classes within backticks
variant === 'secondary' && [_css(["box-shadow:0 0.1em 0 0 rgba(0,0,0,0.25);"]), {
  "borderWidth": "2px",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(217, 119, 6, var(--tw-border-opacity))"
}], // Conditional props can be added
isSmall ? {
  "fontSize": "0.875rem",
  "lineHeight": "1.25rem"
} : {
  "fontSize": "1.125rem",
  "lineHeight": "1.75rem"
}, // The theme import can supply values from your tailwind.config.js
_css(["color:", ";"], "#fff")]);

export default Button;