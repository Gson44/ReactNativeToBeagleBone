import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState}from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { io } from 'socket.io-client'
const ENDPOINT = "http://192.168.1.111:8080";
export default function App() {

  const [response, setResponse] = useState("");

  // useEffect(() => {
  //   turnOn()
  // },0);
   const turnOn = () => {
     fetch('http://192.168.1.111:8080', {
       method: 'POST',
       body: 'turnOn'
     })
   }
   const turnOff = () => {
    fetch('http://192.168.1.111:8080', {
      method: 'POST',
      body: 'turnOff'
    })
  }
  return (
    <View style={styles.container}>
      <Button title="Turn on" onPress={turnOn} />
      <Button title="Turn off" onPress={turnOff} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
