/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import MainLayout from '../layouts/MainLayout';

export default function AboutPage() {
  const date = new Date(Date.now());
  return (
    <MainLayout>
      <View style={{padding: 10, gap: 10}}>
        <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>
          To-Do App
        </Text>
        <Text style={{fontSize: 18}}>by Denis Pechenkin</Text>
        <Text style={{fontSize: 18}}>
          {date.getMonth()}/{date.getDate()}/{date.getFullYear()}
        </Text>
      </View>
    </MainLayout>
  );
}
