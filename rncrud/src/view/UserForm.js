import React, { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import UsersContext from "../context/UsersContext";

export default props => {
    const [user, setUser] = useState(props.route.params ? props.route.params : {})
    const { dispatch } = useContext(UsersContext)

    return (
        <View style={style.form}>
            <Text>Name</Text>
            <TextInput
                style={style.input} 
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o Nome"
                value={user.name}
            />
            <Text>Email</Text>
            <TextInput
                style={style.input} 
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe o Email"
                value={user.email}
            />
            <Text>URL do Avatar</Text>
            <TextInput
                style={style.input} 
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Informe o Email"
                value={user.avatarUrl}
            />
            <Button 
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user
                    })
                    props.navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10
    }
})