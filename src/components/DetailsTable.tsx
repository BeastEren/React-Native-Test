import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import patentInfo from '../../assets/data/patentInfo'
type DetailsTableProps = {
  code: string,
  name: string,
  medicine: string,
}

export default function DetailsTable(props: DetailsTableProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.code}>{props.code}</Text>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.meficine}>{props.medicine}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  code:{
    marginRight: 30
  },
  name:{
    marginRight: 20
  },
  meficine:{
    marginRight: 70
  },
})