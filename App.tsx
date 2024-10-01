/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import ToDoList from './src/components/ToDoList';
import ToDoForm from './src/components/ToDoForm';

export default function App() {
  return (
    <SafeAreaView>
      <ToDoForm />
      <ToDoList />
    </SafeAreaView>
  );
}
