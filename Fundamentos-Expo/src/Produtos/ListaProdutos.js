import React from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'

import Produtos from './Produtos'

export default props => {
    
    function ObterLista() {
        return Produtos.map(p => {
            return <Text key={p.id} style={estilo.TxtP}>
                {p.id}) {p.nome} - {p.preco}
            </Text>
        })
    }

    return (
        <>
            <Text style={estilo.TxtM}>Lista de Produtos</Text>
            {ObterLista()}
        </>
    )
}