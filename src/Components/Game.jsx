import React from 'react'
import { pregameGen, ingameGen } from '../ruleGen'
import Heading from './Heading'


function pregameRules() {
    let rules = pregameGen()
    return (rules.map(item => {
        return (<div key={item.key} className='rule-wrapper'>
            <li>{item.rule}</li>
        </div>)
    }))
}

function ingameRules() {
    let newRule = ingameGen()
    return <div key={newRule.key} className='rule-wrapper'>
        <li>{newRule.rule}</li>
    </div>
}

const Game = () => {
    return (
        <div className='gray-container pregame-rules-container'>
            <Heading text='Pregame Rules' />
            <ul>
                <div className='flex-center-container'>
                    {pregameRules()}
                    {/* {ingameRules()} */}
                </div>
            </ul>
        </div>
    )
}

export default Game