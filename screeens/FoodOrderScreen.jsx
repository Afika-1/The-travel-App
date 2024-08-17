import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, FlatList, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const trend1 = require('../assets/images/pexels-chan-walrus-958545.jpg')
const trendingFood2 = require('../assets/images/pexels-antony-trivet-13354567.jpg')

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


          </View>
        </View>
        <View style={styles.imageContent}>
          <Text style={styles.imageTexts1}>Trend 1 Info</Text>
          <Text style={styles.imageTexts2}>Trend 1 Info</Text>
        </View>


        <View style={styles.textOverlay}>
          <Text style={styles.overlayText}>Trend 1 Title</Text>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 

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

  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 15,
    color: '#747474',
  },
 

  imageStyle: {
    width: 110,
    height: 80,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.9)',
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

 
  imageContent: {
    paddingLeft: 15,

  },

});

