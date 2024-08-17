import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Signup, Landing, Login, HomePage, FoodHome, RestuarantsPage } from './screeens';
import FoodOrdersScreen from './screeens/FoodOrderScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Landing'>
        <Stack.Screen name='Landing' component={Landing} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name='HomePage' component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name='FoodHome'component={FoodHome} options={{headerShown:false}}/>
        <Stack.Screen name='RestuarantsPage'component={RestuarantsPage} options={{headerShown:false}}/>
        <Stack.Screen name='FoodOrders'component={FoodOrdersScreen} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
