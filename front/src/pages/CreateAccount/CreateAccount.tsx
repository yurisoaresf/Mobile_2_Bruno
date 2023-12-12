import React, {useState} from 'react'
import { Text, TextInput, Button, View, ScrollView, ToastAndroid} from 'react-native'
import styles from './CreateAccountStyle';
import { Card } from 'react-native-elements';
import Button2 from '../Components/Button';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import httpService from '../../httpService';


const CreateAccount = ({navigation}: any) => {

  const onSubmit = async () => {
    const user = {login,email,password}
    const result: any = await httpService.createUser(user)
    const data: any = await result.json()
    ToastAndroid.show(data.message, 5000)

  }

  const [name,setName] = useState('')
  const [login,setLogin] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

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
          <TextInput style={[styles.input, {fontFamily:'Benguiat'}]}/>
          <Text style={[styles.setTextColor, {fontFamily:'Benguiat'}]}>Confirmar Senha:</Text>
          <TextInput style={[styles.input, {fontFamily:'Benguiat'}]}/>
          <Button2 onPress={()=> (goToPage("Login"))} labelButton="Criar Conta"></Button2>
      </View>
  )
}

export default CreateAccount