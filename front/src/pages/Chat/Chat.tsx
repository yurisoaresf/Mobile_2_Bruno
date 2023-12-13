import React, { useEffect } from 'react'
import { Fragment } from 'react'
import { ScrollView, Text, SafeAreaView, View, TextInput } from 'react-native'
import { useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { TouchableOpacity } from 'react-native'
import Balloon from './Baloon'
import styles from './ChatStyles'
import storageService from '../../storageService'
import { io, Socket }  from 'socket.io-client'

type Message = {
    content: string;
    sentBy: string;

};

type User = {
    login: string;
    token: string;
    image: string;
}

const Chat = () => {
    
    
  
    
    useEffect(()=>{
        const socket : Socket = io("http://192.168.0.10:3000");
        setSocket(socket)

        socket.on("connection", () => {
            console.log("Connected to the server!");
        });

        
        storageService.get('userData').then((userData: any) =>{
            console.log(userData)
            setUserData(userData)

            return () => {
                // Limpar recursos quando o componente for desmontado
                socket.disconnect();
              };
          
    })
    }, [])

    const sendMessage = () => {
  
       socketState.emit('chat message', text); 
       const newMessage: Message = {
        content: text,
        sentBy: userData.login,
       };
       setChat({ ...chat, messages: [...chat.messages,newMessage] });
       setText("")      
    }

    const[socketState,setSocket] = useState(null)
    const content: any = {messages: [] }
    const [text, setText] = useState('')
    const[chat,setChat] = useState<Message[]>(content)
    const[userData,setUserData] = useState<User>({
        login: '',
        token: '',
        image: ''
      });
    
  return (
    <Fragment>
        <ScrollView>
        {
            chat.messages.length > 0 ?
            chat.messages.map((m:any, index: number) => (
                <Balloon key={index} message={m} currentUser={userData.login} />
                
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