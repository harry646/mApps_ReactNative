// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import HomePage from '../Home/HomeScreen';
//news screens
import NewsPage from '../Home/News/NewsScreen'
//profile screns
import ProfilePage from '../Home/Profile/ProfileScreen'
import WaskitaPage from '../Home/Profile/Waskita/WaskitaScreen'
import GiaPage from '../Home/Profile/Gia/GiaScreen'
import IncoPage from '../Home/Profile/Inco/IncoScreen'
//overview screens
import OverviewPage from '../Home/Overview/OverviewScreen'
import PVPages from '../Home/Overview/PVolume/PVScreen'
import THPages from '../Home/Overview/TransHistory/THScreen'
import PerformancePages from '../Home/Overview/PerformanceCmp/PerformanceScreen'
//analyst screens
import AnalystPage from '../Home/Analyst/AnalystScreen'
import PurchasingPage from '../Home/Analyst/Purchasing/PurchasingScreen'
import IncoPurchPages from '../Home/Analyst/Purchasing/Inco/IPScreen'
import WaskitaPurchPages from '../Home/Analyst/Purchasing/Waskita/WPScreen'
import GIAPurchPages from '../Home/Analyst/Purchasing/GIA/GIAPScreen'
import FrequencyPage from '../Home/Analyst/Frequency/FrequencyScreen'
import IncoFreqPages from '../Home/Analyst/Frequency/Inco/IFScreen'
import WaskitaFreqPages from '../Home/Analyst/Frequency/Waskita/WFScreen'
import GIAFreqPages from '../Home/Analyst/Frequency/GIA/GIAFScreen'
import SellingPage from '../Home/Analyst/Selling/SellingScreen'
import IncoSellingPages from '../Home/Analyst/Selling/Inco/ISSCreen'
import WaskitaSellingPages from '../Home/Analyst/Selling/Waskita/WSScreen'
import GIASellingPages from '../Home/Analyst/Selling/GIA/GIASScreen'

import {NavigationDrawerHeader, CustomSidebarMenu} from '../../components';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#060606', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      {/* Overview page start */}
      <Stack.Screen 
        name="Overview"
        component={OverviewPage}
        options={{ 
          title: 'Overview',
          headerStyle: {
            backgroundColor: '#060606', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
         }}
      />
      <Stack.Screen 
        name="PVolume"
        component={PVPages}
        options={{ 
          title: 'Purchase Volume',
          headerStyle: {
            backgroundColor: '#060606', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
         }}
      />
      <Stack.Screen 
        name="TransHis"
        component={THPages}
        options={{ 
          title: 'Transaction History',
          headerStyle: {
            backgroundColor: '#060606', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
         }}
      />
      <Stack.Screen 
        name="Performance"
        component={PerformancePages}
        options={{ 
          title: 'Performance',
          headerStyle: {
            backgroundColor: '#060606', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
         }}
      />
      {/* Overview page end */}

      {/* Analyst page Start */}
      <Stack.Screen 
        name="Analyst"
        component={AnalystPage}
        options={{ 
          title: 'Analyst',
          headerStyle: {
            backgroundColor: '#060606', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
         }}
      />
      <Stack.Screen 
        name="Purchasing"
        component={PurchasingPage}
        options={{ 
          title: 'Purchasing',
          headerStyle: {
            backgroundColor: '#060606', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
         }}
      />
      <Stack.Screen 
        name="IncoPurchasing"
        component={IncoPurchPages}
        options={{ 
          title: 'Purchasing History PT Inco',
          headerStyle: {
            backgroundColor: '#060606', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
         }}
      />
      <Stack.Screen 
        name="WaskitaPurchasing"
        component={WaskitaPurchPages}
        options={{ 
          title: 'Purchasing History PT Waskita',
          headerStyle: {
            backgroundColor: '#060606', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
         }}
      />
      <Stack.Screen 
        name="GIAPurchasing"
        component={GIAPurchPages}
        options={{ 
          title: 'Purchasing History PT GIA (Garuda Indonesia)',
          headerStyle: {
            backgroundColor: '#060606', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
         }}
      />

      <Stack.Screen 
        name="Frequency"
        component={FrequencyPage}
        options={{ 
          title: 'Frequency',
          headerStyle: {
            backgroundColor: '#060606', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
         }}
      />
      <Stack.Screen 
        name="IncoFrequency"
        component={IncoFreqPages}
        options={{ 
          title: 'PT Inco Frequency',
          headerStyle: {
            backgroundColor: '#060606', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
         }}
      />
      <Stack.Screen 
        name="WaskitaFrequency"
        component={WaskitaFreqPages}
        options={{ 
          title: 'PT Waskita Frequency',
          headerStyle: {
            backgroundColor: '#060606', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
         }}
      />
      <Stack.Screen 
        name="GIAFrequency"
        component={GIAFreqPages}
        options={{ 
          title: 'PT Garuda Indonesia Frequency',
          headerStyle: {
            backgroundColor: '#060606', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
         }}
      />

      <Stack.Screen 
        name="Selling"
        component={SellingPage}
        options={{ 
          title: 'Selling',
          headerStyle: {
            backgroundColor: '#060606', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
         }}
      />
      <Stack.Screen 
        name="IncoSelling"
        component={IncoSellingPages}
        options={{ 
          title: 'PT Inco Selling',
          headerStyle: {
            backgroundColor: '#060606', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
         }}
      />      
      <Stack.Screen 
        name="WaskitaSelling"
        component={WaskitaSellingPages}
        options={{ 
          title: 'PT Waskita Selling',
          headerStyle: {
            backgroundColor: '#060606', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
         }}
      />
      <Stack.Screen 
        name="GIASelling"
        component={GIASellingPages}
        options={{ 
          title: 'PT Garuda Indonesia Selling',
          headerStyle: {
            backgroundColor: '#060606', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
         }}
      />

      {/* Analyst page end */}

      <Stack.Screen 
        name="News"
        component={NewsPage}
        options={{ 
          title: 'News',
          headerStyle: {
            backgroundColor: '#060606', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
         }}
      />
      <Stack.Screen 
        name="Profile"
        component={ProfilePage}
        options={{ 
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#060606', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
         }}
      />
      <Stack.Screen 
        name="Waskita"
        component={WaskitaPage}
        options={{ 
          title: 'Waskita',
          headerStyle: {
            backgroundColor: '#060606', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
         }}
      />
      <Stack.Screen 
        name="Gia"
        component={GiaPage}
        options={{ 
          title: 'Garuda Indonesia',
          headerStyle: {
            backgroundColor: '#060606', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
         }}
      />
      <Stack.Screen 
        name="Inco"
        component={IncoPage}
        options={{ 
          title: 'PT Vale',
          headerStyle: {
            backgroundColor: '#060606', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
         }}
      />
    </Stack.Navigator>
  );
};


const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Home'}}
        component={homeScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;