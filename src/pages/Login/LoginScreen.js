import React from 'react'
import { StyleSheet, View, Image,Text, TextInput } from 'react-native'
import { Pertamina_logo } from '../../assets'
import {  Gap } from '../../components'
//, Input Button,
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button  } from 'react-native-elements';


const LoginPage = ({navigation}) => {
    return (
       <View style={styles.page}>
            <View style={ styles.container}>
                    <Image source={Pertamina_logo} style={{ width:'100%', resizeMode:'contain' }} />
                    <Gap height={30} />
                    {/* <Input label="NIK :" /> */}
                    <Input
                    placeholder='Username'
                    leftIcon={
                        <Icon
                        name='user'
                        size={24}
                        color='black'
                        />
                    }
                    />                    
                    <Gap height={25} />
                    <Input
                    placeholder='Password'
                    leftIcon={
                        <Icon
                        name='lock'
                        size={24}
                        color='black'
                        />
                    }
                    secureTextEntry={true}
                    />                    
                    {/* <Input label="Password :" 
                    secure={true}/> */}
                    <Gap height={30} />
                    {/* <Button title="Login" coltext="white" colbtn='orange' onPress={()=> navigation.replace('Home')} /> */}
            </View>
            <View style={{ flexDirection:'row', alignItems:"center", justifyContent:"space-around" }}>
                <Button 
                buttonStyle={{ width:100 }}
                title="Login"
                type="solid"
                onPress={()=> navigation.replace('DrawerNavigationRoutes')}
                />
                <Button 
                buttonStyle={{ width:100 }}
                title="Register"
                type="outline"
                onPress={()=> navigation.navigate('Register')}
                />
            </View>
            <View style ={styles.footer}>
                <Text>Powered by Digitalin</Text>
            </View>
       </View>
    )
}



export default LoginPage

const styles = StyleSheet.create({
    page:{
        flex:1,
        padding:50,
        backgroundColor:'white',
        justifyContent:'center'
        
    
    },
    container:{
        // backgroundColor:'white',
    },
    title:{
        fontSize:17,
        marginTop:-25,
        fontFamily:'Nunito-SemiBold',
        fontStyle:'italic',
        textAlign:'center',
        color:'#7D8797',

    },
    title2:{
        fontSize:20,
        fontFamily:'Nunito-Bold',
        color:'#7D8797',

    },
    footer:{
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center',
        fontFamily:'Nunito-Bold'
    }
})
