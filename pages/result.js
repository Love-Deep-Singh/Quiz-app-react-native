import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Result = ({ route, navigation }) => {
  
   const {score}= route.params;
  return (
    <View style={styles.container}>
      <Text> Your score is  {score}/100</Text>

      <View>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Home")}>
          <Text style={styles.btnText}>Take the Quiz Again</Text>
        </TouchableOpacity>
      </View>

    </View>
    
  )
}

export default Result

const styles = StyleSheet.create({
  container:{
    flex:1,
    
    width:"100",
    height:"100",
    marginTop:30,
    alignItems:"center"
  },
  button:{
    marginTop:10,
    padding:10,
    backgroundColor:"black",
  },
  btnText:{
    color:'white'
  }
  
})