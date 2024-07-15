import {  StyleSheet, Text, View,  TextInput,  ScrollView } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import NavigationBar from '@/components/NavigationBar'
import SearchBar from '@/components/SearchBar'
import Button from '@/components/Button'
import InputText from '@/components/InputText'

const Footer = require('@/../../assets/images/Footer.jpg')

export default function signup() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Sign Up' }} />

      <View style={styles.header}>
        <NavigationBar />
        <SearchBar />
      </View>
      <ScrollView>
        <View style={styles.logInWrapper}>
          <View style={styles.logInSetter}>

            <Text style={styles.logo}>SignUp</Text>

            <View>
              {/* <InputText name='name' color='white' /> */}
              <Text style={{ color: 'white', paddingBottom: 5 }}>Name</Text>
              <TextInput style={styles.inputBox1} placeholder='Enter your Name'></TextInput>
              <Text style={{ color: 'white', paddingBottom: 5 }}>Phone Number</Text>
              <TextInput style={styles.inputBox1} placeholder='Enter your Phone Number' keyboardType="numeric"></TextInput>
              <Text style={{ color: 'white', paddingBottom: 5 }}>Email ID</Text>
              <TextInput style={styles.inputBox1} placeholder='Enter your Email'></TextInput>
              <Text style={{ color: 'white', paddingBottom: 5 }}>Password</Text>
              <TextInput style={styles.inputBox1} placeholder='Enter your Password'></TextInput>
              <Text style={{ color: 'white', paddingBottom: 5 }}>Confirm Password</Text>
              <TextInput style={styles.inputBox1} placeholder='Confirm your Password'></TextInput>
            </View>

            {/* <Pressable onPress={() => {
            router.push('/forgotPassword')
          }}>
            <Text style={{}}>Forgot password?</Text>
          </Pressable> */}

            <View style={{
              width: '60%',
            }}>
              <Button onPress={() => {
                router.push("/login")
              }} text="SignUp" />
            </View>

          </View>
        </View>
      </ScrollView >
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: '20%',
    backgroundColor: '#1d95d2'
  },
  logInWrapper: {
    // flex: 1,
    // justifyContent: 'center',
    marginTop: 60,
    marginBottom: 60,
    alignItems: 'center',
  },
  logInSetter: {
    padding: 20,
    borderRadius: 20,
    width: 300,
    borderWidth: 1,
    borderColor: 'rgba(56, 56, 56, 0.5)',
    backgroundColor: '#40cbb4',
    // backfaceVisibility:'blur',
    alignItems: 'center',
  },
  footer: {
    marginTop: 38,
    position: 'absolute',
    width: "100%",
    height: 200,
    resizeMode: 'stretch',
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  inputBox1: {
    borderWidth: 2,
    borderRadius: 12,
    borderColor: 'white',
    marginBottom: 10,
    padding: 10,
    width: 250,
    backgroundColor: 'white',
  },

});

// #40cbb4