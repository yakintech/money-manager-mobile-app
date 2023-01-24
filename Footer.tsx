import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from './store/counterReducer';

const Footer = () => {

    let dispatch = useDispatch();

    const increaseCounter = () => {
        dispatch(increment(566666))
    }
  return (
    <View>
        <Button onPress={() => increaseCounter()} title='Increase'></Button>
        <Button title='Decrease'></Button>
    </View>
  )
}

export default Footer