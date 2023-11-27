import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const Login = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <Image source={require('../assets/images/chill.jpeg')} style={styles.image} />

                <View style={styles.tabContainer}>
                    <Text style={styles.tabText}>Login</Text>
                    <Text style={styles.tabText} onPress={() => navigation.navigate('Signup')}>Signin</Text>
                </View>

                <TextInput style={styles.input} placeholder="Username" />
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />

                <View style={styles.orContainer}>
                    <Text style={styles.orText}>Or Continue with</Text>
                    <View style={styles.socialContainer}>
                        <Text style={styles.socialText}>FB</Text>
                        <Text style={styles.socialText}>GB</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.button}><Text>Login</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#091834',
    },
    image: {
        width: '100%',
        height: 350,
    },
    contentContainer: {
        height: 500,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    tabText: {
        color: 'white',
    },
    input: {
        height: 50,
        width: '90%',
        margin: 12,
        padding: 10,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'white',
    },
    orContainer: {
        alignItems: 'center',
    },
    orText: {
        color: 'white',
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    socialText: {
        color: 'white',
    },
    button: {
        height: 50,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        borderRadius: 10,
    },
});

export default Login;
