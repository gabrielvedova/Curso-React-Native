import React from 'react'
import { Text } from 'react-native'

import Filho from './ComponenteFilho'

export default props => {
    let x = 13
    let y = 1000

    return (
        <Filho a={x} b={y} />
    )
}