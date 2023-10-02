import React, {useRef, useState, useContext} from 'react';
import {StyleSheet,Text,View,Image,SafeAreaView,Button,Alert,Platform,StatusBar,Dimensions,TouchableOpacity,DrawerLayoutAndroid,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainScreenStyles from './styles';
import { AuthContext } from '../../context/AuthContext';


function MainScreen(props) {
  const navigationN = useNavigation();
  const  {logout} = useContext(AuthContext);
  const  {userInfo} = useContext(AuthContext);

  function botonApartar() {
   // navigationN.navigate("");
  }

  function navMisProductos() {
    navigationN.navigate("MisProductos");
  }

  function botonListaApartados() {
    //navigationN.navigate("T");
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


  return (

      <View style={MainScreenStyles.container}>
        <View style={MainScreenStyles.banner}>
          <Image
            source={require('../Media/logoUpeApp.png')}
            style={{width: '100%', height: '60%', alignSelf:'center',resizeMode: 'contain'}}
          />
        </View>
        <Text style={{ textAlign: 'center',paddingBottom:25, fontSize:20,fontWeight:'bold',color:'#0D5C63' }}>Bienvenido de nuevo, {userInfo.Nombres}</Text>
         
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

          <TouchableOpacity onPress={()=>{logout()}}>
            <View style={MainScreenStyles.button}>
              <Text style={MainScreenStyles.buttonText}>Ajustes</Text>
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
