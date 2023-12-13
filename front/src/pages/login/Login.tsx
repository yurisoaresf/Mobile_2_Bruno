import React, { useState } from 'react';
import { Text, View, TextInput, Button, Image, StatusBar, ToastAndroid } from 'react-native';
import styles from './LoginStyle';
import Button2 from '../Components/Button';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import httpService from '../../httpService';
import storageService from '../../storageService';
import * as SplashScreen from 'expo-splash-screen';


const Login = ({navigation}: any) => {
    const[login, setLogin] = useState('')
    const[password, setPassword] = useState('')
    const onSubmit = async () => {
      const result = await httpService.login({login, password})
      const data = await result.json()
      if(result.status === 200) {
        try {
          storageService.set('userData', (data.userData))
          goToPage('Home')
          ToastAndroid.show(data.message, 5000)
        } catch(e) {
          ToastAndroid.show('Não foi possivel logar no sistema. Tente novamente mais tarde', 5000)
        }
      } else {
        ToastAndroid.show(data.message, 5000)
      }
    }
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
        <View style={styles.logo}>
        <Image style={{width:400, height: 400, resizeMode: 'contain'}} source={require('../../../assets/images/pngegg.png')}/>
        </View>
        <Text style={[styles.setTextColor, {fontFamily: 'Benguiat'}]}>Login</Text>
        <TextInput value={login}
          onChange={(event) => {setLogin(event.nativeEvent.text)}}  style={[styles.input, {fontFamily: 'Benguiat'}]}/>
        <Text style={[styles.setTextColor, {fontFamily: 'Benguiat'}]}>Password</Text>
        <TextInput value={password}
          onChange={(event) => {setPassword(event.nativeEvent.text)}}  secureTextEntry={true} style={[styles.input, {fontFamily: 'Benguiat'}]}/>
        <View style={styles.createForgotLink}>
          <Text onPress={()=> (goToPage("CreateAccount"))} style={[styles.link,{fontFamily: 'Benguiat'}]}>Create Account</Text>
          <Text onPress={()=> (goToPage("ForgotPassword"))} style={[styles.link,{fontFamily: 'Benguiat'}]}>Forgot Password</Text> 
        </View>
        <Button2 onPress={()=>
          { 
            onSubmit()
          }} labelButton="Entrar"></Button2>
        <StatusBar barStyle={'light-content'}/>
      </View>

  )
}

export default Login