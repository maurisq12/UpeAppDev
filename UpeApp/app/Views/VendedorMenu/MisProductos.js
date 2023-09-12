import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions, TouchableOpacity, DrawerLayoutAndroid, ScrollView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from '@rneui/themed';
import MainScreenStyles from '../MainMenu/styles';
import SharedStyles from '../Shared';

function MisProductos(props) {
    const navigationN = useNavigation();

    //Mauricio S
    const [data, setData] = useState([])
    const [lista, setLista] = useState([])

    const [loading, setLoading] = useState(true)
    const url = "https://upeapp.fly.dev/productos/todos";

    useEffect(() => {
        fetch(url)
            .then(async (response) => response.json())
            .then((json) => {setData(json),setLista(json)})
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [])

    //
    function navGestAsig()  {
        navigationN.navigate("EditProducto");
      }


    function botonListaApartados(e) {
        navigationN.navigate("Menu",e);
    }
    const [search, setSearch] = useState("");

    function filtrarLista(nombre) {
        console.log(nombre)
        setSearch(nombre)
        nombre = nombre.toLowerCase();
          const productosFiltrados = data.filter(prod => {
          const nombreProducto = prod.Nombre.toLowerCase();
          return nombreProducto.includes(nombre);
        });
        setLista(productosFiltrados);
        if (nombre==""){
            setLista(data)
        }
      }

      function  EliminarCubiculo(id){
        fetch("http://192.168.18.10:3000/cubiculos/delete", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idCubiculo:id,

            }),
        })

            .then((response) => response.json())
            .then((json) => {setData(json),setLista(json)})
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }
      
    const alertaEliminar = (nombre, id) =>
    Alert.alert('¿Eliminar', nombre+["?"] , [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Eliminar', onPress: () => EliminarCubiculo(id)},
      ]);

    return (

        <View style={MainScreenStyles.container}>
            <View style={MainScreenStyles.appHeader}>

            </View>
            <Text style={{ textAlign: 'center', paddingBottom: 25, fontSize: 40, fontWeight: 'bold', color: '#0D5C63' }}>Tus productos</Text>


            <View style={MainScreenStyles.pageView}>

                <Text style={{ textAlign: 'left',paddingBottom:25,paddingLeft:25, fontSize:20,fontWeight:'bold',color:'#0D5C63' }}>Administrar productos</Text>
                <View style={{ width: "90%", alignSelf: "center" }}>
                    <SearchBar
                        placeholderTextColor={"black"}
                        inputStyle={{ color: "black" }}
                        searchIcon={{ color: "black" }}
                        cancelIcon={{ color: "black" }}
                        containerStyle={{ borderRadius: 10, backgroundColor: "#0D5C63", borderBottomColor: "white", borderTopColor: "white" }}
                        inputContainerStyle={{ backgroundColor: SharedStyles.colorBG }}
                        placeholder="Buscar..."
                        onChangeText={newText => filtrarLista(newText)}
                        value={search}
                    />
                </View>

                <ScrollView >
                    {
                        loading ? (<Text> Cargando... </Text>) : (
                            lista.map((post) => (
                                <View style={MainScreenStyles.cubContainer}  key={post.IDProducto}>
                                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{post.Nombre}</Text>
                                    <Text style={{ fontSize: 20 }}>₡{post.Costo}</Text>
                                    <Text style={{ fontSize: 20 }}>{post.Tipo}</Text>
                                    <View style={{ marginTop: 15, flexDirection: "row", alignSelf: "center", justifyContent: "space-between", width: "80%" }}>
                                        <TouchableOpacity onPress={() => navigationN.navigate("EditProducto",post)}>
                                            <View style={MainScreenStyles.buttonAcept}>
                                                <Text style={{ fontSize: 20, color: "white", alignContent:'center'}}>Editar</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            )) 
                        )}
                </ScrollView>
            </View>
        </View>
    );
}

export default MisProductos;
