import React, { useRef, useState, useEffect } from 'react';
import { Switch, Text, Image, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from '@rneui/themed';
import MainScreenStyles from '../MainMenu/styles';
import SharedStyles from '../Shared';

function MiPerfil() {
    const [data, setData] = useState([])
    const [lista, setLista] = useState([])

    const [loading, setLoading] = useState(true)

/*
        fetch("https://upeapp.fly.dev/vendedores/uno", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                IDVendedor:1,

            }),
        })

            .then(async (response) => await response.json())
            .then((json) => {setData(json),setLista(json)})
            .then(console.log(lista))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))*/


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
                        value={"Aaron David"}
                        placeholderTextColor="black"
                    />
                    <Text style={MainScreenStyles.formTitleText}>Apellidos</Text>
                    <TextInput
                        id="nombre"
                        style={MainScreenStyles.input}
                        onChangeText={newText => setApellidos(newText)}
                        value={"Retana Salazar"}
                        placeholderTextColor="black"
                    />
                    <Text style={MainScreenStyles.formTitleText}>Correo electrónico</Text>
                    <TextInput
                        id="nombre"
                        style={MainScreenStyles.input}
                        onChangeText={newText => setNombre(newText)}
                        value={"aaronrs02@estudiantec.cr"}
                        placeholderTextColor="black"
                    />

                    <Text style={MainScreenStyles.formTitleText}>Contacto</Text>
                    <TextInput
                        keyboardType={"numeric"}
                        style={MainScreenStyles.intInput}
                        onChangeText={newText => setCosto(newText)}
                        value={"8888-8888"}
                        placeholderTextColor="black"
                    />

                    <Text style={MainScreenStyles.formTitleText}>Facebook</Text>
                    <TextInput
                        id="nombre"
                        style={MainScreenStyles.input}
                        onChangeText={newText => setNombre(newText)}
                        value={"aaronrs02"}
                        placeholderTextColor="black"
                    />

                    <Text style={MainScreenStyles.formTitleText}>Instagram</Text>
                    <TextInput
                        id="nombre"
                        style={MainScreenStyles.input}
                        onChangeText={newText => setNombre(newText)}
                        value={"postreasaaronrs"}
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
    );
}

export default MiPerfil;