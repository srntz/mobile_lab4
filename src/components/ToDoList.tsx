import React from 'react';
import {ScrollView, Pressable, Text, StyleSheet} from 'react-native';

export default function ToDoList({taskList = []}: {taskList?: string[]}) {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {taskList.map((task, index) => {
        return (
          <Pressable key={index} style={styles.taskContainer}>
            <Text style={styles.taskTitle}>{task}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    height: 60,
    width: '65%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202020',
    borderRadius: 10,
  },
  completed: {
    opacity: 0.6,
  },
  taskTitle: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 18,
  },
  listContainer: {
    alignItems: 'center',
    gap: 20,
    marginTop: 20,
  },
});
