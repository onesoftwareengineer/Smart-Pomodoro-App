import _styled6 from "../../pkg/styled-components.js";
import _styled5 from "../../pkg/styled-components.js";
import _styled4 from "../../pkg/styled-components.js";
import _styled3 from "../../pkg/styled-components.js";
import _styled2 from "../../pkg/styled-components.js";
import _styled from "../../pkg/styled-components.js";
import { css as _css } from "../../pkg/styled-components.js";
import React, { useEffect, useContext } from '../../pkg/react.js';
import { UserContext } from '../../context/userContext.js';
import applauseSoundUrl from '../../assets/sounds/applause.mp3.proxy.js';
const applauseSound = new Audio(applauseSoundUrl);
import clickSoundUrl from '../../assets/sounds/click.mp3.proxy.js';
const clickSound = new Audio(clickSoundUrl); //type

//style
const linePreloader = _css(["width:100%;height:1.5px;background:linear-gradient(to right,#1e3a8a,#1e3a8a);background-color:#f3f4f6;position:absolute;top:0;left:0;right:0;margin:auto;border-radius:4px;background-size:20%;background-repeat:repeat-y;background-position:-20% 0;animation:scroll 1.7s ease-in-out infinite;@keyframes scroll{50%{background-size:80%;}100%{background-position:125% 0%;}}"]); //component


var _StyledDiv = _styled("div").withConfig({
  displayName: "TaskCard___StyledDiv",
  componentId: "yftq1c-0"
})({
  "width": "20%",
  "height": "40%",
  "marginLeft": "2.5rem",
  "--tw-shadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  "position": "relative",
  "cursor": "pointer"
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "TaskCard___StyledDiv2",
  componentId: "yftq1c-1"
})({
  "height": "66.666667%",
  "width": "100%"
});

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "TaskCard___StyledDiv3",
  componentId: "yftq1c-2"
})({
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(96, 165, 250, var(--tw-bg-opacity))",
  "paddingLeft": "0.75rem",
  "paddingRight": "0.75rem",
  "fontSize": "0.75rem",
  "lineHeight": "1rem",
  "--tw-text-opacity": "1",
  "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
  "height": "33.333333%",
  "position": "relative",
  "display": "flex",
  "alignItems": "center"
});

var _StyledDiv4 = _styled("div").withConfig({
  displayName: "TaskCard___StyledDiv4",
  componentId: "yftq1c-3"
})(["", ""], p => p._css2);

var _StyledDiv5 = _styled("div").withConfig({
  displayName: "TaskCard___StyledDiv5",
  componentId: "yftq1c-4"
})({
  "width": "1.75rem",
  "height": "1.75rem",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(243, 244, 246, var(--tw-bg-opacity))",
  "position": "absolute",
  "borderRadius": "9999px",
  "--tw-text-opacity": "1",
  "color": "rgba(96, 165, 250, var(--tw-text-opacity))",
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "center",
  "fontWeight": "600",
  "top": "-0.75rem",
  "left": "-0.75rem"
});

export const Card = ({
  individualPomodoro,
  startPomodoro,
  stopPomodoro,
  finishPomodoro
}) => {
  const {
    userState
  } = useContext(UserContext); //timer will count till it reaches over 25 minunes (one pomodoro), after that it calls finishPomodoro

  useEffect(() => {
    if (individualPomodoro.runningPomodoroStartedAt !== null) {
      const intervalId = setInterval(() => {
        const totalMSecondsPassed = //@ts-ignore
        new Date() - //@ts-ignore
        individualPomodoro.runningPomodoroStartedAt + individualPomodoro.pausedPomodoroMSecondsPassed;
        console.log(totalMSecondsPassed);

        if (totalMSecondsPassed > 1 * 5 * 1000) {
          console.log(userState);

          if (userState.soundsAreOn) {
            applauseSound.play();
          }

          finishPomodoro(individualPomodoro.id);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [individualPomodoro.runningPomodoroStartedAt, userState]);

  const onClick = () => {
    //if card is clicked and isn't running, start pomodoro
    if (individualPomodoro.runningPomodoroStartedAt === null) {
      if (userState.soundsAreOn) {
        clickSound.play();
      }

      startPomodoro(individualPomodoro.id);
    } //if card is clicked and running, it will be stopped
    else if (individualPomodoro.runningPomodoroStartedAt !== null) {
        stopPomodoro(individualPomodoro.id);
      }
  };

  return /*#__PURE__*/React.createElement(_StyledDiv, {
    onClick: onClick
  }, /*#__PURE__*/React.createElement(_StyledDiv2, {
    style: {
      backgroundImage: `url(${individualPomodoro.imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }
  }), /*#__PURE__*/React.createElement(_StyledDiv3, null, individualPomodoro.runningPomodoroStartedAt !== null && /*#__PURE__*/React.createElement(_StyledDiv4, {
    _css2: [linePreloader]
  }), /*#__PURE__*/React.createElement(_StyledDiv5, null, individualPomodoro.quantity), individualPomodoro.description));
};