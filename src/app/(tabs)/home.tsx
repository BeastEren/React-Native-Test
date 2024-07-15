// import { Stack, router } from 'expo-router';
import { KeyboardAvoidingView, StyleSheet, View, Image } from 'react-native';
import NavigationBar from '@/components/NavigationBar';
import SearchBar from '@/components/SearchBar';
import DisplayDetails from '@/components/DisplayDetails';

const Footer = require('@/../../assets/images/Footer.jpg')

export default function TabOneScreen() {
    return (
        <View style={designer.container}>

            <View style={{ height: '20%', backgroundColor: '#1d95d2' }}>
                <NavigationBar />
                <SearchBar />
            </View>

            <DisplayDetails />

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
