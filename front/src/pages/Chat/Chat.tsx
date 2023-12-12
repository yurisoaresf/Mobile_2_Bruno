import React, { useEffect } from 'react'
import { Fragment } from 'react'
import { ScrollView, Text, SafeAreaView, View, TextInput } from 'react-native'
import { useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { TouchableOpacity } from 'react-native'
import Balloon from './Baloon'
import styles from './ChatStyles'
import storageService from '../../storageService'



const Chat = () => {
    useEffect(()=>{
        storageService.get('userData').then((userData: any) =>{
            console.log(userData)
            setUserData(userData)
    })
    }, [])
    const sendMessage = () => {}
    const content: any = {messages: [] }
    const [text, setText] = useState('')
    const[chat,setChat] = useState(content)
    const[userData,setUserData] = useState({name: ''})
  return (
    <Fragment>
        <ScrollView>
        {
            chat.messages.length > 0 ?
            chat.messages.map((m:any, index: number) => (
                <Balloon key={index} message={m} currentUser={userData.name} />
            )): 
            <Text style={{marginTop: '5%', alignSelf:'center', color: '#848484'}}>
                Sem mensagens no momento
            </Text>
        }


        </ScrollView>
        <SafeAreaView>

            <View style={styles.messageTextInputContainer}>
                <TextInput
                    style={styles.messageTextInput}
                    placeholder="Digite sua mensagem..."
                    placeholderTextColor={Colors.light}
                    value={text}
                    multiline
                    onChangeText={(message) => setText(message)}
                />
                <TouchableOpacity
                    style={styles.sendButton}
                    disabled={!text}
                    onPress={() => sendMessage()}>
                    <Text style={{color: Colors.white}}>Enviar</Text>    
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    </Fragment>
  )
}

export default Chat 