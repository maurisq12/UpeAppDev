import React, { useRef, useState, useEffect, useContext } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    Button,
    Alert,
    Platform,
    StatusBar,
    Dimensions,
    TouchableOpacity,
    DrawerLayoutAndroid,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from '@rneui/themed';
import MainScreenStyles from '../MainMenu/styles';
import SharedStyles from '../Shared';
import { AuthContext } from '../../context/AuthContext';



function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

    return formattedDate;
}



function Zonas(props) {
    const { userToken } = useContext(AuthContext);
    const navigationN = useNavigation();

    // Initialize lista as an empty array
    const [lista, setLista] = useState([]);

    const [loading, setLoading] = useState(true);
    const url = 'https://upeapp.fly.dev/zonas/uno';
    const urlDelete = 'https://upeapp.fly.dev/zonas/delete';

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
                setLista(json);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

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
                setLista(json);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [props]);

    function eliminarZona(id){
        fetch(urlDelete, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                IDVendedor: userToken,
                IDZona: id,
    
            }),
        })
            .then((response) => response.json())
           // .then((json) => {setLista(json)})
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
            
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
                setLista(json);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
        
    }

    const alertaEliminar = (distrito, id) =>
        Alert.alert('¿Eliminar', distrito+["?"] , [
            {
            text: 'Cancelar',
            onPress: () => console.log('Cancel Pressed'),
            },
            {text: 'Eliminar', 
            onPress: () => eliminarZona(id)},
        ]);

        

    return (
        <View style={MainScreenStyles.container}>
            <View style={MainScreenStyles.appHeader}></View>
            <Text
                style={{
                    textAlign: 'center',
                    paddingBottom: 25,
                    fontSize: 40,
                    fontWeight: 'bold',
                    color: '#0D5C63',
                }}
            >
                Mis zonas
            </Text>
            <View style={{ marginTop: 0, flexDirection: "row-reverse", alignSelf: "center", justifyContent: "space-between", width: "80%" }}>
                <TouchableOpacity onPress={() => navigationN.navigate("AddZona", userToken)}>
                    <View style={MainScreenStyles.buttonAcept}>
                        <Text style={{ fontSize: 20, color: "white"}}>Agregar</Text>
                    </View>
                </TouchableOpacity>
             </View>

            <View style={MainScreenStyles.pageView}>
                <ScrollView>
                    {loading ? (
                        <Text> Cargando... </Text>
                    ) : (
                        lista.map((post) => (
                            <View style={MainScreenStyles.cubContainer} key={post.IDZona}>
                                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                                    {post.Provincia}, {post.Canton}, {post.Distrito}
                                </Text>
                                <Text style={{ fontSize: 15 }}> Agregado: {formatDate(post.FechaAgregado)}</Text>
                                    <View style={styles.container}>
                                        <TouchableOpacity onPress={() => alertaEliminar(post.Distrito, post.IDZona)}>
                                            <View style={styles}>
                                                <Text style={{ fontSize: 20, color: "white", textAlign:'center'}}>Eliminar</Text>
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

export default Zonas;

const styles = StyleSheet.create({
    padding: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: SharedStyles.colorDark,
    opacity:1.0,
    borderRadius: 8,
    marginTop:13,
    alignItems: 'center',
    flexDirection: 'row',
    width: "30%",
    backgroundColor: "#cc0000"
  });
  