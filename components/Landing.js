
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TouchableOpacity, Button, ScrollView } from 'react-native';
import {useFonts} from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const backgroundImg = require("../assets/ride.jpg")

export default function Landing() {

  const [isLoaded]= useFonts({
    'Inria-bold': require('../assets/fonts/InriaSerif-Bold.ttf'),
    'inria-regular': require('../assets/fonts/InriaSerif-Regular.ttf'),
  });
  if (!isLoaded){
    return null
  }
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <ScrollView>
      <ImageBackground source={backgroundImg} style={{ padding: 50, flex: 1, alignItems: "center" }}>
        <View style={{ backgroundColor: 'black', marginTop: 480, width: 390, height:300, padding: 20, borderRadius: 20 }}>
          <Text style={{ color: "white", alignItems: 'center', justifyContent: 'center',fontFamily:'Inria-bold', fontSize: 35}}>Make Your Dream A Reality</Text>
          <Text style={{ color: 'white', marginTop: 20,marginBottom: 20, fontSize: 20, fontFamily:'inria-regular' }}>The perfect travel companion for your next trip.</Text>
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Button title='Get Started' onPress={()=>console.log('Button pressed')} color='darkblue'/>
            <TouchableOpacity style={{ width: 150, height: 50, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
              <Text style={{ color: 'white', }}><Text style={{ backgroundColor: 'black', }}>{` >> `}</Text> Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      {/* <Image source={bgImage} style={{width:100, height:200}}/> */}
      </ScrollView>
      <StatusBar style="auto  " />
    </SafeAreaView>
  );
}

