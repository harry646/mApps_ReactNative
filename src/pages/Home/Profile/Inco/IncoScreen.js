import React from 'react';
import { View, Image, ScrollView, 
    StyleSheet, Text, SafeAreaView,
    TouchableOpacity
 } from 'react-native';

 import { inco_logo } from '../../../../assets'


 const IncoPage = ({ navigation }) => {
     return(
        <SafeAreaView style={{ flex:1 }}>
        <View style={{ flex: 1, padding: 16, }}>
            <View style ={styles.overview}>
            <Image source={inco_logo} style={{ width:'100%', resizeMode:'contain' }} />
            <Text style={{ fontWeight:'bold', paddingBottom:10 }}>Sejarah PT Vale</Text>
            <Text>PT Vale mempunyai sejarah yang membanggakan di Indonesia. 
                Diawali dengan ekplorasi di wilayah Sulawesi bagian timur pada tahun 1920-an. 
                Kegiatan eksplorasi, kajian dan pengembangan tersebut terus dilanjutkan pada periode kemerdekaan 
                dan selama masa kepemimpinan Presiden Soekarno.
                PT Vale (yang saat itu bernama PT International Nickel Indonesia) 
                didirikan pada bulan Juli 1968. Kemudian di tahun tersebut 
                PT Vale dan Pemerintah Indonesia menandatangani Kontrak Karya (KK) 
                yang merupakan lisensi dari Pemerintah Indonesia untuk melakukan eksplorasi, 
                penambangan dan pengolahan bijih nikel.
            </Text>
            </View>
        </View>
        <View style ={styles.footer}>
                <Text style={{ fontSize: 10 }}>Powered by Digitalin</Text>
        </View>
        </SafeAreaView>     
        )
 }

 export default IncoPage

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