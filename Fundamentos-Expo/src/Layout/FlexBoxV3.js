import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'


export default props => {
    return (
        <View style={style.FlexV3}>
            <Quadrado  cor='#07f' lado={20}/>
            <Quadrado  cor='#0ff' lado={30}/>
            <Quadrado  cor='#f07' lado={40}/>
            <Quadrado  cor='#0f7' lado={50}/>
            <Quadrado  cor='#ff7' lado={60}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        height: 350,
        width: '100%',
        backgroundColor:'#000'
    }
})

/*
    OBS: flexDirection define a direção dos objetos
        row: linha(horizontal)
        column: coluna(vertical)
*/