import React, { useRef, useState, useEffect } from 'react';
import { Switch, Text, Image,View, TextInput,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from '@rneui/themed';
import MainScreenStyles from '../MainMenu/styles';
import SharedStyles from '../Shared';

function EditCubiculo(route) {
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
    return (

        <View style={MainScreenStyles.container}>
            <View style={MainScreenStyles.appHeader}>

            </View>
            <Text style={{ textAlign: 'center', paddingBottom: 25, paddingTop: 25, fontSize: 40, fontWeight: 'bold', color: '#0D5C63' }}>Edición de producto</Text>


            <View style={MainScreenStyles.pageView}>

                <Text style={MainScreenStyles.titulo}>Editar producto</Text>
                <View style={{ alignItems: 'center', justifyContent: 'space-around', }}>

                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 30, color:'#AAAAAA' }}>Nombre del producto:</Text>
                    <TextInput
                        id="nombre"
                        style={MainScreenStyles.input}
                        onChangeText={newText => setNombre(newText)}
                        value={textNombre}
                        placeholderTextColor="black"
                    />
                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 40, marginBottom: 30, color:'#AAAAAA'}}>Tipo:</Text>
                    <TextInput
                        keyboardType={"numeric"}
                        style={MainScreenStyles.intInput}
                        onChangeText={newText => setTipo(newText)}
                        value={textTipo}
                        placeholderTextColor="black"
                    />
                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 40, marginBottom: 30, color:'#AAAAAA'}}>Costo:</Text>
                    <TextInput
                        keyboardType={"numeric"}
                        style={MainScreenStyles.intInput}
                        onChangeText={newText => setCosto(newText)}
                        value={textCosto}
                        placeholderTextColor="black"
                    />

                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 40, marginBottom: 30, color:'#AAAAAA'}}>Detalles :</Text>
                    <TextInput
                        keyboardType={"numeric"}
                        style={MainScreenStyles.intInput}
                        onChangeText={newText => setDetalles(newText)}
                        value={textDetalles}
                        placeholderTextColor="black"
                    />

                    <TouchableOpacity onPress={realizarCambios}>
                        <View style={MainScreenStyles.buttonAcept}>
                            <Text style={{ fontSize: 20, color: "white" }}>Guardar información</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={realizarCambios}>
                        <View style={MainScreenStyles.buttonAcept}>
                            <Text style={{ fontSize: 20, color: "white" }}>Guardar información</Text>
                        </View>
                    </TouchableOpacity>


                </View>




            </View>
        </View>
    );
}

export default EditCubiculo;