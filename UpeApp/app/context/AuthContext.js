import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';


export const AuthContext = createContext ();


export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const login = (correo, contrasena)=>{
        setIsLoading(true);
        axios.post('https://upeapp.fly.dev/login/iniciar',{  
            CorreoElectronico: correo,
            Contrasena:contrasena
          
        })
        .then(res=>{
            let userInfo= res.data[0];
            setUserInfo(userInfo);
            setUserToken(userInfo.IDVendedor.toString());

            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            AsyncStorage.setItem('userToken', userInfo.IDVendedor.toString());

            setIsLoading(false);    
            return userToken !== null;
        })
        .catch(error=>{
            console.log(error.message)
            setIsLoading(false);
            return false;
        });
    }

    const logout = ()=>{
        setIsLoading(true);
        setUserToken(null);   
        AsyncStorage.removeItem('userInfo');
        AsyncStorage.removeItem('userToken');        
        setIsLoading(false);
    }

    const isLoggedIn = async () => {
        try{
            console.log("Entrando a isLoggedIn")
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.stringify(userInfo);

            if(userToken){
                console.log("ya hay un usuario :D")
                setUserToken(userToken);
                setUserInfo(userInfo);
            }
            else{
                console.log("NO hay un usuario :(")
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

