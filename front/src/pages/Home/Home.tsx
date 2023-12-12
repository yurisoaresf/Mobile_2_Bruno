import React, { useState } from 'react'
import { ScrollView, Text, View, StatusBar, ToastAndroid } from 'react-native'
import { Card, Button } from 'react-native-elements'
import styles from './HomeStyle';
import Icon from 'react-native-vector-icons/Icon';
import Icon3 from 'react-native-vector-icons/AntDesign';
import * as RootNavigation from '../navigator/RootNavigation';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { FAB } from '@rneui/themed'



const movies = [
    {name: "O Senhor dos Anéis: As Duas Torres", directedBy: "Peter Jackson", overview: "Após a captura de Merry e Pippy pelos orcs, a Sociedade do Anel é dissolvida. Frodo e Sam seguem sua jornada rumo à Montanha da Perdição para destruir o anel e descobrem que estão sendo perseguidos pelo misterioso Gollum. Enquanto isso, Aragorn, o elfo e arqueiro Legolas e o anão Gimli partem para resgatar os hobbits sequestrados e chegam ao reino de Rohan, onde o rei Theoden foi vítima de uma maldição mortal de Saruman.", genero: "Aventura/Fantasia", duracao: "3h00min", image:"https://upload.wikimedia.org/wikipedia/pt/5/59/The_Lord_of_the_Rings_The_Two_Towers.jpg"},
    {name: "Harry Potter e a Pedra Filosofal ", directedBy:'Chris Columbus', overview:'Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.', genero: "Aventura/Fantasia", duracao: "2h20min", image: "https://musicart.xboxlive.com/7/5dbd5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"},
    {name: "Kill Bill Parte 1", directedBy:'Quentin Tarantino', overview:'A ex-assassina conhecida apenas como Noiva acorda de um coma de quatro anos decidida a se vingar de Bill, seu ex-amante e chefe, que tentou matá-la no dia do casamento. Ela está motivada a acertar as contas com cada uma das pessoas envolvidas com a perda da filha, da festa de casamento e dos quatro anos de sua vida. Na jornada, a Noiva é submetida a dores físicas agonizantes ao enfrentar a inescrupulosa gangue de Bill, o Esquadrão Assassino de Víboras Mortais.', genero: "Ação", duracao: "2h40min", image:"https://upload.wikimedia.org/wikipedia/pt/6/6d/Kill_Bill_poster.jpg"},
    {name: "Donnie Darko", directedBy: 'Richard Kelly', overview:'Donnie é um jovem excêntrico que despreza a grande maioria de seus colegas de escola. Ele tem visões, em especial de Frank, um coelho gigante que só ele consegue ver e que o encoraja a fazer brincadeiras humilhantes com quem o cerca. Um dia, uma de suas visões o atrai para fora de casa e lhe diz que o mundo acabará dentro de um mês. Donnie inicialmente não acredita, mas, momentos depois, a turbina de um avião cai em sua casa e ele começa a se perguntar qual é o fundo de verdade dessa previsão.', genero: "Terror/Fantasia", duracao: "2h00min", image: "https://m.media-amazon.com/images/I/61LxxiDdhRL._AC_UF894,1000_QL80_.jpg"},
    {name: "O Pianista", directedBy: 'Roman Polanski', overview: 'Um pianista judeu polonês vê Varsóvia mudar gradualmente à medida que a Segunda Guerra Mundial começa. Szpilman é forçado a ir para o Gueto de Varsóvia, mas depois é separado de sua família durante a Operação Reinhard. A partir deste momento até que os prisioneiros dos campos de concentração sejam liberados, Szpilman se esconde em vários locais entre as ruínas de Varsóvia.', genero: "Drama", duracao: "2h40min", image: "https://images.justwatch.com/poster/244658635/s592/o-pianista"},
    {name: "Bastardos Inglórios", directedBy:'Quentin Tarantino', overview:'Durante a Segunda Guerra Mundial, na França, judeus americanos espalham o terror entre o terceiro Reich. Ao mesmo tempo, Shosanna, uma judia que fugiu dos nazistas, planeja vingança quando um evento em seu cinema reunirá os líderes do partido.', genero: "Drama/Guerra", duracao: "2h45min", image: "https://br.web.img2.acsta.net/medias/nmedia/18/90/43/36/20096333.jpg"}
]


const Home = ({navigation,wishList,setWishList} : any) => {

    const openToast = (message: string) => {
        ToastAndroid.show(message, 3000);
    }

    const openChat = () => {
        navigation.navigate('Chat')
    }


    const CustomTitle = () => {
        return (
            <Text style={{ fontFamily: 'Aachen', color: 'black', fontSize: 18 }}>Adicionar a Wishlist</Text>
        );
    };


  return (
    <>
    <ScrollView style={styles.container}>
        {

        movies.map((movie, i) => {
            const [favorite,setFavorite] = useState(false);

            return( 
                <Card theme={{ colors: { primary: '#000000' } }}  key={i}>
                    <Card.Title >
                        <Text style={[styles.card]}>{movie.name}</Text>
                    </Card.Title>

                    <Card.Divider/>
                    <Card.Image style={{resizeMode:'contain', marginStart:50, width: 200, height: 300, alignContent: 'center', alignItems:'center'}} onPress={() => (RootNavigation.navigate("MovieDetails",{movie}))} source={{uri: movie.image}}/>
                <View style={{flexDirection: "row", marginBottom: "5%", marginTop: "5%", alignSelf: 'center'}}>
                    <Text style={[styles.card]}>Gênero: {movie.genero}</Text>
                </View>
                <View style={{flexDirection: "row", marginBottom: "7%", marginTop: "3%", alignSelf: 'center'}}>
                    <Text style={[styles.card]}>Duração: {movie.duracao}</Text>
                </View>
                {
                    favorite ? 

                    <Icon3 onPress={()=> (setFavorite(false))} name="pushpin" size={25} color="#fcb300"></Icon3>: 
                    <Icon3 onPress={()=> (setFavorite(true))} name="pushpino" size={25} color="white"></Icon3>
                }
                <Button  buttonStyle={[styles.buttonStyle]} onPress={() => {
                    if( wishList.some(item => { 
                        if (item.name == movie.name){
                            return true;
                        }

                        return false;
                    })){
                        openToast("Filme já adicionado na wishlist")
                    } else {
                        openToast("Filme adicionado na wishlist")
                        setWishList([...wishList,movie])
                    }
                    }} title={<CustomTitle />}></Button>

                </Card>
            )
        })}   
    </ScrollView>
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