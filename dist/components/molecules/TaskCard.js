import { css } from '../../pkg/@emotion/react.js';
import React, { useEffect, useContext } from '../../pkg/react.js';
import { UserContext } from '../../context/userContext.js';
import applauseSoundUrl from '../../assets/sounds/applause.mp3.proxy.js';
const applauseSound = new Audio(applauseSoundUrl);
import clickSoundUrl from '../../assets/sounds/click.mp3.proxy.js';
import { jsx as __cssprop } from "../../pkg/@emotion/react.js";
const clickSound = new Audio(clickSoundUrl); //type

//style
const linePreloader = css`
  width: 100%;
  height: 1.5px;
  background: linear-gradient(to right, #1e3a8a, #1e3a8a);
  //background: linear-gradient(to right, #F3F4F6, #F3F4F6);
  background-color: #f3f4f6;
  //background-color: #60A5FA;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 4px;
  background-size: 20%;
  background-repeat: repeat-y;
  background-position: -20% 0;
  animation: scroll 1.7s ease-in-out infinite;

  @keyframes scroll {
    50% {
      background-size: 80%;
    }
    100% {
      background-position: 125% 0%;
    }
  }
`; //component

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
          //if sounds are on, trigger pomodoro finish sound
          if (userState.soundsAreOn) {
            applauseSound.play();
          } //if notifications are on, trigger pomodoro finish notification


          if (userState.notificationsAreOn && Notification.permission === 'granted') {
            var notification = new Notification('All right, you finished yet another Pomodoro! Keep going forward.');
          } //update state


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

  return __cssprop("div", {
    css: {
      "width": "20%",
      "height": "40%",
      "marginLeft": "2.5rem",
      "--tw-shadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
      "position": "relative",
      "cursor": "pointer"
    },
    onClick: onClick
  }, __cssprop("div", {
    style: {
      backgroundImage: `url(${individualPomodoro.imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    },
    css: {
      "height": "66.666667%",
      "width": "100%"
    }
  }), __cssprop("div", {
    css: {
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
    }
  }, individualPomodoro.runningPomodoroStartedAt !== null && __cssprop("div", {
    css: [linePreloader]
  }), __cssprop("div", {
    css: {
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
    }
  }, individualPomodoro.quantity), individualPomodoro.description));
};