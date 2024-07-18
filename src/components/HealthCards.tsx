import { Pressable, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { Fontisto, FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';
const rate1= '100/70'
const rate2 = '78bmp'
const rate3 = '78-92'
const rate4 = '100mg/dl'


const HealthCards = () => {
  return (
    <View style={styles.wrapper}>
      {/* <Pressable onPress={() => { styles.press }}> */}
      <View style={styles.innerwrapper} >
        <Fontisto name="blood-drop" size={38} color="red" />
        <Text style={{ fontSize: 11.2, fontWeight: 'bold', paddingHorizontal: 5 }}>Blood Status</Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#40cbb4' }}>{rate1}</Text>
        <View style={styles.loewTab}></View>
      </View>
      {/* </Pressable> */}

      <View style={styles.innerwrapper} >
        <FontAwesome name="heartbeat" size={37.4} color="red" />
        <Text style={{ fontSize: 11.2, fontWeight: 'bold', paddingHorizontal: 5 }}>Heart Rate</Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#40cbb4' }}>{rate2}</Text>
        <View style={styles.loewTab}></View>
      </View>

      <View style={styles.innerwrapper} >
      <MaterialCommunityIcons name="blood-bag" size={38} color="red" />
        <Text style={{ fontSize: 11.2, fontWeight: 'bold', paddingHorizontal: 5 }}>Glucose Level</Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#40cbb4' }}>{rate3}</Text>
        <View style={styles.loewTab}></View>
      </View>

      <View style={styles.innerwrapper} >
        <Fontisto name="blood" size={38} color="red" />
        <Text style={{ fontSize: 11, fontWeight: 'bold', paddingHorizontal: 2 }}>Blood Pressure</Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#40cbb4' }}>{rate4}</Text>
        <View style={styles.loewTab}></View>
      </View>


    </View>
  )
}

export default HealthCards;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    flexDirection: 'row',
    paddingHorizontal: 23,
    marginTop: '5%',
    width: '100%',
    justifyContent: 'space-between',
    // backgroundColor:'yellow',
  },
  innerwrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: 'white',
    height: 120,
    width: 84,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black'

  },
  loewTab: {
    width: '100%',
    height: 15,
    backgroundColor: '#1d95d2',
    borderRadius: 15,
    position: 'relative',
    marginTop: 9.1,
  }
  // press: {
  //   opacity: .1
  // }
})