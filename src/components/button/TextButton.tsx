import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, HORIZONTAL_SPACE} from '../../_utils/Theme';
interface ButtonProps {
  text?: string;
  onPress?: () => void;
}
const TextButton = ({text, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    paddingHorizontal: HORIZONTAL_SPACE,
  },
  buttonText: {
    color: colors.primary,
    fontSize: 14,
  },
});
