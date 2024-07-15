import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Details from './Details'
import { useState } from 'react'

const features = ['Visit History', 'My Reports', 'My Documents']

export default function DisplayDetails() {
  const [selectedFeature, setSelectedFeature] = useState('Visit History');
  return (
    <View style={styles.container}>
      <View style={styles.derailsContinue}>
        <View style={styles.navTabs}>

          {features.map((element) => (
            <Pressable
              style={[styles.navPress, { backgroundColor: selectedFeature == element ? '#40cbb4' : 'white' }]}
              key={element}
              onPress={() => { setSelectedFeature(element) }}
            >
              <Text
                style={[styles.navText, { color: selectedFeature == element ? 'White' : 'Black' }]}
              >
                {element}
              </Text>
            </Pressable>
          ))}
        </View>
        <View style={{ marginVertical: 12 }}>
          <Details />
        </View>

      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'yellow', //for test
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  derailsContinue: {
    backgroundColor: '#f7f8fa',
    width: 350, //You can use a variable size 'unit' inted of fized value i.e. 350 to increast the width of the outer main BOX.
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'rgba(56, 56, 56, 0.5)',
    padding: 15,
  },
  navTabs: {
    // backgroundColor: 'blue', //for test
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: '#40cbb4',
  },
  navPress: {
    paddingHorizontal: 6,
    paddingBottom: 5,
    backgroundColor: '#40cbb4',
  },
  navText: {
    fontWeight: 'bold',
    fontSize: 13,
  }
})