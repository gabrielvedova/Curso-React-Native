import React from "react";
import { View, Text } from "react-native";

import estilo from "./estilo";

export default function() {
    return <Text style={estilo.TxtP}>Componente #Oficial</Text>
}

export function Comp1() {
    return <Text style={estilo.TxtP}>Componente #01</Text>
}

export function Comp2() {
    return <Text style={estilo.TxtP}>Componente #02</Text>
}


