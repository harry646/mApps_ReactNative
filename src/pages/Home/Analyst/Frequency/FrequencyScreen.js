import React from 'react';
import { View, Image, ScrollView, 
    StyleSheet, Text, SafeAreaView,
    TouchableOpacity
 } from 'react-native';

const FrequencyPage = ({ navigation }) => {
    return(
        <SafeAreaView style={{ flex:1 }}>
            <View style={{ flex: 1, padding: 16 }}>
                <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}>
                <TouchableOpacity style={styles.item}
                onPress={
                    () => navigation.navigate('IncoFrequency')}
                >
                    <View style={styles.overview}>
                        {/* <Image source={ImgPV} style={{ width:50, height:50, resizeMode:'contain' }} /> */}
                        <Text style = {{ paddingLeft:20 }}>PT INCO</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}
                onPress={
                    () => navigation.navigate('WaskitaFrequency')}
                >
                    <View style={styles.overview}>
                        {/* <Image source={ImgOverview} style={{ width:50, height:50, resizeMode:'contain' }} /> */}
                        <Text style = {{ paddingLeft:20 }}>PT WASKITA</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}
                onPress={
                    () => navigation.navigate('GIAFrequency')}
                >
                    <View style={styles.overview}>
                        {/* <Image source={ImgPerformance} style={{ width:50, height:50, resizeMode:'contain' }} /> */}
                        <Text style = {{ paddingLeft:20 }}>PT GIA (Garuda Indonesia)</Text>
                    </View>
                </TouchableOpacity>

                </View>
                <Text
                style={{
                    fontSize: 10,
                    textAlign: 'center',
                    color: 'grey'
                }}>
                Powered by Digitalin
                </Text>
            </View>            
        </SafeAreaView>    )
}

export default FrequencyPage

const styles = StyleSheet.create({
    page:{
      padding:10,
      justifyContent:'space-around',
      alignItems:'center',
      paddingVertical:20
    },
   
    item:{
      alignItems:'center',
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-around',
      padding:15,
    },
    overview:{
      borderColor:'#707070',
      borderWidth:1,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'flex-start',
      flex:1,
    //   height:50,
      flexDirection:'row',
      paddingVertical:10,
      paddingLeft:20,
    },
  
    title:{
      paddingTop:5,
      fontSize:15,
      color:'#707070',
      fontFamily:'Nunito-Bold'
    }
  
  })