import { View, Text, Button } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import  ProfileScreen from './profile/Index';
import AccountsScreen from './account/Index';
import StatsScreen from './stats/Index';
import ConfirmScreen from './ConfirmCode';








const MainScreen = () => {

  const Tab = createBottomTabNavigator();
//  const navigation=useNavigation()

  return (
    <View>
         {/* <Button onPress={() =>
        navigation.navigate()} title='Go to Confirm Code Screen'></Button> */}
    <Text>Home Screen</Text>
    </View>
  )
}





// function StatsScreen() {
//   return <Text>Settings Screen</Text>
// }

// function ProfileScreen(){
//   return <Text>Profile Screen</Text>
// }

// function AccountScreen(){
//   return <Text>Account Screen</Text>
// }



export default MainScreen