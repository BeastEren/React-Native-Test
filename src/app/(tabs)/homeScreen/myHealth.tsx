import { KeyboardAvoidingView, StyleSheet, View, Image, ScrollView } from 'react-native';
import NavigationBar from '@/components/NavigationBar';
import SearchBar from '@/components/SearchBar';
import React from 'react'

const Footer = require('@/../../assets/images/Footer.jpg')

const myHealth = () => {
  return (
    <View style={styles.container}>

      <View style={{ height: '16%', backgroundColor: '#1d95d2' }}>
        <NavigationBar />
        <SearchBar />
      </View>
      <View style={{ height: '9%', width: '100%', backgroundColor: '#1d95d2' }} />

      <View style={{ flex: 1 }}></View>

      <KeyboardAvoidingView>
        <View>
          <Image style={styles.footer} source={Footer} />
        </View>
      </KeyboardAvoidingView>

    </View>
  );
}

export default myHealth;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  footer: {
    width: "100%",
    height: 200,
    resizeMode: 'stretch',
    marginTop: 73,
  }
});