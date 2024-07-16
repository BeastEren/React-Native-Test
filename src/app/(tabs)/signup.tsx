import { StyleSheet, Text, View, TextInput, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { router, Stack } from 'expo-router'
import NavigationBar from '@/components/NavigationBar'
import SearchBar from '@/components/SearchBar'
import Button from '@/components/Button'
import InputText from '@/components/InputText'

import axios from 'axios';

const Footer = require('@/../../assets/images/Footer.jpg')

export default function signup() {
  const [userName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');

  const handleSignup = () => {
    console.log('UserName:', userName);
    console.log('UserNumber:', userNumber);
    console.log('UserEmail:', userEmail);
    console.log('UserPass:', userPass);
    setUserEmail('');
    setUserNumber('');
    setUserName('');
    setUserPass('');
    const url = 'http://127.0.0.1:8000/api/users/signup/';
    axios.get(url)
      .then(response => {
        console.log('Data received:', response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Sign Up' }} />

      <View style={{ height: '15%', backgroundColor: '#1d95d2' }}>
        <NavigationBar />
        <SearchBar />
      </View>

      <ScrollView>
        <View style={{ height: '5%', width: '100%', backgroundColor: '#1d95d2' }} />

        <View style={styles.logInWrapper}>
          <View style={styles.logInSetter}>

            <Text style={styles.logo}>SignUp</Text>

            <View>
              {/* <InputText name='name' color='white' /> */}
              <Text style={{ color: 'white', paddingBottom: 5 }}>Name</Text>
              <TextInput style={styles.inputBox1} placeholder='Enter your Name' value={userName}></TextInput>

              <Text style={{ color: 'white', paddingBottom: 5 }}>Phone Number</Text>
              <TextInput style={styles.inputBox1} placeholder='Enter your Phone Number' keyboardType="numeric" value={userNumber}></TextInput>

              <Text style={{ color: 'white', paddingBottom: 5 }}>Email ID</Text>
              <TextInput style={styles.inputBox1} placeholder='Enter your Email' value={userEmail}></TextInput>

              <Text style={{ color: 'white', paddingBottom: 5 }}>Password</Text>
              <TextInput style={styles.inputBox1} placeholder='Enter your Password' value={userPass}></TextInput>

              <Text style={{ color: 'white', paddingBottom: 5 }}>Confirm Password</Text>
              <TextInput style={styles.inputBox1} placeholder='Confirm your Password' value={''}></TextInput>
            </View>

            <View style={{
              width: '60%',
            }}>
              <Button onPress={() => {
                handleSignup();
                router.push("/login");
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