import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'

export default function searchBar() {
  return (
    <View style={design.wrapper}>

      <TouchableOpacity style={design.iconWrapper}>
        <AntDesign name="search1" size={25} color="white" />
      </TouchableOpacity>

      <View style={design.InputWrapper}>
        <TextInput style={{ fontSize: 20 }} placeholder='Enter your search here' />
      </View>

    </View>
  )
}

const design = StyleSheet.create({
  wrapper: {
    marginTop: 10,
    marginLeft: 30,
    marginRight: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderColor: 'grey',
    borderBottomWidth: 4,
    borderRadius: 15,
    borderBottomLeftRadius: 20,
  },
  iconWrapper: {
    backgroundColor: '#40cbb4',
    padding: 10,
    borderRadius: 15,
  },
  InputWrapper: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
})