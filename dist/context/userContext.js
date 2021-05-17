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
      //if user wants to turn notifications on and he didn't allow these to run he is prompted with request to turn these on
      if (state.notificationsAreOn === false && Notification.permission !== 'granted') {
        Notification.requestPermission().then(function (permission) {
          //if he turn them on, then notifications will also be turned on in the app
          if (permission === 'granted') {
            return { ...state,
              notificationsAreOn: !state.notificationsAreOn
            }; //if he doesn't turn these on, then notifications will remain off
          } else return state;
        });
      } else {
        return { ...state,
          notificationsAreOn: !state.notificationsAreOn
        };
      }

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