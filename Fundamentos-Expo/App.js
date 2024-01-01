import { StyleSheet, Text, SafeAreaView } from 'react-native';


import Primeiro from './src/Primeiro';
import CompPadrao, {Comp1, Comp2} from './src/multi';
import estilo from './src/estilo'

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
      </SafeAreaView>
    </>
  )
}


const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
