import { CardTitle } from '@rneui/base/dist/Card/Card.Title';
import React from 'react'
import { ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import styles from './MovieDetailsStyle';


const MovieDetails = ({route}:any) => {
  const {movie} = route.params
  const {product} = route.params
  return (

    <ScrollView style={styles.container}>
      <Card theme={{ colors: { primary: '#000000' } }}>
          <Card.Title>
            <Text style={[{textAlign: 'justify'},styles.card]}>{movie.name}</Text>
          </Card.Title>
          <Card.Image style={{resizeMode:'contain', marginStart:50, width: 200, height: 300, alignContent: 'center', alignItems:'center'}} source={{uri: movie.image}}/>
          <View style={{flexDirection: "row", marginBottom: "5%", marginTop: "5%", alignSelf: 'center'}}>
            <Text style={[{textAlign: 'justify'},styles.card]} >{movie.overview}</Text>
          </View>
          <View style={{flexDirection: "row", marginBottom: "5%", marginTop: "5%", alignSelf: 'center'}}>
            <Text style={[styles.card]}>Gênero: {movie.genero}</Text>
          </View>
          <View style={{flexDirection: "row", marginBottom: "7%", marginTop: "3%", alignSelf: 'center'}}>
            <Text style={[styles.card]}>Duração: {movie.duracao}</Text>
          </View>
          <View style={{flexDirection: "row", marginBottom: "7%", marginTop: "3%", alignSelf: 'center'}}>
            <Text style={[styles.card]}>Dirigido por: {movie.directedBy}</Text>
          </View>
      </Card>
    </ScrollView>
  )
}

export default MovieDetails