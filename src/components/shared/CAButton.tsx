import { View, Text, Button, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CAButton = ({ title }: any) => {
  return (
    <Pressable>
      <Text style={styles.button}>{title}</Text>
    </Pressable>

  )
}

const styles = StyleSheet.create({
  button: {
    color: 'tomato'
  }
})

export default CAButton