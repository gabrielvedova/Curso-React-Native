import React, {useState} from 'react'
import { Text } from 'react-native'

import Filho from './ComponenteFilho'
import estilo from '../estilo'

export default props => {
    const [num, setNum] = useState(0)
    const [texto, setTexto] = useState('')

    function exibirValor(numero, texto) {
        setNum(numero)
        setTexto(texto)
    }
    
    return (
        <>
            <Text style={estilo.TxtP}>{texto}{num}</Text>
            <Filho
                max={60}
                min={1}
                funcao={exibirValor}
            />
        </>
    )
}