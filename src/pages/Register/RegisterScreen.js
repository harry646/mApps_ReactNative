import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Input } from '../../components'

const RegisterPage= ({navigation}) => {
    return (
            <View style={styles.page}>
                <View>
                    <Input label="Full Name :" />
                    <Gap height={30} />
                    <Input label="Alamat :" />
                    <Gap height={30} />
                    <Input label="Email :" />
                    <Gap height={30} />
                    <Input label="Password :" 
                    secure={true}
                    />
                </View>
                <Gap height={30} />
                <Button title="Continue" colbtn='blue' coltext='white' onPress={()=> navigation.replace('DrawerNavigationRoutes')} />
                <View style ={styles.footer}>
                    <Text>Powered by Digitalin</Text>
                </View>
            </View>
    )
}

export default RegisterPage

const styles = StyleSheet.create({
    page:{
        padding:40,
        justifyContent:'space-evenly',
        backgroundColor:'white',
        flex:1
    },
    footer:{
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center',
        fontFamily:'Nunito-Bold'
    }
})
