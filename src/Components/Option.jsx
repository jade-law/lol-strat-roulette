import React from 'react'
import Input from './Input'

const Option = (props) => {
    return (
        <div className='opts-wrapper'>
            <label className='rule-gen-opts-container-lbl'>
                <Input type='checkbox' name='rule-gen' value={props.value} inputStyle={props.inputStyle} />
                <span>{props.text}</span>
            </label>
        </div>
    )
}

export default Option