import React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, TextInput, View, Image, TouchableOpacity, Text, Alert, ScrollView, KeyboardAvoidingView, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SharedStyles from '../Shared';
import loginStyle from '../Login/styles';
//import { StatusBar } from 'expo-status-bar';


const RegisterScreen = () => {

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState(''); 
  const [contrasena, setContrasena] = useState(''); 
  const [contrasena2, setContrasena2] = useState('');
  
  const navigationN = useNavigation();


function registerPressed(){
    Alert.alert('Alerta usuario', 'Se ha creado el usuario de manera satisfactoria', [
        {text: 'OK'},
      ]);
   navigationN.navigate("Login")
}

  return (
    <KeyboardAvoidingView style={{flex:1}}>
    <View style={[loginStyle.container, {paddingTop: StatusBar.currentHeight,}]}>
          <View style={[loginStyle.banner,{paddingTop:30,paddingBottom:30}]}> 
            <Image source={require('../Media/logoUpeApp.png')} style={{width:'45%',height:'70%', alignSelf:'center', tintColor: '#202021'}}/>
            <Text style={{ textAlign: 'center',paddingTop:15, fontSize:40,fontWeight:'bold',color:'black' }}>Upe App</Text>
     </View>
    <View style={[loginStyle.buttonView, {paddingTop:30}]}>
    <TextInput 
        style={[loginStyle.input,{marginVertical:5}]}
        onChangeText={newNombre => setNombre(newNombre)}
        defaultValue={nombre}
        placeholder="Nombre Completo"
        width= '90%'
        placeholderTextColor = "black"
      />
      <TextInput
       style={[loginStyle.input,{marginVertical:5}]}
        onChangeText={newCorreo => {setCorreo(newCorreo)}}
        defaultValue={correo}
        placeholder="Correo electrónico"
        width= '90%'
        placeholderTextColor = "black"
      />
      <TextInput
        style={[loginStyle.input,{marginVertical:5}]}
        secureTextEntry={true}
        onChangeText={newContrasena => setContrasena(newContrasena)}
        defaultValue={contrasena}
        placeholder="Contraseña"
        width= '90%'
        placeholderTextColor = "black"
      />
    <TextInput
        style={[loginStyle.input,{marginVertical:5}]}  
        secureTextEntry={true}
        onChangeText={newContrasena2 => {setContrasena2(newContrasena2)}}
        defaultValue={contrasena2}
        placeholder="Confirmar contraseña"
        width= '90%'
        placeholderTextColor = "black"
      />

          <TouchableOpacity  onPress={registerPressed}>
            <View style={[loginStyle.button,{marginVertical:5}]}>
              <Text style={loginStyle.buttonText}>Registrarme</Text>
            </View>
          </TouchableOpacity>
      </View>
    </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    paddingLeft:15,
    borderWidth:2,
    borderRadius:10,
    borderColor: '#202021',
    fontSize: SharedStyles.buttonsSizeFont,
    flex : 0.1
  },
    container: {
      flex: 1,
      backgroundColor: '#fff',
     // paddingTop: StatusBar.currentHeight,
    },
    banner: {
      width: '100%',
      height: '25%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonView: {
      height: '75%',
      alignContent: 'center',
      alignItems:'center',
      justifyContent:'space-evenly'
    },
    button: {
      borderWidth:2,
      borderRadius:15,
      borderColor: SharedStyles.colorDef,
      width: 260,
      paddingEnd: 10,
      alignItems: 'center',
      backgroundColor:SharedStyles.colorDef,
    },
    buttonText: {
      textAlign: 'center',
      padding: 10,
      fontSize: SharedStyles.buttonsSizeFont,
      color: 'white'
    }
});

export default RegisterScreen;