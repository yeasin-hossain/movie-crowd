import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
interface BackButtonProps {
  onPress?: () => void;
}

const BackButton = ({onPress}: BackButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text>Back</Text>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 56,
    width: 56,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
