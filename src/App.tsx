import React, { useContext, useEffect } from 'react'
import { PomodoroContext } from './context/pomodorosContext'
import tw, { css } from 'twin.macro'
import logo from './assets/images/logo.png'
import { Card } from './components/molecules/TaskCard'
import type { pomodoroContextType } from './context/pomodorosContext'
import { UserContext } from './context/userContext'
import type { userContextType } from './context/userContext'

//component
const App = (): JSX.Element => {
  const { pomodoroState, pomodoroDispatch } = useContext<pomodoroContextType>(
    PomodoroContext,
  )
  const { userState, userDispatch } = useContext<userContextType>(UserContext)

  return (
    <>
      {/* header */}
      <div tw="w-full h-10 flex items-center justify-center relative">
        {/* logo */}
        <div tw="bg-blue-900 h-full w-10 flex items-center justify-center absolute left-0">
          <img src={logo} tw="w-4 h-4" />
        </div>

        <div tw="max-w-5xl w-full h-full flex items-center">
          {/* brand name and app version*/}
          <div tw="text-sm font-medium text-blue-900">
            Pomodoro <span tw="text-blue-400">21.0</span>
          </div>
        </div>
      </div>

      {/* main */}
      {/* quote and instruction section */}
      <div tw="bg-gray-100 w-full h-screen max-h-40 flex justify-center items-center">
        <div tw="max-w-5xl w-full flex">
          {/* hr */}
          <div tw="border-l-2 border-blue-400 h-4 mt-2"></div>

          <div tw="pl-2 w-1/2">
            {/* call to action */}
            <div tw="text-blue-900 font-medium text-lg">
              You can break today’s plan into small steps and take the first
              step right away.
            </div>
            {/* inspired by author */}
            <div tw="text-gray-300 text-xs font-light pt-2">
              Inspired by Indira Gandhi
            </div>
          </div>
        </div>
      </div>

      {/* tasks section */}
      <div
        tw="w-full h-screen max-h-96 flex justify-center pt-10 relative"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(208, 230, 255, 0.9), rgba(223, 238, 255, 0.9)), url('https://i.pinimg.com/originals/3b/7f/57/3b7f574e1e03b7bb3d4c7144763678da.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <div tw="max-w-5xl w-full flex flex-wrap -ml-20">
          {pomodoroState &&
            pomodoroState.pomodorosArray &&
            pomodoroState.pomodorosArray.map((element, index) => {
              if (element.quantity > 0)
                return (
                  <Card
                    key={element.id}
                    individualPomodoro={element}
                    startPomodoro={() =>
                      pomodoroDispatch({ type: 'start', id: element.id })
                    }
                    stopPomodoro={() =>
                      pomodoroDispatch({ type: 'stop', id: element.id })
                    }
                    finishPomodoro={() =>
                      pomodoroDispatch({ type: 'finish', id: element.id })
                    }
                  />
                )
              else return null
            })}
        </div>
        <div tw="absolute right-16 bottom-0 text-xs bg-blue-400 text-white py-2 w-48 text-center">
          {/* 12 pomodoro / 3.5 hrs planned */}
          {pomodoroState.pomodorosPlannedToday -
            pomodoroState.pomodorosFinishedToday}{' '}
          pomodoros left
        </div>
      </div>

      {/* icons and start button */}
      <div tw="bg-white w-full flex justify-center items-center relative">
        <div tw="max-w-5xl w-full flex pt-2 text-xs">
          <div
            css={[
              tw`flex items-center mr-3 text-gray-200 cursor-pointer select-none`,
              userState.skinnerBoxIsOn && tw`text-gray-400`,
            ]}
            onClick={() => userDispatch({ type: 'toggle skinner' })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              tw="fill-current h-3 w-3 mr-1"
            >
              <path
                fillRule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clipRule="evenodd"
              />
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
            </svg>
            rewards
          </div>

          <div
            css={[
              tw`flex items-center mr-3 text-gray-200 cursor-pointer select-none`,
              userState.notificationsAreOn && tw`text-gray-400`,
            ]}
            onClick={() => userDispatch({ type: 'toggle notifications' })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              tw="fill-current h-3 w-3 mr-1"
            >
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
            notifications
          </div>

          <div
            css={[
              tw`flex items-center mr-3 text-gray-200 cursor-pointer select-none`,
              userState.soundsAreOn && tw`text-gray-400`,
            ]}
            onClick={() => userDispatch({ type: 'toggle sounds' })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              tw="fill-current h-3 w-3 mr-1"
            >
              <path
                fillRule="evenodd"
                d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                clipRule="evenodd"
              />
            </svg>
            sound
          </div>
        </div>

        <div tw="absolute right-16 top-0 bg-blue-900 text-white text-xs py-2 w-48 text-center">
          {/* start work */}
          total rewards {pomodoroState.rewardCoinsToday} ron
        </div>
      </div>

      {/* footer */}
    </>
  )
}

export default App
