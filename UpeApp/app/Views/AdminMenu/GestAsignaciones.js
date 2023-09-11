import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions, TouchableOpacity, DrawerLayoutAndroid, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from '@rneui/themed';
import MainScreenStyles from '../MainMenu/styles';
import SharedStyles from '../Shared';

function GestCubiculos(props) {
    const navigationN = useNavigation();

    //Mauricio S
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const url = "http://192.168.18.73:3000/cubiculos";

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [])

    //


    function botonListaApartados() {
        navigationN.navigate("Menu");
    }
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    return (

        <View style={MainScreenStyles.container}>
            <View style={MainScreenStyles.appHeader}>

            </View>
            <Text style={{ textAlign: 'center', paddingBottom: 25, fontSize: 40, fontWeight: 'bold', color: 'white' }}>CubículosTEC</Text>


            <View style={MainScreenStyles.pageView}>

                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Gestión de Cubiculos</Text>
                <View style={{ width: "90%", alignSelf: "center" }}>
                    <SearchBar
                        placeholderTextColor={"black"}
                        inputStyle={{ color: "black" }}
                        searchIcon={{ color: "black" }}
                        cancelIcon={{ color: "black" }}
                        containerStyle={{ borderRadius: 10, backgroundColor: "white", borderBottomColor: "white", borderTopColor: "white" }}
                        inputContainerStyle={{ backgroundColor: SharedStyles.colorBG }}
                        placeholder="Buscar..."
                        onChangeText={updateSearch}
                        value={search}
                    />
                </View>

                <View style={MainScreenStyles.cubContainer}>
                    {
                        loading ? (<Text> Cargando... </Text>) : (
                            data.map((post) => (
                                <View key={post.idCubiculo}>
                                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{post.nombre}</Text>
                                    <Text style={{ fontSize: 20 }}>Capacidad: {post.capacidad}</Text>
                                    <View style={{ marginTop: 15, flexDirection: "row", alignSelf: "center", justifyContent: "space-between", width: "80%" }}>
                                        <TouchableOpacity onPress={botonListaApartados}>
                                            <View style={MainScreenStyles.buttonAcept}>
                                                <Text style={{ fontSize: 20, color: "white" }}>Editar</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={botonListaApartados}>
                                            <View style={MainScreenStyles.buttonDelete}>
                                                <Text style={{ fontSize: 20, color: "white" }}>Eliminar</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))
                        )}
                </View>
            </View>
        </View>
    );
}

export default GestCubiculos;
