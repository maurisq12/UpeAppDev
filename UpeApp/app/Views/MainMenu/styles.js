import SharedStyles from '../Shared';
import {StyleSheet} from 'react-native';


const MainScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:SharedStyles.colorDef,
      //paddingTop: StatusBar.currentHeight,
    },
    buttonAcept: {
      marginTop: 35,
      borderRadius: 8,
      padding: 12,
      marginTop:25,
      width:'100%',
      alignItems: 'center',
      backgroundColor: "#0D5C63"
    },
    buttonDelete: {
      borderRadius: 8,
      padding: 15,
      marginTop:25,
      alignItems: 'center',
      backgroundColor: "#cc0000"
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
      padding: 15,
      marginTop: 15,
      alignSelf: "center",
      width:'90%',
      borderRadius: 20,
      backgroundColor: "#EAEAEA",


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
        backgroundColor:"#0D5C63",
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
      formTitleText: {
        alignSelf: "baseline",
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 30,
        marginLeft: 30,
        color:'#AAAAAA'
      },

      input: {
        height: 50,
        width: '90%',
        paddingLeft:15,
        backgroundColor:'white',
        fontSize: SharedStyles.buttonsSizeFont,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        textAlignVertical: "top"
  
      },
      intInput: {
        textAlign: "center",
        height: 50,
        width: '50%',
        backgroundColor:'white',
        fontSize: SharedStyles.buttonsSizeFont,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5
  
      },
      titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 15
      }
  })

  export default MainScreenStyles;