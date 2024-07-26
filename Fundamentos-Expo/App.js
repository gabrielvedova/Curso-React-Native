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
// import ParImpar from './src/ParImpar';
// import Familia from './src/relacao/Familia';
// import Membro from './src/relacao/Membro';
// import UsuarioLogado from './src/UsuarioLogado';
// import ListaProdutos from './src/Produtos/ListaProdutos';
// import ListaProdutosV2 from './src/Produtos/ListaProdutosV2';
// import DigiteSeuNome from './src/DigiteSeuNome';
// import Quadrado from './src/Layout/Quadrado';
// import FlexBoxV1 from './src/Layout/FlexBoxV1';
// import FlexBoxV2 from './src/Layout/FlexBoxV2';
// import FlexBoxV3 from './src/Layout/FlexBoxV3';
// import FlexBoxV4 from './src/Layout/FlexBoxV4';
import Mega from './src/mega-sena/Mega';

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
      
                    Aula 13 
        <Text style={estilo.TxtG}>Aula 13</Text>
        <ParImpar num={14}/>
        <Text />

                    Aula 14 
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

                    Aula 15 
        <Text style={estilo.TxtG}>Aula 15</Text>
        <UsuarioLogado usuario={{nome:'Gabriel Vedova', email:'bielvedova@gmail.com'}} />
        <Text />
        
                    Aula 16 
        <Text style={estilo.TxtG}>Aula 16</Text>
        <ListaProdutos />
        <Text />

                    Aula 17 
        <Text style={estilo.TxtG}>Aula 17</Text>
        <ListaProdutosV2 />
        <Text />

                Aula 18 - INPUT
        <Text style={estilo.TxtG}>Aula 18</Text>
        <DigiteSeuNome />
        <Text />
      
                    FlexBox
      
                    Aula 19
        <Text style={estilo.TxtG}>Aula 19</Text>
        <Quadrado  cor='#07f'/>
        <Quadrado  cor='#0ff'/>
        <Quadrado  cor='#f07'/>
        <Quadrado  cor='#0f7'/>
        <Quadrado cor='#ff7'/>

                    Aula 20
        <Text style={estilo.TxtG}>Aula 20</Text>
        <FlexBoxV1 />
      
      

                    Aula 21
        <Text style={estilo.TxtG}>Aula 21</Text>
        <FlexBoxV2 />
      

                    Aula 22
        <Text style={estilo.TxtG}>Aula 22</Text>
        <FlexBoxV3 />


                    Aula 23
        <Text style={estilo.TxtG}>Aula 23</Text>
        <FlexBoxV4 />
      */}

        {/*Aula 24*/}
        <Text style={estilo.TxtG}>Aula 24</Text>
        <Mega qtdeNumeros={7}/>
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
