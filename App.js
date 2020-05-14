import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';


export default function App() {
  // const [enteredGoal,SetEnteredGoal] = useState('');
  const [courseGoal, setCourseGoal] = useState([]);
  const [isAddGoal,SetAddGoal]=useState(false);


  // const onEnteredText=(enteredGoal)=>{
  //   SetEnteredGoal(enteredGoal)
  // };
  const addGoal = (goalInputData) => {
    setCourseGoal(courseGoal => [...courseGoal, { id: Math.random().toString(), value: goalInputData }]);
     SetAddGoal(false);
  };

  const removeGoal=(goalId)=>{
    setCourseGoal(courseGoal=>{
      return courseGoal.filter((goal)=>goal.id!==goalId);
    });
   
  }

  //Forcanceling the modal
  const cancelHandler=()=>{
    SetAddGoal(false);
  }
  return (
    <View style={styles.root}>
      {
      /* <View style={styles.inputElement}>
        <TextInput placeholder="CourseGoal" style={styles.inputBox} onChangeText={onEnteredText} value={enteredGoal}/>
        <Button title="ADD" onPress={addGoal}/>
      </View> */}
      <Button title="Add New Goal" onPress={()=>SetAddGoal(true)}/>
      <GoalInput visible={isAddGoal} dataInput={addGoal} onCancel={cancelHandler}/>
      <FlatList keyExtractor={(item, index) => item.id} data={courseGoal} renderItem={(itemData) =>
        //  <View  style={styles.goalsAdded}>
        //     <Text>
        //       {itemData.item.value}
        //     </Text>
        // </View>
        <GoalItem id={itemData.item.id} onDelete={removeGoal} dataValue={itemData.item.value} />}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50
  },
});
