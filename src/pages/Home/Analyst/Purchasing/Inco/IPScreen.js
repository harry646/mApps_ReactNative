import React from 'react';
import { View, Image, ScrollView, 
    StyleSheet, Text
 } from 'react-native';

const IncoPurchPages = ({ navigation }) => {
    return(
        <ScrollView style={{ flex:1 }}>
            <View style={{ flex: 1, padding: 16 }}>
                <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}>
                    <View style={styles.item}>
                        <View style={styles.overview}>
                        <Text style = {{ paddingLeft:20 }}>11/01/2021</Text>
                        <Text style = {{ paddingLeft:20 }}>Payment</Text>
                        <Text style = {{ paddingLeft:20 }}>Item : Solar</Text>
                        <Text style = {{ paddingLeft:20 }}>Discount : 10%</Text>
                        <Text style = {{ paddingLeft:20 }}>Price : RP 9.000.000.000,00</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.overview}>
                        <Text style = {{ paddingLeft:20 }}>05/01/2021</Text>
                        <Text style = {{ paddingLeft:20 }}>Payment</Text>
                        <Text style = {{ paddingLeft:20 }}>Item : Solar</Text>
                        <Text style = {{ paddingLeft:20 }}>Discount : 10%</Text>
                        <Text style = {{ paddingLeft:20 }}>Price : RP 1.000.000.000,00</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.overview}>
                        <Text style = {{ paddingLeft:20 }}>01/01/2021</Text>
                        <Text style = {{ paddingLeft:20 }}>Payment</Text>
                        <Text style = {{ paddingLeft:20 }}>Item : Solar</Text>
                        <Text style = {{ paddingLeft:20 }}>Discount : 10%</Text>
                        <Text style = {{ paddingLeft:20 }}>Price : RP 6.000.000.000,00</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.overview}>
                        <Text style = {{ paddingLeft:20 }}>31/12/2020</Text>
                        <Text style = {{ paddingLeft:20 }}>Payment</Text>
                        <Text style = {{ paddingLeft:20 }}>Item : Solar</Text>
                        <Text style = {{ paddingLeft:20 }}>Discount : 10%</Text>
                        <Text style = {{ paddingLeft:20 }}>Price : RP 1.000.000.000,00</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.overview}>
                        <Text style = {{ paddingLeft:20 }}>25/12/2020</Text>
                        <Text style = {{ paddingLeft:20 }}>Payment</Text>
                        <Text style = {{ paddingLeft:20 }}>Item : Solar</Text>
                        <Text style = {{ paddingLeft:20 }}>Discount : 10%</Text>
                        <Text style = {{ paddingLeft:20 }}>Price : RP 2.000.000.000,00</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.overview}>
                        <Text style = {{ paddingLeft:20 }}>20/12/2020</Text>
                        <Text style = {{ paddingLeft:20 }}>Payment</Text>
                        <Text style = {{ paddingLeft:20 }}>Item : Solar</Text>
                        <Text style = {{ paddingLeft:20 }}>Discount : 20%</Text>
                        <Text style = {{ paddingLeft:20 }}>Price : RP 990.000.000,00</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.overview}>
                        <Text style = {{ paddingLeft:20 }}>01/12/2020</Text>
                        <Text style = {{ paddingLeft:20 }}>Payment</Text>
                        <Text style = {{ paddingLeft:20 }}>Item : Solar</Text>
                        <Text style = {{ paddingLeft:20 }}>Discount : 20%</Text>
                        <Text style = {{ paddingLeft:20 }}>Price : RP 9.090.000.000,00</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.overview}>
                        <Text style = {{ paddingLeft:20 }}>28/11/2020</Text>
                        <Text style = {{ paddingLeft:20 }}>Payment</Text>
                        <Text style = {{ paddingLeft:20 }}>Item : Solar</Text>
                        <Text style = {{ paddingLeft:20 }}>Discount : 20%</Text>
                        <Text style = {{ paddingLeft:20 }}>Price : RP 8.000.000.000,00</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.overview}>
                        <Text style = {{ paddingLeft:20 }}>13/11/2020</Text>
                        <Text style = {{ paddingLeft:20 }}>Payment</Text>
                        <Text style = {{ paddingLeft:20 }}>Item : Solar</Text>
                        <Text style = {{ paddingLeft:20 }}>Discount : 20%</Text>
                        <Text style = {{ paddingLeft:20 }}>Price : RP 990.000.000,00</Text>
                        </View>
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
        </ScrollView>    
    )
}

export default IncoPurchPages

const styles = StyleSheet.create({
    page:{
      padding:10,
      justifyContent:'space-around',
      alignItems:'center',
      paddingVertical:20
    },
   
    item:{
      alignItems:'flex-start',
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-around',
      padding:15,
    },
    overview:{
      borderColor:'#707070',
      borderWidth:1,
      borderRadius:10,
      alignItems:'flex-start',
      justifyContent:'flex-start',
      flex:1,
    //   height:50,
      flexDirection:'column',
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