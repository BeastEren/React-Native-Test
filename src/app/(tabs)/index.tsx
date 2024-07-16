import { KeyboardAvoidingView, StyleSheet, Text, View, Image } from 'react-native';
import { router } from 'expo-router';
import Button from '@/components/Button';


import NavigationBar from '@/components/NavigationBar';
import SearchBar from '@/components/SearchBar';

const Footer = require('@/../../assets/images/Footer.jpg')

export default function TabOneScreen() {
  return (
    <View style={designer.container}>

      <View style={{ height: '15%', backgroundColor: '#1d95d2' }}>
        <NavigationBar />
        <SearchBar />
      </View>

      <View style={{ height: '5%', width: '100%', backgroundColor: '#1d95d2' }} />

      <View style={designer.messageWrapper}>
        <Text style={designer.message}>
          WELCOME TO <Text style={{ color: '#1d95d2', fontWeight: 'bold' }}>IVF SOLUTION</Text>
        </Text>
      </View>

      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>

        <View style={{
          width: '60%',
        }}>
          <Button onPress={() => {
            router.push("/login")
          }} text="Login" />
        </View>

        <View style={{
          width: '60%',
        }}>
          <Button onPress={() => {
            router.push("/signup")
          }} text="Signup" />
        </View>

      </View>

      <KeyboardAvoidingView>
        <View>
          <Image style={designer.footer} source={Footer} />
        </View>
      </KeyboardAvoidingView>

    </View>
  );
}

const designer = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  messageWrapper: {
    // flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '25%',
  },
  message: {
    fontSize: 22,
    fontWeight: 'bold',

  },
  footer: {
    width: "100%",
    height: 200,
    resizeMode: 'stretch',
    marginTop: 73,
  }
});


// #40cbb4
// #1d95d2