import React from "react";
import { Text } from "react-native";

import estilo from "./estilo";

export default (props) => {
    console.warn(props)
    return (
        <Text style={estilo.TxtP}>
            O valor {props.max} é maior que o valor {props.min}!
        </Text>
    )
}