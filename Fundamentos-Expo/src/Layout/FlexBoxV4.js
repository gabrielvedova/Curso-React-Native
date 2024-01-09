import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'


export default props => {
    return (
        <View style={style.FlexV4}>
            <View style={style.V0}/>
            <View style={style.V1}/>
            <View style={style.V2}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor:'#000'
    },
    V0: {
        backgroundColor: '#f07',
        height: 300,
    },

    V1: {
        backgroundColor: '#07f',
        flexGrow: 8,
    },
    V2: {
        backgroundColor: '#0f7',
        flexGrow: 2,
    },
})

/*
    OBS: flexGrow define o quanto o objeto ocupa em um lugar. Se tiver, por exemplo, dois objetos, em que um tem um flexGrow 8 e o outro tem 2, quer dizer que o objeto 1 vai ocupar 8/10 e o objeto 2 vai ocupar 2/10.
*/