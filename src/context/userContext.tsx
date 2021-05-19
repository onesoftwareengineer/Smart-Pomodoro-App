import React, { useReducer, createContext } from 'react'

//user initial state
type userStateType = {
  pomodoroMaxValue: number
  notificationsAreOn: boolean
  soundsAreOn: boolean
  skinnerBoxIsOn: boolean
}

const initialState: userStateType = {
  pomodoroMaxValue: 4,
  notificationsAreOn: false,
  soundsAreOn: false,
  skinnerBoxIsOn: false,
}

// user state reducer
type userActionType = {
  type: string
  value?: number
}

function reducer(state: userStateType, action: userActionType): userStateType {
  switch (action.type) {
    case 'toggle sounds':
      return {
        ...state,
        soundsAreOn: !state.soundsAreOn,
      }

    case 'toggle notifications':
      //if user toggles notifications on and he didn't allow these, he is prompted with request to turn these on
      if (
        state.notificationsAreOn === false &&
        Notification.permission !== 'granted'
      ) {
        Notification.requestPermission();
      }
      return {
        ...state,
        notificationsAreOn: !state.notificationsAreOn,
      }

    case 'toggle skinner':
      return {
        ...state,
        skinnerBoxIsOn: !state.skinnerBoxIsOn,
      }

    case 'update reward': {
      if (action.value !== undefined) {
        return {
          ...state,
          pomodoroMaxValue: action.value,
        }
      } else {
        return state
      }
    }

    default:
      return state
  }
}

// user context
export type userContextType = {
  userState: userStateType
  userDispatch: ({ type, value }: userActionType) => void
}

export const UserContext = createContext<userContextType>({} as userContextType)

// user wrapper component
type userContextWrapperType = {
  children: React.ReactNode
}

export const UserContextWrapper = ({
  children,
}: userContextWrapperType): JSX.Element => {
  const [userState, userDispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  )
}
