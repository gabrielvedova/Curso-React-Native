import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'


export default props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado  cor='#07f'/>
            <Quadrado  cor='#0ff'/>
            <Quadrado  cor='#f07'/>
            <Quadrado  cor='#0f7'/>
            <Quadrado  cor='#ff7'/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor:'#000'
    }
})

// OBS: No AlignItems, a opção 'stretch' estica o comprimento de um item, SE O COMPRIMENTO NÃO FOR DEFINIDO