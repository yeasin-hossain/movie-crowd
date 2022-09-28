import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MovieProps} from '../navigationTypes';

const MovieScreen = ({}: MovieProps) => {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text>MovieScreen</Text>
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({});
