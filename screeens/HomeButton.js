import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HomeButton = ({ state, className, doubleRight = require('../assets/adaptive-icon.png') }) => {
  return (
    <View style={[styles.group, styles[state], className && styles[className]]}>
      <View style={styles.slider}>
        {["done", "welcome"].includes(state) && (
          <>
            <Text style={styles.textWrapper}>Get started</Text>
            <Text style={styles.release}>{state === "welcome" && "Release"}</Text>
            <Text style={styles.youreIn}>{state === "welcome" && "You’re in"}</Text>
          </>
        )}

        <Image
          style={styles.vector}
          source={state === "done" ? require('../assets/icon.png') : state === "default" ? doubleRight : require('../assets/splash.png')}
        />

        {state === "default" && (
          <>
            <Text style={styles.div}>Get started</Text>
            <Text style={styles.textWrapper2}>Welcome</Text>
            <Text style={styles.textWrapper3}>You’re in</Text>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  group: {
    alignItems: 'flex-start',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ff9f1c66',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  slider: {
    borderRadius: 25,
    borderWidth: 1,
    height: 50,
    position: 'relative',
    width: 50,
  },
  textWrapper: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 20,
    position: 'absolute',
    top: 13,
  },
  release: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 20,
    position: 'absolute',
    top: 13,
  },
  youreIn: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 20,
    position: 'absolute',
  },
  vector: {
    position: 'absolute',
  },
  div: {
    color: '#ffffff',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    fontWeight: '400',
    left: 80,
    letterSpacing: 0,
    lineHeight: 20,
    position: 'absolute',
    top: 13,
  },
  textWrapper2: {
    color: '#ffffff1a',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    fontWeight: '400',
    left: -88,
    letterSpacing: 0,
    lineHeight: 20,
    position: 'absolute',
    top: 13,
  },
  textWrapper3: {
    color: '#ffffff',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    fontWeight: '400',
    left: -87,
    letterSpacing: 0,
    lineHeight: 20,
    position: 'absolute',
    top: 60,
  },
  welcome: {
    backgroundColor: '#00000033',
    justifyContent: 'flex-end',
    padding: 6,
    width: 209,
  },
  default: {
    backgroundColor: 'rgba(24, 119, 242, 0.2)',
    padding: 6,
    width: 209,
  },
  done: {
    backgroundColor: '#091834',
    justifyContent: 'flex-end',
    padding: 6,
    width: 205,
  },
  welcomeSlider: {
    backgroundColor: '#ff9f1c66',
    borderColor: '#ffffff1a',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
  },
  defaultSlider: {
    backgroundColor: '#000000',
    borderColor: '#ff9f1c99',
    shadowColor: '#ff9f1c66',
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.4,
  },
  doneSlider: {
    backgroundColor: '#ff9f1c',
    borderColor: '#091834',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
  },
  welcomeText: {
    color: '#b5b5b51a',
    left: 54,
  },
  defaultText: {
    color: '#b5b5b51a',
    left: 54,
  },
  doneText: {
    color: '#ffffff',
    left: 69,
  },
  welcomeRelease: {
    color: '#b5b5b5',
    left: -88,
  },
  defaultRelease: {
    color: '#b5b5b5',
    left: -88,
  },
  doneRelease: {
    color: '#ffffff',
    left: -90,
  },
  welcomeYoureIn: {
    color: '#ffffff',
    left: -87,
    top: 60,
  },
  defaultYoureIn: {
    color: '#ffffff',
    left: -87,
    top: 60,
  },
  doneYoureIn: {
    color: 'transparent',
    left: -71,
    top: -42,
  },
  welcomeVector: {
    height: 20,
    left: 9,
    top: 14,
    width: 30,
  },
  defaultVector: {
    height: 35,
    left: 7,
    top: 6,
    width: 35,
  },
  doneVector: {
    height: 20,
    left: 10,
    top: 14,
    width: 30,
  },
});

export default HomeButton;
