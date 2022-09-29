import {StyleSheet, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

const NotFound = () => {
  return (
    <View style={styles.container}>
      <Lottie
        source={require('../../assets/animationJson/notFound.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff25',
  },
  lottie: {
    width: 350,
  },
});
