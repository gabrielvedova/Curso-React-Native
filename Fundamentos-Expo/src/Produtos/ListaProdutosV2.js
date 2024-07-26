import React from 'react'
import { Text, FlatList, StyleSheet } from 'react-native'
import estilo from '../estilo'
import Produtos from './Produtos'


export default props => {
    return (
        <>
            <Text style={estilo.TxtM}>Lista de Produtos V2</Text>
            <FlatList
                data={Produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={({ item:p }) => {
                    return <Text style={style.Medio}>
                        {p.id}) {p.nome} - {p.preco}
                    </Text>
                }}
            />
        </>
    )
}

const style = StyleSheet.create({
    Medio: {
        fontSize: 18,
    }
})