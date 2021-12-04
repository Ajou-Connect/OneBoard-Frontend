import React from 'react'

interface SetProps{
    cnt : number
}

function Set(props:SetProps) {
    return (
        <div style={{ marginBottom: '20px' }}>
            <div style={{ marginBottom: '10px' }}>
                <span className="qSpan">질문{props.cnt}</span>
                <input type="text" id = "qQ"/>
            </div>
            <div>
                <span className="qSpan" >정답{props.cnt}</span>
                <input type="text" id = "aQ"/>
            </div>
        </div>
    )
}

export default Set