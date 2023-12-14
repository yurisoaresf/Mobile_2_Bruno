import { CardTitle } from '@rneui/base/dist/Card/Card.Title';
import { ScrollView, Text, View, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-elements';
import styles from './MovieDetailsStyle';
import React, { useState, useEffect } from 'react'


type Movie = {
  _id: string;
  name: string;
  directedBy: string;
  overview: string;
  gender: string;
  duration: string;
  image: string;
};

const MovieDetails = ({route}:any) => {

  const getMovie = async () => {
    try {
      const {item} = route.params
      const request =  'http://10.5.4.108:3000/api/movie/' + item.name
      const response = await fetch(request);
      const json = await response.json();
      console.log(json)
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Movie>({
    _id: '',
    name: '',
    directedBy: '',
    overview: '',
    gender: '',
    duration: '',
    image: '',
  });

  
  return (

    <ScrollView style={styles.container}>
       {isLoading ? (
        <ActivityIndicator size={'large'} />
        ) : (
        <Card theme={{ colors: { primary: '#000000' } }}>
            <Card.Title>
              <Text style={[{textAlign: 'justify'},styles.card]}>{data.name}</Text>
            </Card.Title>
            <Card.Image style={{resizeMode:'contain', marginStart:50, width: 200, height: 300, alignContent: 'center', alignItems:'center'}} source={{uri: data.image}}/>
            <View style={{flexDirection: "row", marginBottom: "5%", marginTop: "5%", alignSelf: 'center'}}>
              <Text style={[{textAlign: 'justify'},styles.card]} >{data.overview}</Text>
            </View>
            <View style={{flexDirection: "row", marginBottom: "5%", marginTop: "5%", alignSelf: 'center'}}>
              <Text style={[styles.card]}>Gênero: {data.gender}</Text>
            </View>
            <View style={{flexDirection: "row", marginBottom: "7%", marginTop: "3%", alignSelf: 'center'}}>
              <Text style={[styles.card]}>Duração: {data.duration}</Text>
            </View>
            <View style={{flexDirection: "row", marginBottom: "7%", marginTop: "3%", alignSelf: 'center'}}>
              <Text style={[styles.card]}>Dirigido por: {data.directedBy}</Text>
            </View>
        </Card>
        )}
    </ScrollView>
  )
}

export default MovieDetails