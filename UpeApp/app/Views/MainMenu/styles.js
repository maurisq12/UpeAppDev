import SharedStyles from '../Shared';
import {StyleSheet} from 'react-native';


const MainScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:SharedStyles.colorDef,
      //paddingTop: StatusBar.currentHeight,
    },
    buttonAcept: {
      borderRadius: 8,
      padding: 20,
      alignItems: 'center',
      backgroundColor: "blue"
    },
    buttonDelete: {
      borderRadius: 8,
      padding: 20,

      alignItems: 'center',
      backgroundColor: "red"
    },
    banner: {
      maxHeight:'35%',
      flex:1,
      backgroundColor: SharedStyles.colorDef,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
  //    justifyContent: 'center',
    },
    cubContainer: {
      padding: 20,
      marginTop: 15,
      alignSelf: "center",
      width:'90%',
      borderRadius: 10,
      backgroundColor: "white",


  //    justifyContent: 'center',
    },
    appHeader: {
      maxHeight:'4%',
      flex:1,
      backgroundColor: SharedStyles.colorDef,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
  //    justifyContent: 'center',
    },
    pageView: {
      backgroundColor:SharedStyles.colorBG,
      flex:1,
      borderTopLeftRadius:20,
      borderTopRightRadius: 20,
    },
    buttonView: {
      backgroundColor:SharedStyles.colorBG,
      alignSelf: 'center',
      flex:1.8,
      width:'100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopLeftRadius:50,
      borderTopRightRadius: 50,
    },
      button: {
        borderRadius:35,
        borderColor: SharedStyles.colorDark,
        width:350,
        height:100,
        alignItems: 'center',
        padding:15,
        backgroundColor:"rgba(255,255,255,0.8)",
        flexDirection: 'row',
        marginVertical:10
        
      },
      buttonText: {
        textAlign: 'center',
        padding: 15,
        fontSize: 22,
        fontWeight: 'bold',
        color: SharedStyles.colorDark,
        opacity:1.0
      },
      input: {
        height: 50,
        width: '90%',
        paddingLeft:15,
        borderRadius:10,
        backgroundColor:'white',
        fontSize: SharedStyles.buttonsSizeFont,
        elevation: 20,
        shadowColor: 'grey',
  
      },
      intInput: {
        textAlign: "center",
        height: 50,
        width: '20%',
        borderRadius:10,
        backgroundColor:'white',
        fontSize: SharedStyles.buttonsSizeFont,
        elevation: 20,
        shadowColor: 'grey',
  
      },
      titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 15
      }
  })

  export default MainScreenStyles;