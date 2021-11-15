import React from 'react';
import { View, Image, ScrollView, StyleSheet, Text } from 'react-native';
import { ListItem } from 'react-native-elements'

const list = [
    {
        name: 'GARUDA INDONESIA DAN PEMPROV SULAWESI SELATAN JALIN KERJA SAMA PENYEDIAAN LAYANAN FASILITAS RAPID ANTIGEN GRATIS BAGI PENUMPANG',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: ' 05 Januari 2021'
    },
    {
        name: 'ANTAM Kembali Raih Peringkat PROPER 2020',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: ' 18 Desember 2020'
    },
    {
        name: 'DUKUNG REPATRIASI SATWA DILINDUNGI, GARUDA INDONESIA TERBANGKAN 11 ORANG UTAN DARI MALAYSIA DAN THAILAND',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: ' 18 Desember 2020'
    },
    {
        name: 'PEMERIKSAAN PCR BAGI PENUMPANG PADA LIBUR AKHIR TAHUN UNTUK PERJALANAN AMAN DAN SEHAT',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: ' 17 Desember 2020'
    },
    {
        name: 'ANTAM Kembali Raih Peringkat Platinum TKMPN XXIV & IQPC 2020',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: ' 30 November 2020'
    },
    {
      name: 'Kunjungan Kerja Proyek Tol Kayu Agung - Palembang-Betung Seksi 2A',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: '23 November 2020'
    },
    {
      name: 'Reksa Dana Penyertaan Terbatas (RDPT) PT Waskita Toll Road',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: '23 November 2020'
    },
    {
        name: 'Waskita Berhasil Dipercayai Mendapatkan Sertifikat “Managing Anti-Bribery Activities Of Supply Chain Division”',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: '18 November 2020'
      },
      {
        name: 'Pertumbuhan Positif Kinerja Segmen Emas ANTAM Pada Periode Sembilan Bulan Pertama Tahun 2020',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: '21 Oktober 2020'
      },
    ]

const NewsPage = ({ navigation }) => {
    return(
        <ScrollView>
        <View>
            {
                list.map((l, i) => (
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                ))
            }
        <Text
          style={{
            fontSize: 10,
            textAlign: 'center',
            color: 'grey'
          }}>
          Powered by Digitalin
        </Text>

        </View>
        </ScrollView>
    )
}

export default NewsPage

const styles = StyleSheet.create({
    footer:{
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center',
        fontFamily:'Nunito-Bold'
    }
})