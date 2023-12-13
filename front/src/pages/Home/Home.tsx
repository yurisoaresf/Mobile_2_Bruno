import React, { useState, useEffect } from 'react'
import { ScrollView,  Text, View, StatusBar, ToastAndroid, ActivityIndicator, FlatList } from 'react-native'
import { Card, Button } from 'react-native-elements'
import styles from './HomeStyle';
import Icon from 'react-native-vector-icons/Icon';
import Icon3 from 'react-native-vector-icons/AntDesign';
import * as RootNavigation from '../navigator/RootNavigation';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { FAB } from '@rneui/themed'
import storageService from '../../storageService'


type Movie = {
    _id: string;
    name: string;
    directedBy: string;
    overview: string;
    gender: string;
    duration: string;
    image: string;
};
    
    
type User = {
    login: string;
    token: string;
    image: string;
}


const Home = ({navigation,wishList,setWishList} : any) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Movie[]>([]);
    const [favorite,setFavorite] = useState(false);

      const callStorage = async ()=> {
         const userData = await storageService.get('userData')
         return userData.token
      };

    const getMovies = async () => {
       const token = await callStorage();
        try {
            
          const response = await fetch('http://192.168.0.10:3000/api/movie', {headers: {
            'authorization': "Bearer " + token
          }} );
          const json = await response.json();
          setData(json);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      
      useEffect(() => {
        getMovies()
      }, []);

    const openToast = (message: string) => {
        ToastAndroid.show(message, 3000);
    }

    const openChat = () => {
        RootNavigation.navigate('Chat')
    }


    const CustomTitle = () => {
        return (
            <Text style={{ fontFamily: 'Aachen', color: 'black', fontSize: 18 }}>Adicionar a Wishlist</Text>
        );
    };


  return (
    <>
    <View style={styles.container}>
      
        {isLoading ? (
        <ActivityIndicator size={'large'} />
        ) : (
            <FlatList 
            data={data}
            keyExtractor={({_id}) => _id}
            renderItem={({item}) => (
                <Card theme={{ colors: { primary: '#000000' } }}  key={item._id}>
                <Card.Title >
                    <Text style={[styles.card]}>{item.name}</Text>
                </Card.Title>

                <Card.Divider/>
                <Card.Image style={{resizeMode:'contain', marginStart:50, width: 200, height: 300, alignContent: 'center', alignItems:'center'}} onPress={() => (RootNavigation.navigate("MovieDetails",{item}))} source={{uri: item.image}}/>
            <View style={{flexDirection: "row", marginBottom: "5%", marginTop: "5%", alignSelf: 'center'}}>
                <Text style={[styles.card]}>Gênero: {item.gender}</Text>
            </View>
            <View style={{flexDirection: "row", marginBottom: "7%", marginTop: "3%", alignSelf: 'center'}}>
                <Text style={[styles.card]}>Duração: {item.duration}</Text>
            </View>
            {
                favorite ? 

                <Icon3 onPress={()=> (setFavorite(false))} name="pushpin" size={25} color="#fcb300"></Icon3>: 
                <Icon3 onPress={()=> (setFavorite(true))} name="pushpino" size={25} color="white"></Icon3>
            }
            <Button  buttonStyle={[styles.buttonStyle]} onPress={() => {
                if( wishList.some(xpto => { 
                    if (xpto.name == item.name){
                        return true;
                    }

                    return false;
                })){
                    openToast("Filme já adicionado na wishlist")
                } else {
                    openToast("Filme adicionado na wishlist")
                    setWishList([...wishList,item])
                }
                }} title={<CustomTitle />}></Button>
            
            </Card>
            )}
          />
        )
        }
     
    </View>
    <FAB
        style={styles.fab}
        visible={true}
        icon={{name: 'chat', color: 'white'}}
        color='green'
        onPress={() => openChat()}
    />
    </>
  );
}
export default Home