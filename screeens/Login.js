import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, 
    Image, TextInput, TouchableOpacity } from 'react-native';
    import { useFonts } from 'expo-font';

const login = require('../assets/images/loginImage.jpg');
const facebook = require('../assets/icons/facebook.png');
const google = require('../assets/icons/google.png');

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
        <View style={styles.box}></View>
        <View style={styles.tabContainer}>
          <Text style={styles.orTextActive} >Login</Text>
          <Text style={styles.orText} onPress={() => navigation.navigate('Signup')}>Signin</Text>
        </View>

        <View style={styles.inputContainer}>
          {/* <TextInput placeholder='Username' style={styles.input} /> */}
          <TextInput placeholder='Email Address'   placeholderTextColor='gray' style={styles.input} />
          <TextInput placeholder='Confirm Email Address'   placeholderTextColor='gray' style={styles.input} />
        </View>

        <View style={styles.orContainer}>
          <Text style={styles.socialsLabel}>Or Continue with</Text>
          <View style={styles.socialButtonContainer}>
          <Image source={google} style={styles.socialIcon}/>
            <Image source={facebook} style={styles.socialIcon}/>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.customButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-end'
  },
  image: {
    height: 410,
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
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
    // backgroundColor: "red",
  shadowColor: "#b5b5b5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5, // This is for Android elevation
  },
});

export default Signin;
