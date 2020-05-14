import React from 'react'
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native'

const GoalItem=(props)=>{
    // console.log(props);
    return(
   <TouchableOpacity onPress={props.onDelete.bind(this,props.id)}>     
    <View style={styles.goalsAdded}>
        <Text>{props.dataValue}</Text>
    </View>
    </TouchableOpacity>
    );
};

const styles=StyleSheet.create({
    goalsAdded:{
        backgroundColor:'#ccc',
        padding:5,
        marginVertical:5,
        borderWidth:1,
        borderColor:'black'
    
    
       }
});
export default GoalItem;