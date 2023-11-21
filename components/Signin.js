import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const login = require('../assets/images/chill.jpeg')
function Signin() {
    return (
        <SafeAreaView style={{ flex: 1, height: '100', }}>
            <Image source={login} style={styles.image} />
            <View style={{ height: 500, width: '100%', alignItems: 'center' }}>


                <View style={{ flexDirection: 'row',width: '100%', alignItems: 'center', justifyContent: 'space-evenly', }}>
                    <Text>Login</Text>
                    <Text>Signin</Text>
                </View >
<View style={{width:'100%'}}>
                <TextInput placeholder='Afika' style={styles.input} />
                <TextInput placeholder='Username' style={styles.input} />
                <TextInput  placeholder='Email Address' style={styles.input} />
                <TextInput placeholder='Confirm Address' style={styles.input} />
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text>Or Continue with</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Text>FB </Text>
                        <Text>  GB</Text>
                    </View >


                </View>

                <TouchableOpacity style={styles.button}><Text>Sign in</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Signin

const styles = StyleSheet.create({
    image: {
        width: '100%', height: 350
    },
    input: {
        height: 50,
        width: '90%',
        margin: 12,
        padding: 10,
        borderRadius: 30,
        borderWidth: 1
    },
    button: {
        height: 50,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        borderRadius: 10,
    },
})