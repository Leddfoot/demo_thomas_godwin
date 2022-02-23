import React from 'react'

 const Display =(props)=>{
    return (
       <div>
       <p>Last Sound Played: </p><p id="display">{props.soundPlayed}</p>
        </div>
    )
}

export default Display