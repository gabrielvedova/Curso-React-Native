import React, {Component} from 'react'
import { Button, View, Text, TextInput } from 'react-native'
import estilo from '../estilo'
import MegaNumero from './MegaNumero'


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
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }
    
    alterarQtdeNumero(qtde) {
        this.setState({ qtdeNumeros: +qtde })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }


/*        Forma 1
    gerarNumeros = () => {
        const { qtdeNumeros } = this.state
        const numeros = []

        for(let i = 0; i < qtdeNumeros; i++) {
            const n = this.gerarNumeroNaoContido(numeros)
            numeros.push(n)
        }

        numeros.sort((a, b) => a - b)
        this.setState({ numeros })
    }
*/
//             Forma 2
    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)] , [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero num={num} />
        })
    }

    render() {
        return (
            <>
                <Text style={estilo.TxtM}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                    keyboardType='numeric'
                    style={{borderBottomWidth: 1}}
                    placeholder='Qtde de Números'
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={qtde => this.alterarQtdeNumero(qtde) }
                />
                <Button 
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}


/*
    Numa classe, para você utilizar props, você deve usar this.props.NomeQualquer, como está na linha de código 11.

    keyboardType --> muda o tipo de teclado.
*/