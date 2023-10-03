import React, { useRef, useState, useEffect } from 'react';
import { Switch,Alert, Text, Image,View, TextInput,TouchableOpacity,StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import { SearchBar } from '@rneui/themed';
import MainScreenStyles from '../MainMenu/styles';
import SharedStyles from '../Shared';
import AntDesign from '@expo/vector-icons/AntDesign';



function DetalleProducto(route) {
    const navigationN = useNavigation();

    

    //Mauricio S
    const [data, setData] = useState([])
    const [lista, setLista] = useState([])

    const [loading, setLoading] = useState(true)
    const url = "https://upeapp.fly.dev/productos/tipos";

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {setData(json),setLista(json)})
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [])

    const DDTipos =[
        lista.map((post) => (
            {id:post.IDTipoProducto,label:post.Nombre, value:post.IDTipoProducto}
        ))];

    const prod = route.route.params

    const [value, setValue] = useState(null); ;

    const [textNombre, setNombre] = useState(prod.Nombre);
    const [textCosto, setCosto] = useState(""+prod.Costo);
    const [textTipo, setTipo] = useState(""+prod.Tipo);
    const [textDetalles, setDetalles] = useState(""+prod.Detalles);
    const [TipoID, setTipoID] = useState(prod.IDTipo);  




    return (

        <ScrollView style={MainScreenStyles.container}>
            <View style={MainScreenStyles.appHeader}>

            </View>
            <Text style={{ textAlign: 'center', paddingBottom: 25, marginTop: 65, fontSize: 40, fontWeight: 'bold', color: '#0D5C63' }}>Información del producto</Text>
            <View style={MainScreenStyles.pageView}>
        

                <View style={{ alignItems: 'center', justifyContent: 'space-around', }}>

                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10,marginTop:20, color:'#AAAAAA' }}>Nombre del producto:</Text>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10,marginTop:20 }}>{textNombre}</Text>


                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10,marginTop:20, color:'#AAAAAA' }}>Tipo:</Text>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10,marginTop:20 }}>{textTipo}</Text>

                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10,marginTop:20, color:'#AAAAAA' }}>Costo:</Text>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10,marginTop:20 }}>{textCosto}</Text>

                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10,marginTop:20, color:'#AAAAAA' }}>Detalles:</Text>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10,marginTop:20 }}>{textDetalles}</Text>


                    <TouchableOpacity >
                        <View style={MainScreenStyles.buttonAcept}>
                            <Text style={{ fontSize: 20, color: "white" }}>Vendedor</Text>
                        </View>
                    </TouchableOpacity>



                </View>
            </View>
        </ScrollView>
    );
}

export default DetalleProducto;

const styles = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 50,
      width: '80%',
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 15,
    },
    selectedTextStyle: {
      fontSize: 15,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 15,
    },
  });
