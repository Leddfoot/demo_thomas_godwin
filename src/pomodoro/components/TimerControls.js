import { useContext } from "react"
import TimerContext from "../context/TimerContext"
import Button from '../../components/UI/Button/Button'

const TimerControls = () => {

    const { startStop,reset } = useContext(TimerContext)
 
    return (
        <div className="timer-controls">
            <Button id="start_stop" onClick={startStop}>
                Start/Stop Timer
            </Button>

            <Button id="reset" onClick={reset}>Reset</Button>
        </div>
    )
}

export default TimerControls