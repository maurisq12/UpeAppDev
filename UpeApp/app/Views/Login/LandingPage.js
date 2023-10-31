import React, {useContext, useState} from 'react';
import {View,KeyboardAvoidingView,TextInput,Text,TouchableOpacity,TouchableWithoutFeedback,Button,Keyboard,Image, ActivityIndicator} from 'react-native'; 
import loginStyle from './styles';
import { useNavigation } from '@react-navigation/native';
import SharedStyles from '../Shared';
import { AuthContext } from '../../context/AuthContext';
import MainScreenStyles from '../MainMenu/styles';
function LandingPage(props) {
  
  const navigationN = useNavigation();




    return (
        <View style={loginStyle.containerInit}>
          <KeyboardAvoidingView style={loginStyle.inner}> 
            <View style={loginStyle.banner}> 
            <Image source={require('../Media/logoUpeApp.png')} style={{width:'100%',height:'60%', alignSelf:'center',resizeMode: 'contain'}}/>
            </View>
            <TouchableOpacity onPress={() => navigationN.navigate("Login")}>
            <View style={MainScreenStyles.button}>
              <Text style={MainScreenStyles.buttonText}>Perfil vendedor</Text>
              <Image
            source={require(('../Media/miPerfil.png'))}
            style={{height: '100%',resizeMode: 'contain'}}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigationN.navigate("Comprador")}>
            <View style={MainScreenStyles.button}>
              <Text style={MainScreenStyles.buttonText}>Buscar productos</Text>
              <Image
            source={require(('../Media/misProductos.png'))}
            style={{ height: '100%',resizeMode: 'contain'}}/>
            </View>
          </TouchableOpacity>
          </KeyboardAvoidingView>
      </View>
    );
}

export default LandingPage;