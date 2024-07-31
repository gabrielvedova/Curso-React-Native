import React, { Component } from "react"
import { Modal, View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, TextInput, Text, Platform } from "react-native"

import moment from "moment"
import 'moment/locale/pt-br'
import DateTimePicker from '@react-native-community/datetimepicker'

import { colors } from "../commonStyles"


const initialState = { desc: '', date: new Date(), showDatePicker: false }


export default class AddTask extends Component {

    state = {
        ...initialState
    }

    save = () => {
        const newTask = {
            desc: this.state.desc,
            date: this.state.date
        }

        this.props.onSave && this.props.onSave(newTask)
        this.setState({ ...initialState })
    }

    getDatePicker = () => {
        let datePicker = <DateTimePicker
            value={this.state.date}
            onChange={(_, date) => this.setState({ date, showDatePicker: false })}
            mode='date' />
        
        const dateString = moment(this.state.date).format('ddd, D [de] MMMM [de] YYYY')

        if (Platform.OS === "android") {
            datePicker = (
                <View>
                    <TouchableOpacity onPress={() => this.setState({ showDatePicker: true })}>
                        <Text style={styles.date}>
                            {dateString}
                        </Text>
                    </TouchableOpacity>
                    {this.state.showDatePicker && datePicker}
                </View>
            )
        }

            return datePicker
    }

    render() {
        return (
            <Modal transparent={true} visible={this.props.isVisible} onRequestClose={this.props.onCancel} animationType='slide'>
                <TouchableWithoutFeedback
                    onPress={this.props.onCancel}>
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>Nova Tarefa</Text>
                    <TextInput style={styles.input} placeholder="Informe a Descrição..." onChangeText={desc => this.setState({ desc })} value={this.state.desc} />
                    {this.getDatePicker()}
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.save}>
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback
                    onPress={this.props.onCancel}>
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    container: {
        backgroundColor: "#fff"
    },
    header: {
        fontFamily: colors.fontFamily,
        backgroundColor: colors.today,
        color: colors.secondary,
        textAlign: "center",
        padding: 15,
        fontSize: 18
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    input: {
        color: "#000",
        fontFamily: colors.fontFamily,
        width: '90%',
        height: 40,
        marginTop: 10,
        marginLeft: 10,
        backgroundColor: '#FFF',
        borderWidth: 1,
        //borderColor: "E3E3E3",
        borderRadius: 6
    },
    button: {
        color: colors.today,
        margin: 20,
        marginRight: 30,
    },
    date: {
        fontFamily: colors.fontFamily,
        fontSize: 20,
        color: "#000",
        marginLeft: 15
    }
})