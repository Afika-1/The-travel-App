// import React from 'react'
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TouchableOpacity, Button, ScrollView } from 'react-native';
// import { useFonts } from 'expo-font';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// export default function HomePage({navigation}) {
//     const [isLoaded] = useFonts({
//         'Inria-bold': require('../assets/fonts/InriaSerif-Bold.ttf'),
//         'inria-regular': require('../assets/fonts/InriaSerif-Regular.ttf'),
//       });
    
//       if (!isLoaded) {
//         return null;
//       }
      
//   return (
//     <SafeAreaView>
//         <View>
//           <Text style={{marginTop:150}} onPress={() => navigation.navigate('Landing')} >Home</Text>
//           </View>
//     </SafeAreaView>
//   )
// }


import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomePage = () => {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <View style={styles.userInfo}>
          <Text style={styles.name}>Hi</Text>
          <Text style={styles.userGreeting}>Name</Text>
        </View>
        <Image source={{ uri: 'https://example.com/user-image.jpg' }} style={styles.userImage} />
      </View>

      {/* Location */}
      <Text style={styles.location}>Location</Text>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput placeholder="Search..." />
      </View>

      {/* Categories Title */}
      <Text style={styles.categoriesTitle}>Categories</Text>

      {/* Menu Icons */}
      <View style={styles.menuIcons}>
        <TouchableOpacity onPress={() => console.log('Food')}>
          <Icon name="fast-food" size={30} color="#900" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Hotels')}>
          <Icon name="hotel" size={30} color="#900" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Transport')}>
          <Icon name="airplane" size={30} color="#900" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Fun')}>
          <Icon name="entertainment" size={30} color="#900" />
        </TouchableOpacity>
      </View>

      {/* Popular Destination */}
      <Text style={styles.popularDestinationTitle}>Popular Destination</Text>
      <View style={styles.destinationImages}>
        <View style={styles.destinationInfo}>
          <Image source={{ uri: 'https://example.com/popular1.jpg' }} style={styles.imageStyle} />
          <Text>Destination 1 Info</Text>
        </View>
        <View style={styles.destinationInfo}>
          <Image source={{ uri: 'https://example.com/popular2.jpg' }} style={styles.imageStyle} />
          <Text>Destination 2 Info</Text>
        </View>
      </View>

      {/* Food Trends */}
      <Text style={styles.foodTrendsTitle}>Food Trends</Text>
      <View style={styles.trendImages}>
        <View style={styles.trendInfo}>
          <Image source={{ uri: 'https://example.com/trend1.jpg' }} style={styles.imageStyle} />
          <Text>Trend 1 Info</Text>
        </View>
        <View style={styles.trendInfo}>
          <Image source={{ uri: 'https://example.com/trend2.jpg' }} style={styles.imageStyle} />
          <Text>Trend 2 Info</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
  },
  userGreeting: {
    marginLeft: 10,
    fontSize: 18,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  location: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginHorizontal: 20,
    marginTop: 10,
  },
  categoriesTitle: {
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 22,
  },
  menuIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginTop: 10,
  },
  popularDestinationTitle: {
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 22,
  },
  destinationImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  destinationInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  foodTrendsTitle: {
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 22,
  },
  trendImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  trendInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

export default HomePage;
