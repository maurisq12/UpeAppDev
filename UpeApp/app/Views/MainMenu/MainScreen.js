import React, {useRef, useState, useContext, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {StyleSheet,Text,View,Image,SafeAreaView,Button,Alert,Platform,StatusBar,Dimensions,TouchableOpacity,DrawerLayoutAndroid,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainScreenStyles from './styles';
import { AuthContext } from '../../context/AuthContext';


function MainScreen(props) {
  const navigationN = useNavigation();
  const  {logout, userInfo} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {

    if (userInfo) {
      setLoading(false);
      console.log("El usuario es:",userInfo)
    }
  }, [userInfo]);

  if (loading) {
    // Mientras se carga userInfo, puedes mostrar un indicador de carga o un mensaje
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  function navMisProductos() {
    navigationN.navigate("MisProductos");
  }

  function handleLogout(){
    logout();
    navigationN.navigate("Login");

  }

  function botonAdmin() {
    navigationN.navigate("Dropdown");
  }
  function navMiPerfil()  {
    navigationN.navigate("MiPerfil");
  }
  function botonZonas() {
    navigationN.navigate("Zonas");
  }
  function botonAjustes() {
    navigationN.navigate("Comprador");
  }


  return (

      <View style={MainScreenStyles.container}>
        <TouchableOpacity onPress={botonAjustes} style={MainScreenStyles.banner}>
          <Image
            source={require('../Media/logoUpeApp.png')}
            style={{width: '100%', height: '60%', alignSelf:'center',resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <Text style={{ textAlign: 'center',paddingBottom:25, fontSize:20,fontWeight:'bold',color:'#0D5C63' }}>Bienvenido de nuevo,{userInfo.nombre}</Text>
         
        <View style={MainScreenStyles.buttonView}>
        <TouchableOpacity onPress={navMiPerfil}  >
            <View style={MainScreenStyles.button}>
              <Text style={MainScreenStyles.buttonText}>Mi perfil</Text>
              <Image
            source={require(('../Media/miPerfil.png'))}
            style={{height: '100%',resizeMode: 'contain'}}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={navMisProductos}>
            <View style={MainScreenStyles.button}>
              <Text style={MainScreenStyles.buttonText}>Mis productos</Text>
              <Image
            source={require(('../Media/misProductos.png'))}
            style={{ height: '100%',resizeMode: 'contain'}}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={botonZonas}>
            <View style={MainScreenStyles.button}>
              <Text style={MainScreenStyles.buttonText}>Mis zonas</Text>
              <Image
            source={require(('../Media/misZonas.png'))}
            style={{ height: '100%',resizeMode: 'contain'}}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{handleLogout()}}>
            <View style={MainScreenStyles.button}>
              <Text style={MainScreenStyles.buttonText}>Cerrar sesión</Text>
              <Image
            source={require(('../Media/ajustes.png'))}
            style={{width:'20%', height: '100%',resizeMode: 'contain'}}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
  );
}

export default MainScreen;
