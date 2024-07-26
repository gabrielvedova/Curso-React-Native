import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";

const Tab = createBottomTabNavigator();

export default props => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                switch (route.name) {
                    case 'TelaA':
                        iconName = focused
                            ? 'add-circle-outline'
                            : 'add-circle-outline';
                        break;
                    case 'TelaB':
                        iconName = focused
                            ? 'add-circle-outline'
                            : 'add-circle-outline';
                        break;
                    case 'TelaC':
                        iconName = focused ? 'add-circle-outline' : 'add-circle-outline';
                        break;
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'blue',
            tabBarShowLabel: false,
        })}
        initialRouteName="TelaB">
        <Tab.Screen name="TelaA" component={TelaA} />
        <Tab.Screen name="TelaB" component={TelaB} />
        <Tab.Screen name="TelaC" component={TelaC} />
    </Tab.Navigator>
)