import { StyleSheet, Text, View, TextInput, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import Button from '@/components/Button'
import { router } from 'expo-router'

const image = require('@/../assets/images/backgroundImage.jpg')
export default function forgotPassword() {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.wrapper}>
      <View style={styles.innerWrapper}>

        <View style={styles.textInstWrapper}>
          <Text style={styles.icon}>IVF SOLUTION</Text>
          <Text>Enter the email address associated with your account and we'll send you a link to reset your password.</Text>
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.inputHeadText}>Email</Text>
          <TextInput style={styles.input} placeholder='Enter Email' />
        </View>

        <View style={{ alignItems: 'center' }}>
          <View style={{ width: '80%' }}>
            <Button onPress={() => {
              router.push("/login")
            }} text="Continue" />
          </View>
        </View>

        <View style={styles.noAccount}>
          <Text>Don't have an account? </Text>
          <Pressable onPress={() => {
            router.push("/signup")
          }}>
            <Text>Signup</Text>
          </Pressable>
        </View>

      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue'
  },
  innerWrapper: {
    padding: 20,
    width: 350,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  textInstWrapper: {
    marginBottom: 20,
    alignItems: 'center',
  },
  icon: {
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  inputSection: {
    // marginLeft: 50
  },
  inputHeadText: {
    marginLeft: 5,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 12,
    borderBlockColor: 'black',
    marginBottom: 20,
  },
  noAccount: {
    justifyContent: 'center',
    marginTop: 30,
    flexDirection: 'row',
  },
})