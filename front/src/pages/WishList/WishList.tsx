
import React, { useState, useEffect } from 'react'
import { Text, ScrollView, ToastAndroid, Image, View } from 'react-native';
import { Button, Card } from 'react-native-elements';
import styles from './WishListStyle';
import storageService from '../../storageService'


type User = {
  login: string;
  token: string;
  image: string;
}

const WishList = ({route}: any) => {

  useEffect(()=>{
      
    storageService.get('userData').then((userData: any) =>{     
        setUserData(userData)     
    })
  }, [])
  const {wishList} = route.params

  const {setWishList} = route.params

  const [newWishList, setWishListRefresh] = useState(wishList)

  

  const[userData,setUserData] = useState<User>({
    login: '',
    token: '',
    image: ''
  });

  const openToast = (message: string) => {
    ToastAndroid.show(message, 3000);
  } 

  const CustomTitle = () => {
    return (
        <Text style={{ fontFamily: 'Aachen', color: 'white', fontSize: 15 }}>Remover da Whishlist</Text>
    );
};

  return (
    <ScrollView style={styles.container}>
      <View style={{alignContent: 'center', alignItems: 'center'}}>
        <Text style={styles.title}> Bem vindo a sua Lista de desejo {userData.login}</Text>
        {userData.image && <Image source={{ uri: userData.image }} style={styles.image} />}
      </View>    
      {newWishList.length === 0 ? (
        <Text style={styles.empty}>Sua wishlist está vazia.</Text>
      ) : (
        newWishList.map((movie: any, i: number) => {
          return (
            <Card theme={{ colors: { primary: '#000000' } }} key={i}>
              <Card.Title>
                <Text style={styles.card}>{movie.name}</Text>
              </Card.Title>
              <Card.Divider />
              <Card.Image
                style={{ resizeMode: 'contain', marginStart: 50, width: 200, height: 300, alignContent: 'center', alignItems: 'center' }}
                source={{ uri: movie.image }}
              />
              <Button
                buttonStyle={styles.buttonStyle}
                onPress={() => {
                  openToast('Filme removido da wishlist');
                  setWishListRefresh((movieItem) => movieItem.filter((item) => item.name !== movie.name));
                  setWishList((movieItem) => movieItem.filter((item) => item.name !== movie.name));
                }}
                title={<CustomTitle />}
              />
            </Card>
          );
        })
      )}
      
    </ScrollView>
    );
  }
export default WishList