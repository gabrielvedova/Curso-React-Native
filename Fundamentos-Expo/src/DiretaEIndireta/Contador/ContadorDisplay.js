import React from 'react'
import { Text,View, StyleSheet } from 'react-native'
import estilo from '../../estilo'


export default props => {
    return (
        <View style={style.Display}>
            <Text style={[estilo.TxtP, style.DisplayText]}>
                {props.num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 200,
    },
    DisplayText: {
        color: '#FFF'
    }
})