import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MovieSvg} from '../../components/svg';

const Skeleton = () => {
  return (
    <View style={styles.container}>
      <MovieSvg />
      <MovieSvg />
    </View>
  );
};

export default Skeleton;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-evenly'},
});
