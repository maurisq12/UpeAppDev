import React, {useRef, useState} from 'react';
import {StyleSheet,Text,View,Image,SafeAreaView,Button,Alert,Platform,StatusBar,Dimensions,TouchableOpacity,DrawerLayoutAndroid,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainScreenStyles from './styles';


function MainScreen(props) {
  const navigationN = useNavigation();

  function botonApartar() {
   // navigationN.navigate("");
  }

  function botonListaApartados() {
    //navigationN.navigate("T");
  }
  function botonAdmin() {
    navigationN.navigate("AdminMenu");
  }


  return (

      <View style={MainScreenStyles.container}>
        <View style={MainScreenStyles.banner}>
          <Image
            source={require('../Media/logoUpeApp.png')}
            style={{width: '100%', height: '60%', alignSelf:'center',resizeMode: 'contain'}}
          />
        </View>
        <Text style={{ textAlign: 'center',paddingBottom:25, fontSize:20,fontWeight:'bold',color:'#0D5C63' }}>Bienvenido de nuevo, *usuario*</Text>
         
        <View style={MainScreenStyles.buttonView}>
        <TouchableOpacity onPress={botonApartar}  >
            <View style={MainScreenStyles.button}>
              <Text style={MainScreenStyles.buttonText}>Mi perfil</Text>
              <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
            }}
          />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={botonListaApartados}>
            <View style={MainScreenStyles.button}>
              <Text style={MainScreenStyles.buttonText}>Mis productos</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={botonAdmin}>
            <View style={MainScreenStyles.button}>
              <Text style={MainScreenStyles.buttonText}>Mis zonas</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={botonAdmin}>
            <View style={MainScreenStyles.button}>
              <Text style={MainScreenStyles.buttonText}>Ajustes</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
  );
}

export default MainScreen;
