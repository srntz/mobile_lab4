import React from 'react';
import {View, Text} from 'react-native';

export default function Footer() {
  return (
    <View
      style={{
        backgroundColor: 'black',
        height: 60,
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'white'}}>To-Do App v1.0.0</Text>
      <Text style={{color: 'white'}}>2024</Text>
    </View>
  );
}
