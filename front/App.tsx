import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, TextInput, Button, Image, StatusBar } from 'react-native';
import Login from './src/pages/login/Login';
import CreateAccount from './src/pages/CreateAccount/CreateAccount';
import ForgotPassword from './src/pages/ForgotPassword/ForgotPassword';
import Chat from './src/pages/Chat/Chat';
import Home from './src/pages/Home/Home';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import WishList from './src/pages/WishList/WishList';
import MovieDetails from './src/pages/movieDetails/MovieDetails';
import { useState } from 'react';
import { navigationRef } from './src/pages/navigator/RootNavigation';
import { useFonts } from 'expo-font';


const App = (): JSX.Element => {
  const Stack = createNativeStackNavigator();
  const [wishList, setWishList] = useState([]);
  

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login}></Stack.Screen>
        <Stack.Screen options={({navigation}) => {
          return{
           
            headerBackVisible: false, 
            headerTitleAlign:"center", 
            title:"Geek Filmes",
            headerLeft: () => (
              <>
                <Icon2 onPress={() => (navigation.navigate("Login"))} name="logout" size={20} style={{marginLeft:"20%"}}></Icon2>
 
              </> 
          ),  
            headerRight: () => (
              <>
                <Icon onPress={() => (navigation.navigate("WishList", {wishList,setWishList}))} name="star" size={20} style={{marginLeft:"20%"}}></Icon>
              </> 
          )
        }
      }} name="Home">
        {
          ({navigation}) => (
            <Home navigation={navigation} wishList={wishList} setWishList={setWishList} navigation={navigationRef}></Home>
          )
        } 

      </Stack.Screen>
        <Stack.Screen options={{title: "Create Account", headerTintColor:"#000000", headerTitleAlign:"center"}} name="CreateAccount" component={CreateAccount}></Stack.Screen>
        <Stack.Screen options={{title: "Forgot Password", headerTintColor:"#000000", headerTitleAlign:"center"}} name="ForgotPassword" component={ForgotPassword}></Stack.Screen>
        <Stack.Screen options={{title: "Wishlist", headerTintColor:"#000000", headerBackTitleVisible: false, headerBackVisible: true}} name="WishList" component={WishList}></Stack.Screen>
        <Stack.Screen options={{title: "Movie Details", headerTintColor:"#000000", headerBackTitleVisible: false, headerBackVisible: true}} name="MovieDetails" component={MovieDetails}></Stack.Screen>
        <Stack.Screen options={{headerTitleAlign:"center"}} name="Chat" component={Chat}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    );
}
export default App;
