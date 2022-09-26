import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../_utils/Theme';

// interface Option {
//   label: string;
//   value: string;
// }

interface SwitchFillProps {
  height?: number;
  width?: number;
  leftText: string;
  rightText: string;
  isActive: boolean;
  onChange: (val: boolean) => void;
}
const SwitchFill = ({
  height = 24,
  width = 68,
  leftText,
  rightText,
  isActive,
  onChange,
}: SwitchFillProps) => {
  const container = {
    height,
    width,
  };

  return (
    <View style={[styles.container, container]}>
      <TouchableOpacity
        onPress={() => onChange(true)}
        style={[
          styles[isActive ? 'buttonSelected' : 'button'],
          styles.borderLeft,
        ]}>
        <Text style={styles[isActive ? 'buttonTextSelected' : 'buttonText']}>
          {leftText}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onChange(false)}
        style={[
          styles[isActive ? 'button' : 'buttonSelected'],
          styles.borderRight,
        ]}>
        <Text style={styles[isActive ? 'buttonText' : 'buttonTextSelected']}>
          {rightText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SwitchFill;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: colors.text.blueGray,
  },
  buttonTextSelected: {
    fontSize: 14,
    color: colors.text.light,
  },
  button: {
    backgroundColor: colors.blueGray(300),
    flex: 1,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSelected: {
    backgroundColor: colors.primary,
    flex: 1,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderLeft: {borderTopLeftRadius: 8, borderBottomLeftRadius: 8},
  borderRight: {borderTopRightRadius: 8, borderBottomRightRadius: 8},
});
