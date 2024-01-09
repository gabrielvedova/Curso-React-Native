import React, {Component} from 'react'
import { Text, TextInput } from 'react-native'
import estilo from '../estilo'


export default class Mega extends Component {


/*          Forma 2
    constructor(props) {
        super(props)

        this.state = {
            qtdeNumeros: props.qtdeNumeros + 100
        }
    }
*/

//          Forma 1
    state = {
        qtdeNumeros: this.props.qtdeNumeros + 200
    }

    alterarQtdeNumero(qtde) {
        this.setState({ qtdeNumeros: qtde })
    }

    render() {
        return (
            <>
                <Text style={estilo.TxtM}>
                    Gerador de Mega-Sena {this.state.qtdeNumeros}
                </Text>
                <TextInput
                    keyboardType='numeric'
                    style={{borderBottomWidth: 1}}
                    placeholder='Qtde de Números'
                    value={this.state.qtdeNumeros}
                    onChangeText={qtde => this.alterarQtdeNumero(qtde) }
                />
            </>
        )
    }
}


/*
    Numa classe, para você utilizar props, você deve usar this.props.NomeQualquer, como está na linha de código 11.

    keyboardType --> muda o tipo de teclado.
*/