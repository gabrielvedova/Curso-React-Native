import React from 'react'
import { Text, Platform } from 'react-native'
import estilo from './estilo'


export default _ => {
    if(Platform.OS === 'android') {
        return <Text style={estilo.TxtM}>Android</Text>
    }
    else if(Platform.OS === 'ios') {
        return <Text style={estilo.TxtM}>iOS</Text>
    }
    else {
        return <Text style={estilo.TxtM}>Eita!!!</Text>
    }
}