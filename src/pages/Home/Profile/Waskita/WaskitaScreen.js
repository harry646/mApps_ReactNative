import React from 'react';
import { View, Image, ScrollView, 
    StyleSheet, Text, SafeAreaView,
    TouchableOpacity
 } from 'react-native';

 import { Waskita_logo } from '../../../../assets'


 const WaskitaPage = ({ navigation }) => {
     return(
        <SafeAreaView style={{ flex:1 }}>
        <View style={{ flex: 1, padding: 16, }}>
            <View style ={styles.overview}>
            <Image source={Waskita_logo} style={{ width:'100%', resizeMode:'contain' }} />
            <Text style={{ fontWeight:'bold', paddingBottom:10 }}>Sejarah Waskita</Text>
            <Text>Didirikan pada tanggal 1 Januari 1961 PT Waskita 
                 Karya (Persero) Tbk adalah salah satu perusahaan negara terkemuka di Indonesia yang berperan 
                 besar dalam pembangunan infrastruktur. Berasal dari sebuah perusahaan Belanda 
                 bernama “Volker Aannemings Maatschappij N.V.”, yang diambil alih berdasarkan 
                 Keputusan Pemerintah No. 62/1961, Waskita Karya pada awalnya berpartisipasi dalam 
                 pekerjaan proyek terkait air termasuk reklamasi, pengerukan, pelabuhan, dan irigasi.</Text>
            <Text>
                Sejak 1973, status hukum Waskita Karya berubah menjadi “Persero” 
                PT Waskita Karya dengan panggilan yang lebih akrab “Waskita”. 
                Sejak saat itu perusahaan mulai mengembangkan bisnisnya sebagai 
                kontraktor umum yang terlibat dalam berbagai kegiatan konstruksi yang lebih luas termasuk jalan raya, 
                jembatan, bandara, pabrik pengolah limbah, pabrik semen, dan fasilitas industri lainnya.
            </Text>
            </View>
        </View>
        <View style ={styles.footer}>
                <Text style={{ fontSize: 10 }}>Powered by Digitalin</Text>
        </View>
        </SafeAreaView>
     )
 }

 export default WaskitaPage

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
