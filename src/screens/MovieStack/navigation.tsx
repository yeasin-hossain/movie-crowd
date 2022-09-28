import React from 'react';
import {MovieStackParam} from './navigationTypes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Movie} from './screens';

const StackProfile = createNativeStackNavigator<MovieStackParam>();

const MovieStack = () => {
  return (
    <StackProfile.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <StackProfile.Screen component={Home} name="Home" />
      <StackProfile.Screen
        component={Movie}
        name="Movie"
        options={{headerShown: true}}
      />
    </StackProfile.Navigator>
  );
};

export default MovieStack;
