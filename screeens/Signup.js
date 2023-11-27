import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const login = require('../assets/images/chill.jpeg');

function Signin() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={login} style={styles.image} />
      <View style={styles.contentContainer}>
        <View style={styles.tabContainer}>
          <Text>Login</Text>
          <Text>Signin</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput placeholder='Full Name' style={styles.input} />
          <TextInput placeholder='Username' style={styles.input} />
          <TextInput placeholder='Email Address' style={styles.input} />
          <TextInput placeholder='Confirm Email Address' style={styles.input} />
        </View>

        <View style={styles.orContainer}>
          <Text>Or Continue with</Text>
          <View style={styles.socialButtonContainer}>
            <Text>FB</Text>
            <Text>GB</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text>Sign in</Text>
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
    width: '100%',
    height: 350,
  },
  contentContainer: {
    height: 500,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
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
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 10,
    marginTop: 10,
  },
});

export default Signin;
