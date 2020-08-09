import React from 'react'

const Input = (props) => {
    return (
        <div className={props.divStyle}>
            <input type={props.type} name={props.name} value={props.value} className={props.inputStyle} />
        </div>
    )
}

export default Input