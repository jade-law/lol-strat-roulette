import React from 'react'
import FieldSet from './FieldSet'

const CustomForm = () => {
    return (
        <form>
            <div className='flex-center-container'>
                <legend class='legend-heading'>When do you want to generate rules?</legend>
                <legend class='legend-sub'>Choose 1 or both options</legend>
                <FieldSet />
            </div>
        </form>
    )
}

export default CustomForm