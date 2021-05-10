import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from './styles/GlobalStyles'
import App from './App'
import { PomodoroContextWrapper } from './context/pomodorosContext'
import { UserContextWrapper } from './context/userContext'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <UserContextWrapper>
      <PomodoroContextWrapper>
        <App />
      </PomodoroContextWrapper>
    </UserContextWrapper>
  </React.StrictMode>,
  document.getElementById('root'),
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
