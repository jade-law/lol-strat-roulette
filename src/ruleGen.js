import ingame_rules from './ingame_rules'
import pregame_rules from './pregame_rules.js'

function pregameGen() {
    let rules = []
    let i = 3
    while (i > 0) {
        let rule = pregame_rules[Math.floor(Math.random() * pregame_rules.length)]
        if (!rules.includes(rule)) {
            rules.push(rule)
            i = i - 1
        }
    }
    return rules
}

function ingameGen() {
    return ingame_rules[Math.floor(Math.random() * ingame_rules.length)]
}

export { pregameGen, ingameGen }