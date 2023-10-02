import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';


export const AuthContext = createContext ();


export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const login = (correo, contrasena)=>{

        console.log("contra",correo)
        setIsLoading(true);
        axios.post('http://192.168.18.73:3000/login/iniciar',{  
            CorreoElectronico: correo,
            Contrasena:contrasena
          
        })
        .then(res=>{
            let userInfo= res.data[0];
            setUserInfo(userInfo);
            setUserToken(userInfo.IDVendedor.toString());

            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            AsyncStorage.setItem('userToken', userInfo.IDVendedor.toString());

        })
        .catch(error=>{
            console.log(error.message)
        });
        setIsLoading(false);
    }

    const logout = ()=>{
        setIsLoading(true);
        setUserToken(null);   
        AsyncStorage.removeItem('userToken');
        AsyncStorage.removeItem('userInfo');
        setIsLoading(false);
    }

    const isLoggedIn = async () => {
        try{
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.stringify(userInfo);

            if(userInfo){
                setUserToken(userToken);
                setUserInfo(userInfo);

            }
            setIsLoading(false);
        }
        catch(error){
            console.log("Error en isLoggedIn")
        }
    }

    useEffect(() => {
        isLoggedIn();
    }, []);
    
    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken, userInfo}}>
            {children}
        </AuthContext.Provider>
    );
}

