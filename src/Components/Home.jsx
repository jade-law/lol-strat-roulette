import React from 'react'
import Title from './Title'
import Description from './Description'
import CustomPanel from './CustomPanel'

const Home = () => {
    return (
        <div className='flex-center-container'>
            <Title />
            <Description />
            <CustomPanel />
        </div>
    )
}

export default Home