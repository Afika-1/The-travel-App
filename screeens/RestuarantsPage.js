import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, FlatList, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const profile = require('../assets/images/pexels-paulo-marcelo-martins-2412606.jpg')
const popular1 = require('../assets/images/Rectangle.png')
const popular2 = require('../assets/images/Rectangle2.png')
const popular3 = require('../assets/images/pexels-rafael-quaty-14.jpg')
const popular4 = require('../assets/images/pexels-lucas-andrade-8066267.jpg')

const trend1 = require('../assets/images/pexels-pixabay-262978.jpg')
const trendingFood2 = require('../assets/images/pexels-ali-dashti-16962424.jpg')
const trendingFood3 = require('../assets/images/pexels-gustavo-peres-71.jpg')
const trendingFood4 = require('../assets/images/pexels-photo-2.png')
const trendingFood5 = require('../assets/images/pexels-chan-walrus-958545.jpg')
const trendingFood6 = require('../assets/images/pexels-mat-brown-1395967.jpg')


export default function RestuarantsPage({ navigation }) {

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
            <View style={styles.topSection}>
                <View style={styles.userInfo}>
                    <TouchableOpacity onPress={() => navigation.navigate('FoodHome')}><Icon name="arrow-left" size={15} color="#091834" /></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('FoodHome')}><Text style={styles.pageTitle}>Food</Text></TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Landing')}><Image source={profile} style={styles.userImage} /></TouchableOpacity>
            </View>

            <View style={styles.location}>
                <Icon name="map-marker" size={15} color="#747474" />
                <Text style={paddingLeft = 20}>Location</Text>
            </View>
            <ScrollView>
                <View style={styles.searchBar}>
                    <TextInput placeholder="Search..." />
                </View>

                {/* Popular Destination */}
                <Text style={styles.popularDestinationTitle}>Special deals</Text>
                <ScrollView horizontal={true}>
                    <View style={styles.destinationImages}>

                        <View style={styles.destinationInfo}>
                            <Image source={popular1} style={styles.imageStyle} />
                            <View style={styles.imageContent}>
                                <Text style={styles.imageTexts1}>Name of place</Text>
                                <Text style={styles.imageTexts2}>Deal description</Text>
                            </View>
                        </View>

                        <View style={styles.destinationInfo}>
                            <Image source={popular2} style={styles.imageStyle} />
                            <View style={styles.imageContent}>
                                <Text style={styles.imageTexts1}>Name of place</Text>
                                <Text style={styles.imageTexts2}>Deal description</Text>
                            </View>
                        </View>

                        <View style={styles.destinationInfo}>
                            <Image source={popular3} style={styles.imageStyle} />
                            <View style={styles.imageContent}>
                                <Text style={styles.imageTexts1}>Name of place</Text>
                                <Text style={styles.imageTexts2}>Deal description</Text>
                            </View>


                        </View>

                        <View style={styles.destinationInfo}>
                            <Image source={popular4} style={styles.imageStyle} />
                            <View style={styles.imageContent}>
                                <Text style={styles.imageTexts1}>Name of place</Text>
                                <Text style={styles.imageTexts2}>Deal description</Text>
                            </View>

                        </View>
                    </View>
                </ScrollView>

                <Text style={styles.foodTrendsTitle}>Restaurants</Text>
                <View style={styles.trendImages}>
                    <View style={styles.trendInfo}>
                        <Image source={trend1} style={styles.bigRestuarantImageStyle} />
                        <View style={styles.imageContent}>
                            <Text style={styles.imageTexts3}>Trend 1 Info</Text>
                            <Text style={styles.imageTexts4}>Trend 1 Info</Text>
                        </View>

                        <View style={styles.textOverlay}>
                            <Text style={styles.overlayText}>Trend 1 Title</Text>
                        </View>

                    </View>
                    <View style={styles.miniBoxStyle}>
                        <View style={styles.miniRestuarantContent}>
                            <Image source={trendingFood2} style={styles.miniRestuarantContentImageStyle} />
                            <View style={styles.imageContent}>
                                <Text style={styles.imageTexts3}>Trend 2 Info</Text>
                                <Text style={styles.imageTexts4}>Trend 2 Info</Text>
                            </View>
                            <View style={styles.textOverlay}>
                                <Text style={styles.overlayText}>Trend 1 Title</Text>
                            </View>

                        </View>

                        <View style={styles.miniRestuarantContent}>
                            <Image source={trendingFood3} style={styles.miniRestuarantContentImageStyle} />
                            <View style={styles.imageContent}>
                                <Text style={styles.imageTexts3}>Trend 3 Info</Text>
                                <Text style={styles.imageTexts4}>Trend 3 Info</Text>
                            </View>
                            <View style={styles.textOverlay}>
                                <Text style={styles.overlayText}>Trend 1 Title</Text>
                            </View>


                        </View>
                    </View>
                    <View style={styles.trendInfo}>
                        <Image source={trendingFood4} style={styles.bigRestuarantImageStyle} />
                        <View style={styles.imageContent}>
                            <Text style={styles.imageTexts3}>Trend 4 Info</Text>
                            <Text style={styles.imageTexts4}>Trend 4 Info</Text>
                        </View>
                        <View style={styles.textOverlay}>
                            <Text style={styles.overlayText}>Trend 1 Title</Text>
                        </View>

                    </View>


                    <View style={styles.miniBoxStyle}>

                        {/* <View style={styles.trendInfo}>
                            <Image source={trendingFood4} style={styles.bigRestuarantImageStyle} />
                            <View style={styles.imageContent}>
                                <Text style={styles.imageTexts1}>Trend 4 Info</Text>
                                <Text style={styles.imageTexts2}>Trend 4 Info</Text>
                            </View>
                            <View style={styles.textOverlay}>
                                <Text style={styles.overlayText}>Trend 1 Title</Text>
                            </View>

                        </View> */}
{/* 
                        <View style={styles.trendInfo}>
                            <Image source={trendingFood5} style={styles.bigRestuarantImageStyle} />
                            <View style={styles.imageContent}>
                                <Text style={styles.imageTexts1}>Trend 4 Info</Text>
                                <Text style={styles.imageTexts2}>Trend 4 Info</Text>
                            </View>
                            <View style={styles.textOverlay}>
                                <Text style={styles.overlayText}>Trend 1 Title</Text>
                            </View>

                        </View> */}

                        <View style={styles.miniRestuarantContent}>
                            <Image source={trendingFood6} style={styles.miniRestuarantContentImageStyle} />
                            <View style={styles.imageContent}>
                                <Text style={styles.imageTexts1}>Trend 3 Info</Text>
                                <Text style={styles.imageTexts2}>Trend 3 Info</Text>
                            </View>
                            <View style={styles.textOverlay}>
                                <Text style={styles.overlayText}>Trend 1 Title</Text>
                            </View>


                        </View>
                        <View style={styles.miniRestuarantContent}>
                            <Image source={trendingFood2} style={styles.miniRestuarantContentImageStyle} />
                            <View style={styles.imageContent}>
                                <Text style={styles.imageTexts1}>Trend 3 Info</Text>
                                <Text style={styles.imageTexts2}>Trend 3 Info</Text>
                            </View>
                            <View style={styles.textOverlay}>
                                <Text style={styles.overlayText}>Trend 1 Title</Text>
                            </View>


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
        marginTop: 20,
        fontSize: 24,
        color: '#091834',
        fontWeight: 'bold'
    },
    destinationImages: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 20,

    },
    destinationInfo: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: 100,
        height: 110,
        marginTop: 10,
        marginRight: 10,
        marginBottom: 20,
        // backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.07)',
    },
    imageStyle: {
        width: 100,
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
    imageTexts3: {
        fontWeight: 'bold',
        fontSize: 13,
        color: 'black'
    },
    imageTexts4: {
        fontWeight: 'bold',
        fontSize: 10,
        color: '#454040'
    },

    trendImages: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginHorizontal: 20,
        marginTop: 10,
        gap: 10,


    },

    trendInfo: {
        // flexDirection: 'column',
        alignItems: 'flex-start',
        width: 370,
        height: 160,
        marginTop: 5,
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    overlayText: {
        color: '#B6B6B6',
        textAlign: 'center',
        padding: 1,
    },
    bigRestuarantImageStyle: {
        width: 370,
        height: 130,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.9)',
    },

    miniBoxStyle: {
        // flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,


        // flexWrap:'wrap'
    },
    miniRestuarantContent: {
        // flexDirection: 'column',
        // alignItems: 'flex-start',
        width: 170,
        height: 150,
        marginTop: 5,
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        position: 'relative',
        // marginRight: 20,

    },
    miniRestuarantContentImageStyle: {
        width: 170,
        height: 120,
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

