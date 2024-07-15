import { KeyboardAvoidingView, StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import NavigationBar from '@/components/NavigationBar'
import SearchBar from '@/components/SearchBar'
import Button from '@/components/Button'

const Footer = require('@/../../assets/images/Footer.jpg')

export default function Login() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'LogIn' }} />

      <View style={styles.header}>
        <NavigationBar />
        <SearchBar />
      </View>

      <View style={styles.logInWrapper}>
        <ScrollView>
          <View style={styles.logInSetter}>
            <Text style={styles.logo}>LogIn</Text>
            <View>
              <Text style={{ color: 'white', paddingBottom: 5 }}>Email ID/Phone number</Text>
              <TextInput style={styles.inputBox1} placeholder='Enter your Email/Phone number'></TextInput>
              <Text style={{ color: 'white', paddingBottom: 5 }}>Password</Text>
              <TextInput style={styles.inputBox1} placeholder='Enter your Password'></TextInput>
            </View>
            <Pressable onPress={() => {
              router.push('/forgotPassword')
            }}>
              <Text style={{}}>Forgot password?</Text>
            </Pressable>
            <View style={{
              width: '60%',
            }}>
              <Button onPress={() => {
                router.push("/home")
              }} text="Login" />
            </View>
          </View>
        </ScrollView>
      </View>

      {/* <KeyboardAvoidingView>
        <View>
          <Image style={styles.footer} source={Footer} />
        </View>
      </KeyboardAvoidingView> */}
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