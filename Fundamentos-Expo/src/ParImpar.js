import React from 'react'
import { Text, View } from 'react-native'
import estilo from './estilo'


export default ({num = 0}) => {

    return (
        <View>
            <Text style={estilo.TxtM}>{num} é um número:</Text>
            {num % 2 === 0
                ? <Text style={estilo.TxtP}>Par</Text>
                : <Text style={estilo.TxtP}>Ímpar</Text>
            }
        </View>
    )
}