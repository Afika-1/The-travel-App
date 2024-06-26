
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

const login = require('../assets/images/loginImage.jpg');
const facebook = require('../assets/icons/facebook.png');
const google = require('../assets/icons/google.png');

function Login({ navigation }) {
  const [isLoaded] = useFonts({
    'Inria-bold': require('../assets/fonts/InriaSerif-Bold.ttf'),
    'inria-regular': require('../assets/fonts/InriaSerif-Regular.ttf'),
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (text) => {
    setEmail(text);
    setIsEmailValid(emailRegex.test(text));
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setIsPasswordValid(text.length >= 6);
  };

  const isFormValid = isEmailValid && isPasswordValid;

  if (!isLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={login} style={styles.image} />
      <View style={styles.contentContainer}>
        <View style={styles.box}></View>
        <View style={styles.tabContainer}>
          <Text style={styles.orTextActive}>Login</Text>
          <Text style={styles.orText} onPress={() => navigation.navigate('Signup')}>
            Signup
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email Address"
            placeholderTextColor="gray"
            style={styles.input}
            value={email}
            onChangeText={[handleEmailChange, isEmailValid?{borderColor:'white'}:{bordeColor:'red'}]}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="gray"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={[handlePasswordChange]}
          />
        </View>

        <View style={styles.orContainer}>
          <Text style={styles.socialsLabel}>Or Continue with</Text>
          <View style={styles.socialButtonContainer}>
            <Image source={google} style={styles.socialIcon} />
            <Image source={facebook} style={styles.socialIcon} />
          </View>
        </View>

        <TouchableOpacity style={styles.button} disabled={!isFormValid}  onPress={() => navigation.navigate('HomePage')}>
          <Text style={isFormValid ? styles.customButtonText : styles.disabledButtonText}>Login </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}





const styles = StyleSheet.create({
  disabledButtonText: {
    color: 'grey',
    fontSize: 18,
    fontFamily: 'Inria-bold'
  },
    

  container: {
    flex: 1,
    justifyContent:'flex-end'
  },
  image: {
    height: 380,
    position: 'absolute',
    top: 0,
    left: 0,
    width:'100%',
    zIndex: -1,
  },
  orText: {
    color: '#747474',
    fontSize: 24,
    fontFamily: 'Inria-bold',

  },
  socialsLabel:{
    color: 'white',
    fontSize: 20,
    fontFamily: 'inria-regular',

  },
  orTextActive:{
    fontSize: 24,
    color: '#ff9f1c',
    textDecorationLine: 'underline',
    fontFamily: 'Inria-bold',

  },
  contentContainer: {
    backgroundColor: "#091834",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: 500,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#091834',
    position: 'relative',
  },
  tabContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical:15,

  },
  inputContainer: {
    width: '100%',
    alignItems:'center',
  },
  input: {
    // height: 50,
    width: '95%',
    padding:15,
    marginVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'white',
    color:'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    fontFamily: 'inria-regular',
    fontSize:15,

  },
  orContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  socialButtonContainer: {
    display:'flex',
    flexDirection: 'row',
    gap:20,
    paddingTop:5,
  },
  socialIcon:{
    height:30,
    width:30,
    borderRadius:50,
  },
  button: {
    height: 50,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    borderRadius: 10,
    marginTop: '30%',

  },
  customButtonText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Inria-bold',

  },
  box:{
    width:"100%",
    height:5,
    shadowColor: "#b5b5b5",
    // backgroundColor:'#fff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Login;
