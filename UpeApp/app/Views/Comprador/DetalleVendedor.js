import React, { useRef, useState, useEffect } from 'react';
import { Switch,Alert, Text, Image,View, TextInput,TouchableOpacity,StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MainScreenStyles from '../MainMenu/styles';




function DetalleVendedor(route) {
    const navigationN = useNavigation();

    const [data, setData] = useState([])

    const [textNombres, setNombres] = useState('');
    const [textApellidos, setApellidos] = useState('');
    const [textCorreoElectronico, setCorreoElectronico] = useState('');
    const [textContacto, setContacto] = useState('');
    const [textFacebook, setFacebook] = useState('');
    const [textInstagram, setInstagram] = useState(''); 

    const url = "https://upeapp.fly.dev/vendedores/producto";

    const prod = route.route.params

    useEffect(() => {
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                IDProducto: prod
            }),
        })
            .then(async (response) => response.json())
            .then((json) => {
                console.log(json)
                setData(json[0]);
                setNombres(json[0].Nombres);
                setApellidos(json[0].Apellidos);
                setCorreoElectronico(json[0].CorreoElectronico);
                setContacto("" + json[0].Contacto);
                setFacebook(json[0].Facebook);
                setInstagram(json[0].Instagram);
            })            
            .catch((error) => console.error(error))
    }, []);


    const [textNombre, setNombre] = useState(prod);


    const [nombreVend, setNombreVend] = useState() 


    return (

        <View style={MainScreenStyles.container}>
            <View style={MainScreenStyles.appHeader}>

            </View>
            <Text style={{ textAlign: 'center', paddingBottom: 25, paddingTop: 25, fontSize: 40, fontWeight: 'bold', color: '#0D5C63' }}>Información de vendedor</Text>


            <ScrollView style={MainScreenStyles.pageView}>

                <View style={{ alignItems: 'center', justifyContent: 'space-around', }}>

                    <Text style={MainScreenStyles.formTitleText}>Nombre</Text>
                    <TextInput
                        id="Nombres"
                        style={MainScreenStyles.input2}
                        value={textNombres}
                        editable={false}
                    />
                    <Text style={MainScreenStyles.formTitleText}>Apellidos</Text>
                    <TextInput
                        id="Apellidos"
                        style={MainScreenStyles.input2}
                        value={textApellidos}
                        placeholderTextColor="black"
                        editable={false}

                    />
                    <Text style={MainScreenStyles.formTitleText}>Correo electrónico</Text>
                    <TextInput
                        id="CorreoElectronico"
                        style={MainScreenStyles.input2}
                        value={textCorreoElectronico}
                        placeholderTextColor="black"
                        editable={false}

                    />

                    <Text style={MainScreenStyles.formTitleText}>Contacto</Text>
                    <TextInput
                        id="Contacto"
                        style={MainScreenStyles.input2}
                        value={textContacto}
                        placeholderTextColor="black"
                        editable={false}

                    />

                    <Text style={MainScreenStyles.formTitleText}>Facebook</Text>
                    <TextInput
                        id="Facebook"
                        style={MainScreenStyles.input2}
                        value={textFacebook}
                        placeholderTextColor="black"
                        editable={false}

                    />

                    <Text style={MainScreenStyles.formTitleText}>Instagram</Text>
                    <TextInput
                        id="Instagram"
                        style={MainScreenStyles.input2}
                        value={textInstagram}
                        placeholderTextColor="black"
                        editable={false}

                    />


                </View>
            </ScrollView>
        </View>
    );
}

export default DetalleVendedor;

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
