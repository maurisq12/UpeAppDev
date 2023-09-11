import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Login/LoginScreen";
import MainScreen from "./MainMenu/MainScreen";
import AdminMenu from "./AdminMenu/AdminMenu";
import GestCubiculos from "./AdminMenu/GestCubiculos";
import GestEstudiantes from "./AdminMenu/GestEstudiantes";
import RegisterScreen from "./Register/RegisterScreen";
import EditCubiculo from "./AdminMenu/editCubiculo";
import SharedStyles from "./Shared";
 
const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator initialRouteName="Login">
            <HomeStackNavigator.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Menu"
                component={MainScreen}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="AdminMenu"
                component={AdminMenu}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="GestCubiculos"
                component={GestCubiculos}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="GestEstudiantes"
                component={GestEstudiantes}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    headerShown: false
                }}
               
            />
            <HomeStackNavigator.Screen
                name="EditCubiculo"
                component={EditCubiculo}
                options={{
                    headerShown: false
                }}
               
            />
        </HomeStackNavigator.Navigator>
    )
}
export default function ScreenNavigator() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}