import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Login/LoginScreen";
import MainScreen from "./MainMenu/MainScreen";
import AdminMenu from "./VendedorMenu/AdminMenu";
import MisProductos from "./VendedorMenu/MisProductos";
import RegisterScreen from "./Register/RegisterScreen";
import EditProducto from "./VendedorMenu/editProducto";
import MiPerfil from "./VendedorMenu/MiPerfil";
import Zonas from "./VendedorMenu/Zonas";
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
                name="MisProductos"
                component={MisProductos}
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
                name="MiPerfil"
                component={MiPerfil}
                options={{
                    headerShown: false
                }}

            />
            <HomeStackNavigator.Screen
                name="EditProducto"
                component={EditProducto}
                options={{
                    headerShown: false
                }}
               
            />
            <HomeStackNavigator.Screen
                name="Zonas"
                component={Zonas}
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