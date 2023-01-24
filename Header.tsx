import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

    const counterGlobalState = useSelector(state => state);
    

  return (
    <View>
      <Text style={{fontSize:40}}>{Number(counterGlobalState)}</Text>
    </View>
  )
}

export default Header