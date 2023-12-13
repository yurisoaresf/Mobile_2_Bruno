import React, {useState} from 'react'
import { Text, TextInput, Button, View, ScrollView, ToastAndroid} from 'react-native'
import styles from './CreateAccountStyle';
import { Card} from 'react-native-elements';
import Button2 from '../Components/Button';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import httpService from '../../httpService';
import { Snackbar } from 'react-native-paper';

const CreateAccount = ({navigation}: any) => {

  const onSubmit = async () => {
    if (email === ''|| login === '' || password === '' || confirmPassword === '' ){
      setErrorMessage("Todos os campos devem ser preenchidos");
      setSnackbarVisible(true);
    }
    else if(password !== confirmPassword){
      setErrorMessage("Verifique se você confirmou sua senha corretamente");
      setSnackbarVisible(true);
    }
    else  {
      const user = {email,login,password}
      const result: any = await httpService.createUser(user)
      const data: any = await result.json()
      ToastAndroid.show(data.message, 5000)
      goToPage("Login")
     }  
  }

  const onSnackbarDismiss = () => {
    setSnackbarVisible(false);
  };

  const [name,setName] = useState('')
  const [login,setLogin] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const goToPage = (path: any) => {
    navigation.navigate(path);
  }
    const [fontsLoaded,fontError] = useFonts({
      'Benguiat': require('../../../assets/fonts/Benguiat.ttf'),
      'Aachen': require('../../../assets/fonts/Aachen.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded, fontError]);
  
    if (!fontsLoaded && !fontError) {
      return null;
    }

  return (
      <View style={styles.container} onLayout={onLayoutRootView}>
          <Text style={[styles.setTextColor, {fontFamily:'Benguiat'}]}>Nome:</Text>
          <TextInput value={login}
          onChange={(event) => {setLogin(event.nativeEvent.text)}} 
          style={[styles.input, {fontFamily:'Benguiat'}]}/>
          <Text style={[styles.setTextColor, {fontFamily:'Benguiat'}]}>Email:</Text>
          <TextInput
          value = {email}
          onChange={(event) => {setEmail(event.nativeEvent.text)}}
          style={[styles.input, {fontFamily:'Benguiat'}]}/>
          <Text style={[styles.setTextColor, {fontFamily:'Benguiat'}]}>Senha:</Text>
          <TextInput value = {password}
          onChange={(event) => {setPassword(event.nativeEvent.text)}} secureTextEntry={true} style={[styles.input, {fontFamily:'Benguiat'}]}/>
          <Text style={[styles.setTextColor, {fontFamily:'Benguiat'}]}>Confirmar Senha:</Text>
          <TextInput value = {confirmPassword}
          onChange={(event) => {setConfirmPassword(event.nativeEvent.text)}} secureTextEntry={true} style={[styles.input, {fontFamily:'Benguiat'}]}/>
          <Button2 onPress={()=> {
            onSubmit()
            
          }} labelButton="Criar Conta"></Button2>
          <Snackbar
            visible={snackbarVisible}
            onDismiss={onSnackbarDismiss}
           >
            {errorMessage}
          
          </Snackbar>
      </View>
  )
}

export default CreateAccount