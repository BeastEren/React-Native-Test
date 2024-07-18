// import { Stack, router } from 'expo-router';
import { KeyboardAvoidingView, StyleSheet, View, Image, ScrollView } from 'react-native';
import NavigationBar from '@/components/NavigationBar';
import SearchBar from '@/components/SearchBar';
import DisplayDetails from '@/components/DisplayDetails';
import HealthCards from '@/components/HealthCards';

const Footer = require('@/../../assets/images/Footer.jpg')

export default function TabOneScreen() {
    return (
        <View style={designer.container}>

            <View style={{ height: '16%', backgroundColor: '#1d95d2' }}>
                <NavigationBar />
                <SearchBar />
            </View>

            {/* <ScrollView> */}

                <View style={{ height: '9%', width: '100%', backgroundColor: '#1d95d2' }} >

                    <HealthCards />

                </View>

                <DisplayDetails />


                {/* <KeyboardAvoidingView> */}
                    <View>
                        <Image style={designer.footer} source={Footer} />
                    </View>
                {/* </KeyboardAvoidingView> */}
            {/* </ScrollView> */}

        </View>
    );
}

const designer = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'white',
    },
    footer: {
        position:'relative',
        width: "100%",
        height: 200,
        resizeMode: 'stretch',
        marginTop: 73,
    }
});
