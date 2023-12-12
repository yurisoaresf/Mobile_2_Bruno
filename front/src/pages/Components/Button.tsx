import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const Button2 = ({labelButton, onPress}: any) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{fontFamily: 'Aachen', color:'white'}}>{labelButton}</Text>
    </TouchableOpacity>
  )
}

export default Button2

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#9a0509',
        borderWidth: 2,
        borderColor: '#9a0509',

        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        marginHorizontal: 45,
        marginVertical: 10,
        height: 35
    }
    }
);