import React, { useReducer, createContext } from 'react'

//user initial state
type userInitialStateType = {
  pomodoroMaxValue: number
  notificationsAreOn: boolean
  soundsAreOn: boolean
  skinnerBoxIsOn: boolean
}

const userInitialState: userInitialStateType = {
  pomodoroMaxValue: 4,
  notificationsAreOn: false,
  soundsAreOn: false,
  skinnerBoxIsOn: false,
}

// user state reducer
type userActionType = {
  type: string
  value: number
}

const reducer = (state: userInitialStateType, action: userActionType) => {
  switch (action.type) {
    case 'toggle sounds':
      return {
        ...state,
        soundsAreOn: !state.soundsAreOn,
      }

    case 'tlggle notifications':
      return {
        ...state,
        notificationsAreOn: !state.notificationsAreOn,
      }

    case 'toggle skinner':
      return {
        ...state,
        skinnerBosIsOn: !state.skinnerBoxIsOn,
      }

    case 'update reward': {
      return {
        ...state,
        pomodoroMaxValue: action.value,
      }
    }

    default:
      return state
  }
}

//user state context
type userContextType = {
  userState: userInitialStateType
  userDispatch: ({ type, value }: userActionType) => void
}

const UserContext = createContext<userContextType>({} as userContextType)

//user state wrapper component
type userContextWrapperType = {
  children: React.ReactNode
}

export const UserContextWrapper = ({
  children,
}: userContextWrapperType): JSX.Element => {
  const [userState, userDispatch] = useReducer(reducer, userInitialState)

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  )
}
