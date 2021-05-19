import React, { useReducer, createContext } from '../pkg/react.js'; //user initial state

const initialState = {
  pomodoroMaxValue: 4,
  notificationsAreOn: false,
  soundsAreOn: false,
  skinnerBoxIsOn: false
}; // user state reducer

function reducer(state, action) {
  switch (action.type) {
    case 'toggle sounds':
      return { ...state,
        soundsAreOn: !state.soundsAreOn
      };

    case 'toggle notifications':
      //if user toggles notifications on and he didn't allow these, he is prompted with request to turn these on
      if (state.notificationsAreOn === false && Notification.permission !== 'granted') {
        Notification.requestPermission();
      }

      return { ...state,
        notificationsAreOn: !state.notificationsAreOn
      };

    case 'toggle skinner':
      return { ...state,
        skinnerBoxIsOn: !state.skinnerBoxIsOn
      };

    case 'update reward':
      {
        if (action.value !== undefined) {
          return { ...state,
            pomodoroMaxValue: action.value
          };
        } else {
          return state;
        }
      }

    default:
      return state;
  }
} // user context


export const UserContext = /*#__PURE__*/createContext({}); // user wrapper component

export const UserContextWrapper = ({
  children
}) => {
  const [userState, userDispatch] = useReducer(reducer, initialState);
  return /*#__PURE__*/React.createElement(UserContext.Provider, {
    value: {
      userState,
      userDispatch
    }
  }, children);
};