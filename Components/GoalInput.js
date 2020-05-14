import React, { useState } from "react"
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native'

const GoalInput = (props) => {
  const [enteredGoal, SetEnteredGoal] = useState('');

  const onEnteredText = (enteredGoal) => {
    SetEnteredGoal(enteredGoal)
  };

  const addGoaHandler = () => {
    props.dataInput(enteredGoal);
    SetEnteredGoal('');
  }

  return (
    <Modal visible={props.visible} animationType="none">
      <View style={styles.inputElement}>
        <TextInput placeholder="CourseGoal" style={styles.inputBox} onChangeText={onEnteredText} value={enteredGoal} />
        {/* <Button title="ADD" onPress={()=>props.dataInput(enteredGoal)}/> */}
        {/* for Clearning input */}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoaHandler} />
          </View>
          <View>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputElement: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputBox: {
    width: '70%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  button: {
    width: '40%'
  }

});
export default GoalInput;