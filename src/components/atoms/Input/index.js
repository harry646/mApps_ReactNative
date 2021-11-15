import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Input = ({label,secure}) => {
    return (
        <View>
        <Text style={styles.label} >{label}</Text>
            <TextInput style={styles.input} 
            secureTextEntry={secure}/>
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        borderColor:'#e9e9e9',
        borderRadius:10,
        padding: 12,
        borderColor:'lightgrey',
    },
    label:{
        fontFamily:'Nunito-Bold',
        fontSize:16,
        color:'#7D8797',
        
    }
})