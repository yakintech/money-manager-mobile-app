import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainScreen from './src/screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {



  return (<>
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>

  </>
  )
}

export default App