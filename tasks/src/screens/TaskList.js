﻿import 'react-native-get-random-values'
import React, { Component, useState } from "react"
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Platform,
    Alert
} from "react-native"

import AsyncStorage from "@react-native-async-storage/async-storage"
import { v4 as uuidv4 } from 'uuid'

import { colors } from "../commonStyles"
import moment from 'moment'
import 'moment/locale/pt-br'

import Icon from 'react-native-vector-icons/FontAwesome'

import Task from "../components/Task"
import AddTask from "./AddTask"

import todayImage from '../../assets/imgs/today.jpg'


const initialState = {
    showDoneTasks: true,
    showAddTask: false,
    visibleTasks: [],
    tasks: []
}


export default class TaskList extends Component {

    state = {
        ...initialState
    }

    componentDidMount = async () => {
        const stateString = await AsyncStorage.getItem('tasksState')
        const state = JSON.parse(stateString) || initialState
        this.setState(state, this.filterTasks)
    }

    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks)
    }

    filterTasks = () => {
        let visibleTasks = null
        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks]
        } else {
            const pending = task => task.doneAt === null
            visibleTasks = this.state.tasks.filter(pending)
        }

        this.setState({ visibleTasks })
        AsyncStorage.setItem('tasksState', JSON.stringify(this.state))
    }

    toggleTask = taskId => {
        const tasks = [...this.state.tasks]
        tasks.forEach(task => {
            if (task.id === taskId) {
                task.doneAt = task.doneAt ? null : new Date()
            }
        })

        this.setState({ tasks }, this.filterTasks)
    }

    addTask = newTask => {
        if (!newTask.desc || !newTask.desc.trim()) {
            Alert.alert("Dados Inválidos", "Descrição não informada!")
            return
        }

        const tasks = [...this.state.tasks]
        tasks.push({
            id: uuidv4(),
            desc: newTask.desc,
            estimateAt: newTask.date,
            doneAt: null,
        })

        this.setState({ tasks, showAddTask: false }, this.filterTasks)
    }

    deleteTask = id => {
        const tasks = this.state.tasks.filter(task => task.id !== id)
        this.setState({ tasks }, this.filterTasks)
    }


    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
            <View style={styles.container}>
                <AddTask isVisible={this.state.showAddTask}
                    onCancel={() => this.setState({ showAddTask: false })}
                    onSave={this.addTask} />
                <ImageBackground source={todayImage} style={styles.background}>
                    <View style={styles.iconBar}>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                                size={25} color={colors.secondary} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <FlatList data={this.state.visibleTasks}
                        keyExtractor={item => item.id ? `${item.id}` : `${Math.random()}`}
                        renderItem={({ item }) => <Task {...item}
                            onToggleTask={this.toggleTask} onDelete={this.deleteTask} />} />
                </View>
                <TouchableOpacity style={styles.addButton} onPress={() => this.setState({ showAddTask: true })} activeOpacity={0.7}>
                    <Icon name="plus" color={colors.secondary} size={20} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 3,
    },
    taskList: {
        flex: 7,
    },
    titleBar: {
        flex: 1,
        justifyContent: "flex-end"
    },
    title: {
        fontFamily: colors.fontFamily,
        color: colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20,
    },
    subtitle: {
        fontFamily: colors.fontFamily,
        color: colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    },
    iconBar: {
        flexDirection: "row",
        marginHorizontal: 20,
        justifyContent: "flex-end",
        marginTop: Platform.OS === 'ios' ? 40 : 10
    },
    addButton: {
        position: "absolute",
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: colors.today,
        justifyContent: "center",
        alignItems: "center"
    }
})