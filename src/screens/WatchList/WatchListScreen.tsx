import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const WatchListScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={()=> navigation.navigate('Movie')}>
        <Text>WatchListScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WatchListScreen;

const styles = StyleSheet.create({});
