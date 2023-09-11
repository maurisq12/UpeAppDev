import React from 'react';
import {View,KeyboardAvoidingView,TextInput,Text,TouchableOpacity,TouchableWithoutFeedback,Button,Keyboard,Image} from 'react-native'; 
import {useState} from 'react';
import loginStyle from './styles';
import { useNavigation } from '@react-navigation/native';
import SharedStyles from '../Shared';

function LoginScreen(props) {
  const navigationN = useNavigation();

  const [correo, setCorreo] = useState(''); 
  const [contrasena, setContrasena] = useState(''); 
  function loginPressed() {
    navigationN.navigate("Menu");
  }
  function registerPressed()  {
    navigationN.navigate("Register");

  }
  

    return (
        <KeyboardAvoidingView style={loginStyle.container}>
          <View style={loginStyle.inner}> 
            <View style={loginStyle.banner}> 
            <Image source={require('../Media/logoUpeApp.png')} style={{width:'100%',height:'60%', alignSelf:'center',resizeMode: 'contain'}}/>
            <Text style={{ textAlign: 'center',paddingTop:50, fontSize:15,fontWeight:'bold',color:'#0D5C63' }}>Ingrese los datos para acceder a su cuenta de vendedor</Text>
            </View>
            <View style={loginStyle.buttonView}>
            <TextInput ref={this.correoBoton}
              style={loginStyle.input}
              onChangeText={newCorreo => setCorreo(newCorreo)}
              defaultValue={correo}
              placeholder="Correo electrónico"
              placeholderTextColor = "#0D5C63"
            />
            <TextInput ref={this.contrasenaBoton}
              secureTextEntry={true}
              style={loginStyle.input}
              onChangeText={newContrasena => setContrasena(newContrasena)}
              defaultValue={contrasena}
              placeholder="Contraseña"
              width= '90%'
              placeholderTextColor = "#0D5C63"
            />
            <View style={{paddingBottom:30, alignItems:'center'}}>
            <TouchableOpacity  onPress={loginPressed}>
                  <View style={[loginStyle.button,{marginBottom:0, paddingBottom:0}]}>
                    <Text style={loginStyle.buttonText}>Iniciar Sesión</Text>
                  </View>
                </TouchableOpacity>

              <View style={{width:300, marginTop:0, paddingBottom:30 , flexDirection: 'row', paddingTop:5}}>
             
              <Text style={[loginStyle.buttonText,{fontWeight:'normal',fontSize:18,paddingLeft:30, paddingRight:0, color:'black'}]}>¿No tienes una cuenta? {'\n'} </Text>
                <TouchableOpacity onPress={registerPressed}>
                    <Text style={[loginStyle.buttonText,{fontSize:20, paddingHorizontal:0, color:"#0D5C63" }]}>Registrate</Text>
                </TouchableOpacity>
                </View>
                </View>
            </View>
          </View>
      </KeyboardAvoidingView>
    );
}




export default LoginScreen;