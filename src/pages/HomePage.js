import React, { useState, useContext } from "react"
import WorkContainer from "../containers/WorkContainer"
import PauseContainer from "../containers/PauseContainer"
import { UserContext } from '../context/UserContext'

export default function ({ children }) {
  const { workTimerIsActive, startWork, startPause } = useContext(UserContext)

  return (
    <div className="row no-gutters">
      <div className="col-6" onClick={() => startWork()}>
        <WorkContainer isRunning={workTimerIsActive} />
      </div>
      <div className="col-6" onClick={() => startPause()}>
        <PauseContainer isRunning={!workTimerIsActive} />
      </div>
    </div>
  )
}