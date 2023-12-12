import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      padding:40,
      justifyContent: 'center',
      
    },
    input: {
        color: "#fcb300",
        height: 40,
        width: "100%",
        borderColor: "#848484",
        borderWidth: 1,
        marginBottom: "4%",
        marginTop: "2%",
        paddingLeft: 10,
      },
    setTextColor: {
        color:"#fcb300"
    },
    setStatusBar:{
        backgroundColor:"#FFF",
    },
    logo:{
        height: 400,
        alignItems: "center",
        marginBottom: "1%",
    },
    createForgotLink: {
        flexDirection:"row",
        alignSelf: "flex-end",
        marginBottom: "5%",
    },
    link:{
        color:"#fcb300",
        marginLeft: "5%"
    },
  
  });

  export default styles;