//chalange for a starter coder

import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import patentInfo from '../../assets/data/patentInfo'
import DetailsTable from './DetailsTable'

export default function Details() {
    return (
        <View style={styles.container}>
            <View style={styles.tableHeader}>
                <Text style={styles.tableTextHeader}>Code</Text>
                <Text style={styles.tableTextHeader}>Name</Text>
                <Text style={styles.tableTextHeader}>Medicine</Text>
            </View>
            <ScrollView>
                {/* <FlatList
                    data={patentInfo}
                    renderItem={({ item }) => <DetailsTable code={item.code} name={item.name} medicine={item.medicine} />}
                    numColumns={3}
                    contentContainerStyle={{ gap: 10, padding: 10, marginRight: 20 }}
                    columnWrapperStyle={{ gap: 10 }}
                /> */}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 120,
    },
    tableHeader: {
        paddingTop: 5,
        paddingBottom: 10,
        paddingHorizontal: 8,
        backgroundColor: '#40cbb4',
        flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    tableTextHeader: {
        marginRight: 70,
        fontWeight: 'bold',
        color: 'white',
    },
})