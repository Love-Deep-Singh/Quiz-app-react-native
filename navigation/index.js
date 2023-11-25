import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Quiz from '../pages/quiz';
import Home from '../pages/home';
import Result from '../pages/result';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
}
export default MyStack;