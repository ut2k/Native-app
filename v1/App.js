// import React from 'react';
import { useState, useEffect } from 'react';
import { Image, Header, Input, Button, ButtonGroup, Avatar, Badge, Icon, Overlay } from 'react-native-elements'
// import { Card, ListItem } from 'react-native-elements'
// import { ScrollView, StyleSheet, Text, View, TextInput, Modal, TouchableHighlight, TouchableOpacity } from 'react-native';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * @refresh reset
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { dbLog } from "./src/config"
import { ListItem, Divider, Card } from 'react-native-elements'

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const App = () => {
  const [logg, setLog] = useState("")
  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) setLog(snap.val());
    }
    dbLog.on('value', handleData, error => alert(error));
    return () => { dbLog.off('value', handleData); };
  }, []);

  function DetailsScreen() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 100 }}>
          <Image style={styles.avatar} rounded source={require('./12.jpg')} />
          <View style={styles.bodyContent}>
            <Text style={styles.name}>Utkarsh Mishra</Text>
            <Text style={styles.info}>Log</Text>
            <Text style={styles.description}>{"This is my headache log for the summer of 2020. COVID-19 had really messed up my life and this development is my way of coping with everything." + "\n"}</Text>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Meditate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Exercises</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  function Home({ navigation }) {

    const [value, onChangeText] = React.useState("");
    const something = Object.values(logg)
    // something.forEach(l => {
    //   console.log(l)
    // });

    return (
      <View>
        <Button
        raised={true}
        type={"clear"}
        color="#841584"
          title="Add Data"
          onPress={() =>
            navigation.navigate('Add')
          }
          style={{marginBottom: 5, marginTop: 5}}
        />
        <Button
         raised={true}
          title="Go to My profile"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Utkarsh' })
          }
        />

        <View>
          {
            something.map((l, i) => (
              <ListItem
                key={i}
                title={"Date: " + l.Date + ", Intensity: " + l.Intensity + "/10"}
                subtitle={l.Notes}
                bottomDivider
              />
            ))
          }
        </View>

      </View>
    );
  }

  function Add({ navigation }) {
    const [title, setTitle] = useState(false);
    const toggle = () => {
      setTitle(!title);
      alert("Submitted the Task!");
    }
    const [value, onChangeText] = useState("")
    const [intensity, onChangeIntensity] = useState("")
    const [Notes, onChnageNotes] = useState("")
    function Submit()
    {
      if (value != "" && intensity != "" && Notes != "")
      {
        dbLog.push({
          "Date" : intensity || null,
          "Intensity" : value || null,
          "Notes" : Notes || null
        })
        navigation.navigate('Home')
      }
      

    }
    return (
      <ScrollView style={{ flex: 1 }}>

        <Card title="Enter today's log:">
        
      <View>
        <Text style={{marginBottom: 5}}>Intensity :</Text>
        <TextInput value={value}
         multiline
         numberOfLines={4}
          onChangeText={text => onChangeText(text)}
          placeholder={"eg 9/10"}
          autoCorrect={true}
        />
        <Text>{"\n"}</Text>
      </View>
      <View>
        <Text style={{marginBottom: 5}}> Date :</Text>
        <TextInput 
         multiline
         numberOfLines={4}
        value={intensity}
          onChangeText={text => onChangeIntensity(text)}
          placeholder={"eg June 15th"}
          autoCorrect={true}
        />
        <Text>{"\n"}</Text>
      </View>
      <View>
        <Text style={{marginBottom: 5}}> Notes :</Text>
        <TextInput value={Notes}
         multiline
         numberOfLines={4}
          onChangeText={text => onChnageNotes(text)}
          placeholder={"eg Nothing happened."}
          autoCorrect={true}
        />
        <Text>{"\n"}</Text>
        <Button
         raised={true}
          title="Submit"
          onPress={() =>
            Submit()
          }
        />
      </View>
        </Card>
      </ScrollView>
    );
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Profile" component={DetailsScreen} />
          <Stack.Screen name="Add" component={Add} />
        </Stack.Navigator>
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
    marginBottom: -60,
    alignSelf: 'center',
    position: 'relative',
    marginTop: 0
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