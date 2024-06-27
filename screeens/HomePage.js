// import React from 'react';
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, FlatList, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const profile = require('../assets/images/pexels-paulo-marcelo-martins-2412606.jpg')
const popular1 = require('../assets/images/pexels-photo-2901215.jpeg')
const popular2 = require('../assets/images/chill.jpeg')
const trend1 = require('../assets/images/pexels-chan-walrus-958545.jpg')
const trendingFood2 = require('../assets/images/pexels-antony-trivet-13354567.jpg')

export default function HomePage({ navigation }) {

  const [activeMenuItem, setActiveMenuItem] = useState('home');

  const menuItems = [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'calendar', icon: 'calendar', label: 'Calendar' },
    { id: 'search', icon: 'search', label: 'Search' },
    { id: 'favorites', icon: 'heart', label: 'Favorites' },
    { id: 'settings', icon: 'cog', label: 'Settings' },
  ];

  const changeActiveItem = (id) => {
    setActiveMenuItem(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <View style={styles.userInfo}>
          <Text style={styles.name}>Hi,</Text>
          <Text style={styles.userGreeting}>Name</Text>
        </View>
        
        <Image source={profile} style={styles.userImage} onPress={() => navigation.navigate('Login')} />
      </View>


      <Text style={styles.location}>Location</Text>
      <ScrollView>
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
            <Text>Food</Text>
          </View>
          <View style={styles.menuItems}>
            <TouchableOpacity style={styles.menuIconsContainer} onPress={() => console.log('Hotels')}>
              <Icon name="bed" size={30} color="#fff" />

            </TouchableOpacity>
            <Text>Hotels</Text>
          </View>

          <View style={styles.menuItems}>
            <TouchableOpacity style={styles.menuIconsContainer} onPress={() => console.log('Hotels')}>
              <Icon name="car" size={30} color="#fff" />

            </TouchableOpacity>
            <Text>Transport</Text>
          </View>

          <View style={styles.menuItems}>
            <TouchableOpacity style={styles.menuIconsContainer} onPress={() => console.log('Hotels')}>
              <Icon name="gamepad" size={30} color="#fff" />

            </TouchableOpacity>
            <Text>Fun</Text>
          </View>


        </View>

        {/* Popular Destination */}
        <Text style={styles.popularDestinationTitle}>Popular Destination</Text>
        <View style={styles.destinationImages}>
          <View style={styles.destinationInfo}>
            <Image source={popular1} style={styles.imageStyle} />
            <View style={styles.imageContent}>
              <Text style={styles.imageTexts1}>Destination 1 Info</Text>
              <Text style={styles.imageTexts2}>Destination 1 Info</Text>
              <Text style={styles.imageTexts3}>Destination 1 Info</Text>
            </View>
          </View>
          <View style={styles.destinationInfo}>
            <Image source={popular2} style={styles.imageStyle} />
            <View style={styles.imageContent}>
              <Text style={styles.imageTexts1}>Destination 2 Info</Text>
              <Text style={styles.imageTexts2}>Destination 2 Info</Text>
              <Text style={styles.imageTexts3}>Destination 2 Info</Text>
            </View>
          </View>
        </View>

        <Text style={styles.foodTrendsTitle}>Food Trends</Text>
        <View style={styles.trendImages}>
          <View style={styles.trendInfo}>
            <Image source={trend1} style={styles.imageStyle} />
            <View style={styles.imageContent}>
              <Text style={styles.imageTexts1}>Trend 1 Info</Text>
              <Text style={styles.imageTexts2}>Trend 1 Info</Text>
              <Text style={styles.imageTexts3}>Trend 1 Info</Text>
            </View>
          </View>
          <View style={styles.trendInfo}>
            <Image source={trendingFood2} style={styles.imageStyle} />
            <View style={styles.imageContent}>
              <Text style={styles.imageTexts1}>Trend 2 Info</Text>
              <Text style={styles.imageTexts2}>Trend 2 Info</Text>
              <Text style={styles.imageTexts3}>Trend 2 Info</Text>
            </View>
          </View>

          <View style={styles.trendInfo}>
            <Image source={trendingFood2} style={styles.imageStyle} />
            <View style={styles.imageContent}>
              <Text style={styles.imageTexts1}>Trend 3 Info</Text>
              <Text style={styles.imageTexts2}>Trend 3 Info</Text>
              <Text style={styles.imageTexts3}>Trend 3 Info</Text>
            </View>

          </View>
          <View style={styles.trendInfo}>
            <Image source={trend1} style={styles.imageStyle} />
            <View style={styles.imageContent}>
              <Text style={styles.imageTexts1}>Trend 4 Info</Text>
              <Text style={styles.imageTexts2}>Trend 4 Info</Text>
              <Text style={styles.imageTexts3}>Trend 4 Info</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomMenu}>
        {menuItems.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => changeActiveItem(item.id)} style={item.id === 'search' ? styles.searchIconWrapper : {}}>
            <Icon name={item.icon} size={item.id === 'search' ? 20 : 30} color={activeMenuItem === item.id ? '#FF9F1C' : 'grey'} />
          </TouchableOpacity>
        ))}
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchIconWrapper: {
    borderRadius: 100,
    backgroundColor: '#fff',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    paddingTop: 50,
    paddingBottom: 60,

    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',

    fontSize: 35,
  },
  userGreeting: {
    fontWeight: 'bold',

    marginLeft: 10,
    fontSize: 35,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: '#FF9F1C',
    borderWidth: 2,
  },
  location: {
    marginHorizontal: 20,
    marginBottom: 15,
    color: '#747474',
  },
  searchBar: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#fff',
    paddingLeft: 20,

  },
  categoriesTitle: {
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 24,
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
    fontSize: 24,
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
    width: 170,
    height: 180,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 30,
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.5)',
  },
  imageStyle: {
    width: 170,
    height: 130,
    borderRadius: 30,
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.9)',
  },
  foodTrendsTitle: {
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 24,
    color: '#091834',
    fontWeight: 'bold'
  },
  imageTexts1: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black'
  },
  imageTexts2: {
    fontWeight: 'bold',
    fontSize: 10,
    color: '#454040'
  },
  imageTexts3: {
    fontWeight: '900',
    fontSize: 11,
    color: '#747474'
  },
  trendImages: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,


  },
  trendInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 170,
    height: 180,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: '#B6B6B6',
    borderRadius: 30,
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.5)',
  },
  imageContent: {
    paddingLeft: 20,
    // lineHeight:1,
    // fontSize:2,
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

    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  menuItem: {
    marginRight: 15,
    paddingHorizontal: 20,

  },
});

