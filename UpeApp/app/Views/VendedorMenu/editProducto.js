import React, { useRef, useState, useEffect } from 'react';
import { Switch,Alert, Text, Image,View, TextInput,TouchableOpacity,StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import { SearchBar } from '@rneui/themed';
import MainScreenStyles from '../MainMenu/styles';
import SharedStyles from '../Shared';
import AntDesign from '@expo/vector-icons/AntDesign';



function EditProducto(route) {
    const navigationN = useNavigation();

    function volver() {
        navigationN.navigate("GestCubiculos");
    }

    

    //Mauricio S
    const [data, setData] = useState([])
    const [lista, setLista] = useState([])

    const [loading, setLoading] = useState(true)
    const url = "https://upeapp.fly.dev/productos/tipos";

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {setData(json),setLista(json)})
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [])

    const DDTipos =[
        lista.map((post) => (
            {id:post.IDTipoProducto,label:post.Nombre, value:post.IDTipoProducto}
        ))];

    const prod = route.route.params

    const [value, setValue] = useState(null); ;

    const [textNombre, setNombre] = useState(prod.Nombre);
    const [textCosto, setCosto] = useState(""+prod.Costo);
    const [textTipo, setTipo] = useState(""+prod.Tipo);
    const [textDetalles, setDetalles] = useState(""+prod.Detalles);
    const [TipoID, setTipoID] = useState(prod.IDTipo);  

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
                IDTipo: TipoID
            }),
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(JSON.stringify(responseData));
                navigationN.goBack()
            })
            
    }

    function  eliminarProducto(id){
        fetch("https://upeapp.fly.dev/productos/delete", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                IDProducto: id,

            }),
        })
            .catch((error) => console.error(error))
            .then(volver)
            .finally(() => setLoading(false)

        )}
      
    const alertaEliminar = (nombre, id) =>
    Alert.alert('¿Eliminar', nombre+["?"] , [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Eliminar', onPress: () => eliminarProducto(id)},
      ]);
      

    return (

        <ScrollView style={MainScreenStyles.container}>
            <View style={MainScreenStyles.appHeader}>

            </View>
            <Text style={{ textAlign: 'center', paddingBottom: 25, paddingTop: 25, fontSize: 40, fontWeight: 'bold', color: '#0D5C63' }}>Edición de producto</Text>
            <View style={MainScreenStyles.pageView}>
        

                <Text style={MainScreenStyles.titulo}>Editar producto</Text>
                <View style={{ alignItems: 'center', justifyContent: 'space-around', }}>

                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10,marginTop:20, color:'#AAAAAA' }}>Nombre del producto:</Text>
                    <TextInput
                        id="nombre"
                        style={MainScreenStyles.input}
                        onChangeText={newText => setNombre(newText)}
                        value={textNombre}
                        placeholderTextColor="black"
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 40, marginBottom: 10, color:'#AAAAAA'}}>Tipo:</Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={DDTipos[0]}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder= {textTipo}
                        searchPlaceholder="Búsqueda"
                        value={TipoID}
                        onChange={item => {
                            setTipoID(item.value);
                        }}
                        renderLeftIcon={() => (
                        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                        )}
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 40, marginBottom: 1, color:'#AAAAAA'}}>Costo:</Text>
                    <TextInput
                        keyboardType={"numeric"}
                        style={MainScreenStyles.intInput}
                        onChangeText={newText => setCosto(newText)}
                        value={textCosto}
                        placeholderTextColor="black"
                    />

                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 40, marginBottom: 5, color:'#AAAAAA'}}>Detalles :</Text>
                    <TextInput
                        style={MainScreenStyles.input}
                        onChangeText={newText => setDetalles(newText)}
                        value={textDetalles}
                        multiline={true}
                        placeholderTextColor="black"
                    />

                    <TouchableOpacity onPress={realizarCambios}>
                        <View style={MainScreenStyles.buttonAcept}>
                            <Text style={{ fontSize: 20, color: "white" }}>Guardar información</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>alertaEliminar(prod.Nombre,prod.IDProducto)}>
                        <View style={MainScreenStyles.buttonDelete}>
                            <Text style={{ fontSize: 20, color: "white" }}>Eliminar producto</Text>
                        </View>
                    </TouchableOpacity>


                </View>
            </View>
        </ScrollView>
    );
}

export default EditProducto;

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
