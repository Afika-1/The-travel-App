
import React, { useState, useEffect } from 'react';
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

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 6;

    setIsButtonDisabled(
      !isEmailValid || !isPasswordValid
    );
  }, [email, password]);


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
            style={[styles.input, isEmailValid ? { borderColor: 'white' } : { borderColor: 'red' }]}
            value={email}
            onChangeText={(text) => {
              const isEmailValid = text.trim() !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
              setIsEmailValid(isEmailValid);
              setEmail(text);
            }}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="gray"
            style={[styles.input, isPasswordValid ? { borderColor: 'white' } : { borderColor: 'red' }]}
            secureTextEntry
            value={password}
            onChangeText={(text) => {
              const isPasswordValid = text.length >= 6;
              setIsPasswordValid(isPasswordValid);
              setPassword(text);
            }}
          />
        </View>

        <View style={styles.orContainer}>
          <Text style={styles.socialsLabel}>Or Continue with</Text>
          <View style={styles.socialButtonContainer}>
            <Image source={google} style={styles.socialIcon} />
            <Image source={facebook} style={styles.socialIcon} />
          </View>
        </View>
       
        <TouchableOpacity style={isButtonDisabled? styles.button: styles.disabledButton} disabled={isButtonDisabled} onPress={() => navigation.navigate('HomePage')}>
          <Text style={!isButtonDisabled ? styles.customButtonText : styles.disabledButtonText}>Login </Text>
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
    justifyContent: 'flex-end'
  },
  image: {
    height: 380,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: -1,
  },
  orText: {
    color: '#747474',
    fontSize: 24,
    fontFamily: 'Inria-bold',

  },
  socialsLabel: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'inria-regular',

  },
  orTextActive: {
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
    paddingVertical: 15,

  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '95%',
    padding: 15,
    marginVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    fontFamily: 'inria-regular',
    fontSize: 15,

  },
  orContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  socialButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    paddingTop: 5,
  },
  socialIcon: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor:'#fff',
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
  disabledButton: {
    height: 50,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    borderRadius: 10,
    marginTop: '30%',
    borderBottomWidth:3,
    borderBottomColor:'#FF9F1C',

  },
  customButtonText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Inria-bold',

  },
  box: {
    width: "100%",
    height: 5,
    shadowColor: "#b5b5b5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Login;
