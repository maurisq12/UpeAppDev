import React, {useContext, useState} from 'react';
import {View,KeyboardAvoidingView,TextInput,Text,TouchableOpacity,TouchableWithoutFeedback,Button,Keyboard,Image, ActivityIndicator} from 'react-native'; 
import loginStyle from './styles';
import { useNavigation } from '@react-navigation/native';
import SharedStyles from '../Shared';
import { AuthContext } from '../../context/AuthContext';

function LoginScreen(props) {
  
  const navigationN = useNavigation();
  const  {login, userToken} = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');

  const [correo, setCorreo] = useState(''); 
  const [contrasena, setContrasena] = useState('');
  const [isLoading, setIsLoading] = useState(false); 

  async function loginPressed() {
    setErrorMessage('');
    setIsLoading(true);
    try {
      const result = await login(correo, contrasena);
      
      if (result) {
        navigationN.navigate("Menu");
      } else {
        console.log("Error en inicio de sesión");
        setErrorMessage('Credenciales incorrectas. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.log("Error en inicio de sesión:", error);
    } finally {
      setIsLoading(false);
    }
  }

  function registerPressed()  {
    navigationN.navigate("Register");

  }
  

    return (
        <View style={loginStyle.containerInit}>
          <KeyboardAvoidingView style={loginStyle.inner}> 
            <View style={loginStyle.banner}> 
            <Image source={require('../Media/logoUpeApp.png')} style={{width:'100%',height:'60%', alignSelf:'center',resizeMode: 'contain'}}/>
            <Text style={{ textAlign: 'center',paddingTop:50, fontSize:15,fontWeight:'bold',color:'#0D5C63' }}>Ingrese los datos para acceder a su cuenta de vendedor</Text>
            </View>
            <View style={loginStyle.buttonView}>
            <TextInput ref={this.correoBoton}
              value={correo}
              style={loginStyle.input}
              onChangeText={newCorreo => setCorreo(newCorreo)}
              placeholder="Correo electrónico"
              placeholderTextColor = "#0D5C63"
            />
            <TextInput ref={this.contrasenaBoton}
              secureTextEntry={true}
              value={contrasena}
              style={loginStyle.input}
              onChangeText={newContrasena => setContrasena(newContrasena)}
              placeholder="Contraseña"
              width= '90%'
              placeholderTextColor = "#0D5C63"
            />
            <View style={{alignItems:'center'}}>
            <TouchableOpacity  onPress={loginPressed}>
                  <View style={[loginStyle.button,{marginBottom:0, paddingBottom:0}]}>
                    <Text style={loginStyle.buttonText}>Iniciar Sesión</Text>
                  </View>
                </TouchableOpacity>
                <Text style={{ color: 'red' }}>{errorMessage}</Text>

              <View style={{width:300, marginTop:0, paddingBottom:30 , flexDirection: 'column', paddingTop:5}}>
             
              <Text style={[loginStyle.buttonText,{fontWeight:'normal',fontSize:18,paddingLeft:30, paddingRight:0, color:'black'}]}>¿No tienes una cuenta? {'\n'} </Text>
                <TouchableOpacity onPress={registerPressed}>
                    <Text style={[loginStyle.buttonText,{fontSize:20, paddingHorizontal:0, color:"#0D5C63" }]}>Registrate</Text>
                </TouchableOpacity>
                </View>
                </View>
            </View>
          </KeyboardAvoidingView>
      </View>
    );
}

export default LoginScreen;