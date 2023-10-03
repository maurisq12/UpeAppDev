import React, { useContext, useEffect } from "react";
import {View, Text,ActivityIndicator} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Login/LoginScreen";
import Comprador from "./Comprador/Comprador";
import DetalleProducto from "./Comprador/DetalleProducto";
import MainScreen from "./MainMenu/MainScreen";
import AdminMenu from "./VendedorMenu/AdminMenu";
import MisProductos from "./VendedorMenu/MisProductos";
import RegisterScreen from "./Register/RegisterScreen";
import EditProducto from "./VendedorMenu/editProducto";
import agregarProducto from "./VendedorMenu/agregarProducto";
import MiPerfil from "./VendedorMenu/MiPerfil";
import Zonas from "./VendedorMenu/Zonas";
import SharedStyles from "./Shared";
import { AuthContext } from "../context/AuthContext";
 
const HomeStackNavigator = createNativeStackNavigator();


function MyStack() {
    return (
        <HomeStackNavigator.Navigator initialRouteName="Menu">
            <HomeStackNavigator.Screen 
                name="Menu"
                component={MainScreen}
                options={{
                    headerShown: false
                }}
            />

            <HomeStackNavigator.Screen
                name="Login"
                component={LoginScreen}
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
                name="agregarProducto"
                component={agregarProducto}
                options={{
                    headerShown: false
                }}

            />
            <HomeStackNavigator.Screen
                name="Comprador"
                component={Comprador}
                options={{
                    headerShown: false
                }}

            />
            <HomeStackNavigator.Screen
                name="DetalleProducto"
                component={DetalleProducto}
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
    const {isLoading, userToken} = useContext(AuthContext);
    if(isLoading){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="large" color="#0D5C63" />
            </View>
        );        
    }

    return (
        <NavigationContainer>
            {userToken !== null ? <MyStack /> : <LoginScreen/>} 
        </NavigationContainer>
    );
}