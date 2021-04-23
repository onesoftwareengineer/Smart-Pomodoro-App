import React, { useState, useEffect } from "react";
const UserContext = React.createContext();
const dailyWorkTimeMs = 8 * 25 * 2 * 60 * 1000;
const dailyPauseTimeMs = (60 + (8 * 2 - 2) * 5) * 60 * 1000;

const UserContextProvider = ({ children }) => {
  const [pauseTimeLeft, setPauseTimeLeft] = useState(0);
  const [workTimeLeft, setWorkTimeLeft] = useState(0);
  const [lastToggleTime, setLastToggleTime] = useState(0);
  const [workTimerIsActive, toggleWorkTimerIsActive] = useState(false);

  useEffect(() => {
    const lsPauseTimeLeft = localStorage.getItem("pauseTimeLeft");
    const lsWorkTimeLeft = localStorage.getItem("workTimeLeft");
    const lsLastToggleTime = localStorage.getItem("lastToggleTime");
    const lsWorkTimerIsActive = localStorage.getItem("workTimerIsActive");

    if (lsPauseTimeLeft && lsWorkTimeLeft && lsLastToggleTime && lsWorkTimerIsActive) {
      setPauseTimeLeft(parseInt(lsPauseTimeLeft, 10));
      setWorkTimeLeft(parseInt(lsWorkTimeLeft, 10));
      setLastToggleTime(parseInt(lsLastToggleTime, 10));
      toggleWorkTimerIsActive(lsWorkTimerIsActive === "true" ? true : false);
    } else {
      setPauseTimeLeft(dailyPauseTimeMs);
      setWorkTimeLeft(dailyWorkTimeMs);
      setLastToggleTime(Date.now());
      toggleWorkTimerIsActive(true);
    }
  }, []);

  const startWork = () => {
    localStorage.setItem("workTimerIsActive", !workTimerIsActive);
    toggleWorkTimerIsActive(!workTimerIsActive);

    const currentTimeInSeconds = Date.now();
    const lapsedSeconds = currentTimeInSeconds - lastToggleTime;
    localStorage.setItem("pauseTimeLeft", pauseTimeLeft - lapsedSeconds);
    setPauseTimeLeft(pauseTimeLeft - lapsedSeconds);

    localStorage.setItem("lastToggleTime", currentTimeInSeconds);
    setLastToggleTime(currentTimeInSeconds);
  };

  const startPause = () => {
    localStorage.setItem("workTimerIsActive", !workTimerIsActive);
    toggleWorkTimerIsActive(!workTimerIsActive);

    const currentTimeInSeconds = Date.now();
    const lapsedSeconds = currentTimeInSeconds - lastToggleTime;
    localStorage.setItem("workTimeLeft", workTimeLeft - lapsedSeconds);
    setWorkTimeLeft(workTimeLeft - lapsedSeconds);

    localStorage.setItem("lastToggleTime", currentTimeInSeconds);
    setLastToggleTime(currentTimeInSeconds);
  };

  return (
    <UserContext.Provider
      value={{
        workTimerIsActive,
        startWork,
        startPause,
        workTimeLeft,
        pauseTimeLeft,
        lastToggleTime,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
