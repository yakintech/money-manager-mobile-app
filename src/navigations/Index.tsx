import { View, Text, Button } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import ProfileScreen from '../screens/profile/Index';
import AccountsScreen from '../screens/account/Index';
import StatsScreen from '../screens/stats/Index';
import ConfirmScreen from '../screens/ConfirmCode';
import HomeScreen from '../screens/MainScreen';


const Index = () => {
  const Tab = createBottomTabNavigator();
  return (<>
   <Tab.Navigator>
      <Tab.Screen name="24.01" component={HomeScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Accounts" component={AccountsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  </>
  )
}

export default Index