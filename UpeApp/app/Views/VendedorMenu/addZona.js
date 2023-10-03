import React, { useRef, useState, useEffect } from 'react';
import { Switch,Alert, Text, Image,View, TextInput,TouchableOpacity,StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import { SearchBar } from '@rneui/themed';
import MainScreenStyles from '../MainMenu/styles';
import SharedStyles from '../Shared';
import AntDesign from '@expo/vector-icons/AntDesign';



function AddZona(idVendedor) {
    const navigationN = useNavigation();

    const urlDist = 'https://upeapp.fly.dev/zonas/distritos';
    const urlCanton = 'https://upeapp.fly.dev/zonas/cantones';
    const urlProvincia = 'https://upeapp.fly.dev/zonas/provincias';


    const [listaDist, setListaDist] = useState([]);
    const [listaCant, setListaCant] = useState([]);
    const [listaProv, setListaProv] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(urlProvincia, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setListaProv(json);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, []);

   

    

    

    const provincias =[
        listaProv.map((post) => (
            {id:post.IDProvincia,label:post.Nombre, value:post.IDProvincia}
        ))];

    const [cantones, setCantones] = useState([]);

    const [distritos, setDistritos] = useState([]);



    const [IDDistrito, setIDDistrito] = useState(null); 
    const [IDCanton, setIDCanton] = useState(null); 
    const [IDProvincia, setIDProvincia] = useState(null); 

    function volver() {
        navigationN.navigate("Zonas");
    }

    function loadCantones(idProvincia){
        useEffect(() => {
            fetch(urlCanton, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    IDProvincia: idProvincia
                }),
            })
                .then((response) => response.json())
                .then((json) => {
                    setListaCant(json);
                })
                .catch((error) => console.error(error))
                .finally(() => setLoading(false))
        }, []);

        setCantones([
            listaCant.map((post) => (
                {id:post.IDCanton,label:post.Nombre, value:post.IDCanton}
            ))]);
    }

    function loadDistritos(idCanton){
        useEffect(() => {
            fetch(urlDist, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    IDCanton: idCanton
                }),
            })
                .then((response) => response.json())
                .then((json) => {
                    setListaDist(json);
                })
                .catch((error) => console.error(error))
                .finally(() => setLoading(false))
        }, []);

        setDistritos([
            listaDist.map((post) => (
                {id:post.IDDistrito,label:post.Nombre, value:post.IDDistrito}
            ))]);

        
    }

    function  agregarZona(idVendedor, idDistrito){
        fetch("https://upeapp.fly.dev/zonas/add", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                IDVendedor: idVendedor,
                IDDistrito: idDistrito
            }),
        })
            .catch((error) => console.error(error))
            .then(volver)
            .finally(() => setLoading(false))
    }
      console.log(provincias);
      console.log(provincias[0]);
    return (

        <ScrollView style={MainScreenStyles.container}>
            <View style={MainScreenStyles.appHeader}>

            </View>
            <Text style={{ textAlign: 'center', paddingBottom: 25, paddingTop: 25, fontSize: 40, fontWeight: 'bold', color: '#0D5C63' }}>Agregar zona</Text>
            <View style={MainScreenStyles.pageView}>

                <View style={{ alignItems: 'center', justifyContent: 'space-around', }}>

                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 40, marginBottom: 10, color:'#AAAAAA'}}>Provincia</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}

                        data={provincias[0]}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                     //   placeholder= {provincias[0][0]['label']}
                        searchPlaceholder="Buscar"
                        value={IDProvincia}
                        onChange={item => {
                            setIDProvincia(item.value);
                            loadCantones(IDProvincia);
                        }}
                    />

                    
                    

                    <TouchableOpacity onPress={()=>agregarZona(idVendedor, IDDistrito)}>
                        <View style={MainScreenStyles.buttonAcept}>
                            <Text style={{ fontSize: 20, color: "white" }}>Agregar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default AddZona;

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