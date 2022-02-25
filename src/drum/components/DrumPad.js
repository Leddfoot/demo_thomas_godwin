import React from 'react'

const DrumPad = (props) => {
    
    function playSound (){
        props.playSound(null, props.letter)
        console.log(545454)
    }


    return (
        <button onClick={playSound} className="pushable" id={props.name}>
            <span className='front'>{props.letter}</span><audio className="clip" id={props.letter} src={props.link}></audio>
        </button>
    )
}

export default DrumPad



