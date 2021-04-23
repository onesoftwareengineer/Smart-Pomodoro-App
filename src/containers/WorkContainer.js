import React, { useRef, useState, useEffect } from "react";
import { useContext } from "react";
import { WorkDiv } from "../components/";
import { UserContext } from "../context/UserContext";
import { secondsToHms } from '../utils/time'

export default function WorkContainer({ isRunning }) {
  const { workTimeLeft, pauseTimeLeft, lastToggleTime } = useContext(UserContext);
  const [timeLeft, setTimeLeft] = useState(workTimeLeft);

  useEffect(() => {
    let interval 
    
    if(isRunning)
    interval = setInterval(() => {
      const currentTime = Date.now()
      const elapsedTime = currentTime - lastToggleTime
      setTimeLeft(workTimeLeft - elapsedTime)
    }, 1000)
    else if(!isRunning) {
      clearInterval(interval)
      setTimeLeft(workTimeLeft)
    }

    return () => clearInterval(interval)
  }, [isRunning, pauseTimeLeft, lastToggleTime, workTimeLeft]);

  return (
    <WorkDiv
      background={
        "https://images.unsplash.com/photo-1596079890701-dd42edf0b7d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
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
            Ignore the noise, focus on your work.
        </WorkDiv.CallToAction>
      </WorkDiv.UpperPart>
      <WorkDiv.Menu>
        <WorkDiv.MenuIcon
          src={require("../images/icon-sound.png")}
          alt="sound"
        />
        <WorkDiv.MenuIcon
          src={require("../images/icon-notifications.png")}
          alt="notifications"
        />
        <WorkDiv.MenuIcon
          src={require("../images/icon-skinner.png")}
          alt="treats"
        />
        <WorkDiv.MenuIcon
          onClick={() => {localStorage.clear(); console.log(localStorage) }}
          src={require("../images/icon-move.png")}
          alt="move alert"
        />
      </WorkDiv.Menu>
    </WorkDiv>
  );
}