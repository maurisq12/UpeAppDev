import React, { useRef, useState, useEffect, useContext } from 'react';
import { Switch, Text, Image, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from '@rneui/themed';
import MainScreenStyles from '../MainMenu/styles';
import SharedStyles from '../Shared';
import { AuthContext } from '../../context/AuthContext';

function MiPerfil() {
    const { userToken } = useContext(AuthContext);
    
    const url = "https://upeapp.fly.dev/vendedores/uno";

    const [data, setData] = useState([])

    

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                IDVendedor: userToken
            }),
        })
            .then((response) => response.json())
            .then((json) => {
                setData(json[0]);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));

        

            
    }, [userToken]);

    const [textNombres, setNombres] = useState(data.Nombres);
    const [textApellidos, setApellidos] = useState(data.Apellidos);
    const [textCorreoElectronico, setCorreoElectronico] = useState(data.CorreoElectronico);
    const [textContacto, setContacto] = useState(""+data.Contacto);
    const [textFacebook, setFacebook] = useState(data.Facebook);
    const [textInstagram, setInstagram] = useState(data.Instagram); 
    console.log(data)
    

    function  realizarCambios(){
        fetch("https://upeapp.fly.dev/vendedores/edit", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                IDVendedor: userToken,
                Nombres:textNombre,
                Costo:textCosto,
                Detalles:textDetalles,
                Fotografia:1,
                IDTipo: TipoID
            }),
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(JSON.stringify(responseData));
                navigationN.goBack()
            })
            
    }

    if(data){

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
                        id="Nombres"
                        style={MainScreenStyles.input}
                        onChangeText={newText => setNombres(newText)}
                        value={textNombres}
                        placeholderTextColor="black"
                    />
                    <Text style={MainScreenStyles.formTitleText}>Apellidos</Text>
                    <TextInput
                        id="Apellidos"
                        style={MainScreenStyles.input}
                        onChangeText={newText => setApellidos(newText)}
                        value={textApellidos}
                        placeholderTextColor="black"
                    />
                    <Text style={MainScreenStyles.formTitleText}>Correo electrónico</Text>
                    <TextInput
                        id="CorreoElectronico"
                        style={MainScreenStyles.input}
                        onChangeText={newText => setCorreoElectronico(newText)}
                        value={textCorreoElectronico}
                        placeholderTextColor="black"
                    />

                    <Text style={MainScreenStyles.formTitleText}>Contacto</Text>
                    <TextInput
                        id="Contacto"
                        keyboardType={"numeric"}
                        style={MainScreenStyles.intInput}
                        onChangeText={newText => setContacto(newText)}
                        value={textContacto}
                        placeholderTextColor="black"
                    />

                    <Text style={MainScreenStyles.formTitleText}>Facebook</Text>
                    <TextInput
                        id="Facebook"
                        style={MainScreenStyles.input}
                        onChangeText={newText => setFacebook(newText)}
                        value={textFacebook}
                        placeholderTextColor="black"
                    />

                    <Text style={MainScreenStyles.formTitleText}>Instagram</Text>
                    <TextInput
                        id="Instagram"
                        style={MainScreenStyles.input}
                        onChangeText={newText => setInstagram(newText)}
                        value={textInstagram}
                        placeholderTextColor="black"
                    />

                    <TouchableOpacity onPress={realizarCambios}>
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