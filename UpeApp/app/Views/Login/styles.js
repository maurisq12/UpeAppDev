import SharedStyles from '../Shared';
import {StyleSheet} from 'react-native';

const loginStyle = StyleSheet.create({
    input: {
      width: '90%',
      paddingLeft:15,
      borderRadius:10,
      backgroundColor:'white',
      fontSize: SharedStyles.buttonsSizeFont,
      flex : 0.2,
      elevation: 20,
      shadowColor: 'grey',

    },
    buttonView: {
      flex:0.5,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    button: {
      borderRadius:15,
      width: 260,
      paddingEnd: 10,
      alignItems: 'center',
      backgroundColor:"#0D5C63"
    },
    buttonText: {
      textAlign: 'center',
      fontWeight:'bold',
      padding: 10,
      fontSize: SharedStyles.buttonsSizeFont,
      color: '#FFFFFF'
    },
  
      container: {
        flex: 1,
        backgroundColor :SharedStyles.colorBG,
      },
      banner:{
        flex: 0.3,
        backgroundColor :SharedStyles.colorBG,
        alignContent:'center',
        justifyContent:'center',
      },
      inner: {
        padding: 24,
        flex: 1,
        backgroundColor :SharedStyles.colorBG,
        justifyContent: 'space-around',
      },
      header: {
        fontSize: 36,
        marginBottom: 48,
      },
      textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,
      },
      btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
      },
    });

export default loginStyle;