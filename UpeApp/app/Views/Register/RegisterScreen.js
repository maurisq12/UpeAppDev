import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Image, TouchableOpacity, Text, Alert, ScrollView, KeyboardAvoidingView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SharedStyles from '../Shared';
import loginStyle from '../Login/styles';
import MainScreenStyles from '../MainMenu/styles';
//import { StatusBar } from 'expo-status-bar';


const RegisterScreen = () => {

  const [textNombres, setNombres] = useState("");
  const [textApellidos, setApellidos] = useState("");
  const [textCorreoElectronico, setCorreoElectronico] = useState("");
  const [textContrasena, setContrasena] = useState("");
  const [textContacto, setContacto] = useState("");
  const [textFacebook, setFacebook] = useState("");
  const [textInstagram, setInstagram] = useState("");

  const navigationN = useNavigation();


  function registerPressed() {
    fetch("https://upeapp.fly.dev/vendedores/new", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Nombres: textNombres,
        Apellidos: textApellidos,
        CorreoElectronico: textCorreoElectronico,
        Contacto: textContacto,
        Contrasena: textContacto,
        Facebook: textFacebook,
        Fotografia: 1,
        Instagram: textInstagram
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(JSON.stringify(responseData));
        Alert.alert('Cuenta creada', 'Se ha creado el usuario de manera satisfactoria', [
          { text: 'OK' },
        ]);
      })
    navigationN.navigate("Login")
  }

  return (

    <View style={MainScreenStyles.container}>
      <View style={MainScreenStyles.appHeader}>

      </View>
      <Text style={{ textAlign: 'center', paddingBottom: 25, paddingTop: 25, fontSize: 40, fontWeight: 'bold', color: '#0D5C63' }}>Registrar nuevo vendedor</Text>


      <ScrollView style={MainScreenStyles.pageView}>

        <Text style={MainScreenStyles.titulo}>Ingresar datos</Text>
        <View style={{ alignItems: 'center', justifyContent: 'space-around', }}>

          <Text style={MainScreenStyles.formTitleText}>Nombre</Text>
          <TextInput
            id="Nombres"
            style={MainScreenStyles.input}
            onChangeText={newText => setNombres(newText)}
            value={textNombres}
            placeholderTextColor="black"
          />
          <Text style={MainScreenStyles.formTitleText}>Apellidos</Text>
          <TextInput
            id="Apellidos"
            style={MainScreenStyles.input}
            onChangeText={newText => setApellidos(newText)}
            value={textApellidos}
            placeholderTextColor="black"
          />
          <Text style={MainScreenStyles.formTitleText}>Correo electrónico</Text>
          <TextInput
            id="CorreoElectronico"
            style={MainScreenStyles.input}
            onChangeText={newText => setCorreoElectronico(newText)}
            value={textCorreoElectronico}
            placeholderTextColor="black"
          />

          <Text style={MainScreenStyles.formTitleText}>Contraseña</Text>
          <TextInput
            id="Contrasena"
            secureTextEntry={true}
            style={MainScreenStyles.input}
            onChangeText={newText => setContrasena(newText)}
            value={textContrasena}
            placeholderTextColor="black"
          />



          <Text style={MainScreenStyles.formTitleText}>Contacto</Text>
          <TextInput
            id="Contacto"
            keyboardType={"numeric"}
            style={MainScreenStyles.intInput}
            onChangeText={newText => setContacto(newText)}
            value={textContacto}
            placeholderTextColor="black"
          />

          <Text style={MainScreenStyles.formTitleText}>Facebook</Text>
          <TextInput
            id="Facebook"
            style={MainScreenStyles.input}
            onChangeText={newText => setFacebook(newText)}
            value={textFacebook}
            placeholderTextColor="black"
          />

          <Text style={MainScreenStyles.formTitleText}>Instagram</Text>
          <TextInput
            id="Instagram"
            style={MainScreenStyles.input}
            onChangeText={newText => setInstagram(newText)}
            value={textInstagram}
            placeholderTextColor="black"
          />

          <TouchableOpacity onPress={registerPressed}>
            <View style={MainScreenStyles.buttonAcept}>
              <Text style={{ fontSize: 20, color: "white" }}>Registrarme</Text>
            </View>
          </TouchableOpacity>


        </View>
      </ScrollView>
    </View>
  )
    ;
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    paddingLeft: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#202021',
    fontSize: SharedStyles.buttonsSizeFont,
    flex: 0.1
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
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  button: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: SharedStyles.colorDef,
    width: 260,
    paddingEnd: 10,
    alignItems: 'center',
    backgroundColor: SharedStyles.colorDef,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: SharedStyles.buttonsSizeFont,
    color: 'white'
  }
});

export default RegisterScreen;