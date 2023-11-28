import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

const login = require('../assets/images/chill.jpeg');
const facebook = require('../assets/icon.png');
function Signin({ navigation }) {

    const [isLoaded] = useFonts({
        'Inria-bold': require('../assets/fonts/InriaSerif-Bold.ttf'),
        'inria-regular': require('../assets/fonts/InriaSerif-Regular.ttf'),
      });
    
      if (!isLoaded) {
        return null;
      }
  return (
    <SafeAreaView style={styles.container}>
      <Image source={login} style={styles.image} />
      <View style={styles.contentContainer}>
        <View style={styles.tabContainer}>
          <Text style={styles.orText} onPress={() => navigation.navigate('Login')}>Login</Text>
          <Text style={styles.orTextActive}>Sign up</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput placeholder='Full Name'  placeholderTextColor='gray' style={styles.input} />
          <TextInput placeholder='Username'   placeholderTextColor='gray' style={styles.input} />
          <TextInput placeholder='Email Address'  placeholderTextColor='gray' style={styles.input} />
          <TextInput placeholder='Confirm Email Address'  placeholderTextColor='gray' style={styles.input} />
        </View>

        <View style={styles.orContainer}>
          <Text style={styles.socialsLabel}>Or Continue with</Text>
          <View style={styles.socialButtonContainer}>
            <Image source={facebook} style={styles.socialIcon}/>
            <Image source={facebook} style={styles.socialIcon}/>
                      </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.customButtonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-end',

  },
  image: {
   
    height: 410,
    position: 'absolute',
    top: 0,
    left: 0,
    width:'100%',
    zIndex: -1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
  socialIcon:{
    height:20,
    width:20,
    borderRadius:50,
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
    shadowColor: "#b5b5b5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4, // This is for Android elevation
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
    paddingVertical:15,
  },
  inputContainer: {
    width: '100%',
    paddingVertical:'5%',
  },
  input: {
    height: 45,
    width: '100%',
    marginVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'white',
    color:'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    fontFamily: 'inria-regular',


  },
  orContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  socialButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
  customButtonText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Inria-bold',

  },
});

export default Signin;
