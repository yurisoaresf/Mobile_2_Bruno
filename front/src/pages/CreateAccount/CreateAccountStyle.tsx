import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      padding:25,
      justifyContent: 'flex-start',
    },
    input: {
        color: "#fcb300",
        height: 35,
        width: "100%",
        borderColor: "#9a0509",
        borderWidth: 2.5,
        marginBottom: "5%",
        marginTop: "1%",
        paddingLeft: 10,
        borderRadius: 8
      },
    setTextColor: {
        color: "#fcb300"
    },
    buttonStyle: {
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        marginHorizontal: 63,
        marginVertical: 10,
    }

  
  });

  export default styles;