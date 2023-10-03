import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ScreenNavigator from './app/Views/Navigator';

import {AuthProvider} from './app/context/AuthContext'


export default function App() {
  return (
  <AuthProvider>
    <ScreenNavigator/>
  </AuthProvider>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
