
import React, { useState } from 'react'
import { Text, ScrollView, ToastAndroid } from 'react-native';
import { Button, Card } from 'react-native-elements';
import styles from './WishListStyle';



const WishList = ({route}: any) => {
  const {wishList} = route.params

  const {setWishList} = route.params

  const [newWishList, setWishListRefresh] = useState(wishList)

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
      {
        newWishList.map((movie:any, i: number) => {
          return(
            <Card theme={{ colors: { primary: '#000000' } }}>
              <Card.Title>
                <Text style={styles.card}>{movie.name}</Text>
              </Card.Title>
                <Card.Divider/>
              <Card.Image style={{resizeMode:'contain', marginStart:50, width: 200, height: 300, alignContent: 'center', alignItems:'center'}} source={{uri: movie.image}}/>
              <Button buttonStyle={styles.buttonStyle}  onPress={() => {
                    openToast("Filme removido da wishlist")
                    setWishListRefresh(movieItem => movieItem.filter(item => {return item.name !== movie.name}))
                    setWishList(movieItem => movieItem.filter(item => {return item.name !== movie.name}))
                  }} title={<CustomTitle />}>
              </Button>     
            </Card>  

            )
          })}   
      </ScrollView>
    );
  }
export default WishList