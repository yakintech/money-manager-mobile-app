import { View, Text, Button } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const MainScreen = () => {

  const Tab = createBottomTabNavigator();


  return (<>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </>
  )
}



function HomeScreen() {
  return <>
    <Button title='Go to Confirm Code Screen'></Button>
    <Text>Home Screen</Text>
  </>
}

function SettingsScreen() {
  return <Text>Settings Screen</Text>
}

function ConfirmCode(){
  return <Text>Confirm Code</Text>
}

export default MainScreen