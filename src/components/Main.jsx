import * as React from 'react';
import { Text, View } from 'react-native';
import AboutUsScreen from "../pages/AboutUsScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import ForwardedToast from '../components/ForwardedToast'; 
import HomeScreen from '../pages/HomeScreen';


const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Inicio') {
                    iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Sobre nostros') {
                    iconName = focused ? 'information-circle' : 'information-circle-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Inicio" component={HomeScreen} />
                <Tab.Screen name="Sobre nostros" component={AboutUsScreen} />
            </Tab.Navigator>
            <ForwardedToast />    

        </NavigationContainer>
    )
}


