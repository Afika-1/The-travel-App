import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useFonts } from 'expo-font';

const login = require('../assets/images/loginImage.jpg');
const facebook = require('../assets/icons/facebook.png');
const google = require('../assets/icons/google.png');

function Signup({ navigation }) {
  const [isLoaded] = useFonts({
    'Inria-bold': require('../assets/fonts/InriaSerif-Bold.ttf'),
    'inria-regular': require('../assets/fonts/InriaSerif-Regular.ttf'),
  });

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [isFullNameValid, setIsFullNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const isFullNameValid = fullName.trim() !== '';
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 6;
    const isConfirmPasswordValid = confirmPassword === password;

    setIsButtonDisabled(
      !isFullNameValid || !isEmailValid || !isPasswordValid || !isConfirmPasswordValid
    );
  }, [fullName, email, password, confirmPassword]);


  if (!isLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={login} style={styles.image} />
      <View style={styles.contentContainer}>
        <View style={styles.box}></View>
        <View style={styles.tabContainer}>
          <Text style={styles.orText} onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
          <Text style={styles.orTextActive}>Sign up</Text>
        </View>

        <View style={styles.inputContainer}>

          <TextInput
            placeholder="Full Name"
            placeholderTextColor="gray"
            style={[styles.input, isFullNameValid ? { borderColor: 'white' } : { borderColor: 'red' }]}
            value={fullName}
            onChangeText={(text) => {
              const isFullNameValid = text.trim() !== '';
              setIsFullNameValid(isFullNameValid);
              setFullName(text);
            }}
          />

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
            style={[styles.input, isPasswordValid? { borderColor: 'white' } : { borderColor: 'red' }]}
            secureTextEntry
            value={password}
            onChangeText={(text) => {
              const isPasswordValid = text.length >= 6;
              setIsPasswordValid(isPasswordValid);
              setPassword(text);
            }}
          />
           <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="gray"
            style={[styles.input, isConfirmPasswordValid?{borderColor:'white'}:{borderColor:'red'}]}
            secureTextEntry
            value={confirmPassword}
            onChangeText={(text) => {
              const isConfirmPasswordValid = text === password;
              setIsConfirmPasswordValid(isConfirmPasswordValid);
              setConfirmPassword(text);
              
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

        {errorMessage && (
          <Text style={{ color: 'red', marginBottom: 10 }}>
            {errorMessage}
          </Text>
        )}

        <TouchableOpacity
          style={[styles.button, isButtonDisabled ? styles.button: styles.disabledButton,
            { pointerEvents: isButtonDisabled ? 'none' : undefined },]}
          onPress={() => {if (!isButtonDisabled) {
              // Perform signup logic here

              setErrorMessage("Signup failed. Please check your credentials.");
              setTimeout(() => {
                setErrorMessage(""); // Clear the error message after a few seconds
              }, 3000);

              navigation.navigate('Login');
            }

          }}
          disabled={isButtonDisabled}
        >
          <Text style={[styles.customButtonText, isButtonDisabled ? styles.disabledButtonText : null]}>
            Sign up
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  disabledButtonText: {
    color: 'grey',
    fontSize: 18
  },

  container: {
    flex: 1,
    justifyContent: 'flex-end',

  },
  image: {

    height: 360,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: -1,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  box: {
    width: "100%",
    height: 5,
    shadowColor: "#b5b5b5",
    // backgroundColor:'#fff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
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
  socialIcon: {
    height: 30,
    width: 30,
    borderRadius: 50,
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
    shadowColor: "#b5b5b5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    height: 494,
    width: 393,
    height: 500,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#091834',
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
    paddingVertical: '5%',
  },
  input: {
    // height: 55,
    padding: 10,
    width: '100%',
    marginVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    fontFamily: 'inria-regular',


  },
  orContainer: {
    alignItems: 'center',
    // marginVertical: 10,
  },
  socialButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 20,
    paddingTop: 5,
  },
  button: {
    height: 50,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    borderRadius: 10,
    marginTop: 10,

  },
  disabledButton: {
    height: 50,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    borderRadius: 10,
    borderBottomWidth:3,
    borderBottomColor:'#FF9F1C',

  },
  customButtonText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Inria-bold',

  },
});

export default Signup;
