import React from 'react';
import { View, Image, ScrollView, 
    StyleSheet, Text, SafeAreaView,
    TouchableOpacity
 } from 'react-native';

 import { Gia_logo } from '../../../../assets'


 const GiaPage = ({ navigation }) => {
     return(
        <SafeAreaView style={{ flex:1 }}>
        <View style={{ flex: 1, padding: 16, }}>
            <View style ={styles.overview}>
            <Image source={Gia_logo} style={{ width:'100%', resizeMode:'contain' }} />
            <Text style={{ fontWeight:'bold', paddingBottom:10 }}>Sejarah Garuda Indonesia</Text>
            <Text>Pada 21 Desember 1949 dilaksanakan perundingan lanjutan dari hasil KMB antara pemerintah Indonesia 
                dengan maskapai KLM mengenai berdirinya sebuah maskapai nasional. Presiden Soekarno memilih 
                dan memutuskan “Garuda Indonesian Airways” (GIA) sebagai nama maskapai ini.
                Dalam mempersiapkan kemampuan staf udara Indonesia, maka KLM bersedia 
                menempatkan sementara stafnya untuk tetap bertugas sekaligus melatih para staf udara Indonesia. 
                Karena itulah pada masa peralihan ini Direktur Utama pertama GIA merupakan orang Belanda, Dr. E. Konijneburg. 
                Armada pertama GIA pertama pun merupakan peninggalan KLM-IIB dan bukan armada “Indonesian Airways” milik AURI.</Text>
            </View>
        </View>
        <View style ={styles.footer}>
                <Text style={{ fontSize: 10 }}>Powered by Digitalin</Text>
        </View>
        </SafeAreaView>     
        )
 }

 export default GiaPage

 const styles = StyleSheet.create({
    overview:{
        borderColor:'#707070',
        borderWidth:1,
        borderRadius:10,
        alignItems:'flex-start',
        justifyContent:'flex-start',
      //   height:50,
        paddingVertical:10,
        paddingLeft:20,
      },
      footer:{
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center',
    }
})