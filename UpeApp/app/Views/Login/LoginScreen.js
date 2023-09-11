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
            <Image source={require('../Media/logoC.png')} style={{width:'50%',height:'60%', alignSelf:'center', tintColor: '#202021'}}/>
            <Text style={{ textAlign: 'center',paddingTop:10, fontSize:40,fontWeight:'bold',color:'black' }}>CubículosTEC</Text>
            </View>
            <View style={loginStyle.buttonView}>
            <TextInput ref={this.correoBoton}
              style={loginStyle.input}
              onChangeText={newCorreo => setCorreo(newCorreo)}
              defaultValue={correo}
              placeholder="Correo electrónico"
              placeholderTextColor = "black"
            />
            <TextInput ref={this.contrasenaBoton}
              secureTextEntry={true}
              style={loginStyle.input}
              onChangeText={newContrasena => setContrasena(newContrasena)}
              defaultValue={contrasena}
              placeholder="Contraseña"
              width= '90%'
              placeholderTextColor = "black"
            />
            <View style={{paddingBottom:30, alignItems:'center'}}>
            <TouchableOpacity  onPress={loginPressed}>
                  <View style={[loginStyle.button,{marginBottom:0, paddingBottom:0}]}>
                    <Text style={loginStyle.buttonText}>Iniciar Sesión</Text>
                  </View>
                </TouchableOpacity>

              <View style={{width:300, marginTop:0, paddingBottom:30 , flexDirection: 'row', paddingTop:5}}>
             
              <Text style={[loginStyle.buttonText,{fontWeight:'normal',fontSize:18,paddingLeft:30, paddingRight:0, color:'black'}]}>¿No tienes una cuenta? </Text>
                <TouchableOpacity onPress={registerPressed}>
                    <Text style={[loginStyle.buttonText,{fontSize:20, paddingHorizontal:0, color:SharedStyles.colorDark }]}>Registrate</Text>
                </TouchableOpacity>
                </View>
                </View>
            </View>
          </View>
      </KeyboardAvoidingView>
    );
}




export default LoginScreen;