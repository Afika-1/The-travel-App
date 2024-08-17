import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, FlatList, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const trend1 = require('../assets/images/pexels-marilena-baltzaki-15082384.jpg')
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



          <View style={styles.imageContainer}>
            <Image source={trend1} style={styles.bigRestuarantImageStyle} />


          </View>
      

        <View style={styles.description}>
          <Text style={styles.overlayText}>Trend 1 Title</Text>
        </View> 


        <View style={styles.imageContent}>
          <Text style={styles.imageTexts1}>vvuyvyuvyuyvvu</Text>
          <Text style={styles.imageTexts2}>Trend 1 Info</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomePage')}>
          <Text style={styles.customButtonText }>Order </Text>
        </TouchableOpacity>

        
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
    marginLeft: 30,
    marginBottom: 15,
    color: '#747474',
  },
 

  imageStyle: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,1)',
  },

  imageTexts1: {
    fontSize: 15,
    color: '#091834',
  },
  imageTexts2: {
    fontWeight: 'bold',
    fontSize: 7,
    color: '#454040'
  },

  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    // width: '100%',
    height: 250,
    marginHorizontal: 15,
    // marginRight: 20,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 30,
    borderWidth: 1,
    // borderColor: 'rgba(0,0,0,0.1)',
  },


  description: {
    // position: 'absolute',
    // bottom: 27,
    // left: 0,
    // right: 0,
    marginTop:10,
    marginLeft:15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  overlayText: {
    color: '#091834',
    fontSize:20,
    // textAlign: 'center',
    marginLeft:15,
  },
  bigRestuarantImageStyle: {
    width: '100%',
    height: 250,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.9)',
  },

 
  imageContent: {
    paddingLeft: 15,

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

});

