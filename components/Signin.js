import { SafeAreaView, StyleSheet, Text, View , Image} from 'react-native';

const login = require('../assets/images/chill.jpeg')
function Signin() {
  return (
    <SafeAreaView style={{flex:1, height:'100'}}>
        <Image source={login} style={{width:'100%', height:350}}/>
        <View style={{height:500}}>
            <Text>bjbyujbv</Text>
        </View>
    </SafeAreaView>
  )
}

export default Signin