// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import * as React from 'react';
import {
  View,StyleSheet,
  Text,TouchableOpacity,
  SafeAreaView, Alert, Image
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ImgOverview,ImgAnalyst,ImgNews,ImgProfile,ImgAccount } from '../../assets';

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
          <View style={{ flexDirection:'row',justifyContent:'flex-start',alignItems:'center' }}>
            <Image source={ImgAccount} style={{ width:50, height:50, resizeMode:'contain' }}/>
            <View style={{ paddingLeft:10 }}>
              <Text>Admin</Text>
              <Text>123-000-007</Text>
            </View>
      </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>

          <View style={styles.content}>
              <TouchableOpacity style={styles.item} 
              onPress={
                () => navigation.navigate('Overview')}
              >
                <View style={styles.overview}>
                    <Image source={ImgOverview} style={{ width:100, height:100 }} />
                </View>
                <Text style={styles.title}>Overview</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.item}
              onPress={
                () => navigation.navigate('Analyst')}
              >
                <View style={styles.overview}>
                    <Image source={ImgAnalyst} style={{ width:100, height:100, resizeMode:'contain' }} />
                </View>
                <Text style={styles.title}>Analyst</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.content}>
              <TouchableOpacity style={styles.item}
              onPress={
                () => navigation.navigate('News')}
              >
                <View style={styles.overview}>
                    <Image source={ImgNews} style={{ width:100, height:100, resizeMode:'contain' }} />
                </View>
                <Text style={styles.title}>News</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.item}
              onPress={
                ()=> navigation.navigate('Profile')
              }
              >
                <View style={styles.overview}>
                    <Image source={ImgProfile} style={{ width:100, height:100, resizeMode:'contain' }} />
                </View>
                <Text style={styles.title}>Profile</Text>
              </TouchableOpacity>
          </View>


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
  );
}

export default HomePage


const styles = StyleSheet.create({
  page:{
    padding:20,
    justifyContent:'space-around',
    alignItems:'center',
    paddingVertical:20
  },

  content:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    padding:10

  },





  item:{
    alignItems:'center'
  },
  overview:{
    borderColor:'#707070',
    borderWidth:1,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    width:140,
    height:140,
  },

  title:{
    paddingTop:5,
    fontSize:15,
    color:'#707070',
    fontFamily:'Nunito-Bold'
  }

})