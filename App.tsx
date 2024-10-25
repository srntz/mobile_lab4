/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import ToDoList from './src/components/ToDoList';
import ToDoForm from './src/components/ToDoForm';

export default function App() {
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
    <SafeAreaView>
      <ToDoForm addTask={addTask} />
      <ToDoList taskList={taskList} />
    </SafeAreaView>
  );
}
