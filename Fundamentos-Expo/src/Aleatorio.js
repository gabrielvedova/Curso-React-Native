import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";


export default (props) => {
    const {min, max} = props
    const delta = max - min + 1
    const numero = parseInt(Math.random() *delta) + min;
    return(
        <Text style={estilo.TxtP}>O número sorteado é: {numero}</Text>
    )
}