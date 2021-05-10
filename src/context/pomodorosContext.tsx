import React, { useState, useReducer } from 'react'
import type { ReactNode } from 'react'
import { generateSkinnerReward } from '../utils/skinnerbox'

//initial state
type pomodoroStateType = {
  pomodorosPlannedToday: number
  pomodorosFinishedToday: number
  rewardCoinsToday: number
  pomodorosArray: individualPomodoroType[]
}

export type individualPomodoroType = {
  id: string
  imageUrl: string
  description: string
  quantity: number
  pausedPomodoroMSecondsPassed: number
  runningPomodoroStartedAt: Date | null
}

const initialState: pomodoroStateType = {
  pomodorosPlannedToday: 21,
  pomodorosFinishedToday: 0,
  rewardCoinsToday: 0,
  pomodorosArray: [
    {
      id: '1',
      imageUrl:
        'https://miro.medium.com/max/4000/1*9eMyWLYOqU5aqBtVoFoi3Q.jpeg',
      description: 'Invat despre Typescript',
      quantity: 2,
      runningPomodoroStartedAt: null,
      pausedPomodoroMSecondsPassed: 0,
    },
    {
      id: '2',
      imageUrl:
        'https://cms-assets.tutsplus.com/uploads/users/30/posts/33545/preview_image/tailwind-pre.png',
      description: 'Invat despre Tailwind chestiuni avansate',
      quantity: 2,
      runningPomodoroStartedAt: null,
      pausedPomodoroMSecondsPassed: 0,
    },
    {
      id: '3',
      imageUrl:
        'https://worldfinancialreview.com/wp-content/uploads/2020/02/growth-hacking-2.jpg',
      description: 'Lucrez la proiectele de growth hacking / recruiting',
      quantity: 2,
      runningPomodoroStartedAt: null,
      pausedPomodoroMSecondsPassed: 0,
    },
    {
      id: '4',
      imageUrl:
        'https://images.newscientist.com/wp-content/uploads/2019/05/20111917/frank-bienewald-alamy-stock-photo.png',
      description: 'Programez la proiectele hobby',
      quantity: 3,
      runningPomodoroStartedAt: null,
      pausedPomodoroMSecondsPassed: 0,
    },
    {
      id: '5',
      imageUrl:
        'https://www.metro.ro/~/media/RO-Metro/image/corporate-image/despre-metro-wide.jpg?h=400&la=ro-RO&w=940',
      description: 'Lucrez la proiectul MMetrics',
      quantity: 12,
      runningPomodoroStartedAt: null,
      pausedPomodoroMSecondsPassed: 0,
    },
  ],
}

//reducer
type pomodoroActionType = {
  type: string
  id: string
}

function reducer(
  state: pomodoroStateType,
  action: pomodoroActionType,
): pomodoroStateType {
  switch (action.type) {
    case 'stop':
      return {
        ...state,
        pomodorosArray: state.pomodorosArray.map(individualPomodoro => {
          //if pomodoro to be stopped found, then save time left and set started at to null
          if (individualPomodoro.id === action.id) {
            return {
              ...individualPomodoro,
              pausedPomodoroMSecondsPassed:
                individualPomodoro.pausedPomodoroMSecondsPassed + //@ts-ignore
                (new Date() - individualPomodoro.runningPomodoroStartedAt),
              runningPomodoroStartedAt: null,
            }
          }
          return individualPomodoro
        }),
      }

    case 'start':
      return {
        ...state,
        pomodorosArray: state.pomodorosArray.map(individualPomodoro => {
          //if another pomodoro is running, stop it and save remaning seconds
          if (
            individualPomodoro.id !== action.id &&
            individualPomodoro.runningPomodoroStartedAt !== null
          ) {
            return {
              ...individualPomodoro,
              pausedPomodoroMSecondsPassed:
                individualPomodoro.pausedPomodoroMSecondsPassed + //@ts-ignore
                (new Date() - individualPomodoro.runningPomodoroStartedAt),
              runningPomodoroStartedAt: null,
            }
          }
          //if pomodoro to be started found, add to it start date
          //if it has seconds left, don't change it, they will be used in component
          else if (individualPomodoro.id === action.id) {
            return {
              ...individualPomodoro,
              runningPomodoroStartedAt: new Date(),
            }
          } else return individualPomodoro
        }),
      }

    case 'finish':
      return {
        ...state,
        pomodorosFinishedToday: state.pomodorosFinishedToday + 1,
        rewardCoinsToday: state.rewardCoinsToday + generateSkinnerReward(80),
        pomodorosArray: state.pomodorosArray.map(individualPomodoro => {
          if (individualPomodoro.id === action.id) {
            return {
              ...individualPomodoro,
              //decrement number of remaining pomodoros for that task
              quantity: individualPomodoro.quantity - 1,
              //set started at to null
              runningPomodoroStartedAt: null,
              //set timeleft to 0
              pausedPomodoroMSecondsPassed: 0,
            }
          }
          return individualPomodoro
        }),
      }

    default:
      return state
  }
}

//pomodoro context
export type pomodoroContextType = {
  pomodoroState: pomodoroStateType
  pomodoroDispatch: ({ type, id }: pomodoroActionType) => void
}

export const PomodoroContext = React.createContext<pomodoroContextType>(
  {} as pomodoroContextType,
)

//component
type PomodoroContextWrapperPropsType = {
  children: ReactNode
}

export const PomodoroContextWrapper = ({
  children,
}: PomodoroContextWrapperPropsType): JSX.Element => {
  const [pomodoroState, pomodoroDispatch] = useReducer(reducer, initialState)

  return (
    <PomodoroContext.Provider value={{ pomodoroState, pomodoroDispatch }}>
      {children}
    </PomodoroContext.Provider>
  )
}
