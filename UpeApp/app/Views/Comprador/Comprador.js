import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Alert, Platform, StatusBar, Dimensions, TouchableOpacity, DrawerLayoutAndroid, ScrollView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';

import { SearchBar } from '@rneui/themed';
import MainScreenStyles from '../MainMenu/styles';
import SharedStyles from '../Shared';
import AntDesign from '@expo/vector-icons/AntDesign';


function Comprador(props) {
  const navigationN = useNavigation();

  //Mauricio S
  const [data, setData] = useState([])
  const [lista, setLista] = useState([])
  const [listaTipos, setListaTipos] = useState([])

  const [textTipo, setTipo] = useState("Seleccionar Categoria");
  const [textDetalles, setDetalles] = useState([]);
  const [TipoID, setTipoID] = useState([]);


  const [listaDist, setListaDist] = useState([]);
  const [listaCant, setListaCant] = useState([]);
  const [listaProv, setListaProv] = useState([]);
  const [IDDistrito, setIDDistrito] = useState([]);
  const [IDCanton, setIDCanton] = useState([]);
  const [IDProvincia, setIDProvincia] = useState([]);


  const [loading, setLoading] = useState(true)
  const url = "https://upeapp.fly.dev/productos/todos";

  useEffect(() => {
    fetch(url)
      .then(async (response) => response.json())
      .then((json) => { setData(json), setLista(json) })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  const url2 = "https://upeapp.fly.dev/productos/tipos";

  useEffect(() => {
    fetch(url2)
      .then(async (response) => response.json())
      .then((json) => { setListaTipos(json) })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  const url3 = "https://upeapp.fly.dev/productos/zonas";

  useEffect(() => {
    IDDistrito == null?
    setLista(data):
    fetch(url3, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        IDZona: IDDistrito
      }),
    })
      .then(async (response) => response.json())
      .then((json) => { setLista(json) })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [IDDistrito])

  const DDTipos = [
    listaTipos.map((post) => (
      { id: post.IDTipoProducto, label: post.Nombre, value: post.IDTipoProducto }
    ))];


  const [search, setSearch] = useState("");
  const [tipoFiltrado, setTipoFiltrado] = useState("");

  function filtrarLista(nombre) {
    console.log(nombre)
    setSearch(nombre)
    nombre = nombre.toLowerCase();
    const productosFiltrados = data.filter(prod => {
      const nombreProducto = prod.Nombre.toLowerCase();
      return nombreProducto.includes(nombre);
    });

    setLista(productosFiltrados);
    if (nombre == "") {
      setLista(data)
    }
  }

  function filtrarTipo(IDTipo) {
    setTipoFiltrado(IDTipo)
    const productosFiltrados = data.filter(prod => {

      return prod.IDTipo == IDTipo;
    });
    setLista(productosFiltrados);
    if (IDTipo == "") {
      setLista(data)
    }
  }

  //-------Filtro zonas---
  const urlDist = 'https://upeapp.fly.dev/zonas/distritos';
  const urlCanton = 'https://upeapp.fly.dev/zonas/cantones';
  const urlProvincia = 'https://upeapp.fly.dev/zonas/provincias';




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

  useEffect(() => {
    fetch(urlCanton, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        IDProvincia: IDProvincia
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        setListaCant(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [IDProvincia]);

  useEffect(() => {
    fetch(urlDist, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        IDCanton: IDCanton
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        setListaDist(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [IDCanton]);





  const provincias = [
    listaProv.map((post) => (
      { id: post.IDProvincia, label: post.Nombre, value: post.IDProvincia }
    ))];

  const cantones = [
    listaCant.map((post) => (
      { id: post.IDCanton, label: post.Nombre, value: post.IDCanton }
    ))];

  const distritos = [
    listaDist.map((post) => (
      { id: post.IDDistrito, label: post.Nombre, value: post.IDDistrito }
    ))];

  return (

    <View style={MainScreenStyles.container}>
      <View style={MainScreenStyles.appHeader}>

      </View>
      <Text style={{ textAlign: 'center', marginTop: 25, paddingBottom: 25, fontSize: 40, fontWeight: 'bold', color: '#0D5C63' }}>Productos disponibles</Text>

      <View style={MainScreenStyles.pageView}>
        <View style={MainScreenStyles.containerFiltros}>
          <Dropdown
            style={styles.dropdown2}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}

            data={provincias[0]}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={"Provincia"}
            searchPlaceholder="Buscar"
            value={IDProvincia}
            onChange={item => {
              setIDProvincia(item.value);
            }}
          />
          <Dropdown
            style={styles.dropdown2}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}

            data={cantones[0]}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={"Cantón"}
            searchPlaceholder="Buscar"
            value={IDCanton}
            onChange={item => {
              setIDCanton(item.value);
              // loadDistritos(IDCanton);
            }}
          />
          <Dropdown
            style={styles.dropdown2}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}

            data={distritos[0]}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={"Distrito"}
            searchPlaceholder="Buscar"
            value={IDDistrito}
            onChange={item => {
              setIDDistrito(item.value);
            }}
          />
        </View>

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
          placeholder={textTipo}
          searchPlaceholder="Búsqueda"
          value={tipoFiltrado}
          onChange={item => {
            filtrarTipo(item.value)
          }}
          renderLeftIcon={() => (
            <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
          )}
        />

        <ScrollView >
          <View style={{ width: "90%", alignSelf: "center" }}>
            <SearchBar
              placeholderTextColor={"black"}
              inputStyle={{ color: "black" }}
              searchIcon={{ color: "black" }}
              cancelIcon={{ color: "black" }}
              containerStyle={{ borderRadius: 10, backgroundColor: "#0D5C63", borderBottomColor: "white", borderTopColor: "white" }}
              inputContainerStyle={{ backgroundColor: SharedStyles.colorBG }}
              placeholder="Buscar..."
              onChangeText={newText => filtrarLista(newText)}
              value={search}
            />
          </View>
          {
            loading ? (<Text> Cargando... </Text>) : (
              lista.map((post) => (

                <TouchableOpacity onPress={() => navigationN.navigate("DetalleProducto", post)}
                  style={MainScreenStyles.cubContainer} key={post.IDProducto}>
                  <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{post.Nombre}</Text>
                  <Text style={{ fontSize: 20 }}>₡{post.Costo}</Text>
                  <Text style={{ fontSize: 20 }}>{post.Tipo}</Text>
                  <View style={{ marginTop: 15, flexDirection: "row", alignSelf: "center", justifyContent: "space-between", width: "80%" }}>

                  </View>
                </TouchableOpacity>
              ))
            )}
        </ScrollView>
      </View>
    </View>
  );
}

export default Comprador;
const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    marginLeft: 30,
    height: 50,
    width: '85%',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  dropdown2: {
    margin: 16,
    marginLeft: 30,
    height: 50,
    width: '30%',
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
