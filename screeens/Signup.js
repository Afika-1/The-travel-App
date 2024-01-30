// import React, { useState, useEffect }  from 'react';
// import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
// import { useFonts } from 'expo-font';

// const login = require('../assets/images/loginImage.jpg');
// const facebook = require('../assets/icons/facebook.png');
// const google = require('../assets/icons/google.png');

// function Signup({ navigation }) {

//     const [isLoaded] = useFonts({
//         'Inria-bold': require('../assets/fonts/InriaSerif-Bold.ttf'),
//         'inria-regular': require('../assets/fonts/InriaSerif-Regular.ttf'),
//       });
    
//       if (!isLoaded) {
//         return null;
//       }

      
//   return (
//     <SafeAreaView style={styles.container}>
//       <Image source={login} style={styles.image} />
//       <View style={styles.contentContainer}>
//         <View style={styles.tabContainer}>
//           <Text style={styles.orText} onPress={() => navigation.navigate('Login')} >Login</Text>
//           <Text style={styles.orTextActive}>Sign up</Text>
//         </View>

//         <View style={styles.inputContainer}>
//           <TextInput placeholder='Full Name'  placeholderTextColor='gray' style={styles.input} />
//           <TextInput placeholder='Email Address'  placeholderTextColor='gray' style={styles.input} />
//           <TextInput placeholder='Password'   placeholderTextColor='gray' style={styles.input} />
//           <TextInput placeholder='Confirm Password'  placeholderTextColor='gray' style={styles.input} />
//         </View>

//         <View style={styles.orContainer}>
//           <Text style={styles.socialsLabel}>Or Continue with</Text>
//           <View style={styles.socialButtonContainer}>
//             <Image source={google} style={styles.socialIcon}/>
//             <Image source={facebook} style={styles.socialIcon}/>
//                       </View>
//         </View>

//         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')} >
//           <Text style={styles.customButtonText}>Sign up</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }


import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

const login = require('../assets/images/loginImage.jpg');
const facebook = require('../assets/icons/facebook.png');
const google = require('../assets/icons/google.png');

function Signup({ navigation }) {
  const [isLoaded] = useFonts({
    'Inria-bold': require('../assets/fonts/InriaSerif-Bold.ttf'),
    'inria-regular': require('../assets/fonts/InriaSerif-Regular.ttf'),
  });

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  useEffect(() => {
    // Validate email using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));

    // Validate password length
    setIsValidPassword(password.length >= 6);
  }, [email, password]);

  if (!isLoaded) {
    return null;
  }

  const handleSignup = () => {
    // Perform signup logic if validation passes
    if (isValidEmail && isValidPassword) {
      // Your signup logic here
      console.log('Signup successful');
    } else {
      // Display an error message or handle it in your UI
      console.log('Invalid email or password');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={login} style={styles.image} />
      <View style={styles.contentContainer}>
        <View style={styles.tabContainer}>
          <Text style={styles.orText} onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
          <Text style={styles.orTextActive}>Sign up</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="gray"
            style={styles.input}
            value={fullName}
            onChangeText={(text) => setFullName(text)}
          />
          <TextInput
            placeholder="Email Address"
            placeholderTextColor="gray"
            style={[styles.input, !isValidEmail && styles.invalidInput]}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="gray"
            style={[styles.input, !isValidPassword && styles.invalidInput]}
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="gray"
            style={[styles.input, !isValidPassword && styles.invalidInput]}
            secureTextEntry
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>

        <View style={styles.orContainer}>
          <Text style={styles.socialsLabel}>Or Continue with</Text>
          <View style={styles.socialButtonContainer}>
            <Image source={google} style={styles.socialIcon} />
            <Image source={facebook} style={styles.socialIcon} />
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignup} disabled={!isValidEmail || !isValidPassword}>
          <Text style={isFormValid ? styles.customButtonText : styles.disabledButtonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-end',

  },
  disabledButtonText: {
    color: 'gray',
    fontSize: 18},
    
  image: {
   
    height: 360,
    position: 'absolute',
    top: 0,
    left: 0,
    width:'100%',
    zIndex: -1,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  orText: {
    color: '#747474',
    fontSize: 24,
    fontFamily: 'Inria-bold',

  },
  socialsLabel:{
    color: 'white',
    fontSize: 20,
    fontFamily: 'inria-regular',

  },
  socialIcon:{
    height:30,
    width:30,
    borderRadius:50,
  },
  orTextActive:{
    fontSize: 24,
    color: '#ff9f1c',
    textDecorationLine: 'underline',
    fontFamily: 'Inria-bold',

  },
  contentContainer: {
    backgroundColor: "#091834",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    shadowColor: "#b5b5b5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    height: 494,
    width: 393,
    height: 500,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#091834',
  },
  tabContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical:15,
  },
  inputContainer: {
    width: '100%',
    paddingVertical:'5%',
  },
  input: {
    height: 45,
    width: '100%',
    marginVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'white',
    color:'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    fontFamily: 'inria-regular',


  },
  orContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  socialButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap:20,
    paddingTop:5,
  },
  button: {
    height: 50,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    borderRadius: 10,
    marginTop: 10,
  },
  customButtonText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Inria-bold',

  },
});

export default Signup;
