import React, { useRef, useState, useEffect } from 'react';
import { Switch, Text, Image, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from '@rneui/themed';
import MainScreenStyles from '../MainMenu/styles';
import SharedStyles from '../Shared';

function MiPerfil(route) {
    /*
        const navigationN = useNavigation();
        const prod = route.route.params
        const [textNombre, setNombre] = useState(prod.Nombre);
        const [textCosto, setCosto] = useState(""+prod.Costo);
        const [textTipo, setTipo] = useState(""+prod.Tipo);
        const [textDetalles, setDetalles] = useState(""+prod.Detalles);
    
        const [isEnabled, setIsEnabled] = useState("Ocupado" == prod.estado ? false : true);
        const toggleSwitch = () => setIsEnabled(previousState => !previousState);
        const pEstado = useState(isEnabled ? 1 : 0);
        
    
        function  realizarCambios(){
            fetch("https://upeapp.fly.dev/productos/edit", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    IDProducto:prod.IDProducto,
                    Nombre:textNombre,
                    Costo:textCosto,
                    Detalles:textDetalles,
                    Fotografia:1,
                    IDTipo:2
                }),
            })
                .then((response) => response.json())
                .then((responseData) => {
                    console.log(JSON.stringify(responseData));
                    navigationN.goBack()
                })
                
        }
        */
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
                        onChangeText={newText => setNombre(newText)}
                        value={"Nombre"}
                        placeholderTextColor="black"
                    />
                    <Text style={MainScreenStyles.formTitleText}>Apellidos</Text>
                    <TextInput
                        id="nombre"
                        style={MainScreenStyles.input}
                        onChangeText={newText => setNombre(newText)}
                        value={"textNombre"}
                        placeholderTextColor="black"
                    />
                    <Text style={MainScreenStyles.formTitleText}>Correo electrónico</Text>
                    <TextInput
                        id="nombre"
                        style={MainScreenStyles.input}
                        onChangeText={newText => setNombre(newText)}
                        value={"textNombre"}
                        placeholderTextColor="black"
                    />

                    <Text style={MainScreenStyles.formTitleText}>Contacto</Text>
                    <TextInput
                        keyboardType={"numeric"}
                        style={MainScreenStyles.intInput}
                        onChangeText={newText => setCosto(newText)}
                        value={"8888-7777"}
                        placeholderTextColor="black"
                    />

                    <Text style={MainScreenStyles.formTitleText}>Facebook</Text>
                    <TextInput
                        id="nombre"
                        style={MainScreenStyles.input}
                        onChangeText={newText => setNombre(newText)}
                        value={"textNombre"}
                        placeholderTextColor="black"
                    />

                    <Text style={MainScreenStyles.formTitleText}>Instagram</Text>
                    <TextInput
                        id="nombre"
                        style={MainScreenStyles.input}
                        onChangeText={newText => setNombre(newText)}
                        value={"textNombre"}
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