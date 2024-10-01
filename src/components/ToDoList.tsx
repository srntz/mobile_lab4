import React from 'react';
import {ScrollView, Pressable, Text, StyleSheet} from 'react-native';

export default function ToDoList() {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <Pressable style={[styles.taskContainer, styles.completed]}>
        <Text style={styles.taskTitle}>Do the assignment</Text>
      </Pressable>
      <Pressable style={styles.taskContainer}>
        <Text style={styles.taskTitle}>Cook dinner</Text>
      </Pressable>
      <Pressable style={[styles.taskContainer, styles.completed]}>
        <Text style={styles.taskTitle}>Do laundry</Text>
      </Pressable>
      <Pressable style={styles.taskContainer}>
        <Text style={styles.taskTitle}>Clean the bathroom</Text>
      </Pressable>
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
