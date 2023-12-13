import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
    {
      container: {
        flex: 1,
        backgroundColor: 'black',
      },
      card: {
          color: '#fcb300',
          fontFamily: 'Aachen'
  
      },
      title: {
        color: '#fcb300',
        fontFamily: 'Aachen',
        fontSize: 18, 
        paddingTop: 10,
        paddingBottom: 15
      },
      empty:{
        color: '#fcb300',
        fontFamily: 'Aachen',
        textAlign: "center",
        paddingTop: 100,
      },
      image: {
        width: 200, 
        height: 200, 
        resizeMode: 'contain', 
        paddingTop: 5,  
        borderRadius: 200 / 2
      },
    buttonStyle: {
        backgroundColor: '#9a0509',
        borderWidth: 2,
        borderColor: '#9a0509',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
    }
  }
)

  export default styles;