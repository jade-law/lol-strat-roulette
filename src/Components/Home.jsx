import React from 'react'
import Heading from './Heading'
import Description from './Description'
import CustomPanel from './CustomPanel'

const Home = () => {
    return (
        <div className='flex-center-container'>
            <Heading text={['League of Legends', <br />, 'Strat Roulette']}/>
            <Description />
            <CustomPanel />
        </div>
    )
}

export default Home