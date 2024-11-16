/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Pressable, SafeAreaView, View, Text} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

export default function HomePage({navigation}: {navigation: any}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [taskList, setTaskList] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  function addTask(name: string) {
    if (!taskList.includes(name)) {
      setTaskList(prev => [...prev, name]);
    } else {
      throw new Error('Element already exists');
    }
  }

  return (
    <MainLayout>
      <SafeAreaView style={{justifyContent: 'space-between', flexGrow: 1}}>
        <View>
          <ToDoForm addTask={addTask} />
          <ToDoList taskList={taskList} />
        </View>
        <View style={{width: '100%', alignItems: 'center', marginBottom: 30}}>
          <Pressable
            onPress={() => navigation.navigate('About')}
            style={{
              backgroundColor: 'black',
              width: 150,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Go To About
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </MainLayout>
  );
}
