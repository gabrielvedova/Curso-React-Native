import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./Drawer";

export default props => (
    <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
            <Drawer />
        </NavigationContainer>
    </SafeAreaView>
)