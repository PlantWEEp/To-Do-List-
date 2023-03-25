import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Task from './compoents/Task';

const App = () => {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState<string[]>([]);

  const handleText = () => {
    if (task.trim() !== '') {
      setTaskItems([...taskItems, task]);
      setTask(' ');
    }
  };
  const DeleteTask = (index: any) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.tilte}>Todays Task</Text>
        </View>
        <View style={styles.textView}>
          {taskItems.map((task, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => DeleteTask(index)}
                style={styles.taskContainer}>
                <Text>
                  <Task text={task} />;
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView style={styles.keyBoard}>
        <TextInput
          style={styles.input}
          value={task}
          onChangeText={text => setTask(text)}></TextInput>
        <TouchableOpacity onPress={() => handleText()}>
          <View style={styles.add}></View>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000000',
  },
  header: {
    margin: 20,
  },
  tilte: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: '600',
    paddingTop: 20,
  },
  textView: {
    paddingTop: 20,
  },

  keyBoard: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  input: {
    color: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 300,
  },
  add: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    position: 'relative',
  },
  addText: {
    position: 'absolute',
    left: 17.5,
    top: 3,
    fontSize: 30,
    fontWeight: '600',
    color: '#000000',
  },
  taskContainer: {
    backgroundColor: '#FFFFFF',
    padding: 5,
    marginVertical: 10,
    borderRadius: 5,
  },
});
