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
            source={require('../Media/logoC.png')}
            style={{width: '50%', height: '60%', tintColor: 'white', alignSelf:'center'}}
          />
        </View>
        <Text style={{ textAlign: 'center',paddingBottom:25, fontSize:40,fontWeight:'bold',color:'white' }}>CubículosTEC</Text>
         
        <View style={MainScreenStyles.buttonView}>
        <TouchableOpacity onPress={botonApartar}  >
            <View style={MainScreenStyles.button}>
              <Text style={MainScreenStyles.buttonText}>Apartar Cubículo</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={botonListaApartados}>
            <View style={MainScreenStyles.button}>
              <Text style={MainScreenStyles.buttonText}>Lista de apartados</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={botonAdmin}>
            <View style={MainScreenStyles.button}>
              <Text style={MainScreenStyles.buttonText}>AdminMenu</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
  );
}

export default MainScreen;
