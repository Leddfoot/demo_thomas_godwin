import { useContext } from 'react'
import TimerContext from '../context/TimerContext'
import Button from '../../components/UI/Button/Button'

const SessionLengthDisplay =()=> {

  const { incrementSessionLength, decrementSessionLength, timerState } = useContext(TimerContext)
  const sessionLength = timerState.sessionLength
  
    return (
      <div className='session-duration-container'>
      <hr/>
      <label id="session-label" >Session Duration: </label>
      <label id="session-length">{sessionLength/60} minutes</label>
      <Button id="session-decrement" onClick={decrementSessionLength} >Shorter Session</Button>
      <Button id="session-increment" onClick={incrementSessionLength}>Longer Session</Button>
      <hr/>
      </div>  
    )
}

export default SessionLengthDisplay