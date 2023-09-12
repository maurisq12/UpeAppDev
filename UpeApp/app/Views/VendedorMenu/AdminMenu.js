import React, {useRef, useState} from 'react';
import {StyleSheet,Text,View,Image,SafeAreaView,Button,Alert,Platform,StatusBar,Dimensions,TouchableOpacity,DrawerLayoutAndroid,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainScreenStyles from '../MainMenu/styles';

function AdminMenu(props) {
  const navigationN = useNavigation();

  function navMisProductos() {
    navigationN.navigate("MisProductos");
  }
  function navGestEst()  {
    navigationN.navigate("GestEstudiantes");
  }
  function navGestTiemp() {
    navigationN.navigate("Menu");
  }
  function navGestAsig()  {
    navigationN.navigate("AdminMenu");
  }


  return (

      <View style={MainScreenStyles.container}>
        <View style={MainScreenStyles.banner}>
          <Image
            source={require('../Media/logoUpeApp.png')}
            style={{width: '50%', height: '60%', tintColor: 'white', alignSelf:'center'}}
          />
        </View>
        <Text style={{ textAlign: 'center',paddingBottom:25, fontSize:40,fontWeight:'bold',color:'white' }}>CubículosTEC</Text>
         
        <View style={MainScreenStyles.buttonView}>
        <TouchableOpacity onPress={navGestEst}  >
            <View style={MainScreenStyles.button}>
              <Text style={MainScreenStyles.buttonText}>Gestión de estudiantes</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={navGestCub}>
            <View style={MainScreenStyles.button}>
              <Text style={MainScreenStyles.buttonText}>Gestión de cubiculos</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={navGestCub}  >
            <View style={MainScreenStyles.button}>
              <Text style={MainScreenStyles.buttonText}>Gestión de tiempos</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={navGestCub}>
            <View style={MainScreenStyles.button}>
              <Text style={MainScreenStyles.buttonText}>Gestión de asignaciones</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
  );
}

export default AdminMenu;
