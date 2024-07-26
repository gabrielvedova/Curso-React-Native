import React from "react";
import TextoCentral from "../components/TextoCentral";
import { Button, View } from "react-native";

export default props => (
    <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Button 
                title="Abrir"
                onPress={() => {
                    props.navigation.openDrawer()
                    setTimeout(() => {
                        props.navigation.closeDrawer()
                        {/*setInterval(() => {
                            props.navigation.toggleDrawer()
                        }, 1000)*/}
                    }, 3000)
                }}
            />
        </View>
        <TextoCentral corFundo='#33fa72' corTexto='#000'>
            Tela D
        </TextoCentral>
    </View>
)