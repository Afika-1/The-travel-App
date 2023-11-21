import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';

const login = require('../assets/images/chill.jpeg')
function Login() {
    return (
        <SafeAreaView style={{ flex: 1, height: '100', }}>
            <Image source={login} style={styles.image} />
            <View style={{ height: 500, width: '100%', alignItems:'center' }}>


                <View style={{ flexDirection: 'row', width: '100%',alignItems:'center', justifyContent:'space-evenly', }}>
                    <Text>Login</Text>
                    <Text>Signin</Text>
                </View>

                <TextInput style={styles.input} />
                <TextInput style={styles.input} />


                <View style={{ alignItems: 'center' }}>
                    <Text>Or Continue with</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Text>FB </Text>
                        <Text>  GB</Text>
                    </View >


                </View>

                <TouchableOpacity style={styles.button}><Text>Login</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Login

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
    button:{
        height:50,
backgroundColor:'gray',
alignItems:'center',
justifyContent:'center',
width:'90%',
borderRadius:10,
    },
})