import { StyleSheet, Text, SafeAreaView } from 'react-native';


import Primeiro from './src/Primeiro';
import CompPadrao, {Comp1, Comp2} from './src/multi';
import estilo from './src/estilo';
import MinMax from './src/MinMax';
import Aleatorio from './src/Aleatorio';
import Titulo from './src/Titulo';

export default () => {
  return(
    <>
      <SafeAreaView style={style.App}>
        {/* Aula 1 */} 
        <Text style={estilo.TxtG}>Aula 1</Text>
        <Text style={estilo.TxtP}>Primeiro Componente!</Text>
        <Text></Text>

        {/* Aula 2 */}
        <Text style={estilo.TxtG}>Aula 2</Text>
        <Primeiro />
        <Text></Text>

        {/* Aula 3 */}
        <Text style={estilo.TxtG}>Aula 3</Text>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Text />

        {/* Aula 4 */} 
        <Text style={estilo.TxtG}>Aula 4</Text>
        <MinMax  min={3} max={20}/> 
        <Text></Text>

        {/* Aula 5 */} 
        <Text style={estilo.TxtG}>Aula 5</Text>
        <Aleatorio min={13}  max={20}/> 
        <Text></Text>

        {/* Aula 6 */} 
        <Text style={estilo.TxtG}>Aula 6</Text>
        <Titulo  principal="Enormossauro" secundario="Massa Cinzenta"/> 
        <Text></Text>

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
