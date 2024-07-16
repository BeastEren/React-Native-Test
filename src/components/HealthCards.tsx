import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HealthCards = () => {
  return (
    <View style={styles.wrapper}>
      <Text>HealthCards</Text>
    </View>
  )
}

export default HealthCards

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  }
})