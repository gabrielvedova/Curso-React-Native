import React from "react";
import { SafeAreaView, Text } from "react-native";
import TextoCentral from "./src/components/TextoCentral";
import TelaA from "./src/views/TelaA";
import TelaB from "./src/views/TelaB";
import TelaC from "./src/views/TelaC";

export default props => (
    <SafeAreaView style={{flex: 1}}>
      <TelaA />
      <TelaB />
      <TelaC />
    </SafeAreaView>
)