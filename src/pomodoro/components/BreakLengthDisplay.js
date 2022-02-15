import { useContext } from "react"
import TimerContext from "../context/TimerContext"

const BreakLengthDisplay =()=> {

const { incrementBreakLength, decrementBreakLength } = useContext(TimerContext)
const {timerState} = useContext(TimerContext);
const breakLength = timerState.breakLength 
const breakLengthInMinutes = breakLength/60

    return (
      <div className="break-duration-container">
      <hr/>
      <label id="break-label">Break Duration: </label>
      <label id="break-length">{breakLengthInMinutes}</label><label>{breakLengthInMinutes > 1 ? ' minutes' : ' minute'}</label>
      <button id="break-decrement" onClick={decrementBreakLength} >Shorter Break</button>
      <button id="break-increment" onClick={incrementBreakLength} >Longer Break</button>
      </div>  
    )
}

export default BreakLengthDisplay