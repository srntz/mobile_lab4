import React, {useState} from 'react';
import {View, TextInput, Pressable, Text, StyleSheet} from 'react-native';

export default function ToDoForm({addTask}: {addTask: (name: string) => void}) {
  const [taskName, setTaskName] = useState('');

  function handleAddTask() {
    try {
      addTask(taskName);
      setTaskName('');
    } catch (e) {}
  }

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Add task..."
        style={styles.inputField}
        value={taskName}
        onChangeText={(name: string) => setTaskName(name)}
      />
      <Pressable style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  inputField: {
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    width: '75%',
    borderRadius: 10,
    paddingLeft: 10,
  },
  form: {
    marginTop: 30,
    marginBottom: 20,
    flexDirection: 'row',
    width: '65%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  addButton: {
    backgroundColor: '#202020',
    height: 50,
    width: '20%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
