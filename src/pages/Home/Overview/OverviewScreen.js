
import * as React from 'react';
import {
  Button,Image,
  View,TouchableOpacity,
  Text,StyleSheet,
  SafeAreaView
} from 'react-native';
import { ImgPV,ImgOverview,ImgPerformance } from '../../../assets';


const OverviewPage =({ route, navigation}) =>{
    return(
        <SafeAreaView style={{ flex:1 }}>
            <View style={{ flex: 1, padding: 16 }}>
                <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <TouchableOpacity style={styles.item}
                onPress={
                    () => navigation.navigate('PVolume')}
                >
                    <View style={styles.overview}>
                        <Image source={ImgPV} style={{ width:50, height:50, resizeMode:'contain' }} />
                        <Text style = {{ paddingLeft:20 }}>Purchase Volume</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}
                onPress={
                    () => navigation.navigate('TransHis')}
                >
                    <View style={styles.overview}>
                        <Image source={ImgOverview} style={{ width:50, height:50, resizeMode:'contain' }} />
                        <Text style = {{ paddingLeft:20 }}>Transaction History</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}
                onPress={
                    () => navigation.navigate('Performance')}
                >
                    <View style={styles.overview}>
                        <Image source={ImgPerformance} style={{ width:50, height:50, resizeMode:'contain' }} />
                        <Text style = {{ paddingLeft:20 }}>Performance</Text>
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
        </SafeAreaView>
    )
}

export default OverviewPage;

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
      padding:10,
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