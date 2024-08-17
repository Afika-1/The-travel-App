import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, FlatList, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const profile = require('../assets/images/pexels-paulo-marcelo-martins-2412606.jpg')
const popular3 = require('../assets/images/pexels-gustavo-peres-9200388.jpg')
const popular1 = require('../assets/images/pexels-diamond-multimedia-9993754.jpg')
const popular2 = require('../assets/images/pexels-shameel-mukkath-5639459.jpg')
const popular4 = require('../assets/images/pexels-lucas-andrade-8066267.jpg')

const trend1 = require('../assets/images/pexels-chan-walrus-958545.jpg')
const trendingFood2 = require('../assets/images/pexels-antony-trivet-13354567.jpg')
const trendingFood3 = require('../assets/images/pexels-shameel-mukkath-5639459.jpg')
const trendingFood4 = require('../assets/images/pexels-lucas-andrade-8066267.jpg')
const trendingFood5 = require('../assets/images/pexels-chan-walrus-958545.jpg')
const trendingFood6 = require('../assets/images/pexels-pablo-macedo-845808.jpg')


export default function FoodOrdersScreen({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.userInfo}>
          <TouchableOpacity onPress={() => navigation.navigate('HomePage')}><Icon name="arrow-left" size={15} color="#091834" /></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('HomePage')}><Text style={styles.pageTitle}>Dish name</Text></TouchableOpacity>
        </View>

      </View>

      <View style={styles.location}>
        <Icon name="map-marker" size={13} color="#747474" />
        <Text style={paddingLeft = 20}>  Location</Text>
      </View>
      <ScrollView>

        <View style={styles.trendImages}>

          <View style={styles.trendInfo}>
            <Image source={trend1} style={styles.bigRestuarantImageStyle} />
            <View style={styles.imageContent}>
              <Text style={styles.imageTexts1}>Trend 1 Info</Text>
              <Text style={styles.imageTexts2}>Trend 1 Info</Text>
            </View>

            <View style={styles.textOverlay}>
              <Text style={styles.overlayText}>Trend 1 Title</Text>
            </View>

          </View>





        </View>
      </ScrollView>

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

  pageTitle: {
    fontWeight: 'bold',
    color: '#091834',

    marginLeft: 10,
    fontSize: 25,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: '#FF9F1C',
    borderWidth: 2,

  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginTop: 5,
    fontSize: 24,
    color: '#091834',
    fontWeight: 'bold'
  },
  destinationImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,

  },
  destinationInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 110,
    height: 110,
    marginTop: 10,
    marginRight: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.07)',
  },
  imageStyle: {
    width: 110,
    height: 80,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.9)',
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
    fontSize: 10,
    color: 'black'
  },
  imageTexts2: {
    fontWeight: 'bold',
    fontSize: 7,
    color: '#454040'
  },

  trendImages: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,


  },
  trendColumns: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 20,
    marginVertical: 10,
  },

  trendInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 170,
    height: 160,
    margin: 5,
    // marginBottom: 20,
    backgroundColor: 'rgba(0,0,0,0.02)',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },


  textOverlay: {
    position: 'absolute',
    bottom: 27,
    left: 0,
    right: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  overlayText: {
    color: '#B6B6B6',
    textAlign: 'center',
    padding: 1,
  },
  bigRestuarantImageStyle: {
    width: 170,
    height: 130,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.9)',
  },

  miniRestuarantContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 160,
    height: 200,
    marginVertical: 15,
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    position: 'relative',

  },
  miniRestuarantContentImageStyle: {
    width: 160,
    height: 170,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.9)',
  },
  imageContent: {
    paddingLeft: 15,

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

