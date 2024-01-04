import { StyleSheet, Text, SafeAreaView } from 'react-native';
import estilo from './src/estilo';

// import Primeiro from './src/Primeiro';
// import CompPadrao, {Comp1, Comp2} from './src/multi';
// import MinMax from './src/MinMax';
// import Aleatorio from './src/Aleatorio';
// import Titulo from './src/Titulo';
// import Botao from './src/Botao';
// import Contador from './src/Contador';
// import PaiDireta from './src/direta/ComponentePai'
// import PaiIndireta from './src/indireta/ComponentePai'
// import ContadorV2 from './src/DiretaEIndireta/Contador/ContadorV2';
// import Diferenciar from './src/Diferenciar';
import ParImpar from './src/ParImpar';
import Familia from './src/relacao/Familia';
import Membro from './src/relacao/Membro';
import UsuarioLogado from './src/UsuarioLogado';

export default () => {
  return(
    <>
      <SafeAreaView style={style.App}>
      {/*
                    Aula 1 
        <Text style={estilo.TxtG}>Aula 1</Text>
        <Text style={estilo.TxtP}>Primeiro Componente!</Text>
        <Text />

                    Aula 2
        <Text style={estilo.TxtG}>Aula 2</Text>
        <Primeiro />
        <Text />

                    Aula 3
        <Text style={estilo.TxtG}>Aula 3</Text>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Text />

                    Aula 4
        <Text style={estilo.TxtG}>Aula 4</Text>
        <MinMax  min={3} max={20}/> 
        <Text />

                    Aula 5 
        <Text style={estilo.TxtG}>Aula 5</Text>
        <Aleatorio min={13}  max={20}/> 
        <Text />

                    Aula 6
        <Text style={estilo.TxtG}>Aula 6</Text>
        <Titulo  principal="Enormossauro" secundario="Massa Cinzenta"/> 
        <Text />
        
                    Aula 7
        <Text style={estilo.TxtG}>Aula 7</Text>
        <Botao/> 
        <Text />
      
                    Aula 8
        <Text style={estilo.TxtG}>Aula 8</Text>
        <Contador inicial={10} passo={10} />
        <Text />
      

                    Aula 9
        <Text style={estilo.TxtG}>Aula 9</Text>
        <PaiDireta/>
        <Text />

                    Aula 10
        <Text style={estilo.TxtG}>Aula 10</Text>
        <PaiIndireta/>
        <Text />

                    Aula 11
        <Text style={estilo.TxtG}>Aula 11</Text>
        <ContadorV2 />
        <Text />

                    Aula 12
        <Text style={estilo.TxtG}>Aula 12</Text>
        <Diferenciar />
        <Text />
      */}
        {/* Aula 13 */} 
        <Text style={estilo.TxtG}>Aula 13</Text>
        <ParImpar num={7}/>
        <Text />
        
        {/* Aula 14 */} 
        <Text style={estilo.TxtG}>Aula 14</Text>
        <Familia>
          <Membro nome='Ana' sobrenome='Silva' />
          <Membro nome='Julia' sobrenome='Silva' />
        </Familia>
        <Familia>
          <Membro nome='Lucas' sobrenome='Vedova'/>
          <Membro nome='Marcelo' sobrenome='Vedova'/>
        </Familia>
        <Text />

        {/* Aula 14 */} 
        <Text style={estilo.TxtG}>Aula 14</Text>
        <UsuarioLogado usuario={{nome:'Gabriel Vedova', email:'bielvedova@gmail.com'}} />
        <Text />
      </SafeAreaView>
    </>
  )
}


const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
})
