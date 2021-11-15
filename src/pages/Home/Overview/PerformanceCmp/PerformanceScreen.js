import React, { useState  } from 'react'
import { StyleSheet, Text, View, ScrollView,Dimensions} from 'react-native'
import {
    LineChart  } from 'react-native-chart-kit'

const PerformancePages = () => {
    return (
        <ScrollView>
            <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'}}
            >
                <Text style={{ paddingTop:20 }}>
                PT Inco
                </Text>
                <LineChart
                    data={{
                    labels: ['Solar', 'Pertalite', 'Pertamax'],
                    datasets: [
                        {
                        data: [
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000
                        ]
                        }
                    ]
                    }}
                    width={Dimensions.get("window").width - 20} // from react-native
                    height={220}
                    yAxisLabel={"Rp"}
                    chartConfig={{
                    backgroundColor: "white",
                    backgroundGradientFrom: "white",
                    backgroundGradientTo: "white",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `red`,
                    labelColor: (opacity = 1) => `red`,
                    style: {
                        borderRadius: 16
                    }
                    }}
                    style={{
                    marginVertical: 8,
                    borderRadius: 16
                    }}
                />
                <Text style={{ paddingTop:20 }}>
                PT Waskita
                </Text>
                <LineChart
                    data={{
                    labels: ['Solar', 'Pertalite', 'Pertamax'],
                    datasets: [
                        {
                        data: [
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000
                        ]
                        }
                    ]
                    }}
                    width={Dimensions.get("window").width - 20} // from react-native
                    height={220}
                    yAxisLabel={"Rp"}
                    chartConfig={{
                    backgroundColor: "white",
                    backgroundGradientFrom: "white",
                    backgroundGradientTo: "white",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `red`,
                    labelColor: (opacity = 1) => `red`,
                    style: {
                        borderRadius: 16
                    }
                    }}
                    style={{
                    marginVertical: 8,
                    borderRadius: 16
                    }}
                />
                <Text style={{ paddingTop:20 }}>
                PT GIA (Garuda Indonesia)
                </Text>
                <LineChart
                    data={{
                    labels: ['Solar', 'Pertalite', 'Pertamax', 'Avtur'],
                    datasets: [
                        {
                        data: [
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000
                        ]
                        }
                    ]
                    }}
                    width={Dimensions.get("window").width - 20} // from react-native
                    height={220}
                    yAxisLabel={"Rp"}
                    chartConfig={{
                    backgroundColor: "white",
                    backgroundGradientFrom: "white",
                    backgroundGradientTo: "white",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `red`,
                    labelColor: (opacity = 1) => `red`,
                    style: {
                        borderRadius: 16
                    }
                    }}
                    style={{
                    marginVertical: 8,
                    borderRadius: 16
                    }}
                />                               
            </View>
            <Text
            style={{
                fontSize: 10,
                textAlign: 'center',
                color: 'grey',
            }}>
            Powered by Digitalin
            </Text>        
        </ScrollView>
    )
}

export default PerformancePages