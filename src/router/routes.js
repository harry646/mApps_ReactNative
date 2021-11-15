import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Splash from '../pages/Splash/SplashScreen';
import LoginPage from '../pages/Login/LoginScreen';
import RegisterPage from '../pages/Register/RegisterScreen';
import HomePage from '../pages/Home/HomeScreen';
import DrawerNavigatorRoutes from '../pages/Drawer/DrawerNavigationRoutes';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();  

const Router = (navigation) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown:false }} />
            <Stack.Screen name="Login" component={LoginPage} options={{ headerShown:false }} />
            <Stack.Screen name="Register" component={RegisterPage} />
            {/* <Stack.Screen name="Home" component={HomePage} /> */}
            <Stack.Screen
                name="DrawerNavigationRoutes"
                component={DrawerNavigatorRoutes}
                // Hiding header for Navigation Drawer
                options={{headerShown: false}}
            />            
            {/* <Stack.Screen name="Home" component={HomePage}/> */}
        </Stack.Navigator>
    )
}


export default Router;