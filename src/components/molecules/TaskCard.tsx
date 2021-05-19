import tw, { css } from 'twin.macro'
import React, { useState, useEffect, useContext } from 'react'
import type { individualPomodoroType } from '../../context/pomodorosContext'
import { UserContext } from '../../context/userContext'
import applauseSoundUrl from '../../assets/sounds/applause.mp3'
const applauseSound = new Audio(applauseSoundUrl)
import clickSoundUrl from '../../assets/sounds/click.mp3'
const clickSound = new Audio(clickSoundUrl)

//type
type CardProps = React.HTMLAttributes<HTMLElement> & {
  individualPomodoro: individualPomodoroType
  startPomodoro: (id: string) => void
  stopPomodoro: (id: string) => void
  finishPomodoro: (id: string) => void
}

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
`

//component
export const Card = ({
  individualPomodoro,
  startPomodoro,
  stopPomodoro,
  finishPomodoro,
}: CardProps): JSX.Element => {
  const { userState } = useContext(UserContext)

  //timer will count till it reaches over 25 minunes (one pomodoro), after that it calls finishPomodoro
  useEffect(() => {
    if (individualPomodoro.runningPomodoroStartedAt !== null) {
      const intervalId = setInterval(() => {
        const totalMSecondsPassed = //@ts-ignore
          new Date() - //@ts-ignore
          individualPomodoro.runningPomodoroStartedAt +
          individualPomodoro.pausedPomodoroMSecondsPassed
        console.log(totalMSecondsPassed)
        if (totalMSecondsPassed > 25 * 60 * 1000) {
          //if sounds are on, trigger pomodoro finish sound
          if (userState.soundsAreOn) {
            applauseSound.play()
          }
          //if notifications are on, trigger pomodoro finish notification
          if (
            userState.notificationsAreOn &&
            Notification.permission === 'granted'
          ) {
            var notification = new Notification(
              'All right, you finished yet another Pomodoro! Keep going forward.',
            )
          }
          //update state
          finishPomodoro(individualPomodoro.id)
        }
      }, 1000)
      return () => clearInterval(intervalId)
    }
  }, [individualPomodoro.runningPomodoroStartedAt, userState])

  const onClick = () => {
    console.log(individualPomodoro, Notification.permission)
    //if card is clicked and isn't running, start pomodoro
    if (individualPomodoro.runningPomodoroStartedAt === null) {
      if (userState.soundsAreOn) {
        clickSound.play()
      }
      if (
        userState.notificationsAreOn &&
        Notification.permission === 'granted'
      ) {
        var notification = new Notification(
          `For the next 25 mins focus your mind on "${individualPomodoro.description}".`,
        )
      }
      startPomodoro(individualPomodoro.id)
    }
    //if card is clicked and running, it will be stopped
    else if (individualPomodoro.runningPomodoroStartedAt !== null) {
      stopPomodoro(individualPomodoro.id)
    }
  }

  return (
    <div
      tw="w-1/5 h-2/5 ml-10 shadow relative cursor-pointer"
      onClick={onClick}
    >
      <div
        style={{
          backgroundImage: `url(${individualPomodoro.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
        tw="h-2/3 w-full"
      />
      <div tw="bg-blue-400 px-3 text-xs text-white h-1/3 relative flex items-center">
        {individualPomodoro.runningPomodoroStartedAt !== null && (
          <div css={[linePreloader]}></div>
        )}
        <div tw="w-7 h-7 bg-gray-100 absolute rounded-full text-blue-400 flex items-center justify-center font-semibold -top-3 -left-3">
          {individualPomodoro.quantity}
        </div>
        {individualPomodoro.description}
      </div>
    </div>
  )
}
