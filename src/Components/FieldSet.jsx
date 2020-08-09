import React from 'react'
import Option from './Option'
import Input from './Input'

const options = ['Generate champ select and early game rules', 'Generate rules every 4 minutes in game']

const FieldSet = () => {
    return (
        <fieldset>
            <div className='rule-gen-opts-container'>
                <Option value='pregame' inputStyle='hidden' text={options[0]}/>
                <Option value='in-game' inputStyle='hidden' text={options[1]}/>
            </div>
            <Input type='submit' name='startBtn' value='Generate rules!' inputStyle='submit-btn' divStyle='submit-btn-wrapper'/>
        </fieldset>
    )
}

export default FieldSet