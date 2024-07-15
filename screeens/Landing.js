import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TouchableOpacity, Button, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import COLORS from '../constants/colors';

const backgroundImg = require("../assets/ride.jpg");

export default function Landing({ navigation }) {
  const [isLoaded] = useFonts({
    'Inria-bold': require('../assets/fonts/InriaSerif-Bold.ttf'),
    'inria-regular': require('../assets/fonts/InriaSerif-Regular.ttf'),
  });

  if (!isLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
        <View style={styles.overlayContainer}>
          <Text style={styles.titleText}>Make Your Dream A Reality</Text>
          <Text style={styles.subtitleText}>The perfect travel companion for your next trip.</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.customButton}>
              <View style={styles.customIcons}>
                <Icon name="angle-right" size={30} color="#fff" /><Icon name="angle-right" size={30} color="#fff" />
              </View>
              <Text style={styles.customButtonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
  },
  overlayContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
    marginTop: 'auto',
    marginBottom: 20,
    width: 390,
    height: 320,
    padding: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontFamily: 'Inria-bold',
    fontSize: 35,
    marginBottom: 20,
  },
  subtitleText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'inria-regular',
    marginBottom: 20,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    flexDirection: 'row',
    width: 200,
    height: 60,
    backgroundColor: '#091834',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal:5,
    borderRadius: 50,
    borderColor: '#FF9F1C',
    borderWidth: 0.5,
    marginTop: 10,
  },
  customIcons: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 50,
    height: 50,
    width:50,
    backgroundColor:'black',
    borderColor: '#FF9F1C',
    borderWidth: 0.5,
  },
  customButtonText: {
    color: 'white',
    marginRight:25,
    fontSize: 18,

  },
});
