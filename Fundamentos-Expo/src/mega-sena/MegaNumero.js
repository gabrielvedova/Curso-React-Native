import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import estilo from '../estilo'


export default ({ num }) => {
    return (
        <View style={style.container}>
            <Text style={[estilo.TxtM, style.Num]}>
                {num}
            </Text>
        </View>
    )
}

const  style = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 25,
    },
    Num: {
        color: '#FFF',
    }
})