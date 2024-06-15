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


// import React from 'react';
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/Ionicons';

export default function HomePage() {

  const [activeMenuItem, setActiveMenuItem] = useState('home'); // Default active item

  const menuItems = [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'calendar', icon: 'calendar', label: 'Calendar' },
    { id: 'search', icon: 'search', label: 'Search' },
    { id: 'favorites', icon: 'heart', label: 'Favorites' },
    { id: 'settings', icon: 'cog', label: 'Settings' },
  ];

  // Example function to simulate changing the active menu item
  const changeActiveItem = (id) => {
    setActiveMenuItem(id);
  };

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

      <Text style={styles.location}>Location</Text>

      <View style={styles.searchBar}>
        <TextInput placeholder="Search..." />
      </View>

      <Text style={styles.categoriesTitle}>Categories</Text>

      {/* Menu Icons */}
      <View style={styles.menuIcons}>

        <View style={styles.menuItems}>
          <TouchableOpacity style={styles.menuIconsContainer} onPress={() => console.log('Food')}>
            <Icon name="cutlery" size={30} color="#fff" />

          </TouchableOpacity>
          <Text>Transport</Text>
        </View>
        <View style={styles.menuItems}>
          <TouchableOpacity style={styles.menuIconsContainer} onPress={() => console.log('Hotels')}>
            <Icon name="bed" size={30} color="#fff" />

          </TouchableOpacity>
          <Text>Hotels</Text>
        </View>

        <View style={styles.menuItems}>
          <TouchableOpacity style={styles.menuIconsContainer} onPress={() => console.log('Hotels')}>
            <Icon name="plane" size={30} color="#fff" />

          </TouchableOpacity>
          <Text>Transport</Text>
        </View>

        <View style={styles.menuItems}>
          <TouchableOpacity style={styles.menuIconsContainer} onPress={() => console.log('Hotels')}>
            <Icon name="plane" size={30} color="#fff" />

          </TouchableOpacity>
          <Text>Fun</Text>
        </View>


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
      <View style={styles.bottomMenu}>
        <FlatList
          horizontal
          data={menuItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => changeActiveItem(item.id)}
              style={[styles.menuItem, activeMenuItem === item.id && styles.active]}
            >
              <Icon name={item.icon} size={30} color="gray" />
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BDBFE8',
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
    color: '#091834',
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
    color: '#091834',
     fontWeight: 'bold'
  },
  menuIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginTop: 10,
  },
  menuItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuIconsContainer: {
    borderRadius: 50,
    backgroundColor: '#091834',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',

  },
  popularDestinationTitle: {
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 22,
    color: '#091834',
     fontWeight: 'bold'
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
    color: '#091834',
     fontWeight: 'bold'
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
  bottomMenu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#091834',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-even',
    alignItems: 'center',
  },
  menuItem: {
    marginRight: 15,
  },
  active: {
    color: '#FF9F1C',
  },
});

