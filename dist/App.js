import React, { useContext } from './pkg/react.js';
import { PomodoroContext } from './context/pomodorosContext.js';
import logo from './assets/images/logo.png.proxy.js';
import { Card } from './components/molecules/TaskCard.js';
import { UserContext } from './context/userContext.js';
import { jsx as __cssprop } from "./pkg/@emotion/react.js";

//component
const App = () => {
  const {
    pomodoroState,
    pomodoroDispatch
  } = useContext(PomodoroContext);
  const {
    userState,
    userDispatch
  } = useContext(UserContext);
  return __cssprop(React.Fragment, null, __cssprop("div", {
    css: {
      "width": "100%",
      "height": "2.5rem",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center",
      "position": "relative"
    }
  }, __cssprop("div", {
    css: {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(30, 58, 138, var(--tw-bg-opacity))",
      "height": "100%",
      "width": "2.5rem",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center",
      "position": "absolute",
      "left": "0px"
    }
  }, __cssprop("img", {
    src: logo,
    css: {
      "width": "1rem",
      "height": "1rem"
    }
  })), __cssprop("div", {
    css: {
      "maxWidth": "64rem",
      "width": "100%",
      "height": "100%",
      "display": "flex",
      "alignItems": "center"
    }
  }, __cssprop("div", {
    css: {
      "fontSize": "0.875rem",
      "lineHeight": "1.25rem",
      "fontWeight": "500",
      "--tw-text-opacity": "1",
      "color": "rgba(30, 58, 138, var(--tw-text-opacity))"
    }
  }, "Pomodoro ", __cssprop("span", {
    css: {
      "--tw-text-opacity": "1",
      "color": "rgba(96, 165, 250, var(--tw-text-opacity))"
    }
  }, "21.0")))), __cssprop("div", {
    css: {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(243, 244, 246, var(--tw-bg-opacity))",
      "width": "100%",
      "height": "100vh",
      "maxHeight": "10rem",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center"
    }
  }, __cssprop("div", {
    css: {
      "maxWidth": "64rem",
      "width": "100%",
      "display": "flex"
    }
  }, __cssprop("div", {
    css: {
      "borderLeftWidth": "2px",
      "--tw-border-opacity": "1",
      "borderColor": "rgba(96, 165, 250, var(--tw-border-opacity))",
      "height": "1rem",
      "marginTop": "0.5rem"
    }
  }), __cssprop("div", {
    css: {
      "paddingLeft": "0.5rem",
      "width": "50%"
    }
  }, __cssprop("div", {
    css: {
      "--tw-text-opacity": "1",
      "color": "rgba(30, 58, 138, var(--tw-text-opacity))",
      "fontWeight": "500",
      "fontSize": "1.125rem",
      "lineHeight": "1.75rem"
    }
  }, "You can break today\u2019s plan into small steps and take the first step right away."), __cssprop("div", {
    css: {
      "--tw-text-opacity": "1",
      "color": "rgba(209, 213, 219, var(--tw-text-opacity))",
      "fontSize": "0.75rem",
      "lineHeight": "1rem",
      "fontWeight": "300",
      "paddingTop": "0.5rem"
    }
  }, "Inspired by Indira Gandhi")))), __cssprop("div", {
    css: {
      "width": "100%",
      "height": "100vh",
      "maxHeight": "24rem",
      "display": "flex",
      "justifyContent": "center",
      "paddingTop": "2.5rem",
      "position": "relative"
    },
    style: {
      backgroundImage: "linear-gradient(to bottom, rgba(208, 230, 255, 0.9), rgba(223, 238, 255, 0.9)), url('https://i.pinimg.com/originals/3b/7f/57/3b7f574e1e03b7bb3d4c7144763678da.jpg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'
    }
  }, __cssprop("div", {
    css: {
      "maxWidth": "64rem",
      "width": "100%",
      "display": "flex",
      "flexWrap": "wrap",
      "marginLeft": "-5rem"
    }
  }, pomodoroState && pomodoroState.pomodorosArray && pomodoroState.pomodorosArray.map(element => {
    if (element.quantity > 0) return __cssprop(Card, {
      individualPomodoro: element,
      startPomodoro: () => pomodoroDispatch({
        type: 'start',
        id: element.id
      }),
      stopPomodoro: () => pomodoroDispatch({
        type: 'stop',
        id: element.id
      }),
      finishPomodoro: () => pomodoroDispatch({
        type: 'finish',
        id: element.id
      })
    });else return null;
  })), __cssprop("div", {
    css: {
      "position": "absolute",
      "right": "4rem",
      "bottom": "0px",
      "fontSize": "0.75rem",
      "lineHeight": "1rem",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(96, 165, 250, var(--tw-bg-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
      "paddingTop": "0.5rem",
      "paddingBottom": "0.5rem",
      "width": "12rem",
      "textAlign": "center"
    }
  }, pomodoroState.pomodorosPlannedToday - pomodoroState.pomodorosFinishedToday, ' ', "pomodoros left")), __cssprop("div", {
    css: {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
      "width": "100%",
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "position": "relative"
    }
  }, __cssprop("div", {
    css: {
      "maxWidth": "64rem",
      "width": "100%",
      "display": "flex",
      "paddingTop": "0.5rem",
      "fontSize": "0.75rem",
      "lineHeight": "1rem"
    }
  }, __cssprop("div", {
    css: [{
      "display": "flex",
      "alignItems": "center",
      "marginRight": "0.75rem",
      "--tw-text-opacity": "1",
      "color": "rgba(229, 231, 235, var(--tw-text-opacity))",
      "cursor": "pointer",
      "userSelect": "none"
    }, userState.skinnerBoxIsOn && {
      "--tw-text-opacity": "1",
      "color": "rgba(156, 163, 175, var(--tw-text-opacity))"
    }],
    onClick: () => userDispatch({
      type: 'toggle skinner'
    })
  }, __cssprop("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    css: {
      "fill": "currentColor",
      "height": "0.75rem",
      "width": "0.75rem",
      "marginRight": "0.25rem"
    }
  }, __cssprop("path", {
    fillRule: "evenodd",
    d: "M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z",
    clipRule: "evenodd"
  }), __cssprop("path", {
    d: "M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"
  })), "rewards"), __cssprop("div", {
    css: [{
      "display": "flex",
      "alignItems": "center",
      "marginRight": "0.75rem",
      "--tw-text-opacity": "1",
      "color": "rgba(229, 231, 235, var(--tw-text-opacity))",
      "cursor": "pointer",
      "userSelect": "none"
    }, userState.notificationsAreOn && {
      "--tw-text-opacity": "1",
      "color": "rgba(156, 163, 175, var(--tw-text-opacity))"
    }],
    onClick: () => userDispatch({
      type: 'toggle notifications'
    })
  }, __cssprop("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    css: {
      "fill": "currentColor",
      "height": "0.75rem",
      "width": "0.75rem",
      "marginRight": "0.25rem"
    }
  }, __cssprop("path", {
    fillRule: "evenodd",
    d: "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
    clipRule: "evenodd"
  })), "notifications"), __cssprop("div", {
    css: [{
      "display": "flex",
      "alignItems": "center",
      "marginRight": "0.75rem",
      "--tw-text-opacity": "1",
      "color": "rgba(229, 231, 235, var(--tw-text-opacity))",
      "cursor": "pointer",
      "userSelect": "none"
    }, userState.soundsAreOn && {
      "--tw-text-opacity": "1",
      "color": "rgba(156, 163, 175, var(--tw-text-opacity))"
    }],
    onClick: () => userDispatch({
      type: 'toggle sounds'
    })
  }, __cssprop("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    css: {
      "fill": "currentColor",
      "height": "0.75rem",
      "width": "0.75rem",
      "marginRight": "0.25rem"
    }
  }, __cssprop("path", {
    fillRule: "evenodd",
    d: "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",
    clipRule: "evenodd"
  })), "sound")), __cssprop("div", {
    css: {
      "position": "absolute",
      "right": "4rem",
      "top": "0px",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(30, 58, 138, var(--tw-bg-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
      "fontSize": "0.75rem",
      "lineHeight": "1rem",
      "paddingTop": "0.5rem",
      "paddingBottom": "0.5rem",
      "width": "12rem",
      "textAlign": "center"
    }
  }, "total rewards ", pomodoroState.rewardCoinsToday, " ron")));
};

export default App;