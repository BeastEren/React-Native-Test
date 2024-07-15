//TEST PHASE

import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

type inputListProp = {
    name: string,
    color: string,
}
const InputText = ({ name, color }: inputListProp) => {
    return (
        <View>
            <Text style={{ color: 'white', paddingBottom: 5 }}>{name}</Text>
            <TextInput style={styles.inputBox1} placeholder='Enter your `${name}` '></TextInput>
        </View>
    )
}

export default InputText

const styles = StyleSheet.create({
    inputBox1: {
        borderWidth: 2,
        borderRadius: 12,
        borderColor: 'white',
        marginBottom: 10,
        padding: 10,
        width: 250,
        // backgroundColor: `${color}` ,
    }
})