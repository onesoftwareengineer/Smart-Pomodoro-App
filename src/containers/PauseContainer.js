import React, { useContext, useState, useEffect } from "react";
import { WorkDiv } from "../components";
import { UserContext } from '../context/UserContext'
import { secondsToHms } from '../utils/time'

export default function PauseContainer({ isRunning }) {
  const { pauseTimeLeft, lastToggleTime, workTimeLeft } = useContext(UserContext);
  const [timeLeft, setTimeLeft] = useState(pauseTimeLeft);

  useEffect(() => {
    let interval 
    
    if(isRunning)
    interval = setInterval(() => {
      const currentTime = Date.now()
      const elapsedTime = currentTime - lastToggleTime  
      setTimeLeft(pauseTimeLeft - elapsedTime)
    }, 1000)
    else if(!isRunning) {
      clearInterval(interval)
      setTimeLeft(pauseTimeLeft)
    }

    return () => clearInterval(interval)
  }, [isRunning, pauseTimeLeft, lastToggleTime, workTimeLeft]);

  return (
    <WorkDiv
      background={
        "https://images.unsplash.com/photo-1472920149435-570deb57474a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
      }
      isRunning={isRunning}
    >
      <WorkDiv.UpperPart>
      <WorkDiv.Timer>
      {
        (workTimeLeft && pauseTimeLeft && lastToggleTime) ?
        secondsToHms(Math.floor(timeLeft/1000)) 
        : 
        <div class="spinner-border text-secondary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      }
      </WorkDiv.Timer>
        <WorkDiv.CallToAction>
        Take a break, defocus eyesight and move a bit.
        </WorkDiv.CallToAction>
      </WorkDiv.UpperPart>
    </WorkDiv>
  );
}