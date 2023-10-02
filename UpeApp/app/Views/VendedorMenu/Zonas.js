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
    const navigationN = useNavigation();
    const { userInfo } = useContext(AuthContext);

    // Initialize lista as an empty array
    const [lista, setLista] = useState([]);

    const [loading, setLoading] = useState(true);
    const url = 'https://upeapp.fly.dev/zonas/uno';

    useEffect(() => {
        console.log("ID de vendedor", userInfo.IDVendedor)
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                IDVendedor: userInfo.IDVendedor
            }),
        })
            .then((response) => response.json())
            .then((json) => {
                setLista(json);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    console.log(lista)

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
                            </View>
                        ))
                    )}
                </ScrollView>
            </View>
        </View>
    );
}

export default Zonas;
