import React, { useState } from 'react'
import { TextInput, View, Text } from 'react-native'
import estilo from './estilo'


export default props => {
    const [nome, setNome] = useState('Teste')
    return (
        <>
            <Text style={estilo.TxtM}>{nome}</Text>
            <TextInput
                style={estilo.TxtP}
                placeholder='Digite seu Nome'
                value={null}
                onChangeText={nome => setNome(nome)}
            />
        </>
    )
}