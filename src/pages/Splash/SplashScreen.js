import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import { ImgLogo,welcome_vid } from '../../assets'

//import Video from 'react-native-video';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout (()=> {
          navigation.replace('Login')
        }, 2000);
      }, [navigation])
    return (
        <View style={styles.page}>
            <Image source={ImgLogo} style={{ width:'100%', resizeMode:'contain' }} />
            <Text style={styles.title} >Cavatar</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'white',
        padding:20,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:20,
        marginTop:-20,
        fontFamily:'Nunito-SemiBold',
        fontStyle:'italic'
    }
})
