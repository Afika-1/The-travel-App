import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TouchableOpacity, Button, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomePage({navigation}) {
    const [isLoaded] = useFonts({
        'Inria-bold': require('../assets/fonts/InriaSerif-Bold.ttf'),
        'inria-regular': require('../assets/fonts/InriaSerif-Regular.ttf'),
      });
    
      if (!isLoaded) {
        return null;
      }
      
  return (
    <SafeAreaView>
        <View>
          <Text onPress={() => navigation.navigate('Login')} >Home</Text>
          </View>
    </SafeAreaView>
  )
}
