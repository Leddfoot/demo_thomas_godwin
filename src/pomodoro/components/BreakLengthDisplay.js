import { useContext } from "react"
import TimerContext from "../context/TimerContext"
import Button from '../../components/UI/Button/Button'

const BreakLengthDisplay =()=> {

const { incrementBreakLength, decrementBreakLength } = useContext(TimerContext)
const {timerState} = useContext(TimerContext);
const breakLength = timerState.breakLength 

    return (
      <div className="break-duration-container">
      <hr/>
      <label id="break-label">Break Duration: </label>
      <label id="break-length">{breakLength/60} minutes</label>
      <Button id="break-decrement" onClick={decrementBreakLength} >Shorter Break</Button>
      <Button id="break-increment" onClick={incrementBreakLength} >Longer Break</Button>
      </div>  
    )
}

export default BreakLengthDisplay