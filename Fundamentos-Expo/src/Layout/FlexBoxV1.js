import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'


export default props => {
    return (
        <View style={style.FlexV1}>
            <Quadrado  cor='#07f'/>
            <Quadrado  cor='#0ff'/>
            <Quadrado  cor='#f07'/>
            <Quadrado  cor='#0f7'/>
            <Quadrado  cor='#ff7'/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor:'#000'
    }
})