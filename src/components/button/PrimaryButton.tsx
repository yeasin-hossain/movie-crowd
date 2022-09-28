import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {colors} from '../../_utils/Theme';
interface ButtonProps extends TouchableOpacityProps {
  buttonText?: string;
  isLoading?: boolean;
}
const PrimaryButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity {...props} style={[styles.button, props?.style]}>
      {props?.isLoading && <ActivityIndicator />}
      <Text style={styles.buttonText}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    height: 48,
    backgroundColor: colors.primary,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    flexDirection: 'row',
  },
  buttonText: {
    color: colors.text.light,
    fontWeight: 'bold',
    fontSize: 17,
  },
});
