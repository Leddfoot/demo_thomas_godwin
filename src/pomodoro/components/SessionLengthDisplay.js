import { useContext } from 'react'
import TimerContext from '../context/TimerContext'

const SessionLengthDisplay =()=> {

  const { incrementSessionLength, decrementSessionLength, timerState } = useContext(TimerContext)
  const sessionLength = timerState.sessionLength
  const sessionLengthInMinutes = sessionLength/60
  
    return (
      <div className='session-duration-container'>
      <hr/>
      <label id="session-label" >Session Duration: </label>
      <label id="session-length">{sessionLengthInMinutes}</label><label>{sessionLengthInMinutes > 1 ? ' minutes' : ' minute'}</label>
      <button id="session-decrement" onClick={decrementSessionLength} >Shorter Session</button>
      <button id="session-increment" onClick={incrementSessionLength}>Longer Session</button>
      <hr/>
      </div>  
    )
}

export default SessionLengthDisplay