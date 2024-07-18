import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Pressable, Alert, } from 'react-native'
import React, { useState } from 'react'
import { router, Stack } from 'expo-router'
import NavigationBar from '@/components/NavigationBar'
import SearchBar from '@/components/SearchBar'
import Button from '@/components/Button'
import axios from 'axios'

const Footer = require('@/../../assets/images/Footer.jpg')

export default function Login() {

  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');

  // const handleLogin = () => {
  //   // console.log('UserEmail:', userEmail);
  //   // console.log('UserPass:', userPass);
  //   setUserEmail('');
  //   setUserNumber('');
  //   setUserName('');
  //   setUserPass('');
  //   const url = 'http://192.168.0.107:8000/api/users/signup/';
  //   axios.get(url)
  //     .then(response => {
  //       console.log('Data received:', response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }

  const handleLogIn = () => {

    const url = 'http://192.168.0.107:8000/api/users/login/';

    axios.post(url, {
      userEmail, userPass
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {

        console.log(response.data);

        if (response.data.errors) {

          Alert.alert(
            'Warning !!',
            `${response.data.errors}`,
            [
              { text: 'ok', style: 'cancel' }
            ]
          )
        } else {

          Alert.alert(
            'Login Successful',
            `Welcome ${response.data.userName}`,
            [
              {
                text: 'Ok',
                // style: 'Ok',
              },
            ],
            {
              cancelable: true,
            },
          );
          router.push("../homeScreen/home")
          // console.log(response.data)
        }
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'LogIn' }} />

      <View style={{ height: '16%', backgroundColor: '#1d95d2' }}>
        <NavigationBar />
        <SearchBar />
      </View>

      <View style={{ height: '4%', width: '100%', backgroundColor: '#1d95d2' }} />

      <View style={styles.logInWrapper}>
        <View style={styles.logInSetter}>
          <Text style={styles.logo}>LogIn</Text>
          <View>
            <Text style={{ color: 'white', paddingBottom: 5 }}>Email ID/Phone number</Text>
            <TextInput style={styles.inputBox1} placeholder='Enter your Email/Phone number' value={userEmail} onChangeText={setUserEmail} />

            <Text style={{ color: 'white', paddingBottom: 5 }}>Password</Text>
            <TextInput style={styles.inputBox1} placeholder='Enter your Password' value={userPass} onChangeText={setUserPass} />
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
              handleLogIn();
            }} text="Login" />
          </View>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logInWrapper: {
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