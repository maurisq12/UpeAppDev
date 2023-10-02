import React, { useRef, useState, useEffect, useContext } from 'react';
import { Switch, Text, Image, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from '@rneui/themed';
import MainScreenStyles from '../MainMenu/styles';
import SharedStyles from '../Shared';
import { AuthContext } from '../../context/AuthContext';

function MiPerfil() {
    const { userInfo } = useContext(AuthContext);
    const url = "https://upeapp.fly.dev/vendedores/uno";

    const [data, setData] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log("ID de vendedor", userInfo.IDVendedor)
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                IDVendedor: 1
            }),
        })
            .then((response) => response.json())
            .then((json) => {
                setData(json[0]);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    console.log(data)
    if(data !=[]){

    return (

        <View style={MainScreenStyles.container}>
            <View style={MainScreenStyles.appHeader}>

            </View>
            <Text style={{ textAlign: 'center', paddingBottom: 25, paddingTop: 25, fontSize: 40, fontWeight: 'bold', color: '#0D5C63' }}>Edición de usuario</Text>


            <ScrollView style={MainScreenStyles.pageView}>

                <Text style={MainScreenStyles.titulo}>Editar usuario</Text>
                <View style={{ alignItems: 'center', justifyContent: 'space-around', }}>

                    <Text style={MainScreenStyles.formTitleText}>Nombre</Text>
                    <TextInput
                        id="nombre"
                        style={MainScreenStyles.input}
                        onChangeText={newText => setNombres(newText)}
                        value={data.Nombres}
                        placeholderTextColor="black"
                    />
                    <Text style={MainScreenStyles.formTitleText}>Apellidos</Text>
                    <TextInput
                        id="nombre"
                        style={MainScreenStyles.input}
                        onChangeText={newText => setApellidos(newText)}
                        value={data.Apellidos}
                        placeholderTextColor="black"
                    />
                    <Text style={MainScreenStyles.formTitleText}>Correo electrónico</Text>
                    <TextInput
                        id="nombre"
                        style={MainScreenStyles.input}
                        onChangeText={newText => setNombre(newText)}
                        value={data.CorreoElectronico}
                        placeholderTextColor="black"
                    />

                    <Text style={MainScreenStyles.formTitleText}>Contacto</Text>
                    <TextInput
                        keyboardType={"numeric"}
                        style={MainScreenStyles.intInput}
                        onChangeText={newText => setCosto(newText)}
                        value={'8888-8888'}
                        placeholderTextColor="black"
                    />

                    <Text style={MainScreenStyles.formTitleText}>Facebook</Text>
                    <TextInput
                        id="nombre"
                        style={MainScreenStyles.input}
                        onChangeText={newText => setNombre(newText)}
                        value={data.Facebook}
                        placeholderTextColor="black"
                    />

                    <Text style={MainScreenStyles.formTitleText}>Instagram</Text>
                    <TextInput
                        id="nombre"
                        style={MainScreenStyles.input}
                        onChangeText={newText => setNombre(newText)}
                        value={data.Instagram}
                        placeholderTextColor="black"
                    />

                    <TouchableOpacity>
                        <View style={MainScreenStyles.buttonAcept}>
                            <Text style={{ fontSize: 20, color: "white" }}>Guardar información</Text>
                        </View>
                    </TouchableOpacity>


                </View>




            </ScrollView>
        </View>
    );}
}

export default MiPerfil;