// import React from 'react';
// import { useState, useEffect } from 'react';
 import { Image, Header, Input, Button, ButtonGroup, Avatar, Badge, Icon, Overlay } from 'react-native-elements'
// import { Card, ListItem } from 'react-native-elements'
// import { ScrollView, StyleSheet, Text, View, TextInput, Modal, TouchableHighlight, TouchableOpacity } from 'react-native';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';


// function App {
//   return(
    
//     <View style={styles.container}>
//       <View style={styles.header}></View>
//       <Image style={styles.avatar} rounded source={require('./128.jpg')} />
//       <View style={styles.body}>
//         <View style={styles.bodyContent}>
//           <Text style={styles.name}>John Smith</Text>
//           <Text style={styles.info}>Caregiver</Text>
//           <Text style={styles.description}>{"I am a spcailised caretaker and a livein caretaker for Mr. Ammon Erhmentraut. I work 8 hours per day from 8am - 8pm from Monday - Staurday. Special skills include: certification in emergency procedures, and over 8+ years of experience."+"\n"}</Text>

//           <TouchableOpacity style={styles.buttonContainer}>
//             <Text>Followers</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.buttonContainer}>
//             <Text>Following</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   )

// }
// export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  function DetailsScreen() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image style={styles.avatar} rounded source={require('./128.jpg')} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>John Smith</Text>
            <Text style={styles.info}>Caregiver</Text>
            <Text style={styles.description}>{"I am a spcailised caretaker and a livein caretaker for Mr. Ammon Erhmentraut. I work 8 hours per day from 8am - 8pm from Monday - Staurday. Special skills include: certification in emergency procedures, and over 8+ years of experience."+"\n"}</Text>
  
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Followers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Following</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  return (
     <>
     <NavigationContainer>
        <DetailsScreen />
    </NavigationContainer>
          
     
     </>
);
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 0,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'relative',
    marginTop: -70
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
});

export default App;