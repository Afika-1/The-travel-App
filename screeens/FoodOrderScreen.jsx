import React, { useState } from 'react';
import { View, Text, Image,  TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
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
      

        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>Trend 1 Title</Text>
        </View> 


        <View style={styles.priceContainer}>
          <Text style={styles.imageTexts1}>Price</Text>
          <Text style={styles.imageTexts2}>R123.45</Text>
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
    paddingHorizontal:20,

    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
 
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

    marginBottom: 15,
    color: '#747474',
  },
 
  

  descriptionContainer: {
    marginTop:10,
    // marginLeft:15,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    flexDirection:'column',
    justifyContent:'space-between',
    
  },
  description: {
    color: '#091834',
    fontSize:20,
    marginLeft:15,
  },

  // imageStyle: {
  //   width: '100%',
  //   height: 200,
  //   borderRadius: 20,
  //   borderWidth: 1,
  //   borderColor: 'rgba(0,0,0,1)',
  // },

  imageTexts1: {
    fontSize: 20,
    color: '#091834',
  },
  imageTexts2: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#091834'
  },

  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 250,

    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 30,
    borderWidth: 1,

  },

  bigRestuarantImageStyle: {
    width: '100%',
    height: 250,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.9)',
  },

 
  priceContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'

  },

  button: {
    height: 50,
    backgroundColor: '#091834',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 10,
    marginTop: '80%',

  },
  customButtonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'inria-regular',

  },

});

