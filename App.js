import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Landing from './components/Landing'
import Login from './components/Login';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      {/* <Text>Open up your app!</Text> */}
      <Landing/>
      <Login/>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
