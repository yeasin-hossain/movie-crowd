import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
} from 'react-native';
import React, {forwardRef, useState} from 'react';
import {colors} from '../../_utils/Theme';

const TextInput = forwardRef<RNTextInput, TextInputProps>((props, InputRef) => {
  const {value, onChangeText} = props;
  const [text, SetText] = useState(value ? value : '');

  const handelOnChange = (e: string) => {
    SetText(e);
    if (onChangeText) {
      onChangeText(e);
    }
  };

  return (
    <RNTextInput
      ref={InputRef}
      {...props}
      style={[styles.textInput, props?.style]}
      placeholderTextColor={colors.blueGray(600)}
      value={text}
      onChangeText={handelOnChange}
    />
  );
});

export default TextInput;

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 17,
  },
});
