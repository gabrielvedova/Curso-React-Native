import React, { Component } from 'react'
import { ImageBackground, Text, StyleSheet, View, TextInput, TouchableOpacity, Platform, Alert } from 'react-native'

import backgroundImage from '../../assets/imgs/login.jpg'
import { colors } from '../commonStyles'

export default class Auth extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        stageNew: false
    }

    signinOrSignup = () => {
        if (this.state.stageNew) {
            Alert.alert('Sucesso', 'Criar a Conta')
        } else {
            Alert.alert('Sucesso', 'Logar Conta')
        }
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subtitle}>
                        {this.state.stageNew ? 'Criar Conta' : 'Login'}
                    </Text>
                    {this.state.stageNew &&
                        <TextInput placeholder='Nome' value={this.state.name}
                            style={styles.input}
                            onChangeText={name => this.setState({ name })}
                            placeholderTextColor="#000" />
                    }
                    <TextInput placeholder='E-mail' value={this.state.email}
                        style={styles.input}
                        onChangeText={email => this.setState({ email })}
                        placeholderTextColor="#000" />
                    <TextInput placeholder='Senha' value={this.state.password}
                        style={styles.input}
                        onChangeText={password => this.setState({ password })}
                        placeholderTextColor="#000"
                        secureTextEntry={true} />
                    {this.state.stageNew &&
                        <TextInput placeholder='Confirmar Senha' value={this.state.confirmPassword}
                            style={styles.input}
                            onChangeText={confirmPassword => this.setState({ confirmPassword })}
                            placeholderTextColor="#000"
                            secureTextEntry={true} />
                    }
                    <TouchableOpacity onPress={this.signinOrSignup}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? 'Registrar' : 'Entrar'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ padding: 10 }}
                    onPress={() => this.setState({ stageNew: !this.state.stageNew })}>
                    <Text style={styles.buttonText}>
                        {this.state.stageNew ? 'Já possui conta?' : 'Ainda não possui conta?'}
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: colors.fontFamily,
        color: colors.secondary,
        fontSize: 70,
        marginBottom: 10
    },
    subtitle: {
        fontFamily: colors.fontFamily,
        color: '#FFF',
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center'
    },
    formContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 20,
        width: '90%'
    },
    input: {
        marginTop: 10,
        backgroundColor: '#FFF',
        color: "#000",
        padding: Platform.OS == 'ios' ? 15 : 10,
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: colors.fontFamily,
        color: "#FFF",
        fontSize: 20
    }
})