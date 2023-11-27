import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const login = require('../assets/images/chill.jpeg');

function Signin({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={login} style={styles.image} />
      <View style={styles.contentContainer}>
        <View style={styles.tabContainer}>
          <Text style={styles.orText} onPress={() => navigation.navigate('Login')}>Login</Text>
          <Text style={styles.orText}>Signin</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput placeholder='Full Name' style={styles.input} />
          <TextInput placeholder='Username' style={styles.input} />
          <TextInput placeholder='Email Address' style={styles.input} />
          <TextInput placeholder='Confirm Email Address' style={styles.input} />
        </View>

        <View style={styles.orContainer}>
          <Text style={styles.orText}>Or Continue with</Text>
          <View style={styles.socialButtonContainer}>
            <Text>FB</Text>
            <Text>GB</Text>
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
    color: 'white',
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
    justifyContent: 'space-evenly',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    height: 50,
    width: '100%',
    marginVertical: 12,
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'white',
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
    width: '90%',
    borderRadius: 10,
    marginTop: 10,
  },
  customButtonText: {
    color: 'black',
    fontSize: 20,
  },
});

export default Signin;
